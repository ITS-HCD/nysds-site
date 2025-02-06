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

// Copy to clipboard
function copyFunction(id) {
  const copyText = document.getElementById(id).textContent;
  const textArea = document.createElement('textarea');
  textArea.classList.add('nys-opacity-0');
  textArea.style.position = 'absolute'; // Set absolute to remove from DOM order
  textArea.style.left = '-9999px'; // Move it out of view
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  // Replace execCommand("copy") with Clipboard API
  navigator.clipboard.writeText(copyText).then(() => {
    return;
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
  document.body.removeChild(textArea); // Clean up
}

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
    button.style.right = "0";
    button.style.display = "flex";

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
