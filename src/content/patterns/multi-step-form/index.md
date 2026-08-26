---
permalink: /patterns/multi-step-form/
title: "Multi-Step Form"
description: "A comprehensive guide and interactive showcase for implementing multi-step form (wizard) flows using NYSDS web components, styled and tested for WCAG 2.2 AA compliance."
---

{% block content %}

# Multi-Step Form (Stepper)

A **Multi-Step Form** (also known as a Wizard) breaks a complex or long form into smaller, logical steps. This pattern reduces cognitive load, keeps users focused, and guides them through long processes—such as DMV transaction forms, benefits applications, and permit registrations—without overwhelming them.

This pattern demonstrates how to compose NYSDS form components with the `<nys-stepper>` component to build a seamless, fully accessible single-page application form.

---

## Interactive Demo

The following interactive demo showcases a three-step application process with inline validation and accessibility focus management:

{% set preview %}
<div class="stepper-demo-container" style="border: 1px solid var(--nys-color-base); border-radius: 8px; background-color: var(--nys-color-surface); padding: var(--nys-space-400); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  <div class="nys-grid-row nys-grid-gap-300 nys-desktop:nys-flex-no-wrap">
    <!-- Stepper Navigation (Left Sidebar on Desktop) -->
    <nys-stepper label="Application Steps" id="demo-stepper" class="nys-grid-col-12 nys-desktop:nys-grid-col-4">
      <nys-step label="Personal Details" id="step-nav-1" current selected></nys-step>
      <nys-step label="Organization Details" id="step-nav-2"></nys-step>
      <nys-step label="Review & Submit" id="step-nav-3"></nys-step>
    </nys-stepper>

    <!-- Active Form Panel (Right Column on Desktop) -->
    <div class="nys-grid-col-12 nys-desktop:nys-grid-col-8">
      <form id="multi-step-form" novalidate style="display: flex; flex-direction: column; gap: var(--nys-space-300);">
        <!-- Step 1 Panel: Personal Details -->
        <div id="panel-step-1" class="step-panel" role="tabpanel" aria-labelledby="step-nav-1" tabindex="-1">
          <h3 class="panel-heading" id="heading-step-1" tabindex="-1" style="font-size: 1.5rem; margin-top: 0; margin-bottom: var(--nys-space-200); color: var(--nys-color-text); outline: none;">
            Step 1: Personal Details
          </h3>
          <p style="color: var(--nys-color-text-weak); margin-bottom: var(--nys-space-300);">Please enter your name and email address to begin the application.</p>
          
          <div style="display: flex; flex-direction: column; gap: var(--nys-space-300);">
            <nys-textinput 
              label="Full Name" 
              placeholder="Jane Doe" 
              required 
              id="input-name" 
              errorMessage="Full Name is required and cannot be left blank."
            ></nys-textinput>

            <nys-textinput 
              label="Email Address" 
              type="email" 
              placeholder="jane.doe@ny.gov" 
              required 
              id="input-email" 
              errorMessage="Please enter a valid email address."
            ></nys-textinput>
          </div>
        </div>

        <!-- Step 2 Panel: Organization Details -->
        <div id="panel-step-2" class="step-panel" role="tabpanel" aria-labelledby="step-nav-2" tabindex="-1" style="display: none;">
          <h3 class="panel-heading" id="heading-step-2" tabindex="-1" style="font-size: 1.5rem; margin-top: 0; margin-bottom: var(--nys-space-200); color: var(--nys-color-text); outline: none;">
            Step 2: Organization Details
          </h3>
          <p style="color: var(--nys-color-text-weak); margin-bottom: var(--nys-space-300);">Tell us about your organization or agency affiliation.</p>
          
          <div style="display: flex; flex-direction: column; gap: var(--nys-space-300);">
            <nys-textinput 
              label="Organization Name" 
              placeholder="NYS Department of State" 
              required 
              id="input-org-name" 
              errorMessage="Organization Name is required."
            ></nys-textinput>

            <nys-select 
              label="Organization Type" 
              required 
              id="input-org-type" 
              errorMessage="Please select an organization type."
            >
              <option value="" disabled selected>Select an option...</option>
              <option value="state">NYS State Agency</option>
              <option value="local">Local Government / Municipality</option>
              <option value="nonprofit">Non-Profit Organization</option>
              <option value="private">Private Sector / Vendor</option>
            </nys-select>
          </div>
        </div>

        <!-- Step 3 Panel: Review & Submit -->
        <div id="panel-step-3" class="step-panel" role="tabpanel" aria-labelledby="step-nav-3" tabindex="-1" style="display: none;">
          <h3 class="panel-heading" id="heading-step-3" tabindex="-1" style="font-size: 1.5rem; margin-top: 0; margin-bottom: var(--nys-space-200); color: var(--nys-color-text); outline: none;">
            Step 3: Review & Submit
          </h3>
          <p style="color: var(--nys-color-text-weak); margin-bottom: var(--nys-space-300);">Confirm your details and accept the terms to complete your application.</p>
          
          <div style="background-color: var(--nys-color-theme-faint); border-left: 4px solid var(--nys-color-theme); padding: var(--nys-space-300); border-radius: 4px; margin-bottom: var(--nys-space-300); display: flex; flex-direction: column; gap: var(--nys-space-150);">
            <h4 style="margin: 0; font-size: 1.1rem; color: var(--nys-color-text);">Summary of Details</h4>
            <div style="font-size: 0.95rem; color: var(--nys-color-text); display: grid; grid-template-columns: 140px 1fr; gap: var(--nys-space-100);">
              <strong>Full Name:</strong> <span id="summary-name">—</span>
              <strong>Email Address:</strong> <span id="summary-email">—</span>
              <strong>Organization:</strong> <span id="summary-org-name">—</span>
              <strong>Type:</strong> <span id="summary-org-type">—</span>
            </div>
          </div>

          <nys-toggle 
            label="I agree to the Terms of Service and Privacy Policy" 
            required 
            id="input-agree" 
            errorMessage="You must agree to the terms to proceed."
          ></nys-toggle>
        </div>

        <!-- Navigation Buttons -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--nys-color-base); padding-top: var(--nys-space-300); margin-top: var(--nys-space-200);">
          <nys-button label="Previous" variant="secondary" id="btn-prev" style="visibility: hidden;"></nys-button>
          <nys-button label="Next" variant="primary" id="btn-next"></nys-button>
          <nys-button label="Submit Application" variant="primary" id="btn-submit" style="display: none;"></nys-button>
        </div>
      </form>
    </div>
  </div>
