document.querySelectorAll("button[data-part='summary']").forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const parent = this.parentElement;
    parent.classList.toggle("open");
    const isOpen = parent.classList.contains("open");
    this.setAttribute("aria-expanded", String(isOpen));
  });
});
