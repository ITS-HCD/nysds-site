---
permalink: /patterns/booking-calendar/
title: "Booking and Scheduling Calendar"
description: "A comprehensive pattern guide and interactive appointment scheduler demonstrating location selection, date pickers, and keyboard-navigable time grids complying with WCAG 2.2 AA standards."
---

{% block content %}

# Booking and Scheduling Calendar

Many public digital services require residents to schedule in-person appointments—such as completing DMV road tests, renewing professional licenses, attending public hearings, or scheduling health consultations. Designing a straightforward, keyboard-operable scheduler allows users to secure slots quickly without encountering navigation barriers.

This pattern demonstrates how to compose `<nys-select>`, `<nys-datepicker>`, buttons, and status indicators into an interactive **Appointment Scheduler**.

---

## Interactive Demo

The following interactive tool simulates a **DMV Office Appointment Scheduler**. Select an office location, pick a date, choose from available hourly slots, and click **"Confirm Appointment"**:

{% set preview %}
<style>
  /* Ensure form web components behave as blocks for reliable alignment */
  #sched-office,
  #sched-date {
    display: block;
    width: 100%;
  }

  /* Keyboard focus styles for custom slot buttons */
  .slot-btn:focus-visible {
    outline: 3px solid var(--nys-color-focus, #286ad8) !important;
    outline-offset: 2px !important;
  }
</style>
<div class="calendar-demo-container" style="border: 1px solid var(--nys-color-base); border-radius: 8px; background-color: var(--nys-color-surface); padding: var(--nys-space-400); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  
  <form id="scheduler-form" novalidate style="display: flex; flex-direction: column; gap: var(--nys-space-300);">
    <!-- Row 1: Location and Date (Compact grid to prevent paragraph injection) -->
    <div class="nys-grid-row nys-grid-gap-200"><div class="nys-grid-col-12 nys-desktop:nys-grid-col-6"><nys-select id="sched-office" label="Select DMV Office Location" required errorMessage="Please select an office."><option value="" disabled selected>Choose an office location...</option><option value="Albany">Albany (Central Ave)</option><option value="Syracuse">Saratoga Springs (Lake Ave)</option><option value="NYC">New York City (Harlem Registry)</option></nys-select></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-6"><nys-datepicker id="sched-date" label="Select Appointment Date" placeholder="MM/DD/YYYY" required errorMessage="Appointment date is required."></nys-datepicker></div></div>

    <!-- Row 2: Available Hourly Slot Grid (Hidden until Date and Location are filled) -->
    <div id="slots-panel" style="display: none; border-top: 1px solid var(--nys-color-base); padding-top: var(--nys-space-300);">
      <h4 id="slots-heading" tabindex="-1" style="margin: 0 0 var(--nys-space-150) 0; font-size: 1.1rem; font-weight: bold; color: var(--nys-color-text); outline: none;">
        Available Appointment Times
      </h4>
      <p style="font-size: 0.95rem; color: var(--nys-color-text-weak); margin-bottom: var(--nys-space-300);">
        Click on an available hourly block to select it. (Times shown are local to the selected office).
      </p>

      <!-- Buttons Grid (Compact wrap) -->
      <div id="slots-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: var(--nys-space-200); margin-bottom: var(--nys-space-300);">
        <!-- Slots injected dynamically -->
      </div>
    </div>

    <!-- Row 3: Submit and Cancel Action Triggers -->
    <div style="display: flex; gap: var(--nys-space-200); border-top: 1px solid var(--nys-color-base); padding-top: var(--nys-space-300); margin-top: var(--nys-space-100);">
      <nys-button id="btn-submit-booking" label="Confirm Appointment" variant="primary" style="display: none;"></nys-button>
    </div>
  </form>

  <!-- Step 4: Success Confirmed Receipt Card (Hidden initially) -->
  <div id="receipt-panel" style="display: none; text-align: center; padding: var(--nys-space-300) 0;">
    <div style="background-color: var(--nys-color-theme-faint); border-left: 4px solid var(--nys-color-success); border-radius: 4px; padding: var(--nys-space-300); text-align: left; max-width: 500px; margin: 0 auto var(--nys-space-300) auto;">
      <h3 id="receipt-heading" tabindex="-1" style="font-size: 1.25rem; font-weight: bold; margin: 0 0 var(--nys-space-150) 0; color: var(--nys-color-text); outline: none; display: flex; align-items: center; gap: 8px;">
        <nys-icon name="check" size="md" style="color: var(--nys-color-success);"></nys-icon>
        Appointment Booked Successfully
      </h3>
      <p style="font-size: 0.95rem; color: var(--nys-color-text-weak); margin: 0 0 var(--nys-space-200) 0; line-height: 1.5;">
        Your reservation is confirmed. A receipt and calendar invitation has been sent to your email.
      </p>
      <div style="font-size: 0.95rem; color: var(--nys-color-text); display: grid; grid-template-columns: 100px 1fr; gap: 6px;">
        <strong>Location:</strong> <span id="rec-office">—</span>
        <strong>Date:</strong> <span id="rec-date">—</span>
        <strong>Time Slot:</strong> <span id="rec-time">—</span>
      </div>
    </div>
    <nys-button id="btn-sched-reset" label="Schedule Another Appointment" variant="secondary" size="sm"></nys-button>
  </div>

  <!-- Hidden Status Announcer for screen-readers (WCAG AA Compliance) -->
  <div id="sched-live-announcer" role="status" aria-live="polite" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;"></div>

</div>
{% endset %}

{% set script %}
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Inputs
    const selectOffice = document.getElementById("sched-office");
    const datePicker = document.getElementById("sched-date");

    // Containers
    const form = document.getElementById("scheduler-form");
    const slotsPanel = document.getElementById("slots-panel");
    const slotsGrid = document.getElementById("slots-grid");
    const receiptPanel = document.getElementById("receipt-panel");

    // Receipt Outputs
    const recOffice = document.getElementById("rec-office");
    const recDate = document.getElementById("rec-date");
    const recTime = document.getElementById("rec-time");

    // Action buttons
    const btnSubmit = document.getElementById("btn-submit-booking");
    const btnReset = document.getElementById("btn-sched-reset");
    const liveAnnouncer = document.getElementById("sched-live-announcer");
    const slotsHeading = document.getElementById("slots-heading");

    let selectedTimeSlot = "";

    const availableSlots = [
      { time: "9:00 AM", available: true },
      { time: "10:00 AM", available: true },
      { time: "11:00 AM", available: false },
      { time: "1:00 PM", available: true },
      { time: "2:00 PM", available: true },
      { time: "3:00 PM", available: false }
    ];

    const announceStatus = (message) => {
      liveAnnouncer.textContent = "";
      setTimeout(() => {
        liveAnnouncer.textContent = message;
      }, 50);
    };

    // Listen to changes on location/date picker to show slots
    const checkInputs = () => {
      const officeVal = selectOffice.value;
      const dateVal = datePicker.value;

      if (officeVal && dateVal) {
        renderSlotsGrid();
        slotsPanel.style.display = "block";
        announceStatus(`Checking times for ${officeVal} office on ${dateVal}.`);

        // WCAG REQUIREMENT: Programmatic focus shift onto slots title
        setTimeout(() => {
          slotsHeading.focus();
        }, 100);
      }
    };

    selectOffice.addEventListener("nys-change", checkInputs);
    datePicker.addEventListener("nys-change", checkInputs);

    // Build the 1-click slot button grid
    const renderSlotsGrid = () => {
      slotsGrid.innerHTML = "";
      selectedTimeSlot = "";
      btnSubmit.style.display = "none";

      availableSlots.forEach((slot, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "slot-btn";
        button.textContent = slot.time;
        button.setAttribute("id", `slot-btn-${index}`);

        // Custom styling matching design guidelines
        button.style.border = "1px solid var(--nys-color-base)";
        button.style.borderRadius = "4px";
        button.style.padding = "var(--nys-space-150)";
        button.style.fontSize = "0.95rem";
        button.style.fontWeight = "bold";
        button.style.cursor = slot.available ? "pointer" : "not-allowed";
        button.style.transition = "all 0.2s ease";

        if (!slot.available) {
          button.style.backgroundColor = "var(--nys-color-base-weak)";
          button.style.color = "var(--nys-color-text-weak)";
          button.style.borderStyle = "dashed";
          button.setAttribute("disabled", "true");
          button.setAttribute("aria-label", `${slot.time} - Unavailable`);
        } else {
          button.style.backgroundColor = "var(--nys-color-surface-raised)";
          button.style.color = "var(--nys-color-theme)";
          button.setAttribute("aria-label", `${slot.time} - Available`);

          // Click handler to select slot
          button.addEventListener("click", () => {
            selectSlot(button, slot.time);
          });
        }

        slotsGrid.appendChild(button);
      });
    };

    // Selecting a time slot
    const selectSlot = (btnElement, time) => {
      // Clear all active selection styling
      const buttons = slotsGrid.querySelectorAll(".slot-btn");
      buttons.forEach(btn => {
        if (!btn.disabled) {
          btn.style.backgroundColor = "var(--nys-color-surface-raised)";
          btn.style.color = "var(--nys-color-theme)";
          btn.style.border = "1px solid var(--nys-color-base)";
        }
      });

      // Style active button
      btnElement.style.backgroundColor = "var(--nys-color-theme)";
      btnElement.style.color = "var(--nys-color-ink-reverse)";
      btnElement.style.border = "1px solid var(--nys-color-theme-strong)";

      selectedTimeSlot = time;
      btnSubmit.style.display = "block";
      announceStatus(`Selected ${time} appointment slot.`);
    };

    // Submit Appointment booking
    btnSubmit.addEventListener("click", (e) => {
      e.preventDefault();

      form.style.display = "none";
      
      // Populate receipt
      recOffice.textContent = selectOffice.value;
      recDate.textContent = datePicker.value;
      recTime.textContent = selectedTimeSlot;

      receiptPanel.style.display = "block";
      announceStatus("Appointment confirmed successfully.");

      // WCAG REQUIREMENT: Shift programmatic focus onto receipt details
      setTimeout(() => {
        document.getElementById("receipt-heading").focus();
      }, 100);
    });

    // Reset loop
    btnReset.addEventListener("click", () => {
      receiptPanel.style.display = "none";
      form.style.display = "flex";
      
      selectOffice.value = "";
      datePicker.value = "";
      selectedTimeSlot = "";

      slotsPanel.style.display = "none";
      btnSubmit.style.display = "none";

      announceStatus("Scheduler reset.");
    });
  });