</div>
{% endset %}

{% set script %}
<script>
  document.addEventListener("DOMContentLoaded", () => {
    let currentStepIndex = 1;
    const totalSteps = 3;

    // Elements
    const stepper = document.getElementById("demo-stepper");
    const form = document.getElementById("multi-step-form");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const btnSubmit = document.getElementById("btn-submit");

    // Inputs
    const inputName = document.getElementById("input-name");
    const inputEmail = document.getElementById("input-email");
    const inputOrgName = document.getElementById("input-org-name");
    const inputOrgType = document.getElementById("input-org-type");
    const inputAgree = document.getElementById("input-agree");

    // Summary Elements
    const summaryName = document.getElementById("summary-name");
    const summaryEmail = document.getElementById("summary-email");
    const summaryOrgName = document.getElementById("summary-org-name");
    const summaryOrgType = document.getElementById("summary-org-type");

    // Navigation and Step Panel Updates
    const goToStep = (stepIndex) => {
      // Hide all panels
      for (let i = 1; i <= totalSteps; i++) {
        document.getElementById(`panel-step-${i}`).style.display = "none";
        
        // Update nav step attributes
        const stepNav = document.getElementById(`step-nav-${i}`);
        if (i < stepIndex) {
          stepNav.removeAttribute("current");
          stepNav.setAttribute("completed", "");
          stepNav.removeAttribute("selected");
        } else if (i === stepIndex) {
          stepNav.setAttribute("current", "");
          stepNav.removeAttribute("completed");
          stepNav.setAttribute("selected", "");
        } else {
          stepNav.removeAttribute("current");
          stepNav.removeAttribute("completed");
          stepNav.removeAttribute("selected");
        }
      }

      // Show requested panel
      const targetPanel = document.getElementById(`panel-step-${stepIndex}`);
      targetPanel.style.display = "block";

      // Focus management for WCAG AA compliance
      const targetHeading = document.getElementById(`heading-step-${stepIndex}`);
      if (targetHeading) {
        targetHeading.focus();
      }

      // Button states
      btnPrev.style.visibility = stepIndex === 1 ? "hidden" : "visible";
      if (stepIndex === totalSteps) {
        btnNext.style.display = "none";
        btnSubmit.style.display = "block";
        populateSummary();
      } else {
        btnNext.style.display = "block";
        btnSubmit.style.display = "none";
      }

      currentStepIndex = stepIndex;
    };

    // Populate review summary values
    const populateSummary = () => {
      summaryName.textContent = inputName.value || "Not provided";
      summaryEmail.textContent = inputEmail.value || "Not provided";
      summaryOrgName.textContent = inputOrgName.value || "Not provided";
      
      const typeOption = inputOrgType.querySelector(`option[value="${inputOrgType.value}"]`);
      summaryOrgType.textContent = typeOption ? typeOption.textContent : "Not selected";
    };

    // Validate a specific step
    const validateStep = (stepIndex) => {
      let isValid = true;

      if (stepIndex === 1) {
        // Validate name
        if (!inputName.value.trim()) {
          inputName.showError = true;
          isValid = false;
        } else {
          inputName.showError = false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!inputEmail.value.trim() || !emailPattern.test(inputEmail.value)) {
          inputEmail.showError = true;
          isValid = false;
        } else {
          inputEmail.showError = false;
        }
      } else if (stepIndex === 2) {
        // Validate org name
        if (!inputOrgName.value.trim()) {
          inputOrgName.showError = true;
          isValid = false;
        } else {
          inputOrgName.showError = false;
        }

        // Validate org type
        if (!inputOrgType.value) {
          inputOrgType.showError = true;
          isValid = false;
        } else {
          inputOrgType.showError = false;
        }
      } else if (stepIndex === 3) {
        // Validate checkbox/toggle agreement
        if (!inputAgree.checked) {
          inputAgree.showError = true;
          isValid = false;
        } else {
          inputAgree.showError = false;
        }
      }

      return isValid;
    };

    // Navigation button handlers
    btnNext.addEventListener("click", (e) => {
      e.preventDefault();
      if (validateStep(currentStepIndex)) {
        goToStep(currentStepIndex + 1);
      }
    });

    btnPrev.addEventListener("click", (e) => {
      e.preventDefault();
      goToStep(currentStepIndex - 1);
    });

    // Form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateStep(3)) {
        alert("Success! The form submitted successfully.");
        // Reset form and go back to step 1
        form.reset();
        inputAgree.checked = false;
        inputAgree.showError = false;
        goToStep(1);
      }
    });

    // Support clicking stepper steps if they are completed
    stepper.addEventListener("click", (e) => {
      const stepEl = e.target.closest("nys-step");
      if (!stepEl) return;

      const steps = Array.from(stepper.querySelectorAll("nys-step"));
      const clickedIndex = steps.indexOf(stepEl) + 1;

      // Only allow navigating to previous completed steps or the current step
      if (clickedIndex < currentStepIndex || validateStep(currentStepIndex)) {
        goToStep(clickedIndex);
      }
    });
  });
