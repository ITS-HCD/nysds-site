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

