---
permalink: /foundations/forms/
title: Form Patterns
navTitle: "Forms"
description: Cross-cutting patterns for building forms with NYSDS web components, including form association, validation, event handling, and submission.
layout: layouts/3-col.njk
section: Foundations
---

{% block content %}

# Form Patterns

NYSDS form components -- [`<nys-textinput>`](/components/textinput/), [`<nys-textarea>`](/components/textarea/), [`<nys-select>`](/components/select/), [`<nys-checkbox>`](/components/checkbox/), [`<nys-radiobutton>`](/components/radiobutton/), [`<nys-datepicker>`](/components/datepicker/), [`<nys-toggle>`](/components/toggle/), and [`<nys-fileinput>`](/components/fileinput/) -- are built to work with native HTML `<form>` elements. They participate in form submission, respond to form resets, and support constraint validation, all without requiring extra JavaScript wiring.

This page covers the cross-cutting patterns that apply across all form components. For individual component props, events, and options, see each [component's documentation](/components/).

<section id="elementinternals">

## Form Association with ElementInternals

Every NYSDS form component is a **form-associated custom element**. This means each component uses the browser's [ElementInternals API](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) to register itself with a parent `<form>`, just like a native `<input>` or `<select>` would.

In practice, this means:

- **NYSDS components appear in `form.elements`.** When you place a `<nys-textinput>` inside a `<form>`, the form knows about it. You can access it through `form.elements` by its `name` attribute.
- **Values are included in form submission.** When the form is submitted, each component's current value is included in the `FormData` object, keyed by the component's `name` attribute.
- **Form resets clear component state.** Calling `form.reset()` or clicking a `<nys-button type="reset">` triggers each component's `formResetCallback`, which clears values, removes error messages, and resets validation state.
- **Constraint validation works natively.** Setting `required` on a component and then calling `form.requestSubmit()` triggers the browser's built-in validation. Invalid components receive focus and display error messages automatically.

### How it works under the hood

Each NYSDS form component declares `static formAssociated = true` and calls `this.attachInternals()` in its constructor. The resulting `ElementInternals` object provides methods like `setFormValue()` to push the component's value into the form, and `setValidity()` to report validation state to the browser.

You do not need to interact with `ElementInternals` directly. The components handle this internally. What matters to you is that NYSDS components behave like native form controls.

### The `name` attribute

For a component's value to appear in form data, it must have a `name` attribute. This is the key under which the value is submitted.

{% set preview %}
<nys-textinput name="applicant_name" label="Full Name" required></nys-textinput>
{% endset %}
{% set code %}<!-- This textinput's value will be submitted as "applicant_name" -->
<nys-textinput name="applicant_name" label="Full Name" required></nys-textinput>{% endset %}
{% set backgroundSolid = true %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set preview = "" %}{% set code = "" %}{% set backgroundSolid = false %}

Without a `name`, the component still participates in validation but its value is not included in the submitted `FormData`.

### The `form` attribute

Every NYSDS form component supports a `form` property that associates the component with a `<form>` element elsewhere in the DOM. This mirrors the behavior of the native HTML `form` attribute on `<input>`.

Use this when a form component needs to live outside the `<form>` tag but still submit with that form:

{% set code %}<form id="benefits-application">
  <nys-textinput name="full_name" label="Full Name" required></nys-textinput>
  <nys-button type="submit" label="Submit Application"></nys-button>
</form>

<!-- This select lives outside the form but submits with it -->
<nys-select name="county" label="County of Residence" form="benefits-application" required>
  <option value="albany">Albany</option>
  <option value="erie">Erie</option>
  <option value="kings">Kings (Brooklyn)</option>
  <option value="new-york">New York (Manhattan)</option>
  <option value="suffolk">Suffolk</option>
</nys-select>{% endset %}
{% set backgroundSolid = true %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set backgroundSolid = false %}

</section>

<section id="form-layout">

## Form Layout

Structure forms using the NYSDS grid system. Place each form field on its own line for single-column forms, or use the grid for multi-column layouts on wider screens.

### Single-column form (recommended for most cases)

Single-column layouts are easier to scan, reduce cognitive load, and perform better on mobile devices. Use them for most government forms.

{% set preview %}
<form id="voter-registration">
  <nys-textinput name="first_name" label="First Name" required width="lg"></nys-textinput>
  <nys-textinput name="last_name" label="Last Name" required width="lg"></nys-textinput>
  <nys-textinput name="dob" label="Date of Birth" required width="md" description="MM/DD/YYYY"></nys-textinput>
  <nys-select name="county" label="County of Residence" required width="lg">
    <option value="albany">Albany</option>
    <option value="erie">Erie</option>
    <option value="monroe">Monroe</option>
    <option value="onondaga">Onondaga</option>
  </nys-select>
  <nys-button type="submit" label="Register"></nys-button>
</form>
{% endset %}
{% set code %}<form id="voter-registration">
  <nys-textinput name="first_name" label="First Name" required width="lg"></nys-textinput>
  <nys-textinput name="last_name" label="Last Name" required width="lg"></nys-textinput>
  <nys-textinput name="dob" label="Date of Birth" required width="md" description="MM/DD/YYYY"></nys-textinput>
  <nys-select name="county" label="County of Residence" required width="lg">
    <option value="albany">Albany</option>
    <option value="erie">Erie</option>
    <option value="monroe">Monroe</option>
    <option value="onondaga">Onondaga</option>
  </nys-select>
  <nys-button type="submit" label="Register"></nys-button>
</form>{% endset %}
{% set backgroundSolid = true %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set preview = "" %}{% set code = "" %}{% set backgroundSolid = false %}

### Multi-column form

When placing fields side by side makes semantic sense (like first name and last name), use the [grid utilities](/foundations/utilities/grid/):

{% set preview %}
<form id="dmv-contact">
  <div class="nys-grid-row nys-grid-gap">
    <div class="nys-tablet:nys-grid-col-6">
      <nys-textinput name="first_name" label="First Name" required></nys-textinput>
    </div>
    <div class="nys-tablet:nys-grid-col-6">
      <nys-textinput name="last_name" label="Last Name" required></nys-textinput>
    </div>
  </div>
  <nys-textinput name="email" label="Email Address" type="email" required></nys-textinput>
  <nys-textarea name="message" label="How can we help?" required></nys-textarea>
  <nys-button type="submit" label="Submit"></nys-button>
</form>
{% endset %}
{% set code %}<form id="dmv-contact">
  <div class="nys-grid-row nys-grid-gap">
    <div class="nys-tablet:nys-grid-col-6">
      <nys-textinput name="first_name" label="First Name" required></nys-textinput>
    </div>
    <div class="nys-tablet:nys-grid-col-6">
      <nys-textinput name="last_name" label="Last Name" required></nys-textinput>
    </div>
  </div>
  <nys-textinput name="email" label="Email Address" type="email" required></nys-textinput>
  <nys-textarea name="message" label="How can we help?" required></nys-textarea>
  <nys-button type="submit" label="Submit"></nys-button>
</form>{% endset %}
{% set backgroundSolid = true %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set preview = "" %}{% set code = "" %}{% set backgroundSolid = false %}

### Layout guidance

- Use the `width` property on form components (`sm`, `md`, `lg`, `full`) to match field width to expected input length. A zip code field should be `sm`. A full name should be `lg` or `full`.
- Stack fields vertically by default. Side-by-side layouts should be reserved for closely related fields (first/last name, city/state/zip).
- Place the submit button at the bottom-left of the form, aligned with the form fields.
- Group related fields with headings. For multi-step forms, consider the [`<nys-stepper>`](/components/stepper/) component.

</section>

<section id="validation">

## Validation

NYSDS form components validate using a combination of native HTML constraint validation and the `ElementInternals` API. Validation is integrated into the component lifecycle -- you do not need to write custom validation logic for standard cases.

### Built-in validation

Each component supports the standard HTML validation attributes appropriate to its type:

| Attribute | Supported by | What it checks |
|-----------|-------------|----------------|
| `required` | All form components | Value is not empty |
| `pattern` | `<nys-textinput>` | Value matches a regex pattern |
| `type` (email, url, tel) | `<nys-textinput>` | Value matches the expected format |
| `min` / `max` | `<nys-textinput type="number">` | Value is within numeric range |
| `maxlength` | `<nys-textinput>`, `<nys-textarea>` | Value does not exceed character limit |
| `step` | `<nys-textinput type="number">` | Value matches the step increment |

When validation fails, the component automatically:
1. Sets `showError` to `true`
2. Displays the appropriate error message
3. Reports its invalid state to the parent `<form>` via `ElementInternals`

### When validation runs

NYSDS form components use an **eager/lazy validation strategy**:

1. **On first interaction (lazy):** Validation does not run until the user blurs the field (moves focus away). This avoids showing errors while someone is still typing.
2. **After first error (eager):** Once a field has been marked invalid, validation runs on every input change. This gives immediate feedback as the user corrects their entry.
3. **On form submission:** When the form is submitted (via `form.requestSubmit()` or a `<nys-button type="submit">`), all fields are validated. The first invalid field receives focus.

### Custom error messages

Set the `errorMessage` property to override the default validation message:

{% set preview %}
<nys-textinput name="employee_id" label="Employee ID" required pattern="N[0-9]{8}" errorMessage="Enter a valid Employee ID (e.g., N00123456)"></nys-textinput>
{% endset %}
{% set code %}<nys-textinput
  name="employee_id"
  label="Employee ID"
  required
  pattern="N[0-9]{8}"
  errorMessage="Enter a valid Employee ID (e.g., N00123456)"
></nys-textinput>{% endset %}
{% set backgroundSolid = true %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set preview = "" %}{% set code = "" %}{% set backgroundSolid = false %}

If `errorMessage` is set, it takes precedence over the browser's built-in validation messages for all validation failures on that component.

### Manual error display

You can also control errors programmatically by setting both `errorMessage` and `showError`:

{% set preview %}
<nys-textinput name="email" label="Email Address" errorMessage="This email is already registered" showError required></nys-textinput>
{% endset %}
{% set code %}<nys-textinput name="email" label="Email Address" errorMessage="This email is already registered" showError required></nys-textinput>{% endset %}
{% set backgroundSolid = true %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set preview = "" %}{% set code = "" %}{% set backgroundSolid = false %}

Or in JavaScript:

{% set code %}const emailInput = document.querySelector('nys-textinput[name="email"]');

// Show a custom error
emailInput.errorMessage = "This email is already registered";
emailInput.showError = true;

// Clear the error
emailInput.showError = false;{% endset %}
{% set codeLanguage = "javascript" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set codeLanguage = "" %}

### Checking validity in JavaScript

Each NYSDS form component exposes a `checkValidity()` method that returns `true` if the component's current value satisfies its constraints:

{% set code %}const countySelect = document.querySelector('nys-select[name="county"]');

if (!countySelect.checkValidity()) {
  console.log("County is required");
}{% endset %}
{% set codeLanguage = "javascript" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set codeLanguage = "" %}

</section>

<section id="events">

## Event Handling

NYSDS form components emit custom events prefixed with `nys-`. The specific events vary by component, but they follow a consistent pattern.

### Common events across form components

| Event | Fired when | Components |
|-------|-----------|------------|
| `nys-input` | Value changes (on each keystroke) | `<nys-textinput>`, `<nys-textarea>` |
| `nys-change` | Selection or state changes | `<nys-select>`, `<nys-checkbox>`, `<nys-radiobutton>`, `<nys-toggle>`, `<nys-datepicker>` |
| `nys-focus` | Component gains focus | All form components |
| `nys-blur` | Component loses focus | All form components |

### Event detail structure

Every `nys-input` and `nys-change` event includes a `detail` object with at minimum an `id` and `value`. Some components include additional fields:

```js
// nys-textinput: { id, value }
// nys-checkbox: { id, checked, name, value }
// nys-radiobutton: { id, checked, name, value }
// nys-select: { id, value }
```

### Listening for events

Events bubble up through the DOM and cross shadow DOM boundaries (via `composed: true`). You can listen on individual components or on a parent element:

{% set code %}// Listen on a single component
const nameInput = document.querySelector('nys-textinput[name="applicant_name"]');
nameInput.addEventListener('nys-input', (event) => {
  console.log('Name changed to:', event.detail.value);
});

// Listen on the form for all change events (event delegation)
const form = document.getElementById('benefits-application');
form.addEventListener('nys-change', (event) => {
  const { id, value } = event.detail;
  console.log(`Field ${id} changed to: ${value}`);
});{% endset %}
{% set codeLanguage = "javascript" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set codeLanguage = "" %}

### `nys-input` vs. `nys-change`

Text-based components (`<nys-textinput>`, `<nys-textarea>`) fire `nys-input` on every keystroke. Selection-based components (`<nys-select>`, `<nys-checkbox>`, `<nys-radiobutton>`) fire `nys-change` when the selection state changes. This mirrors the native `input` vs. `change` distinction in HTML.

For component-specific event details, see each component's Events section.

</section>

<section id="submission">

## Form Submission

### Submitting with `<nys-button>`

Use `<nys-button type="submit">` inside or associated with a `<form>`. When clicked, the button calls `form.requestSubmit()`, which triggers constraint validation on all form-associated elements before dispatching the `submit` event.

{% set preview %}
<form id="license-renewal">
  <nys-textinput name="license_number" label="License Number" required pattern="[0-9]{9}" errorMessage="Enter your 9-digit license number"></nys-textinput>
  <nys-select name="office" label="Preferred DMV Office" required>
    <option value="albany">Albany</option>
    <option value="syracuse">Syracuse</option>
    <option value="nyc-harlem">NYC - Harlem</option>
    <option value="buffalo">Buffalo</option>
  </nys-select>
  <nys-button type="submit" label="Schedule Renewal"></nys-button>
</form>
{% endset %}
{% set code %}<form id="license-renewal">
  <nys-textinput name="license_number" label="License Number" required
    pattern="[0-9]{9}" errorMessage="Enter your 9-digit license number"></nys-textinput>
  <nys-select name="office" label="Preferred DMV Office" required>
    <option value="albany">Albany</option>
    <option value="syracuse">Syracuse</option>
    <option value="nyc-harlem">NYC - Harlem</option>
    <option value="buffalo">Buffalo</option>
  </nys-select>
  <nys-button type="submit" label="Schedule Renewal"></nys-button>
</form>{% endset %}
{% set backgroundSolid = true %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set preview = "" %}{% set code = "" %}{% set backgroundSolid = false %}

### Handling the submit event

Listen for the standard `submit` event on the `<form>`. If all fields pass validation, the event fires. If any field is invalid, submission is blocked and the first invalid field receives focus.

{% set code %}document.getElementById('license-renewal').addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log('License:', formData.get('license_number'));
  console.log('Office:', formData.get('office'));

  // Submit to your API
  fetch('/api/renewal', {
    method: 'POST',
    body: formData,
  });
});{% endset %}
{% set codeLanguage = "javascript" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set codeLanguage = "" %}