</script>
{% endset %}

{% set accordionLabel = "Scheduler Code Structure" %}
{% set code %}
<!-- HTML Scheduler Layout -->
<form id="scheduler-form" novalidate>
  
  <div class="nys-grid-row nys-grid-gap-200">
    <div class="nys-grid-col-12 nys-desktop:nys-grid-col-6">
      <nys-select id="sched-office" label="Office Location" required></nys-select>
    </div>
    <div class="nys-grid-col-12 nys-desktop:nys-grid-col-6">
      <nys-datepicker id="sched-date" label="Select Appointment Date" required></nys-datepicker>
    </div>
  </div>

  <div id="slots-panel" style="display: none;">
    <h4 id="slots-heading" tabindex="-1">Available Appointment Times</h4>
    
    <!-- Time slots buttons grid wrapper -->
    <div id="slots-grid">
      <!-- Buttons injected dynamically in Javascript -->
    </div>
  </div>

  <nys-button id="btn-submit-booking" label="Confirm Appointment" variant="primary" style="display: none;"></nys-button>
</form>

<div id="receipt-panel" style="display: none;">
  <h3 id="receipt-heading" tabindex="-1">Appointment Booked Successfully</h3>
  <!-- Confirmed Receipt Details -->
</div>

<!-- Accessible Status Counter Announcer -->
<div id="sched-live-announcer" role="status" aria-live="polite" class="sr-only"></div>

