// Trigger an nys-alert to show on click
const showAlert = () => {
  const container = document.querySelector(".alert-container");
  if (container) {
    // Clear previous instance if present
    container.innerHTML = "";
    const newAlert = document.createElement("nys-alert");
    newAlert.setAttribute("theme", "info");
    newAlert.setAttribute("heading", "Information status");
    newAlert.setAttribute("text", "This alert will disappear after 3 seconds.");
    newAlert.setAttribute("duration", 3000);
    container.appendChild(newAlert);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll("section[id]"))
    .filter(section => section.id !== "header");
  const navItems = Array.from(document.querySelectorAll(".navigator__item"));
  let ticking = false; // Debouncing flag for better performance

  function updateActiveNav() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      let current = "";

      // Find the last section in view
      for (let i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop - 100) {
          current = sections[i].getAttribute("id");
        }
      }

      // If no section is detected (at top), default to the first item
      if (!current && navItems.length > 0) {
        current = navItems[0].querySelector(".navigator__link").getAttribute("href").substring(1);
      }

      // Update navigation items
      navItems.forEach((item) => {
        const link = item.querySelector(".navigator__link");
        const sectionId = link.getAttribute("href").substring(1);

        if (sectionId === current) {
          item.classList.add("navigator__item--active");
          link.setAttribute("aria-current", "true");
        } else {
          item.classList.remove("navigator__item--active");
          link.removeAttribute("aria-current");
        }
      });

      ticking = false;
    });
  }

  // Run on page load and scroll, debounced via requestAnimationFrame
  updateActiveNav();
  window.addEventListener("scroll", updateActiveNav, { passive: true });
});