### Resetting forms

Use `<nys-button type="reset">` or call `form.reset()` in JavaScript. Every NYSDS form component implements `formResetCallback`, which:

- Clears the component's value
- Removes error messages and hides error state
- Resets internal validation state

{% set preview %}
<form id="contact-form">
  <nys-textinput name="name" label="Your Name" required></nys-textinput>
  <nys-textarea name="message" label="Message" required></nys-textarea>
  <div class="nys-grid-row nys-grid-gap">
    <div class="nys-grid-col-auto">
      <nys-button type="submit" label="Send Message"></nys-button>
    </div>
    <div class="nys-grid-col-auto">
      <nys-button type="reset" label="Clear Form" variant="outline"></nys-button>
    </div>
  </div>
</form>
{% endset %}
{% set code %}<form id="contact-form">
  <nys-textinput name="name" label="Your Name" required></nys-textinput>
  <nys-textarea name="message" label="Message" required></nys-textarea>
  <div class="nys-grid-row nys-grid-gap">
    <div class="nys-grid-col-auto">
      <nys-button type="submit" label="Send Message"></nys-button>
    </div>
    <div class="nys-grid-col-auto">
      <nys-button type="reset" label="Clear Form" variant="outline"></nys-button>
    </div>
  </div>
</form>{% endset %}
{% set backgroundSolid = true %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set preview = "" %}{% set code = "" %}{% set backgroundSolid = false %}

