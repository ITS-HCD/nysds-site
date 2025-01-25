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

  // Update the active navigation item on scroll
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");
  
  window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop ) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      if (li.classList.contains(current)) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  };