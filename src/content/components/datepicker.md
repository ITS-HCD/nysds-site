---
permalink: /components/datepicker/
title: Datepicker
description: Allows users to select a date from a visual calendar or type a date into the input field.
image: /assets/img/components/datepicker.svg
image_alt: An illustration of a date picker.
image_header: /assets/img/components/datepicker-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=15514-1502
navOrder: 8
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-datepicker>` component allows users to select a date from a visual calendar or type a date into the input field.

{% endblock %}

{% block example %}
{% set preview %}
<nys-datepicker
  id="myDatepicker"
  name="myDatepicker"
  type="date"
  label="Schedule your appointment"
  description="Enter in MM/DD/YYYY format"
></nys-datepicker>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

  - When users need to select a single calendar date
  - When a form requires consistent date formatting across browsers
  - When native date picker behavior needs to be replaced with a controlled, accessible experience

### When to consider something else

  - Familiar dates where users know the value without a calendar, such as a date of birth.
Consider memorable date fields ([currently under proposal](https://github.com/ITS-HCD/nysds/discussions/1193))
  - When the day of the week is irrelevant, such as birthdays or document issue dates.
Consider memorable date fields ([currently under proposal](https://github.com/ITS-HCD/nysds/discussions/1193))
  - When users need to select multiple dates or a span of time. Consider a date range component (possible version 2 of `nys-datepicker`)
  - When time selection is required


{% endblock %}

{% block usagedo %}

  - Use for deadlines, scheduling, and future dates
  - Pair with labels and helper text for clarity
  - Use `required` when the date must be provided

{% endblock %}

{% block usagedont %}

  - Don't use for memorable dates, or dates in the past, use a textinput instead
  - Don't use without a label or accessible description
  - Don't use if relying on browser specific date picker behavior

{% endblock %}

{% block accessibility %}

The `<nys-datepicker>` component includes the following accessibility-focused features:

  - Uses native `<input type="date">` semantics for screen reader support
  - Supports keyboard interaction to open and navigate the calendar
  - Applies aria-required, aria-disabled, and validation messaging
  - Error messages are announced via associated error messaging


{% endblock %}

{% block options %}
<nys-alert heading="Browser behavior" type="info">
  <p>The calendar interface does not appear in Safari or mobile browsers (iOS and Android). In those environments, users enter dates manually or use the native calendar popup.</p>
</nys-alert>

### Value and form output
The value prop can be set as a Date object or an ISO date string (`YYYY-MM-DD`).
Outwards, the input displays it as (`mm/dd/yyyy`). Internally, the component stores and submits the value as a string in ISO format.

<nys-alert heading="Date object warning" type="info">
  <p>
    Passing <code>new Date("YYYY-MM-DD")</code> to <code>value</code> can result in an off by one day error due to UTC versus local time conversion. Make sure the Date represents the intended local date.
    <br />
    <a href="https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off">
      Why this happens
    </a>
  </p>

  <p>
    <code>&lt;nys-datepicker&gt;</code> safely accepts ISO date strings (<code>"YYYY-MM-DD"</code>) and handles display and submission correctly.
  </p>
</nys-alert>


#### Valid value examples
{% set code %}// Using a Date object
value = new Date(2025, 5, 1) // June 1, 2025
// Using a string
value = "2025-06-01"{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

{% set code %}<nys-datepicker value="2025-06-01"></nys-datepicker>{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

{% set code %}// FormData submits a string in YYYY-MM-DD format
2025-06-01{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

### Width
Set the width prop to adjust the width of `<nys-datepicker>`
Supported widths are:
  - `md`: 200px _(default width)_
  - `lg`: 384px
  - `full`: will take up the full width of the parent container.

{% set preview %}
<div style="display: flex; flex-direction: column; gap: 16px;">
  <nys-datepicker label="Medium width" width="md"></nys-datepicker>
  <nys-datepicker label="Large width" width="lg"></nys-datepicker>
  <nys-datepicker label="Full width" width="full"></nys-datepicker>
</div>
{% endset %}
{% set codeLanguage = "html" %}
{% set codeExpanded = false %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Custom Start Date
Use this option to guide users toward a relevant time period without preselecting a date.
{% set preview %}
<nys-datepicker label="Project start date" startDate="2024-01-01"></nys-datepicker>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Hiding Buttons
Hide the Today and Clear buttons to require users to intentionally choose a date. \
Use properties `hideTodayButton` and `hideClearButton` to toggle off the buttons
{% set preview %}
<nys-datepicker
  label="Select a date"
  hideTodayButton
  hideClearButton
></nys-datepicker>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Disabled
{% set preview %}
<nys-datepicker
  label="Disabled datepicker"
  disabled
  value="2025-01-15"
></nys-datepicker>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}


{% block properties %}

| Property           | Type                                                               |
|--------------------|--------------------------------------------------------------------|
| `id`               | String                                                             |
| `label`            | String                                                             |
| `description`      | String                                                             |
| `name`             | String                                                             |
| `value`            | String                                                             |
| `width`            | `"md"` \| `"lg"` \| `"full"`                                       |
| `disabled`         | boolean                                                            |
| `required`         | String                                                             |
| `optional`         | String                                                             |
| `showError`        | boolean                                                            |
| `errorMessage`     | String                                                             |
| `startDate`        | String (format `MM/DD/YYYY`)                                       |
| `hideTodayButton`  | boolean                                                            |
| `hideClearButton`  | boolean                                                            |
| `form`             | String \| `null`                                                   |


{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-datepicker>` component emits **two** custom Javascript events:

  1.  **`nys-input`** – Emitted when the datepicker input text changes.
  1.  **`nys-blur`** – Emitted when the datepicker input loses focus.

### Event details
The `nys-input` event includes a detail object with the following properties:

  - id (string): The id of the datepicker.
  - value (Date): The current value of the datepicker. Updates when a new valid date is set.

You can listen to these events using JavaScript:
{% set code %}// Select the datepicker component
const datepicker = document.querySelector("nys-datepicker");
// Listen for the 'nys-input' event
datepicker.addEventListener('nys-input', (event) => {
  const { id, value } = event.detail;
  console.log(`Datepicker (${id}) value has changed: `, value);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block updates %}{% endblock %}