### Reading form values without submission

Access current values at any time through the `FormData` API:

{% set code %}const form = document.getElementById('benefits-application');
const data = new FormData(form);

// Read individual values
const name = data.get('full_name');
const county = data.get('county');

// Iterate all entries
for (const [key, value] of data.entries()) {
  console.log(`${key}: ${value}`);
}{% endset %}
{% set codeLanguage = "javascript" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set codeLanguage = "" %}

</section>

<section id="error-summary">

## Error Summary Patterns

For long forms, consider displaying a summary of all errors at the top of the form after a failed submission attempt. This helps users understand what needs to be fixed, especially when errors are spread across many fields.

NYSDS does not currently provide a dedicated error summary component, but you can build one using `<nys-alert>` and the form's validation API. Here is an example of an error summary at the top of a form:

{% set preview %}
<nys-alert type="error" heading="3 field(s) need your attention">
  <ul>
    <li><a href="#field-email">Email address is required</a></li>
    <li><a href="#field-phone">Phone number must be 10 digits</a></li>
    <li><a href="#field-program">Program selection is required</a></li>
  </ul>
</nys-alert>
{% endset %}
{% set code %}<nys-alert type="error" heading="3 field(s) need your attention">
  <ul>
    <li><a href="#field-email">Email address is required</a></li>
    <li><a href="#field-phone">Phone number must be 10 digits</a></li>
    <li><a href="#field-program">Program selection is required</a></li>
  </ul>
