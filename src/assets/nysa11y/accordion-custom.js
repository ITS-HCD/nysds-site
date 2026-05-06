/**
 * NYSA11y Accordion (custom)
 * Path: /assets/nysa11y/accordion-custom.js
 * Depends on /assets/nysa11y/accordion-custom.css
 */
const nysa11y = window.nysa11y || {};

class Accordion {
  #selectorToggle =
    '[data-component="accordion"].nysa11y [data-part="summary"]';
  #selectorParent = '[data-component="accordion"].nysa11y';
  #stateOpen = "is-open";

  constructor(options = {}) {
    this.container = options.container || document;
    this.init();
  }

  init() {
    this.toggles = this.container.querySelectorAll(this.#selectorToggle);
    if (!this.toggles.length) return;

    this.toggles.forEach((toggle) => {
      // Avoid binding the same event listener multiple times
      toggle.removeEventListener("click", this.#handleToggle);
      toggle.addEventListener("click", this.#handleToggle);

      // Set initial accessibility state
      const isExpanded = toggle
        .closest(this.#selectorParent)
        ?.classList.contains(this.#stateOpen);
      toggle.setAttribute("aria-expanded", isExpanded || false);
    });
  }

  #handleToggle = (event) => {
    const toggleElement = event.currentTarget;
    const parent = toggleElement.closest(this.#selectorParent);
    if (!parent) return;

    const isOpen = parent.classList.toggle(this.#stateOpen);
    toggleElement.setAttribute("aria-expanded", isOpen);
  };
}

nysa11y.Accordion = Accordion;

document.addEventListener("DOMContentLoaded", () => {
  new nysa11y.Accordion();
});
