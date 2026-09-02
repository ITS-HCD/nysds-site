---
permalink: /patterns/emergency-alerts/
title: "Emergency Alert System"
description: "A comprehensive pattern guide and interactive simulator demonstrating accessible, persistent global alert banners complying with WCAG 2.2 AA standards."
---

{% block content %}

# Emergency Alert System

Government websites serve as critical lifelines for the public during weather emergencies, public health advisories, or major system outages. The **Emergency Alert System** pattern guides developers on establishing high-priority notification banners that are persistent across page navigation, yet fully dismissible and optimized for WCAG 2.2 AA accessibility standards.

This pattern demonstrates how to implement a persistent top-of-viewport header banner using the `<nys-alert>` component, coordinate dynamic severity levels, and track dismissal states.

---

## Interactive Demo

The following interactive workspace simulates a global header banner alert system. Use the dashboard controls to trigger different emergency situations, dismiss the active banner, or restore it:

{% set preview %}
<style>
  /* Ensure components are block-level inside column wrappers to align perfectly */
  #demo-header-alert {
    display: block;
    width: 100%;
    margin-bottom: var(--nys-space-300);
    transition: all 0.3s ease;
  }
</style>
<div class="alert-demo-container" style="border: 1px solid var(--nys-color-base); border-radius: 8px; background-color: var(--nys-color-surface); padding: var(--nys-space-400); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  
  <!-- Simulated Top-of-Viewport Global Alert Banner -->
  <div id="alert-banner-viewport" style="min-height: 90px; margin-bottom: var(--nys-space-300); border-bottom: 1px dashed var(--nys-color-base); padding-bottom: var(--nys-space-200);">
    <nys-alert 
      id="demo-header-alert" 
      type="danger" 
      title="CRITICAL EMERGENCY: State Route 87 Road Closure"
    >
      Due to extreme weather, State Route 87 is closed in both directions between Exit 15 and Exit 18. Emergency crews are on site. Avoid the area.
      
      <!-- Close action trigger in slot -->
      <div slot="actions" style="padding-top: var(--nys-space-50);">
        <nys-button 
          id="btn-dismiss-banner" 
          label="Dismiss Alert" 
          variant="secondary" 
          size="sm"
          aria-label="Dismiss critical weather emergency alert banner"
        ></nys-button>
      </div>
    </nys-alert>

    <div id="alert-dismissed-msg" style="display: none; text-align: center; color: var(--nys-color-text-weak); font-size: 0.95rem; padding: var(--nys-space-300);">
      <nys-icon name="check" size="md" style="color: var(--nys-color-success); margin-bottom: var(--nys-space-50);"></nys-icon>
      <p style="margin: 0; font-weight: bold;">Global Alert Banner Dismissed</p>
      <p style="margin: 0; font-size: 0.85rem; margin-top: 4px;">State is saved in sessionStorage. (Alert won't repeat on page reload).</p>
    </div>
  </div>

  <!-- Dashboard Controls Panel -->
  <div>
    <h3 id="dashboard-heading" style="margin: 0 0 var(--nys-space-200) 0; font-size: 1.15rem; font-weight: bold; color: var(--nys-color-text); outline: none;" tabindex="-1">
      Emergency Alert Simulator Dashboard
    </h3>
    <p style="font-size: 0.9rem; color: var(--nys-color-text-weak); margin-bottom: var(--nys-space-300);">
      Select a scenario button below to trigger and test different alert severities, or restore the banner:
    </p>

    <div class="nys-grid-row nys-grid-gap-200" style="margin-bottom: var(--nys-space-200);"><div class="nys-grid-col-12 nys-desktop:nys-grid-col-4"><nys-button id="btn-trigger-critical" label="Trigger Critical (Red)" variant="primary" style="width: 100%;"></nys-button></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-4"><nys-button id="btn-trigger-warning" label="Trigger Warning (Yellow)" variant="secondary" style="width: 100%;"></nys-button></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-4"><nys-button id="btn-trigger-info" label="Trigger Info (Blue)" variant="secondary" style="width: 100%;"></nys-button></div></div>

    <div style="text-align: center; border-top: 1px solid var(--nys-color-base); padding-top: var(--nys-space-300); margin-top: var(--nys-space-200);">
      <nys-button id="btn-restore-banner" label="Reset & Restore Banner" variant="secondary" size="sm" style="display: none;"></nys-button>
    </div>
  </div>

  <!-- Hidden Assertive Live Region for Screen Readers -->
  <div id="alert-vocalizer" role="alert" aria-live="assertive" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;"></div>

</div>
{% endset %}

{% set script %}
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const alertBanner = document.getElementById("demo-header-alert");
    const dismissBtn = document.getElementById("btn-dismiss-banner");
    const dismissedMsg = document.getElementById("alert-dismissed-msg");
    const restoreBtn = document.getElementById("btn-restore-banner");
    const vocalizer = document.getElementById("alert-vocalizer");
    const heading = document.getElementById("dashboard-heading");

    // Scenario Buttons
    const triggerCritical = document.getElementById("btn-trigger-critical");
    const triggerWarning = document.getElementById("btn-trigger-warning");
    const triggerInfo = document.getElementById("btn-trigger-info");

    const SEVERITIES = {
      critical: {
        type: "danger",
        title: "CRITICAL EMERGENCY: State Route 87 Road Closure",
        body: "Due to extreme weather, State Route 87 is closed in both directions between Exit 15 and Exit 18. Avoid the area.",
        role: "alert"
      },
      warning: {
        type: "warning",
        title: "MAINTENANCE OUTAGE: Licensing Portal",
        body: "The DOH licensing portal will be offline for scheduled security upgrades on Friday, from 11:00 PM to Saturday, 3:00 AM.",
        role: "status"
      },
      info: {
        type: "info",
        title: "AGENCY ANNOUNCEMENT: New Small Business Grant Launch",
        body: "Applications are now open for the 2026 NYS Small Business Resiliency Grant program. Apply by October 15.",
        role: "status"
      }
    };

    // Helper to vocalize changes assertively or politely depending on role
    const vocalizeAlert = (message, isCritical) => {
      vocalizer.setAttribute("role", isCritical ? "alert" : "status");
      vocalizer.setAttribute("aria-live", isCritical ? "assertive" : "polite");
      vocalizer.textContent = "";
      setTimeout(() => {
        vocalizer.textContent = message;
      }, 50);
    };

    // Check if dismissed in sessionStorage on page load
    if (sessionStorage.getItem("nys-emergency-alert-dismissed") === "true") {
      alertBanner.style.display = "none";
      dismissedMsg.style.display = "block";
      restoreBtn.style.display = "inline-block";
    }

    // Dismiss trigger event
    dismissBtn.addEventListener("click", () => {
      alertBanner.style.opacity = "0";
      setTimeout(() => {
        alertBanner.style.display = "none";
        dismissedMsg.style.display = "block";
        restoreBtn.style.display = "inline-block";
        
        sessionStorage.setItem("nys-emergency-alert-dismissed", "true");
        vocalizeAlert("Critical emergency banner dismissed.", false);

        // WCAG REQUIREMENT: Shifting programmatic focus so focus isn't lost on deletion
        heading.focus();
      }, 300);
    });

    // Restore trigger event
    restoreBtn.addEventListener("click", () => {
      sessionStorage.removeItem("nys-emergency-alert-dismissed");
      loadAlertScenario("critical");
      restoreBtn.style.display = "none";
      
      // Shift focus back to close button
      setTimeout(() => {
        dismissBtn.focus();
      }, 100);
    });

    // Swapping Scenarios
    const loadAlertScenario = (key) => {
      const data = SEVERITIES[key];
      if (!data) return;

      sessionStorage.removeItem("nys-emergency-alert-dismissed");
      dismissedMsg.style.display = "none";
      restoreBtn.style.display = "none";

      alertBanner.setAttribute("type", data.type);
      alertBanner.setAttribute("title", data.title);
      alertBanner.innerHTML = `${data.body} <div slot="actions" style="padding-top: var(--nys-space-50);"><nys-button id="btn-dismiss-banner" label="Dismiss Alert" variant="secondary" size="sm" aria-label="Dismiss ${key} alert banner"></nys-button></div>`;
      
      alertBanner.style.display = "block";
      alertBanner.style.opacity = "1";

      // Re-bind the dynamically added dismiss button
      document.getElementById("btn-dismiss-banner").addEventListener("click", () => {
        alertBanner.style.opacity = "0";
        setTimeout(() => {
          alertBanner.style.display = "none";
          dismissedMsg.style.display = "block";
          restoreBtn.style.display = "inline-block";
          sessionStorage.setItem("nys-emergency-alert-dismissed", "true");
          vocalizeAlert("Alert banner dismissed.", false);
          heading.focus();
        }, 300);
      });

      // WCAG Compliance: Announce alerts
      vocalizeAlert(`${data.title}. ${data.body}`, key === "critical");
    };

    triggerCritical.addEventListener("click", () => loadAlertScenario("critical"));
    triggerWarning.addEventListener("click", () => loadAlertScenario("warning"));
    triggerInfo.addEventListener("click", () => loadAlertScenario("info"));
  });
