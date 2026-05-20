class Breadcrumb {
  /**
   * Initializes the Breadcrumb instance.
   * @param {HTMLElement} navElement The root <nav> element of the breadcrumb component.
   */
  constructor(navElement) {
    this.navElement = navElement;
    this.revealer = this.navElement.querySelector('[data-part="revealer"]');
    this.intermediateItems = this.navElement.querySelectorAll(".intermediate");

    if (!this.revealer) {
      console.error(
        `Breadcrumb component (ID: ${navElement.id}) is missing 'data-part="revealer"' element.`,
      );
      return;
    }
    let isButtonClicked = false;

    // Bind the event listener to the revealer button
    const revealerButton = this.revealer.querySelector("button");
    if (revealerButton) {
      revealerButton.addEventListener("click", () => {
        isButtonClicked = true;
        // Mutate DOM
        this.maximize();
      });
    }

    // Use a MutationObserver to watch for changes to the 'data-state' attribute
    this.observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-state"
        ) {
          this.render();
        }
      }
      if (isButtonClicked) {
        // Reset flag immediately
        isButtonClicked = false;

        // Perform action only if button triggered this.
        // Why? Because rerender has to complete before we move focus.
        // Why are we managing focus? Because the focused element, the button,
        // is about to be `display:none`, and we MUST NOT lose focus back to <body>.
        requestAnimationFrame(() => {
          // When changing to 'max', focus on the zeroth intermediate item
          if (this.intermediateItems.length > 0) {
            // Find a focusable element within the first intermediate item (e.g., a link)
            const focusableElement =
              this.intermediateItems[0].querySelector("a");
            if (focusableElement) {
              focusableElement.focus();
            }
          }
        });
      }
    });

    this.observer.observe(this.navElement, { attributes: true });

    // Initial render and make the nav visible
    this.render();
    this.navElement.classList.remove("d-none");
  }

  /**
   * Toggles the 'data-state' between 'max' and 'min'.
   * Not currently used!
   * People won't be manually toggling, only maximizing.
   */
  // toggleState() {
  //   const currentState = this.navElement.getAttribute("data-state");
  //   const newState = currentState === "min" ? "max" : "min";
  //   this.navElement.setAttribute("data-state", newState);
  // }

  /**
   * Sets 'data-state' to 'max'.
   */
  maximize() {
    this.navElement.setAttribute("data-state", "max");
  }

  /**
   * Renders the component based on the current 'data-state'.
   */
  render() {
    const state = this.navElement.getAttribute("data-state");

    if (state === "min") {
      this.intermediateItems.forEach((item) => {
        item.classList.add("d-none");
      });
      this.revealer.classList.remove("d-none");
    } else if (state === "max") {
      this.intermediateItems.forEach((item) => {
        item.classList.remove("d-none");
      });
      this.revealer.classList.add("d-none");
    } else {
      console.warn(`Invalid 'data-state' value: ${state}`);
    }
  }

  /**
   * Static method to initialize all matching nav elements on the page.
   */
  static initializeAll() {
    document
      .querySelectorAll('nav[data-component="breadcrumb"]')
      .forEach((navElement) => {
        new Breadcrumb(navElement);
      });
  }
}

// Initialize all breadcrumbs when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  Breadcrumb.initializeAll();
});

/* ------------------------------------------------------------------------------------- */
/*
  Demo-only toggle.
  The value of the 'data-state' attribute determines component rendering and functionality.
*/

document.querySelectorAll(".breadcrumb-demo").forEach((demo) => {
  let bcState = "min";
  const st = demo.querySelector("[aria-controls]");
  const bc = demo.querySelector('[data-component="breadcrumb"]');
  demo.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      bcState = bcState === "min" ? "max" : "min";
      bc.setAttribute("data-state", bcState);
      if (bcState === "min") {
        st.textContent = "Reveal links";
        st.ariaExpanded = "false"; // not passed into shadowDOM, thus use `button` instead of `nys-button`
      } else {
        st.textContent = "Collapse links";
        st.ariaExpanded = "true"; // not passed into shadowDOM, thus use `button` instead of `nys-button`
      }
    }
  });
});
