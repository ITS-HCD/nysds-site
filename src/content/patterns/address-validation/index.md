---
permalink: /patterns/address-validation/
title: "Address Lookup and Validation"
description: "A comprehensive pattern guide and interactive simulator demonstrating accessible multi-field address forms and standardization comparison dialogs complying with WCAG 2.2 AA standards."
---

{% block content %}

# Address Lookup and Validation

Validating and standardizing resident addresses against geocoding systems or USPS registries is a cornerstone of transactional state digital services (such as registering to vote, applying for tax credits, ordering vitals certificates, or determining municipal boundaries). 

This pattern outlines how to arrange multi-field address input forms responsively and implement a fully accessible **standardization loop** comparing "As Entered" values against "USPS Standardized Suggestions".

---

## Interactive Demo

The following interactive form simulates an address validation workflow. Enter any details and click **"Verify Address"** to trigger a simulated geocoding API lookup and present accessible suggestions:

{% set preview %}
<style>
  /* Ensure form web components display block-level in columns to align properly */
  #addr-street,
  #addr-city,
  #addr-state,
  #addr-zip {
    display: block;
    width: 100%;
  }
</style>
<div class="address-demo-container" style="border: 1px solid var(--nys-color-base); border-radius: 8px; background-color: var(--nys-color-surface); padding: var(--nys-space-400); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  
  <form id="address-form" novalidate style="display: flex; flex-direction: column; gap: var(--nys-space-300);">
    <!-- Street Address Column Wrapper -->
    <div class="nys-grid-row nys-grid-gap-200"><div class="nys-grid-col-12"><nys-textinput id="addr-street" label="Street Address" placeholder="e.g. 52 Washington Ave" required errorMessage="Street address is required."></nys-textinput></div></div>

    <!-- City, State, ZIP Columns Wrapper (Compact inline grid to prevent paragraph injection) -->
    <div class="nys-grid-row nys-grid-gap-200"><div class="nys-grid-col-12 nys-desktop:nys-grid-col-6"><nys-textinput id="addr-city" label="City" placeholder="e.g. Albany" required errorMessage="City is required."></nys-textinput></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-3"><nys-select id="addr-state" label="State" required errorMessage="State required."><option value="NY" selected>NY</option><option value="NJ">NJ</option><option value="PA">PA</option><option value="CT">CT</option></nys-select></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-3"><nys-textinput id="addr-zip" label="ZIP Code" placeholder="e.g. 12210" required errorMessage="ZIP is required."></nys-textinput></div></div>

    <!-- Form Action Button Wrapper -->
    <div style="display: flex; gap: var(--nys-space-200); margin-top: var(--nys-space-100); border-top: 1px solid var(--nys-color-base); padding-top: var(--nys-space-300);">
      <nys-button id="btn-verify-address" label="Verify Address" variant="primary"></nys-button>
    </div>
  </form>

  <!-- Dynamic Verification/Standardization prompt (using layout cards) -->
  <div id="validation-panel" style="display: none; margin-top: var(--nys-space-400); border-top: 2px dashed var(--nys-color-base); padding-top: var(--nys-space-300);">
    <h3 id="suggestion-heading" tabindex="-1" style="font-size: 1.2rem; font-weight: bold; margin: 0 0 var(--nys-space-200) 0; color: var(--nys-color-text); outline: none;">
      Verify and Standardize Your Address
    </h3>
    <p style="font-size: 0.95rem; color: var(--nys-color-text-weak); margin-bottom: var(--nys-space-300);">
      We found a matching standardized address. Using the standardized USPS option ensures prompt delivery and accurate service routing.
    </p>

    <!-- Side-by-Side card choice container (Compact spacing block) -->
    <div class="nys-grid-row nys-grid-gap-300"><div class="nys-grid-col-12 nys-desktop:nys-grid-col-6 nys-display-flex"><button type="button" id="choice-suggested" style="width: 100%; border: 2px solid var(--nys-color-theme); background-color: var(--nys-color-theme-faint); border-radius: 6px; padding: var(--nys-space-300); text-align: left; cursor: pointer; transition: all 0.2s;"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--nys-space-100);"><strong style="color: var(--nys-color-theme); font-size: 0.95rem; letter-spacing: 0.5px; text-transform: uppercase;">USPS Recommended</strong><nys-badge label="Suggested" intent="success" size="sm"></nys-badge></div><div id="suggested-text" style="font-size: 1.05rem; font-weight: bold; color: var(--nys-color-text); line-height: 1.5; font-family: var(--nys-font-family-body);">—</div></button></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-6 nys-display-flex"><button type="button" id="choice-entered" style="width: 100%; border: 1px solid var(--nys-color-base); background-color: var(--nys-color-surface-raised); border-radius: 6px; padding: var(--nys-space-300); text-align: left; cursor: pointer; transition: all 0.2s;"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--nys-space-100);"><strong style="color: var(--nys-color-text-weak); font-size: 0.95rem; letter-spacing: 0.5px; text-transform: uppercase;">As Entered</strong><nys-badge label="Original" intent="neutral" size="sm"></nys-badge></div><div id="entered-text" style="font-size: 1.05rem; color: var(--nys-color-text-weak); line-height: 1.5; font-family: var(--nys-font-family-body);">—</div></button></div></div>
  </div>

  <!-- Screen-Reader only dynamic status announcer (WCAG AA Compliance) -->
  <div id="addr-live-announcer" role="status" aria-live="polite" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;"></div>