</script>
{% endset %}

{% set accordionLabel = "Emergency Banner Markup & State Management" %}
{% set code %}
<!-- HTML Global Header Alert Markup -->
<div id="alert-banner-viewport">
  <nys-alert id="demo-header-alert" type="danger" title="CRITICAL EMERGENCY: State Route 87 Road Closure">
    Due to extreme weather, State Route 87 is closed in both directions.
    
    <!-- Close action trigger in actions slot -->
    <div slot="actions">
      <nys-button id="btn-dismiss-banner" label="Dismiss Alert" variant="secondary" size="sm" aria-label="Dismiss weather emergency alert banner"></nys-button>
    </div>
  </nys-alert>
</div>

<!-- Screen Reader Status Announcer (Vocalizes alert updates) -->
<div id="alert-vocalizer" role="alert" aria-live="assertive" class="sr-only"></div>

<script>
  // JavaScript State dismissal and Session Storage wiring:
  const alertBanner = document.getElementById("demo-header-alert");
  const dismissBtn = document.getElementById("btn-dismiss-banner");
  const vocalizer = document.getElementById("alert-vocalizer");

  // On page load: check sessionStorage so dismissed alert does not show repeatedly
  if (sessionStorage.getItem("nys-emergency-alert-dismissed") === "true") {
    alertBanner.style.display = "none";
  }

  // Dismiss event
  dismissBtn.addEventListener("click", () => {
    alertBanner.style.opacity = "0";
    setTimeout(() => {
      alertBanner.style.display = "none";
      
      // Save dismissed state in sessionStorage
      sessionStorage.setItem("nys-emergency-alert-dismissed", "true");
      
      // Screen reader announcement
      announceAlert("Emergency alert banner dismissed.", false);

      // WCAG Focus Management: Shift focus to header to keep context intact
      document.getElementById("dashboard-heading").focus();
    }, 300);
  });

  function announceAlert(message, isCritical) {
    vocalizer.setAttribute("role", isCritical ? "alert" : "status");
    vocalizer.setAttribute("aria-live", isCritical ? "assertive" : "polite");
    vocalizer.textContent = "";
    setTimeout(() => { vocalizer.textContent = message; }, 50);
  }
