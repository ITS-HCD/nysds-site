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

// On this page navigation JS
document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll("section[id]"))
    .filter(section => section.id !== "header");
  const navItems = Array.from(document.querySelectorAll(".navigator__item"));
  let ticking = false; // This is a performance thing

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
      paragraph.style.bottom = "0px";
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
        hasParagraph = false
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