</script>
{% endset %}

{% set accordionLabel = "Multi-Step Form HTML & JavaScript" %}
{% set code %}
<!-- HTML Markup -->
<div class="nys-grid-row nys-grid-gap-300 nys-desktop:nys-flex-no-wrap">
  <nys-stepper label="Application Steps" id="demo-stepper" class="nys-grid-col-12 nys-desktop:nys-grid-col-4">
    <nys-step label="Personal Details" id="step-nav-1" current selected></nys-step>
    <nys-step label="Organization Details" id="step-nav-2"></nys-step>
    <nys-step label="Review & Submit" id="step-nav-3"></nys-step>
  </nys-stepper>

  <div class="nys-grid-col-12 nys-desktop:nys-grid-col-8">
    <form id="multi-step-form" novalidate>
      
      <!-- Step 1 -->
      <div id="panel-step-1" class="step-panel" role="tabpanel" aria-labelledby="step-nav-1" tabindex="-1">
        <h3 id="heading-step-1" tabindex="-1">Step 1: Personal Details</h3>
        <nys-textinput label="Full Name" required id="input-name" errorMessage="Full Name is required."></nys-textinput>
        <nys-textinput label="Email Address" type="email" required id="input-email" errorMessage="Valid email required."></nys-textinput>
      </div>

      <!-- Step 2 -->
      <div id="panel-step-2" class="step-panel" role="tabpanel" aria-labelledby="step-nav-2" tabindex="-1" style="display: none;">
        <h3 id="heading-step-2" tabindex="-1">Step 2: Organization Details</h3>
        <nys-textinput label="Organization Name" required id="input-org-name" errorMessage="Org Name is required."></nys-textinput>
        <nys-select label="Organization Type" required id="input-org-type" errorMessage="Please select an option.">
          <option value="" disabled selected>Select an option...</option>
          <option value="state">NYS State Agency</option>
          <option value="local">Local Government</option>
        </nys-select>
      </div>

      <!-- Step 3 -->
      <div id="panel-step-3" class="step-panel" role="tabpanel" aria-labelledby="step-nav-3" tabindex="-1" style="display: none;">
        <h3 id="heading-step-3" tabindex="-1">Step 3: Review & Submit</h3>
        <div class="summary-container">
          <p><strong>Full Name:</strong> <span id="summary-name"></span></p>
        </div>
        <nys-toggle label="I agree to the Terms of Service" required id="input-agree" errorMessage="Required."></nys-toggle>
      </div>

      <!-- Navigation -->
      <div class="nav-buttons">
        <nys-button label="Previous" variant="secondary" id="btn-prev" style="visibility: hidden;"></nys-button>
        <nys-button label="Next" variant="primary" id="btn-next"></nys-button>
        <nys-button label="Submit Application" variant="primary" id="btn-submit" style="display: none;"></nys-button>
      </div>

    </form>
  </div>