</nys-alert>{% endset %}
{% set backgroundSolid = true %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set preview = "" %}{% set code = "" %}{% set backgroundSolid = false %}

Here is the JavaScript to generate and display error summaries:

{% set code %}function showErrorSummary(form) {
  const errors = [];

  // Collect all invalid form elements
  for (const element of form.elements) {
    if (typeof element.checkValidity === 'function' && !element.checkValidity()) {
      const label = element.getAttribute('label') || element.getAttribute('name');
      errors.push({ label, element });
    }
  }

  if (errors.length === 0) return;

  // Build the error summary
  const summary = document.getElementById('error-summary');
  summary.setAttribute('type', 'error');
  summary.setAttribute('heading', `${errors.length} field(s) need attention`);

  const list = errors
    .map((err) => `<li><a href="#${err.element.id}">${err.label}</a></li>`)
    .join('');
  summary.innerHTML = `<ul>${list}</ul>`;
}{% endset %}
{% set accordionLabel = "showErrorSummary Function" %}
{% set codeLanguage = "javascript" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeLanguage = "" %}

Here is the HTML for a form with an error summary and the event handler:

{% set code %}<nys-alert id="error-summary" type="error" heading="" style="display:none;"></nys-alert>

<form id="enrollment-form" novalidate>
  <nys-textinput name="full_name" label="Full Name" id="field-name" required></nys-textinput>
  <nys-textinput name="email" label="Email" id="field-email" type="email" required></nys-textinput>
  <nys-select name="program" label="Program" id="field-program" required>
    <option value="snap">SNAP Benefits</option>
    <option value="heap">HEAP Energy Assistance</option>
    <option value="medicaid">Medicaid</option>
  </nys-select>
  <nys-button type="submit" label="Enroll"></nys-button>