</div>
{% endset %}

{% set script %}
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Inputs
    const inputStreet = document.getElementById("addr-street");
    const inputCity = document.getElementById("addr-city");
    const inputState = document.getElementById("addr-state");
    const inputZip = document.getElementById("addr-zip");

    // Elements
    const form = document.getElementById("address-form");
    const btnVerify = document.getElementById("btn-verify-address");
    const valPanel = document.getElementById("validation-panel");
    const heading = document.getElementById("suggestion-heading");
    const liveAnnouncer = document.getElementById("addr-live-announcer");

    // Choices text
    const textSuggested = document.getElementById("suggested-text");
    const textEntered = document.getElementById("entered-text");

    // Option triggers
    const choiceSuggestedBtn = document.getElementById("choice-suggested");
    const choiceEnteredBtn = document.getElementById("choice-entered");

    let suggestedAddressData = {};
    let enteredAddressData = {};

    // Trigger verification geocoding loop
    btnVerify.addEventListener("click", (e) => {
      e.preventDefault();

      // Check fields validation
      let isValid = true;
      [inputStreet, inputCity, inputState, inputZip].forEach(el => {
        if (!el.value || !el.value.trim()) {
          el.showError = true;
          isValid = false;
        } else {
          el.showError = false;
        }
      });

      if (!isValid) return;

      // Simulate API loading state
      btnVerify.setAttribute("label", "Verifying Address...");
      btnVerify.setAttribute("disabled", "true");
      liveAnnouncer.textContent = "Connecting to geocoding registry...";

      setTimeout(() => {
        // Prepare original address string
        enteredAddressData = {
          street: inputStreet.value.trim(),
          city: inputCity.value.trim(),
          state: inputState.value,
          zip: inputZip.value.trim()
        };

        // Prepare standardized address string (ZIP+4 capitalization standard)
        suggestedAddressData = {
          street: inputStreet.value.trim().toUpperCase(),
          city: inputCity.value.trim().toUpperCase(),
          state: inputState.value,
          zip: inputZip.value.trim() + "-1201"
        };

        // Populate card panels
        textEntered.innerHTML = `${enteredAddressData.street}<br>${enteredAddressData.city}, ${enteredAddressData.state} ${enteredAddressData.zip}`;
        textSuggested.innerHTML = `${suggestedAddressData.street}<br>${suggestedAddressData.city}, ${suggestedAddressData.state} ${suggestedAddressData.zip}`;

        // Reset button
        btnVerify.removeAttribute("disabled");
        btnVerify.setAttribute("label", "Verify Address");

        // Display suggestions comparison block
        valPanel.style.display = "block";
        liveAnnouncer.textContent = "Address verified. Suggested matches loaded below.";

        // WCAG REQUIREMENT: Programmatic focus shift to suggestion alert header
        heading.focus();
      }, 1000);
    });

    // Handle suggested choice selection
    choiceSuggestedBtn.addEventListener("click", () => {
      inputStreet.value = suggestedAddressData.street;
      inputCity.value = suggestedAddressData.city;
      inputState.value = suggestedAddressData.state;
      inputZip.value = suggestedAddressData.zip;

      closeValidationPanel("Address successfully standardized and auto-populated.");
    });

    // Handle entered choice selection
    choiceEnteredBtn.addEventListener("click", () => {
      inputStreet.value = enteredAddressData.street;
      inputCity.value = enteredAddressData.city;
      inputState.value = enteredAddressData.state;
      inputZip.value = enteredAddressData.zip;

      closeValidationPanel("Original address successfully preserved.");
    });

    const closeValidationPanel = (message) => {
      valPanel.style.display = "none";
      liveAnnouncer.textContent = message;
      alert(message);
      
      // Shift focus back to verification button
      btnVerify.focus();
    };
  });
</script>
{% endset %}

