/**
 * NYSA11y Dialog (native invocation)
 * Path: /assets/nysa11y/dialog-native.js
 * Depends on /assets/nysa11y/dialog-native.css
 */
const nysa11y = window.nysa11y || {};

class Dialog {
  #selectorRoot = '[data-component="dialog"].nysa11y';
  #selectorTrigger = "[data-nysa11y-dialog]";
  #selectorExit = '[data-part="exit"]';

  constructor(options = {}) {
    this.container = options.container || document;
    this.init();
  }

  init() {
    const triggers = this.container.querySelectorAll(this.#selectorTrigger);
    const dialogs = this.container.querySelectorAll(this.#selectorRoot);

    if (!triggers.length && !dialogs.length) return;

    triggers.forEach((trigger) => {
      trigger.removeEventListener("click", this.#handleTriggerClick);
      trigger.addEventListener("click", this.#handleTriggerClick);
    });

    dialogs.forEach((dialogEl) => {
      const exits = dialogEl.querySelectorAll(this.#selectorExit);
      exits.forEach((exitBtn) => {
        exitBtn.removeEventListener("click", this.#handleExitClick);
        exitBtn.addEventListener("click", this.#handleExitClick);
      });
    });
  }

  enter(dialogEl) {
    if (!dialogEl || typeof dialogEl.showModal !== "function") return;
    if (dialogEl.open) return;
    /* invoke the native method to open `dialog` with modality */
    dialogEl.showModal();
  }

  exit(dialogEl) {
    if (!dialogEl || typeof dialogEl.close !== "function") return;
    if (!dialogEl.open) return;
    /* invoke the native method to close `dialog` */
    dialogEl.close();
  }

  #handleTriggerClick = (event) => {
    const trigger = event.currentTarget;
    const selector = trigger.getAttribute("data-nysa11y-dialog");
    if (!selector) return;
    const dialogEl = this.container.querySelector(selector);
    if (!dialogEl) {
      console.error(`Error: The "${selector}" dialog is not found.`);
      return;
    }
    this.enter(dialogEl);
  };

  #handleExitClick = (event) => {
    const exitBtn = event.currentTarget;
    const dialogEl = exitBtn.closest(this.#selectorRoot);
    if (!dialogEl) return;
    this.exit(dialogEl);
  };
}

nysa11y.Dialog = Dialog;

window.exitDialog = () => {
  const openDialog = document.querySelector("dialog[open]");
  if (openDialog && nysa11y.dialogInstance) {
    nysa11y.dialogInstance.exit(openDialog);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  nysa11y.dialogInstance = new nysa11y.Dialog();
});