</form>{% endset %}
{% set accordionLabel = "HTML" %}
{% set codeLanguage = "html" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeLanguage = "" %}

{% set code %}const form = document.getElementById('enrollment-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Manually trigger validation on all elements
  let firstInvalid = null;
  for (const element of form.elements) {
    if (typeof element.checkValidity === 'function' && !element.checkValidity()) {
      // Trigger the invalid event so components show their error states
      element.dispatchEvent(new Event('invalid'));
      if (!firstInvalid) firstInvalid = element;
    }
  }

  if (firstInvalid) {
    showErrorSummary(form);
    document.getElementById('error-summary').style.display = 'block';
    document.getElementById('error-summary').focus();
    return;
  }

  // All valid — proceed with submission
  const formData = new FormData(form);
  // ... submit to API
});{% endset %}
{% set accordionLabel = "Form Submit Handler" %}
{% set codeLanguage = "javascript" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeLanguage = "" %}

### Error summary best practices

- Place the error summary above the form, before any fields.
- Include anchor links from each error to the corresponding field's `id`.
- Move focus to the error summary when it appears so screen reader users are immediately notified.
- Clear the error summary when the form is successfully submitted or reset.

</section>

---

<section id="complete-example">

## Complete Example

The following example shows a realistic multi-field form using several NYSDS form components with validation and submission handling.

