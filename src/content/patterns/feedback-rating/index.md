---
permalink: /patterns/feedback-rating/
title: "Customer Feedback and Rating"
description: "A comprehensive pattern guide and interactive page helpfulness widget demonstrating accessible ratings, progressive disclosure, and character counters complying with WCAG 2.2 AA standards."
---

{% block content %}

# Customer Feedback and Rating

Continuous customer feedback is essential to iterating and optimizing New York State's digital services. Collecting Customer Satisfaction (CSAT) ratings and written experiences upon transaction completion helps state agencies isolate usability hurdles and deploy data-backed enhancements.

This pattern demonstrates how to compose page-level helpfulness triggers, rating radio buttons (`<nys-radiobutton>`), and character-limited comments inputs (`<nys-textarea>`) into an accessible, progressive feedback system.

---

## Interactive Demo

The following interactive widget simulates a standard page feedback flow. Click **"No"** or **"Yes"** on the helpfulness prompt to progressively expand detailed rating and character-limited comment fields:

{% set preview %}
<style>
  /* Ensure form elements display block-level in columns to align properly */
  #feed-comments {
    display: block;
    width: 100%;
    margin-bottom: var(--nys-space-100);
  }
</style>
<div class="feedback-demo-container" style="border: 1px solid var(--nys-color-base); border-radius: 8px; background-color: var(--nys-color-surface); padding: var(--nys-space-400); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  
  <!-- Step 1: Helpfulness Prompt -->
  <div id="feed-initial-prompt" style="text-align: center; display: block;">
    <h3 style="margin: 0 0 var(--nys-space-200) 0; font-size: 1.2rem; font-weight: bold; color: var(--nys-color-text);">
      Was this page helpful?
    </h3>
    <div style="display: flex; justify-content: center; gap: var(--nys-space-200);">
      <nys-button id="btn-feed-yes" label="Yes" variant="secondary" size="md" style="min-width: 100px;"></nys-button>
      <nys-button id="btn-feed-no" label="No" variant="secondary" size="md" style="min-width: 100px;"></nys-button>
    </div>
  </div>

  <!-- Step 2: Progressive Detailed Form Container (Hidden initially) -->
  <form id="feed-detailed-form" novalidate style="display: none; flex-direction: column; gap: var(--nys-space-300);">
    <h3 id="form-heading" tabindex="-1" style="font-size: 1.25rem; font-weight: bold; margin: 0; color: var(--nys-color-text); outline: none;">
      Tell us more about your experience
    </h3>
    <p style="font-size: 0.95rem; color: var(--nys-color-text-weak); margin: 0;">Your feedback helps us continuously improve the New York State Design System.</p>

    <!-- 1-5 Radio CSAT Scale (Compact spacing block) -->
    <div style="border-top: 1px solid var(--nys-color-base); border-bottom: 1px solid var(--nys-color-base); padding: var(--nys-space-200) 0;">
      <span style="font-weight: bold; font-size: 0.95rem; display: block; margin-bottom: var(--nys-space-150); color: var(--nys-color-text);">
        How would you rate your overall experience? (1 = Poor, 5 = Excellent)
      </span>
      <div style="display: flex; gap: var(--nys-space-300); flex-wrap: wrap;">
        <nys-radiobutton name="csat-rating" value="1" label="1"></nys-radiobutton>
        <nys-radiobutton name="csat-rating" value="2" label="2"></nys-radiobutton>
        <nys-radiobutton name="csat-rating" value="3" label="3" checked></nys-radiobutton>
        <nys-radiobutton name="csat-rating" value="4" label="4"></nys-radiobutton>
        <nys-radiobutton name="csat-rating" value="5" label="5"></nys-radiobutton>
      </div>
    </div>

    <!-- Character limited Textarea with Count indicator -->
    <div>
      <nys-textarea 
        id="feed-comments" 
        label="Comments or suggestions" 
        placeholder="Please enter details here (maximum 200 characters)..."
      ></nys-textarea>
      
      <!-- Visual Counter aligned to the right (Polite announcement trigger) -->
      <div style="display: flex; justify-content: flex-end; padding-right: 4px;">
        <span 
          id="feed-counter" 
          style="font-size: 0.85rem; font-weight: bold; color: var(--nys-color-text-weak);"
          aria-live="polite"
        >
          200 characters remaining
        </span>
      </div>
    </div>

    <!-- Form Submit / Cancel Actions -->
    <div style="display: flex; gap: var(--nys-space-200); border-top: 1px solid var(--nys-color-base); padding-top: var(--nys-space-300); margin-top: var(--nys-space-100);">
      <nys-button id="btn-feed-submit" label="Submit Feedback" variant="primary"></nys-button>
      <nys-button id="btn-feed-cancel" label="Cancel" variant="secondary"></nys-button>
    </div>
  </form>

  <!-- Step 3: Success Notification Card (Hidden initially) -->
  <div id="feed-success-panel" style="display: none; text-align: center; padding: var(--nys-space-300) 0;">
    <nys-icon name="check" size="lg" style="color: var(--nys-color-success); margin-bottom: var(--nys-space-150);"></nys-icon>
    <h3 id="success-heading" tabindex="-1" style="font-size: 1.3rem; font-weight: bold; margin: 0 0 var(--nys-space-100) 0; color: var(--nys-color-text); outline: none;">
      Thank you for your feedback!
    </h3>
    <p style="font-size: 0.95rem; color: var(--nys-color-text-weak); margin: 0 0 var(--nys-space-300) 0;">
      Your suggestions have been submitted successfully. We appreciate your partnership in improving public digital services.
    </p>
    <nys-button id="btn-feed-reset" label="Reset Widget" variant="secondary" size="sm"></nys-button>
  </div>

  <!-- Hidden Status Announcer for screen-readers (WCAG AA Compliance) -->
  <div id="feed-live-announcer" role="status" aria-live="polite" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;"></div>

