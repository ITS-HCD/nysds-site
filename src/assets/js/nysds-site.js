// Trigger an nys-alert to show on click
const showAlert = () => {
  const container = document.querySelector(".alert-container");
  if (container) {
    // Clear previous instance if present
    container.innerHTML = "";
    const newAlert = document.createElement("nys-alert");
    newAlert.setAttribute("type", "info");
    newAlert.setAttribute("heading", "Automatically disappearing alert");
    newAlert.setAttribute("text", "This alert will disappear after 3 seconds.");
    newAlert.setAttribute("duration", 3000);
    container.appendChild(newAlert);
  }
};

// Trigger dropdown to show the source code
const showSourceCode = (clickedDropdown) => {
  // Find the nearest parent container
  const container = clickedDropdown.closest(".code-preview-container");
  if (!container) return;

  // Get the code block inside this container
  const codeBlock = container.querySelector(".code-preview__code-container");
  if (!codeBlock) return;

  // Toggle the expanded class
  const isOpen = codeBlock.classList.toggle("expanded");

  // Update chevron icon
  const chevronIcon = container.querySelector(".code-preview__dropdown-icon");
  chevronIcon.setAttribute("name", isOpen ? "chevron_down" : "chevron_right");

  // Update ARIA attributes for accessibility
  clickedDropdown.setAttribute("aria-expanded", isOpen.toString());
};

// Trigger copy code to clipboard and show tooltip
const copyCode = async (clickedCopyButton) => {
  const container = clickedCopyButton.closest(".code-preview-container");
  if (!container) return;
  const codeBlock = container.querySelector(".code-preview__code-block");
  if (!codeBlock) return;

  try {
    await navigator.clipboard.writeText(codeBlock.innerText.trim());

    const tooltip = container.querySelector(".copy-tooltip");
    if (!tooltip) return;

    // Temporarily change tooltip text to "Copied!"
    tooltip.innerText = "Copied!";
    tooltip.classList.add("copied");

    setTimeout(() => {
      tooltip.innerText = "Copy Code";
      tooltip.classList.remove("copied");
    }, 1500);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre code").forEach((codeBlock) => {
    const pre = codeBlock.parentElement;

    // Opt-out: Skip elements with data-no-copy
    if (pre.hasAttribute("data-no-copy")) return;

    // Creates a wrapper for the code block (allows for positioning of button)
    const containerWrapper = document.createElement("div");
    containerWrapper.style.position = "relative";

    pre.parentNode.insertBefore(containerWrapper, pre);
    containerWrapper.appendChild(pre);

    // Make the <pre> scrollable (if content overflows)
    pre.style.overflow = "auto";
  });
});

// Add Copy to clipboard to all icon examples
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".icon-examples .card").forEach((card) => {
    const cardDesc = card.querySelector(".card__desc");
    const cardText = cardDesc.textContent;
    let hasParagraph = true;

    card.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(cardText);
        const paragraph = document.querySelector(".hover-message");
        if (paragraph) {
          paragraph.textContent = "Copied!";
          paragraph.style.color = "var(--nys-color-success)";
          setTimeout(() => {
            paragraph.style.color = "var(--nys-color-text)";
            if (hasParagraph) {
              card.parentElement.removeChild(paragraph);
            }
          }, 1500);
        }
      } catch (err) {
        cardDesc.innerHTML = "Failed!";
        setTimeout(() => (cardDesc.innerHTML = cardText), 1500);
        console.error("Failed to copy:", err);
      }
    });
    card.addEventListener("mouseenter", async () => {
      const paragraph = document.createElement("p");
      hasParagraph = true;
      paragraph.style.position = "absolute";
      paragraph.style.bottom = "-10px";
      paragraph.style.width = "90%";
      paragraph.style.textAlign = "center";
      paragraph.textContent = "Copy to clipboard";
      paragraph.classList.add("hover-message");
      card.parentElement.appendChild(paragraph);
    });
    card.addEventListener("mouseleave", async () => {
      const paragraph = document.querySelector(".hover-message");

      if (paragraph) {
        card.parentElement.removeChild(paragraph);
        hasParagraph = false;
      }
      cardDesc.innerHTML = cardText;
    });
  });
});