{% set accordionLabel = "Address Form and Verification Controller Wiring" %}
{% set code %}
<!-- HTML Form Field Layout -->
<form id="address-form" novalidate>
  
  <div class="nys-grid-row nys-grid-gap-200">
    <div class="nys-grid-col-12">
      <nys-textinput id="addr-street" label="Street Address" required></nys-textinput>
    </div>
  </div>

  <!-- Note: Compact HTML tag nesting prevents Eleventy from injecting paragraph blocks -->
  <div class="nys-grid-row nys-grid-gap-200"><div class="nys-grid-col-12 nys-desktop:nys-grid-col-6"><nys-textinput id="addr-city" label="City" required></nys-textinput></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-3"><nys-select id="addr-state" label="State" required><option value="NY">NY</option></nys-select></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-3"><nys-textinput id="addr-zip" label="ZIP Code" required></nys-textinput></div></div>

  <div class="verify-bar">
    <nys-button id="btn-verify-address" label="Verify Address" variant="primary"></nys-button>
  </div>
</form>

<!-- Comparison Alert Panel (Hidden on initial load) -->
<div id="validation-panel" style="display: none;">
  <h3 id="suggestion-heading" tabindex="-1">Verify and Standardize Your Address</h3>
  
  <div class="nys-grid-row nys-grid-gap-300">
    <div class="nys-grid-col-12 nys-desktop:nys-grid-col-6">
      <button type="button" id="choice-suggested">
        <strong>USPS Recommended</strong>
        <div id="suggested-text"></div>
      </button>
    </div>
    <div class="nys-grid-col-12 nys-desktop:nys-grid-col-6">
      <button type="button" id="choice-entered">
        <strong>As Entered</strong>
        <div id="entered-text"></div>
      </button>
    </div>
  </div>
</div>

<!-- Screen Reader Polite Announcement Status Zone -->
<div id="addr-live-announcer" role="status" aria-live="polite" class="sr-only"></div>

<script>
  // JavaScript wire-up for validation and focus shifting:
  const btnVerify = document.getElementById("btn-verify-address");
  const valPanel = document.getElementById("validation-panel");
  const heading = document.getElementById("suggestion-heading");
  const liveAnnouncer = document.getElementById("addr-live-announcer");

  btnVerify.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Simulate lookup call
    btnVerify.setAttribute("disabled", "true");
    liveAnnouncer.textContent = "Verifying Address...";

    setTimeout(() => {
      // Load suggestions into comparison buttons
      loadAddressSuggestions();

      btnVerify.removeAttribute("disabled");
      valPanel.style.display = "block";
      liveAnnouncer.textContent = "Matches found. Suggestions shown below.";

      // WCAG ACCESSIBILITY REQUIREMENT: Shifting programmatic focus
      heading.focus();
    }, 1000);
  });
</script>
{% endset %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

---

## Designing Address Verification Forms

When designing address verification flows for New York State services, follow these UI conventions:

1. **Responsive Multi-Field Grids**: Address forms should map logically to standard field lines:
   * Line 1: Full-width Street Address.
   * Line 2: Multi-column grid containing City, State, and ZIP Code.
2. **Clear Recommendations**: Visually badging suggestions with clear callouts (e.g. green *"USPS Recommended"* vs. neutral *"Original Entered"*) draws immediate visual alignment, directing the resident to correct formats.
3. **Auto-capitalization standards**: USPS systems standardize addresses in full capital letters (e.g. *"52 WASHINGTON AVE, ALBANY NY"*). Visually presenting the suggestion exactly as standard helps users understand the modification.

---

## Accessibility Guidelines (WCAG 2.2 AA)

To satisfy strict WCAG accessibility compliance standards, implement the following focus and interactive patterns:

### 1. Programmatic Focus Shifting
* When validation completes asynchronously, a warning suggestions card displays on the page dynamically.
* To alert keyboard and screen-reader users immediately, apply `tabindex="-1"` and `outline: none;` to the panel heading (`<h3>`).
* In your verification JavaScript, immediately call `.focus()` on the heading.
* Screen readers will automatically vocalize the new section heading, ensuring blind users immediately understand that options are available for selection.

### 2. Auto-Tabbing is an Accessibility Violation (US-AB-01)
* **Do NOT implement auto-tabbing** on form input fields (such as automatically shifting focus to the State dropdown once a user type 5 characters into a ZIP field).
* Auto-tabbing breaks keyboard navigation control and interrupts screen-reader text entry. 
* Keyboard users must remain in total control of focus shifting via standard `Tab` and `Shift + Tab` key strokes.

### 3. Accessible Dialog Buttons
* Do not style the standardized choices as static `div` elements. Use semantic, keyboard-accessible `<button type="button">` tags.
* This ensures they are navigable via the `Tab` key and natively operable using `Enter` and `Space` key triggers.

{% endblock %}