</div>
{% endset %}

{% set script %}
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Buttons
    const btnYes = document.getElementById("btn-feed-yes");
    const btnNo = document.getElementById("btn-feed-no");
    const btnSubmit = document.getElementById("btn-feed-submit");
    const btnCancel = document.getElementById("btn-feed-cancel");
    const btnReset = document.getElementById("btn-feed-reset");

    // Form containers
    const initialPrompt = document.getElementById("feed-initial-prompt");
    const detailedForm = document.getElementById("feed-detailed-form");
    const successPanel = document.getElementById("feed-success-panel");

    // Inputs
    const textComments = document.getElementById("feed-comments");
    const counterLabel = document.getElementById("feed-counter");
    const formHeading = document.getElementById("form-heading");
    const successHeading = document.getElementById("success-heading");
    const liveAnnouncer = document.getElementById("feed-live-announcer");

    const MAX_CHAR_LIMIT = 200;

    // Helper to vocalize statuses politely
    const announceStatus = (message) => {
      liveAnnouncer.textContent = "";
      setTimeout(() => {
        liveAnnouncer.textContent = message;
      }, 50);
    };

    // Progressive disclosure handlers
    const openForm = (choice) => {
      initialPrompt.style.display = "none";
      detailedForm.style.display = "flex";
      
      announceStatus(`Expanded feedback details form. Choice: ${choice}.`);

      // WCAG REQUIREMENT: Shift focus to form heading
      setTimeout(() => {
        formHeading.focus();
      }, 100);
    };

    btnYes.addEventListener("click", () => openForm("Yes"));
    btnNo.addEventListener("click", () => openForm("No"));

    // Cancel and Reset handlers
    btnCancel.addEventListener("click", () => {
      resetWidget();
    });

    btnReset.addEventListener("click", () => {
      resetWidget();
    });

    const resetWidget = () => {
      detailedForm.style.display = "none";
      successPanel.style.display = "none";
      initialPrompt.style.display = "block";
      
      textComments.value = "";
      counterLabel.textContent = `${MAX_CHAR_LIMIT} characters remaining`;
      counterLabel.style.color = "var(--nys-color-text-weak)";

      announceStatus("Feedback widget reset.");
    };

    // Real-time character count calculator
    textComments.addEventListener("input", () => {
      const length = textComments.value.length;
      const remaining = MAX_CHAR_LIMIT - length;

      counterLabel.textContent = `${remaining} character${remaining === 1 ? '' : 's'} remaining`;

      // Visual warning colors as limit draws near
      if (remaining <= 0) {
        counterLabel.style.color = "var(--nys-color-danger)";
        // Truncate values exceeding hard limit
        textComments.value = textComments.value.substr(0, MAX_CHAR_LIMIT);
      } else if (remaining <= 20) {
        counterLabel.style.color = "var(--nys-color-danger-strong)";
      } else if (remaining <= 50) {
        counterLabel.style.color = "var(--nys-color-accent)";
      } else {
        counterLabel.style.color = "var(--nys-color-text-weak)";
      }

      // WCAG Compliance: Periodically announce counts to screen readers
      // (Avoiding announcing on every keystroke as it destroys focus)
      if (remaining === 100 || remaining === 50 || remaining === 20 || remaining === 10 || remaining === 0) {
        announceStatus(`${remaining} characters remaining.`);
      }
    });

    // Form Submission
    btnSubmit.addEventListener("click", (e) => {
      e.preventDefault();

      detailedForm.style.display = "none";
      successPanel.style.display = "block";
      announceStatus("Thank you for your feedback! Submission complete.");

      // WCAG REQUIREMENT: Shift programmatic focus onto success confirmation card
      setTimeout(() => {
        successHeading.focus();
      }, 100);
    });
  });
</script>
{% endset %}