{% set code %}<nys-alert id="form-errors" type="error" heading="" style="display:none;"></nys-alert>

<form id="dmv-appointment" novalidate>
  <h2>Schedule a DMV Appointment</h2>

  <div class="nys-grid-row nys-grid-gap">
    <div class="nys-tablet:nys-grid-col-6">
      <nys-textinput name="first_name" id="first-name" label="First Name" required></nys-textinput>
    </div>
    <div class="nys-tablet:nys-grid-col-6">
      <nys-textinput name="last_name" id="last-name" label="Last Name" required></nys-textinput>
    </div>
  </div>

  <nys-textinput name="email" id="email" label="Email Address" type="email" required description="We'll send your confirmation to this address."></nys-textinput>

  <nys-textinput name="phone" id="phone" label="Phone Number" type="tel" optional description="In case we need to reach you about your appointment."></nys-textinput>

  <nys-select name="office" id="office" label="DMV Office" required>
    <optgroup label="Capital Region">
      <option value="albany">Albany</option>
      <option value="troy">Troy</option>
    </optgroup>
    <optgroup label="Western NY">
      <option value="buffalo">Buffalo</option>
      <option value="rochester">Rochester</option>
    </optgroup>
    <optgroup label="New York City">
      <option value="nyc-harlem">Harlem</option>
      <option value="nyc-midtown">Midtown Manhattan</option>
      <option value="nyc-queens">Jamaica, Queens</option>
    </optgroup>
  </nys-select>

  <nys-radiogroup name="service_type" id="service-type" label="Type of Service" required>
    <nys-radiobutton name="service_type" value="renewal" label="License Renewal"></nys-radiobutton>
    <nys-radiobutton name="service_type" value="new-license" label="New License"></nys-radiobutton>
    <nys-radiobutton name="service_type" value="permit-test" label="Permit Test"></nys-radiobutton>
    <nys-radiobutton name="service_type" value="registration" label="Vehicle Registration"></nys-radiobutton>
    <nys-radiobutton name="service_type" other label="Other (please specify)"></nys-radiobutton>
  </nys-radiogroup>

  <nys-textarea name="notes" id="notes" label="Additional Notes" optional description="Any special accommodations or information we should know about."></nys-textarea>

  <nys-checkbox name="confirm" id="confirm" label="I confirm the information above is accurate" required errorMessage="You must confirm before submitting"></nys-checkbox>

  <div class="nys-grid-row nys-grid-gap" style="margin-top: var(--nys-space-400);">
    <div class="nys-grid-col-auto">
      <nys-button type="submit" label="Schedule Appointment"></nys-button>
    </div>
    <div class="nys-grid-col-auto">
      <nys-button type="reset" label="Start Over" variant="outline"></nys-button>
    </div>
  </div>
