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

// On this page navigation JS
document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll("section[id]"))
    .filter(section => section.id !== "header");
  const navItems = Array.from(document.querySelectorAll(".navigator__item"));
  let ticking = false; // This is a performanc thing

  function updateActiveNav() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      let current = "";
      const viewportOffset = 50; // section offset from top of viewport to be considered "in view"

      // Find the "in view" section
      for (let i = 0; i < sections.length; i++) {
        if (window.scrollY + viewportOffset >= sections[i].offsetTop) {
          current = sections[i].getAttribute("id");
        }
      }

      // If no section is detected (at top), default to the first item
      if (!current && navItems.length > 0) {
        current = navItems[0].querySelector(".navigator__link").getAttribute("href").substring(1);
      }

      // Update active state and aria role
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

  // Run on page load and scroll (debounced, though, for better performance)
  updateActiveNav();
  window.addEventListener("scroll", updateActiveNav, { passive: true });
});

// Add Copy to clipboard to all pre elements
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre code").forEach((codeBlock) => {
    // Select parent
    const pre = codeBlock.parentElement;
    pre.style.position = "relative";
    // Create butotn
    const button = document.createElement("nys-button");
    button.label = "Copy Code";
    button.size = "sm";
    button.variant = "outline";
    button.style.position = "absolute";
    button.style.top = "0";
    button.style.right = "12px";
    button.style.display = "flex";
    button.style.zIndex = "9999";

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.innerText);
        button.label = "Copied!";
        setTimeout(() => (button.label = "Copy Code"), 1500);
      } catch (err) {
        console.error("Failed to copy:", err);
        button.label = "Failed!";
        setTimeout(() => (button.label = "Copy Code"), 1500);
      }
    });

    pre.appendChild(button);
  });
});

// Add Copy to clipboard to all icon examples
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".icon-examples .card").forEach((card) => {
    const cardDesc = card.querySelector(".card__desc");
    const cardText = cardDesc.textContent;

    card.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(cardText);
        const paragraph = document.querySelector(".hover-message");
        if (paragraph) {
          paragraph.textContent = "Copied!";
          paragraph.style.color = "var(--nys-color-success)";
        }
        setTimeout(() => {
          paragraph.style.color = "var(--nys-color-text)";
          card.parentElement.removeChild(paragraph);

      }, 1500);
      } catch (err) {
        cardDesc.innerHTML = "Failed!";
        setTimeout(() => (cardDesc.innerHTML = cardText), 1500);
        console.error("Failed to copy:", err);
      }
    });
    card.addEventListener("mouseenter", async () => {
      const paragraph = document.createElement("p");
      paragraph.style.position = "absolute";
      paragraph.style.top = "100px";
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
      }
      cardDesc.innerHTML = cardText;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".section-nav__toggle");
  const sectionNav = document.querySelector(".section-nav__list");

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
      toggleButton.setAttribute("aria-expanded", !isExpanded);
      sectionNav.style.display = isExpanded ? "none" : "block";
    });
  };
});