</script>
{% endset %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

---

## Designing Emergency Alert Banners

Global notifications must capture attention immediately while remaining visually distinct from typical branding:

1. **Top-of-Viewport Stickiness**: Mount global emergency alerts at the absolute top of the screen (above the site header).
2. **Standard Color Coding**: Use universally understood severity levels:
   * **Danger (Red)**: Imminent life safety, road closures, severe storms, or complete portal outages.
   * **Warning (Yellow)**: Upcoming scheduled system maintenance or local administrative updates.
   * **Info (Blue)**: General announcements, new portal tools, or press releases.
3. **Session-Level Preservation**: Once a user dismisses a banner, preserve their choice using `sessionStorage` or cookies. Banners that reappear on every page reload create high friction and frustrate citizens trying to complete tasks.

---

## Accessibility Guidelines (WCAG 2.2 AA)

To satisfy strict WCAG accessibility compliance standards, implement the following focus and interactive patterns:

### 1. Alert Roles (`role="alert"`)
* Assign a native `role="alert"` and `aria-live="assertive"` attribute to critical, life-safety emergencies.
* This tells screen readers to instantly interrupt any active reading to announce the safety emergency.
* For lower-severity announcements (like scheduled server maintenance or grant updates), use `role="status"` and `aria-live="polite"`. Polite regions wait for the user to stop typing or reading before speaking, preventing unnecessary disruptions.

### 2. Focus Preservation on Dismissal
* When a user dismisses an active banner, the button they clicked is removed from the DOM.
* This leaves keyboard and screen reader users stranded without an active focus point, forcing the browser to jump back to the top of the body viewport.
* To prevent this, assign `tabindex="-1"` and `outline: none;` to a prominent heading below the alert (like the site's main `<h1>`).
* In your banner dismissal callback script, immediately call `.focus()` on that heading to keep keyboard navigation in a predictable flow.

### 3. Accessible Trigger Elements
* Always wrap custom text-link dismissal triggers inside a semantic `<button>` or `<nys-button>` component.
* Configure them with descriptive screen-reader overrides (e.g. `aria-label="Dismiss winter storm route 87 emergency warning banner"`), giving sight-impaired users full context of what notice is being closed.

{% endblock %}