</div>

<script>
  // JavaScript wiring for dynamic switching, step validation, and WCAG AA focus management:
  let currentStepIndex = 1;
  const totalSteps = 3;

  function goToStep(stepIndex) {
    // Hide panels and update stepper nav attributes
    for (let i = 1; i <= totalSteps; i++) {
      document.getElementById(`panel-step-${i}`).style.display = "none";
      const stepNav = document.getElementById(`step-nav-${i}`);
      if (i < stepIndex) {
        stepNav.removeAttribute("current");
        stepNav.setAttribute("completed", "");
      } else if (i === stepIndex) {
        stepNav.setAttribute("current", "");
        stepNav.removeAttribute("completed");
        stepNav.setAttribute("selected", "");
      } else {
        stepNav.removeAttribute("current");
        stepNav.removeAttribute("completed");
      }
    }

    // Show active step panel
    document.getElementById(`panel-step-${stepIndex}`).style.display = "block";

    // WCAG FOCUS MANAGEMENT: Focus active section header programmatically
    document.getElementById(`heading-step-${stepIndex}`).focus();

    // Toggle nav buttons
    document.getElementById("btn-prev").style.visibility = stepIndex === 1 ? "hidden" : "visible";
    if (stepIndex === totalSteps) {
      document.getElementById("btn-next").style.display = "none";
      document.getElementById("btn-submit").style.display = "block";
    } else {
      document.getElementById("btn-next").style.display = "block";
      document.getElementById("btn-submit").style.display = "none";
    }
    currentStepIndex = stepIndex;
  }
</script>
{% endset %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

---

## Designing Multi-Step Forms

When crafting multi-step form journeys in New York State digital services, adhere to these key UX conventions:

1. **Logical Step Progression**: Organize fields chronologically or by topical categories. Group related inputs together under single steps.
2. **Clear Progress Indicators**: Keep the `<nys-stepper>` visible on the viewport (ideally as a sticky sidebar or pinned top bar) so the user always has a clear outline of where they are and how many steps remain.
3. **Save and Resume**: For very long forms (more than 4 steps), always give the user the ability to save their current draft progress and return to it later.
4. **Summary / Review Page**: Always provide a review summary step immediately before form submission. This allows users to inspect all values they've filled out, preventing errors.

---

## Accessibility Guidelines (WCAG 2.2 AA)

To satisfy strict WCAG accessibility compliance standards, implement the following focus and interactive patterns:

### 1. Focus Management on Step Switch
When a user transitions to a new step (by clicking "Next", "Previous", or selecting a completed step), their keyboard and screen reader focus must be updated programmatically:
* Add `tabindex="-1"` and `outline: none;` to the heading (`h3` or `h2`) of each form panel.
* Call `.focus()` on the heading in your step-transition JavaScript.
* This alerts assistive technologies that the content block has swapped, and screen readers will automatically read the heading to announce the new step name.

### 2. Live Announcement (ARIA Live)
Optionally, wrap the active container or steps in a container with `aria-live="polite"` or `role="status"` to announce step progression: *"Step 2 of 3: Organization Details loaded."*

### 3. Progressive Validation
* Do **not** allow users to navigate to step `N + 1` if the current step contains invalid inputs.
* Toggle the `showError = true` property on individual invalid components to draw semantic focus and display error messages.
* Allow users to navigate back to completed steps freely without running validation constraints.

### 4. Keyboard Support
* Ensure all elements inside the wizard are reachable by normal keyboard navigation (`Tab` and `Shift + Tab`).
* Interactive triggers (such as stepper items or custom buttons) must respond correctly to the `Enter` and `Space` keys.

{% endblock %}