// Load with <script defer> so the DOM exists
(function () {
  // Clean any legacy inline display:none
  document.querySelectorAll(".accordion__panel").forEach((p) => {
    if (p.style.display) p.style.removeProperty("display");
  });

  // Init panel state from the trigger's aria-expanded
  document.querySelectorAll(".accordion__trigger").forEach((btn) => {
    const id = btn.getAttribute("aria-controls");
    const panel = id ? document.getElementById(id) : null;
    if (!panel) return;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    panel.setAttribute("aria-expanded", String(expanded));
  });

  // Toggle on click
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".accordion__trigger");
    if (!btn) return;
    const id = btn.getAttribute("aria-controls");
    const panel = id ? document.getElementById(id) : null;
    if (!panel) return;

    const next = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", String(next));
    panel.setAttribute("aria-expanded", String(next));
  });
})();

// Add anchor links to all headings (h1..h6)
document.addEventListener("DOMContentLoaded", function () {
  if (document.body.classList.contains("no-heading-links")) {
    return;
  } else {
    // Grab all headings from h2 to h6
    const headings = Array.from(document.querySelectorAll("h2,h3,h4,h5,h6"))
                          .filter((h) => !h.closest(".code-preview-container")); // Exclude any headings that are inside code preview containers
    if (!headings.length) return;

    headings.forEach((h) => {
      // If there's already an explicit anchor link to this heading id, skip
      const existingId = h.id;
      if (existingId && h.querySelector(`a[href="#${existingId}"]`)) return;

      // Determine or generate an id
      let id = existingId;

      // If heading already contains an anchor that links to this id, skip
      if (h.querySelector(`a[href="#${id}"]`)) return;

      // Need to relatively position the headsing so we can absolutely position the icon
      h.style.position = "relative";

      // Create our tooltip element
      const tooltip = document.createElement("nys-tooltip");
      // tooltip.setAttribute('text', `Copy link to ${h.textContent.trim()}`);
      tooltip.setAttribute("text", `Copy link`);
      tooltip.setAttribute("focusable", true);
      tooltip.setAttribute("for", `heading-link-icon-${id}`);
      tooltip.style.display = "inline-flex";
      tooltip.style.padding = "0 0 0 var(--nys-space-50)";

      // Create our link icon element
      const linkIcon = document.createElement("nys-icon");
      linkIcon.setAttribute("name", "link");
      linkIcon.setAttribute("id", `heading-link-icon-${id}`);

      // Create an anchor that will hold the URL to copy for this heading
      // anchor is in memory, not added to the DOM
      const anchor = document.createElement("nys-button");
      anchor.setAttribute("href", `#${id}`);

      // When you click on the copy icon, copy the heading URL to clipboard
      // change the tooltip text to "Copied!" temporarily
      linkIcon.addEventListener("click", (e) => {
        // Stop the page from scrolling when you click this link
        e.preventDefault();
        // Copy the Full URL to the clipboard
        copyHeadingUrl(anchor);
        tooltip.setAttribute("text", "Copied link!");

        setTimeout(() => {
          tooltip.setAttribute("text", "Copy link");
        }, 1500);
      });

      // insert both the tooltip and linkicon elements after the heading text
      h.insertAdjacentElement("beforeend", tooltip);
      h.insertAdjacentElement("beforeend", linkIcon);
    });
  }
});

// Trigger copy URL to clipboard
const copyHeadingUrl = async (clickedHeadingLink) => {
  // console.log(clickedHeadingLink);
  const headingUrl = clickedHeadingLink.getAttribute("href");
  const fullUrl = window.location.origin + window.location.pathname + headingUrl;

  try {
    await navigator.clipboard.writeText(fullUrl.trim());
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

/**
 * A11y Test+Build
 */
document.querySelectorAll('article[data-pattern="breadcrumbs"] .breadcrumb-demo').forEach((demo) => {
  let bcState = "min";
  const bt = demo.querySelector("[aria-controls]");
  const bc = demo.querySelector('[data-component="breadcrumb"]');
  demo.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      bcState = bcState === "min" ? "max" : "min";
      bc.setAttribute("data-state", bcState);
      if (bcState === "min") {
        bt.textContent = "Reveal links";
        bt.ariaExpanded = "false"; // not passed into shadowDOM, thus use `button` instead of `nys-button`
      } else {
        bt.textContent = "Collapse links";
        bt.ariaExpanded = "true";
      }
    }
  });
});