{% set accordionLabel = "CSAT Feedback Form Markup and Validation Wiring" %}
{% set code %}
<!-- HTML Feedback Prompt & Expanding Form Markup -->
<div id="feed-initial-prompt">
  <h3>Was this page helpful?</h3>
  <nys-button id="btn-feed-yes" label="Yes" variant="secondary"></nys-button>
  <nys-button id="btn-feed-no" label="No" variant="secondary"></nys-button>
</div>

<form id="feed-detailed-form" style="display: none;">
  <h3 id="form-heading" tabindex="-1">Tell us more about your experience</h3>
  
  <div class="rating-group">
    <span>Overall Experience Rating (1-5)</span>
    <div class="radio-row">
      <nys-radiobutton name="csat-rating" value="1" label="1"></nys-radiobutton>
      <nys-radiobutton name="csat-rating" value="2" label="2"></nys-radiobutton>
      <nys-radiobutton name="csat-rating" value="3" label="3" checked></nys-radiobutton>
      <nys-radiobutton name="csat-rating" value="4" label="4"></nys-radiobutton>
      <nys-radiobutton name="csat-rating" value="5" label="5"></nys-radiobutton>
    </div>
  </div>

  <nys-textarea id="feed-comments" label="Comments" placeholder="Enter comments here..."></nys-textarea>
  <span id="feed-counter" aria-live="polite">200 characters remaining</span>

  <div class="btn-row">
    <nys-button id="btn-feed-submit" label="Submit Feedback" variant="primary"></nys-button>
    <nys-button id="btn-feed-cancel" label="Cancel" variant="secondary"></nys-button>
  </div>
</form>

<div id="feed-success-panel" style="display: none;">
  <h3 id="success-heading" tabindex="-1">Thank you for your feedback!</h3>
  <p>Your suggestions have been submitted successfully.</p>
</div>

<!-- Screen Reader Status Announcement Zone -->
<div id="feed-live-announcer" role="status" aria-live="polite" class="sr-only"></div>

<script>
  // Dynamic JavaScript wiring:
  const textComments = document.getElementById("feed-comments");
  const counterLabel = document.getElementById("feed-counter");
  const liveAnnouncer = document.getElementById("feed-live-announcer");
  const MAX_LIMIT = 200;

  textComments.addEventListener("input", () => {
    const remaining = MAX_LIMIT - textComments.value.length;
    counterLabel.textContent = `${remaining} characters remaining`;

    // WCAG COMPLIANCE: Announce limits periodically instead of every character
    if (remaining === 100 || remaining === 50 || remaining === 10 || remaining === 0) {
      liveAnnouncer.textContent = `${remaining} characters remaining.`;
    }
  });

  function showSuccess() {
    document.getElementById("feed-detailed-form").style.display = "none";
    document.getElementById("feed-success-panel").style.display = "block";
    
    // WCAG ACCESSIBILITY: Keep context aligned by shifting programmatic focus
    document.getElementById("success-heading").focus();
  }
</script>
{% endset %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

---

## Designing Feedback Forms

Capturing high-fidelity CSAT ratings represents a vital portal evaluation vector. Apply these standard visual conventions:

1. **Progressive Disclosure**: Keep page footers clean and non-distracting by presenting a simple helpfulness question initially. Only expand more complex detailed forms (ratings, textareas) once the user has initiated the interaction.
2. **Dynamic Limit Feedback**: Always display real-time remaining characters under long-text fields. Use visual warning colors (like gold for near-limit, and red for over-limit) to warn users as they approach hard constraints.
3. **Graceful Submissions**: Display an explicit success state in place of the form upon submission. Re-rendering a blank form confuses users, leading to repeated submissions.

---

## Accessibility Guidelines (WCAG 2.2 AA)

To satisfy strict WCAG accessibility compliance standards, implement the following focus and interactive patterns:

### 1. Polite Character Count Announcements
* Mark the character remaining counter element with `aria-live="polite"`.
* **Important**: Do not configure your live announcer to speak on *every* single typed keystroke. Doing so floods the audio feed, blocking the screen-reader from speaking characters as the user is actively typing.
* Programmatically vocalize the counts only at strategic thresholds (e.g. at 100, 50, 10, and 0 characters remaining) to provide structured guidance without disrupting keyboard focus.

### 2. Tab-navigable Radio Buttons
* Group the 1-to-5 CSAT rating radio inputs under a single, named group name wrapper.
* Native radio behaviors allow keyboard users to tab onto the active radio item, and use the standard `Arrow Keys` to toggle selections seamlessly.

### 3. Progressive Focus Management
* When a user progressively opens the detailed form (by clicking "Yes" or "No"), or submits their entry:
  * Apply `tabindex="-1"` and `outline: none;` to the target headings (`<h3>`).
  * Immediately call `.focus()` on the heading inside your script.
  * This shifts the screen-reader virtual cursor into the newly rendered panel, keeping focus from getting lost on invisible elements.

{% endblock %}