</form>{% endset %}
{% set accordionLabel = "DMV Appointment Form" %}
{% set codeLanguage = "html" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeLanguage = "" %}

Here is the JavaScript to handle validation and submission:

{% set code %}const form = document.getElementById('dmv-appointment');
const errorAlert = document.getElementById('form-errors');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate all fields
  const invalidFields = [];
  for (const el of form.elements) {
    if (typeof el.checkValidity === 'function' && !el.checkValidity()) {
      el.dispatchEvent(new Event('invalid'));
      const label = el.getAttribute('label') || el.getAttribute('name');
      invalidFields.push({ label, id: el.id });
    }
  }

  if (invalidFields.length > 0) {
    // Show error summary
    errorAlert.setAttribute('heading', `${invalidFields.length} field(s) need your attention`);
    errorAlert.innerHTML = '<ul>' +
      invalidFields.map((f) => `<li><a href="#${f.id}">${f.label}</a></li>`).join('') +
      '</ul>';
    errorAlert.style.display = 'block';
    errorAlert.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // All valid -- submit the form
  errorAlert.style.display = 'none';
  const formData = new FormData(form);

  fetch('/api/appointments', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      // Show success message or redirect
      console.log('Appointment scheduled');
    }
  });
});

// Clear error summary on reset
form.addEventListener('reset', () => {
  errorAlert.style.display = 'none';
});{% endset %}
{% set accordionLabel = "DMV Appointment Handler" %}
{% set codeLanguage = "javascript" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeLanguage = "" %}

</section>

<section id="form-components">

## Form Components Reference

These NYSDS components are form-associated and work with the patterns described on this page:

| Component | Use for | Events |
|-----------|---------|--------|
| [`<nys-textinput>`](/components/textinput/) | Short text: names, emails, numbers, passwords | `nys-input`, `nys-focus`, `nys-blur` |
| [`<nys-textarea>`](/components/textarea/) | Multi-line text: comments, descriptions | `nys-input`, `nys-focus`, `nys-blur` |
| [`<nys-select>`](/components/select/) | Single selection from a dropdown list | `nys-change`, `nys-focus`, `nys-blur` |
| [`<nys-checkbox>`](/components/checkbox/) | Binary choices or multi-select lists | `nys-change`, `nys-focus`, `nys-blur` |
| [`<nys-radiobutton>`](/components/radiobutton/) | Single selection from visible options | `nys-change`, `nys-focus`, `nys-blur` |
| [`<nys-datepicker>`](/components/datepicker/) | Date selection with calendar | `nys-change`, `nys-focus`, `nys-blur` |
| [`<nys-toggle>`](/components/toggle/) | Binary settings with immediate effect | `nys-change`, `nys-focus`, `nys-blur` |
| [`<nys-fileinput>`](/components/fileinput/) | File uploads with drag-and-drop | `nys-change` |
| [`<nys-button>`](/components/button/) | Submit, reset, or custom form actions | `nys-click`, `nys-focus`, `nys-blur` |

For accessibility patterns in forms, see [Accessibility](/foundations/accessibility/).

</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
