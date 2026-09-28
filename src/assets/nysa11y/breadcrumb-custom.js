/**
 * NYSA11y Breadcrumb (custom)
 * Path: /assets/nysa11y/breadcrumb-custom.js
 * Depends on /assets/nysa11y/breadcrumb-custom.css
 */
const nysa11y = window.nysa11y || {};

class Breadcrumb {
  #selectorRoot = 'nav[data-component="breadcrumb"]';
  #selectorRevealer = '[data-part="revealer"]';
  #selectorIntermediate = ".intermediate";
  #selectorButton = "button";
  #selectorLink = "a";

  constructor(options = {}) {
    this.container = options.container || document;
    this.init();
  }

  init() {
    const roots = this.container.querySelectorAll(this.#selectorRoot);
    if (!roots.length) return;

    roots.forEach((rootEl) => {
      this.#setupBreadcrumb(rootEl);
    });
  }

  #setupBreadcrumb = (rootEl) => {
    const revealer = rootEl.querySelector(this.#selectorRevealer);
    if (!revealer) {
      console.error(`Breadcrumb component (ID: ${rootEl.id || "unknown"}) is missing 'data-part="revealer"' element.`);
      return;
    }

    const button = revealer.querySelector(this.#selectorButton);
    if (button) {
      button.removeEventListener("click", this.#handleRevealerClick);
      button.addEventListener("click", this.#handleRevealerClick);
    }

    // Disconnect any existing observer on this element
    if (rootEl.__nysa11yBreadcrumbObserver) {
      rootEl.__nysa11yBreadcrumbObserver.disconnect();
    }

    // Create a new MutationObserver and stash it on the element expando
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-state") {
          this.#render(rootEl);
        }
      });

      if (rootEl.__nysa11yIsButtonClicked) {
        rootEl.__nysa11yIsButtonClicked = false;

        requestAnimationFrame(() => {
          const intermediateItems = rootEl.querySelectorAll(this.#selectorIntermediate);
          if (intermediateItems.length > 0) {
            const focusableElement = intermediateItems[0].querySelector(this.#selectorLink);
            if (focusableElement) {
              focusableElement.focus();
            }
          }
        });
      }
    });

    observer.observe(rootEl, { attributes: true });
    rootEl.__nysa11yBreadcrumbObserver = observer;

    // Initial render and display
    this.#render(rootEl);
    rootEl.style.display = "block";
  };

  #handleRevealerClick = (event) => {
    const button = event.currentTarget;
    const rootEl = button.closest(this.#selectorRoot);
    if (!rootEl) return;

    rootEl.__nysa11yIsButtonClicked = true;
    this.maximize(rootEl);
  };

  #render = (rootEl) => {
    const state = rootEl.getAttribute("data-state");
    const intermediateItems = rootEl.querySelectorAll(this.#selectorIntermediate);
    const revealer = rootEl.querySelector(this.#selectorRevealer);
    if (!revealer) return;

    if (state === "min") {
      intermediateItems.forEach((item) => {
        item.style.display = "none";
      });
      revealer.style.display = "flex";
    } else if (state === "max") {
      intermediateItems.forEach((item) => {
        item.style.display = "flex";
      });
      revealer.style.display = "none";
    } else {
      console.warn(`Invalid 'data-state' value: ${state}`);
    }
  };

  maximize(rootEl) {
    rootEl.setAttribute("data-state", "max");
  }

  minimize(rootEl) {
    rootEl.setAttribute("data-state", "min");
  }
}

nysa11y.Breadcrumb = Breadcrumb;

document.addEventListener("DOMContentLoaded", () => {
  new nysa11y.Breadcrumb();
});
