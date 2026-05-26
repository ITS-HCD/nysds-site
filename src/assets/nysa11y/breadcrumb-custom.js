/**
 * NYSA11y Breadcrumb
 * Path: /assets/nysa11y/breadcrumb-custom.js
 * Depends on /assets/nysa11y/breadcrub-custom.css
 */
class Breadcrumb {
  // Private fields for internal state and DOM elements
  #container;
  #navElement;
  #revealer;
  #intermediateItems;
  #observer;
  #isButtonClicked = false;

  /**
   * Initializes the Breadcrumb instance.
   * @param {Object} options Configuration options.
   * @param {HTMLElement} options.container The root <nav> element of the breadcrumb component.
   */
  constructor(options = {}) {
    this.#container = options.container || document;
    this.#init();
  }

  /**
   * Sets up the component's elements, event listeners, and initial state.
   */
  #init() {
    this.#navElement = this.#container.querySelector('nav[data-component="breadcrumb"]') || this.#container;
    this.#revealer = this.#navElement.querySelector('[data-part="revealer"]');
    this.#intermediateItems = this.#navElement.querySelectorAll(".intermediate");

    if (!this.#revealer) {
      console.error(
        `Breadcrumb component (ID: ${this.#navElement.id || "unknown"}) is missing 'data-part="revealer"' element.`,
      );
      return;
    }

    // Bind the event listener to the revealer button
    const revealerButton = this.#revealer.querySelector("button");
    if (revealerButton) {
      revealerButton.addEventListener("click", () => {
        this.#isButtonClicked = true;
        // Mutate DOM
        this.maximize();
      });
    }

    // Use a MutationObserver to watch for changes to the 'data-state' attribute
    this.#observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "data-state") {
          this.render();
        }
      }

      if (this.#isButtonClicked) {
        // Reset flag immediately
        this.#isButtonClicked = false;
        // Perform action only if button triggered.
        // Why? Because rerender has to complete before we move focus.
        // Why are we managing focus? Because the focused element, the button,
        // is about to be `display:none`, and we MUST NOT lose focus back to <body>.
        requestAnimationFrame(() => {
          // When changing to 'max', focus on the zeroth intermediate item
          if (this.#intermediateItems.length > 0) {
            // Find a focusable element within the first intermediate item (e.g., a link)
            const focusableElement = this.#intermediateItems[0].querySelector("a");
            if (focusableElement) {
              focusableElement.focus();
            }
          }
        });
      }
    });

    this.#observer.observe(this.#navElement, { attributes: true });

    // Initial render and make the nav visible
    this.render();
    this.#navElement.style.display = "block";
  }

  /**
   * Sets 'data-state' to 'max'.
   */
  maximize() {
    this.#navElement.setAttribute("data-state", "max");
  }

  /**
   * Sets 'data-state' to 'min'.
   */
  minimize() {
    this.#navElement.setAttribute("data-state", "min");
  }

  /**
   * Renders the component based on the current 'data-state'.
   */
  render() {
    const state = this.#navElement.getAttribute("data-state");

    if (state === "min") {
      this.#intermediateItems.forEach((item) => {
        item.style.display = "none";
      });
      this.#revealer.style.display = "flex";
    } else if (state === "max") {
      this.#intermediateItems.forEach((item) => {
        item.style.display = "flex";
      });
      this.#revealer.style.display = "none";
    } else {
      console.warn(`Invalid 'data-state' value: ${state}`);
    }
  }

  /**
   * Static method to initialize all matching nav elements on the page.
   */
  static initializeAll() {
    document.querySelectorAll('nav[data-component="breadcrumb"]').forEach((navElement) => {
      new Breadcrumb({ container: navElement });
    });
  }
}

// Initialize all breadcrumbs when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  Breadcrumb.initializeAll();
});
