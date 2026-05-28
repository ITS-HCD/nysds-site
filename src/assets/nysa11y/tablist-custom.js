/*
 * NYSA11y Tablist
 * Path: /assets/nysa11y/tablist-custom.js
 * Depends on /assets/nysa11y/tablist-custom.css
 */
const nysa11y = window.nysa11y || {};

class Tablist {
  #selectorTablist = '[data-component="tablist"].nysa11y.tablist';
  #selectorTab = '[role="tab"]';
  #selectorPanel = '[role="tabpanel"]';
  #selectorScrollButtons = '[data-part="scrollButtons"]';
  #selectorScrollContainer = '[data-part="scrollContainer"]';
  #selectorTabsEnclosure = '[data-part="tabsEnclosure"]';
  #selectorSentinelStart = '[data-part="sentinelStart"]';
  #selectorSentinelEnd = '[data-part="sentinelEnd"]';
  #selectorScrollBtnStart = '[data-scroll="to-start"]';
  #selectorScrollBtnEnd = '[data-scroll="to-end"]';
  #selectorOverlayStart = ".tabs__scroll-affordance-start";
  #selectorOverlayEnd = ".tabs__scroll-affordance-end";
  #scrollStep = 300;
  // Element-level expando used to disconnect a prior IntersectionObserver
  // before wiring a new one when init() runs more than once.
  #observerKey = "__nysa11yTablistObserver";

  constructor(options = {}) {
    this.container = options.container || document;
    this.init();
  }