// --- Quick Search: "/" shortcut + nys-modal with search-as-you-type ---
(function () {
  const modal = document.getElementById("search-dialog");
  if (!modal) return;

  const textInput = document.getElementById("search-dialog-input");
  const submitBtn = document.getElementById("search-dialog-submit");
  const resultsList = document.getElementById("search-dialog-results");
  const statusEl = document.getElementById("search-dialog-status");

  let pagefind = null;
  let activeIndex = -1;
  let debounceTimer = null;
  let searchToken = 0;

  async function loadPagefind() {
    if (pagefind) return pagefind;
    try {
      pagefind = await import("/pagefind/pagefind.js");
      await pagefind.init();
    } catch (e) {
      console.warn("Pagefind not available:", e);
    }
    return pagefind;
  }

  // The real <input> lives in nys-textinput's shadow root. Combobox ARIA has to
  // sit on it, so it is set there once the component has rendered.
  async function getNativeInput() {
    await textInput.updateComplete;
    return textInput.shadowRoot?.querySelector("input") || null;
  }

  async function setupComboboxAria() {
    const native = await getNativeInput();
    if (!native || native.getAttribute("role") === "combobox") return;
    native.setAttribute("role", "combobox");
    native.setAttribute("aria-autocomplete", "list");
    native.setAttribute("aria-expanded", "false");
    native.setAttribute("autocomplete", "off");
    // Element reflection lets the shadow input reference the light-DOM listbox
    if ("ariaControlsElements" in native) native.ariaControlsElements = [resultsList];
  }

  async function setExpanded(expanded) {
    const native = await getNativeInput();
    native?.setAttribute("aria-expanded", String(expanded));
  }

  async function setActiveDescendant(el) {
    const native = await getNativeInput();
    if (native && "ariaActiveDescendantElement" in native) {
      native.ariaActiveDescendantElement = el;
    }
  }

  function getQuery() {
    return (textInput.value || "").trim();
  }

  function goToAllResults() {
    const query = getQuery();
    if (!query) return;
    closeModal();
    window.location.href = `/search/?q=${encodeURIComponent(query)}`;
  }

  function resetResults() {
    resultsList.innerHTML = "";
    resultsList.hidden = true;
    statusEl.textContent = "";
    activeIndex = -1;
    setExpanded(false);
    setActiveDescendant(null);
  }

  async function openModal() {
    // Blur first so the modal has nothing to hand focus back to on close
    if (document.activeElement && document.activeElement !== document.body) {
      document.activeElement.blur();
    }
    textInput.value = "";
    resetResults();
    modal.open = true;
    loadPagefind();
    await modal.updateComplete;
    await setupComboboxAria();
    // nys-modal focuses its own container after opening; move focus to the input after that
    requestAnimationFrame(() => textInput.focus());
  }

  function closeModal() {
    modal.open = false;
  }

  // Deepest focused element, looking through shadow roots
  function deepActiveElement() {
    let el = document.activeElement;
    while (el?.shadowRoot?.activeElement) el = el.shadowRoot.activeElement;
    return el;
  }

  const isMac = /mac|iphone|ipad/i.test(navigator.userAgentData?.platform || navigator.platform || "");

  // Open on ⌘K (Mac) / Ctrl+K (elsewhere) from anywhere, or on "/" when not typing in a field
  document.addEventListener("keydown", (e) => {
    if (modal.open) return;

    const modKey = isMac ? e.metaKey : e.ctrlKey;
    if (modKey && !e.altKey && !e.shiftKey && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openModal();
      return;
    }

    if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
    const active = deepActiveElement();
    const tag = active?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (active?.isContentEditable) return;
    e.preventDefault();
    openModal();
  });

  // Close on overlay click (nys-modal has no built-in backdrop dismiss)
  modal.addEventListener("click", (e) => {
    if (e.composedPath()[0]?.classList?.contains("nys-modal-overlay")) closeModal();
  });

  modal.addEventListener("nys-close", () => {
    clearTimeout(debounceTimer);
    // The modal's content is unslotted when it closes, but some browsers leave
    // focus on the now-hidden input (which also blocks the "/" shortcut). Drop it.
    textInput.blur();
    const active = deepActiveElement();
    if (active && active !== document.body) active.blur();
  });

  submitBtn.addEventListener("nys-click", goToAllResults);

  // Search as user types (debounced)
  textInput.addEventListener("nys-input", () => {
    clearTimeout(debounceTimer);
    const query = getQuery();
    if (!query) {
      searchToken++;
      resetResults();
      return;
    }
    debounceTimer = setTimeout(() => runSearch(query), 180);
  });

  async function runSearch(query) {
    const token = ++searchToken;
    const pf = await loadPagefind();
    if (!pf) {
      statusEl.textContent = "Search index not available.";
      return;
    }

    const { results } = await pf.search(query);
    const data = await Promise.all(results.slice(0, 3).map((r) => r.data()));
    if (token !== searchToken) return; // a newer search started meanwhile

    activeIndex = -1;
    setActiveDescendant(null);

    if (!data.length) {
      resultsList.innerHTML = "";
      resultsList.hidden = true;
      statusEl.textContent = `No results for "${query}"`;
      setExpanded(false);
      return;
    }

    resultsList.innerHTML = data
      .map(
        (d, i) => `
      <li role="option" id="search-result-${i}" class="search-dialog__result" aria-selected="false">
        <a href="${d.url}" tabindex="-1">
          <span class="search-dialog__result-title">${d.meta?.title || "Result"}</span>
          <span class="search-dialog__result-excerpt">${d.excerpt || ""}</span>
        </a>
      </li>`
      )
      .join("");
    resultsList.hidden = false;
    setExpanded(true);

    const count = results.length;
    const label = count === 1 ? "1 result found" : `${count} results found`;
    statusEl.innerHTML = `${label}. <a href="/search/?q=${encodeURIComponent(query)}">See all results</a>`;
  }

  // Arrow keys move through results; Enter follows the active result,
  // or opens the full results page when none is active
  textInput.addEventListener("keydown", (e) => {
    const items = Array.from(resultsList.querySelectorAll('[role="option"]'));

    if (e.key === "Enter") {
      e.preventDefault();
      const link = items[activeIndex]?.querySelector("a");
      if (link) {
        closeModal();
        window.location.href = link.href;
      } else {
        goToAllResults();
      }
      return;
    }

    if (!items.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(activeIndex < items.length - 1 ? activeIndex + 1 : 0, items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(activeIndex > 0 ? activeIndex - 1 : items.length - 1, items);
    }
  });

  function setActive(idx, items) {
    items[activeIndex]?.setAttribute("aria-selected", "false");
    activeIndex = idx;
    items[idx].setAttribute("aria-selected", "true");
    items[idx].scrollIntoView({ block: "nearest" });
    setActiveDescendant(items[idx]);
  }

  // Following any link inside the modal closes it first
  resultsList.addEventListener("click", (e) => {
    const option = e.target.closest('[role="option"]');
    const link = option?.querySelector("a");
    if (!link) return;
    e.preventDefault();
    closeModal();
    window.location.href = link.href;
  });

  // Open the modal from the header search button (mobile) or search input (desktop).
  // composedPath() sees through the header's shadow DOM.
  function hookHeaderSearch() {
    const unavHeader = document.querySelector("nys-unavheader");
    if (!unavHeader) return;

    const isHeaderSearch = (e) =>
      e.composedPath().some(
        (el) => el.id === "nys-unavheader__searchbutton" || el.id === "nys-unavheader__searchbar--native"
      );

    // Focusing the header field expands it, so stop the focus that mousedown would cause
    unavHeader.addEventListener("mousedown", (e) => {
      if (!modal.open && isHeaderSearch(e)) e.preventDefault();
    }, true);

    unavHeader.addEventListener("click", (e) => {
      if (modal.open || !isHeaderSearch(e)) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      openModal();
    }, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hookHeaderSearch);
  } else {
    hookHeaderSearch();
  }

  // "/" hint badge, placed inside the header search field so it moves with it
  function createSlashHint() {
    const unavHeader = document.querySelector("nys-unavheader");
    const searchbar = unavHeader?.shadowRoot?.getElementById("nys-unavheader__searchbar");
    const root = searchbar?.shadowRoot;
    const container = root?.querySelector(".nys-textinput__container");
    if (!container) return false;
    if (root.getElementById("header-search-slash-hint")) return true;

    const style = document.createElement("style");
    style.textContent = `
      #header-search-slash-hint {
        position: absolute;
        right: var(--nys-space-100, 8px);
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        margin: 0;
        padding: 0 var(--nys-space-75, 6px);
        border-radius: var(--nys-radius-sm, 2px);
        background: var(--nys-color-neutral-50, #ededed);
        font: var(--nys-font-size-xs, 12px) / 1.6 var(--nys-font-family-monospace, monospace);
        color: var(--nys-color-neutral-700, #4a4d4f);
      }`;

    const hint = document.createElement("kbd");
    hint.id = "header-search-slash-hint";
    hint.setAttribute("aria-hidden", "true");
    hint.textContent = "/";
    root.append(style);
    container.append(hint);
    return true;
  }

  // The header renders asynchronously; retry until its search field exists
  function tryCreateSlashHint(attempts) {
    if (createSlashHint() || attempts <= 0) return;
    setTimeout(() => tryCreateSlashHint(attempts - 1), 200);
  }
  setTimeout(() => tryCreateSlashHint(10), 100);
})();
