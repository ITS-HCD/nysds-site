/**
 * NYSA11y Accordion (custom)
 * Depends on `accordion-custom.css`
 */
class Accordion {
  constructor(options = {}) {
    this.container = options.container || document;
    this.selectorToggle =
      '[data-component="accordion"].nysa11y [data-part="summary"]';
    this.selectorParent = '[data-component="accordion"].nysa11y';
    this.stateOpen = "is-open";

    this.init();
  }

  init() {
    this.toggles = this.container.querySelectorAll(this.selectorToggle);
    if (!this.toggles.length) return;

    this.toggles.forEach((toggle) => {
      // Avoid binding the same event listener multiple times
      toggle.removeEventListener("click", this.handleToggle);
      toggle.addEventListener("click", this.handleToggle);

      // Set initial accessibility state
      const isExpanded = toggle
        .closest(this.selectorParent)
        ?.classList.contains(this.stateOpen);
      toggle.setAttribute("aria-expanded", isExpanded || false);
    });
  }

  handleToggle = (event) => {
    const toggleElement = event.currentTarget;
    const parent = toggleElement.closest(this.selectorParent);
    if (!parent) return;

    const isOpen = parent.classList.toggle(this.stateOpen);
    toggleElement.setAttribute("aria-expanded", isOpen);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  new Accordion();
});