  init() {
    const tablists = this.container.querySelectorAll(this.#selectorTablist);
    if (!tablists.length) return;
    tablists.forEach((tablistEl) => {
      this.#ensureIds(tablistEl);
      this.#setupTabs(tablistEl);
      this.#setupScrollControls(tablistEl);
    });
  }

  // Generate id / aria-controls / aria-labelledby only when missing, so
  // hand-authored ids survive and ids stay unique across simultaneous tablists.
  #ensureIds = (tablistEl) => {
    const tabs = tablistEl.querySelectorAll(this.#selectorTab);
    const panels = tablistEl.querySelectorAll(this.#selectorPanel);
    tabs.forEach((tab, index) => {
      const panel = panels[index];
      const ariaControls = tab.getAttribute("aria-controls");
      const linkedPanel = ariaControls
        ? tablistEl.querySelector(`#${CSS.escape(ariaControls)}`)
        : null;
      if (tab.id && ariaControls && linkedPanel) return;
      const uid = crypto.randomUUID();
      const tabId = `tab-${uid}`;
      const panelId = `panel-${uid}`;
      tab.id = tabId;
      tab.setAttribute("aria-controls", panelId);
      if (panel) {
        panel.id = panelId;
        panel.setAttribute("aria-labelledby", tabId);
      }
    });
  };

  #setupTabs = (tablistEl) => {
    const tabs = tablistEl.querySelectorAll(this.#selectorTab);
    if (!tabs.length) return;
    let presetSelected = null;
    tabs.forEach((tab) => {
      tab.removeEventListener("click", this.#handleClick);
      tab.addEventListener("click", this.#handleClick);
      tab.removeEventListener("keydown", this.#handleKeydown);
      tab.addEventListener("keydown", this.#handleKeydown);
      if (!presetSelected && tab.getAttribute("aria-selected") === "true") {
        presetSelected = tab;
      }
    });
    this.#selectTab(tablistEl, presetSelected || tabs[0]);
  };

  #selectTab = (tablistEl, targetTab) => {
    const tabs = tablistEl.querySelectorAll(this.#selectorTab);
    tabs.forEach((tab) => {
      const isSelected = tab === targetTab;
      tab.setAttribute("aria-selected", isSelected ? "true" : "false");
      if (isSelected) {
        tab.removeAttribute("tabindex");
      } else {
        tab.tabIndex = -1;
      }
      const ariaControls = tab.getAttribute("aria-controls");
      if (!ariaControls) return;
      const panel = tablistEl.querySelector(`#${CSS.escape(ariaControls)}`);
      if (!panel) return;
      panel.hidden = !isSelected;
    });
  };

  #handleClick = (event) => {
    const tab = event.currentTarget;
    const tablistEl = tab.closest(this.#selectorTablist);
    if (!tablistEl) return;
    this.#selectTab(tablistEl, tab);
    tab.focus();
  };

  #handleKeydown = (event) => {
    const tab = event.currentTarget;
    const tablistEl = tab.closest(this.#selectorTablist);
    if (!tablistEl) return;
    const tabs = Array.from(tablistEl.querySelectorAll(this.#selectorTab));
    const idx = tabs.indexOf(tab);
    if (idx < 0) return;
    let next = null;
    switch (event.key) {
      case "ArrowLeft":
        next = tabs[(idx - 1 + tabs.length) % tabs.length];
        break;
      case "ArrowRight":
        next = tabs[(idx + 1) % tabs.length];
        break;
      case "Home":
        next = tabs[0];
        break;
      case "End":
        next = tabs[tabs.length - 1];
        break;
      default:
        return;
    }
    next.focus();
    event.preventDefault();
    event.stopPropagation();
  };

  #setupScrollControls = (tablistEl) => {
    const scrollButtons = tablistEl.querySelector(this.#selectorScrollButtons);
    const scrollContainer = tablistEl.querySelector(
      this.#selectorScrollContainer,
    );
    const tabsEnclosure = tablistEl.querySelector(this.#selectorTabsEnclosure);
    const sentinelStart = tablistEl.querySelector(this.#selectorSentinelStart);
    const sentinelEnd = tablistEl.querySelector(this.#selectorSentinelEnd);
    const scrollStartBtn = tablistEl.querySelector(
      this.#selectorScrollBtnStart,
    );
    const scrollEndBtn = tablistEl.querySelector(this.#selectorScrollBtnEnd);
    const overlayStart = tablistEl.querySelector(this.#selectorOverlayStart);
    const overlayEnd = tablistEl.querySelector(this.#selectorOverlayEnd);

    if (
      !scrollButtons ||
      !scrollContainer ||
      !tabsEnclosure ||
      !sentinelStart ||
      !sentinelEnd
    ) {
      return;
    }

    const states = { sentinelStart: true, sentinelEnd: true };

    const prev = tablistEl[this.#observerKey];
    if (prev && typeof prev.disconnect === "function") prev.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          if (entry.target === sentinelStart) {
            states.sentinelStart = isVisible;
            if (overlayStart) {
              overlayStart.style.display = isVisible ? "none" : "block";
            }
            if (scrollStartBtn) scrollStartBtn.ariaDisabled = isVisible;
          }
          if (entry.target === sentinelEnd) {
            states.sentinelEnd = isVisible;
            if (overlayEnd) {
              overlayEnd.style.display = isVisible ? "none" : "block";
            }
            if (scrollEndBtn) scrollEndBtn.ariaDisabled = isVisible;
          }
        });
        const hasOverflow = !states.sentinelStart || !states.sentinelEnd;
        scrollButtons.style.display = hasOverflow ? "flex" : "none";
      },
      { root: tabsEnclosure, threshold: 0.1 },
    );

    observer.observe(sentinelStart);
    observer.observe(sentinelEnd);
    tablistEl[this.#observerKey] = observer;

    if (scrollStartBtn) {
      scrollStartBtn.removeEventListener("click", this.#handleScrollClick);
      scrollStartBtn.addEventListener("click", this.#handleScrollClick);
    }
    if (scrollEndBtn) {
      scrollEndBtn.removeEventListener("click", this.#handleScrollClick);
      scrollEndBtn.addEventListener("click", this.#handleScrollClick);
    }
  };

  #handleScrollClick = (event) => {
    const button = event.currentTarget;
    const tablistEl = button.closest(this.#selectorTablist);
    if (!tablistEl) return;
    const scrollContainer = tablistEl.querySelector(
      this.#selectorScrollContainer,
    );
    if (!scrollContainer) return;
    const direction = button.dataset.scroll === "to-start" ? -1 : 1;
    scrollContainer.scrollBy({
      left: direction * this.#scrollStep,
      behavior: "smooth",
    });
  };
}

nysa11y.Tablist = Tablist;

document.addEventListener("DOMContentLoaded", () => {
  new nysa11y.Tablist();
});