<script>
  // JavaScript Slots Populator and Focus shifting:
  const selectOffice = document.getElementById("sched-office");
  const datePicker = document.getElementById("sched-date");
  const slotsPanel = document.getElementById("slots-panel");
  const slotsHeading = document.getElementById("slots-heading");
  const liveAnnouncer = document.getElementById("sched-live-announcer");

  function onInputChanges() {
    if (selectOffice.value && datePicker.value) {
      loadHourlyTimeSlots();
      slotsPanel.style.display = "block";
      liveAnnouncer.textContent = "Checking appointment slots...";

      // WCAG REQUIREMENT: Shifting focus onto slots heading
      setTimeout(() => { slotsHeading.focus(); }, 100);
    }
  }

  selectOffice.addEventListener("nys-change", onInputChanges);
  datePicker.addEventListener("nys-change", onInputChanges);
</script>
{% endset %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

---

## Designing Scheduling Calendars

Appointment booking forms are primary public interaction panels on local agency portals. Apply these standard visual conventions:

1. **Inline Time Grids**: Present available slot options as a responsive, clickable grid list. Ensure disabled buttons (for full or reserved spots) carry visual indicators (like dashed grey borders or light backgrounds) and clear state settings.
2. **Clear Confirmation Receipts**: Once an appointment is booked, hide the active entry form and render a single confirmation receipt card. Provide an action to print, add the appointment to a calendar (.ics file), or schedule another reservation.
3. **No Auto-Tabbing**: When entering digits (for ZIP or date codes), avoid jumping cursors automatically, as this disrupts standard keyboard flows.

---

## Accessibility Guidelines (WCAG 2.2 AA)

To satisfy strict WCAG accessibility compliance standards, implement the following focus and interactive patterns:

### 1. Keyboard-Navigable Buttons
* Time slot choices must render as standard, native HTML `<button>` elements. 
* Do not style static `span` or `div` tags for slots. Native `<button>` elements are natively focusable via `Tab` and respond to standard `Space` and `Enter` keys.
* Configure native `:focus-visible` styles with prominent outlines (`3px solid var(--nys-color-focus)`) so keyboard users easily track their active position in the grid.

### 2. Status Announcers (US-AB-01)
* As residents click locations and dates, slot values load asynchronously inside the DOM.
* Assign `role="status"` and `aria-live="polite"` to a status announcer indicator on the form.
* When values change, update this text content in JavaScript (e.g., *"Selected 10:00 AM appointment slot"*).
* Assistive screen readers will announce this state to users immediately, confirming their action succeeded.

### 3. Programmatic Focus Shifting
* When a user selects a location and date, or completes their booking submission:
  * Assign `tabindex="-1"` and `outline: none;` to the target headings (`<h3>` or `<h4>`).
  * Programmatically trigger `.focus()` on that heading.
  * This shifts the screen reader's focus directly to the updated elements, ensuring blind users immediately understand that options are available for selection.

{% endblock %}
