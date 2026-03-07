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

The `<nys-datepicker>` component lets users select a single date by typing into the input field or choosing from a calendar popup. On Safari and mobile devices, it falls back to the native date picker.

{% endblock %}

{% block example %}
{% set preview %}
<nys-datepicker
  id="appointment-date"
  name="appointment-date"
  label="Schedule your DMV appointment"
  description="Enter in MM/DD/YYYY format"
  required
></nys-datepicker>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

  - When users need to select a single calendar date, such as scheduling an appointment or choosing a filing deadline
  - When the day of the week matters and a calendar view helps users orient themselves
  - When a form requires consistent date formatting across browsers

### When to consider something else

  - For familiar dates where users already know the value without a calendar, such as date of birth or document issue dates. Consider memorable date fields ([currently under proposal](https://github.com/ITS-HCD/nysds/discussions/1193)).
  - When users need to select multiple dates or a span of time. Consider a date range component (possible version 2 of `nys-datepicker`).
  - When time selection is required alongside the date.

{% endblock %}

{% block usagedo %}

  - Set the `label` property to clearly describe what date is being collected
  - Add `description` text to specify the expected format or provide context
  - Set `required` when the date is mandatory for form submission
  - Use `startDate` to open the calendar to a relevant month when the expected date is far from today
  - Pass date values as ISO strings (`"YYYY-MM-DD"`) rather than `Date` objects to avoid timezone issues

{% endblock %}

{% block usagedont %}

  - Don't omit the `label` -- every datepicker needs one for accessibility
  - Don't use this component for dates users know from memory, like date of birth. A text input with separate month/day/year fields is more efficient.
  - Don't rely on the calendar popup alone -- Safari and mobile browsers use the native date picker instead
  - Don't set both `required` and `optional` on the same component
  - Don't use `hideTodayButton` and `hideClearButton` together unless users must select a specific date and should not be able to clear it

{% endblock %}

{% block accessibility %}

The `<nys-datepicker>` component includes the following accessibility features:

  - Built on a native `<input type="date">`, so screen readers announce the field correctly
  - The calendar button has `aria-haspopup="dialog"` and `aria-expanded` to communicate popup state
  - The calendar popup uses `role="dialog"` with `aria-modal` and traps focus when open
  - Press **Space** on the input to open the calendar; press **Escape** to close it and return focus to the input
  - **Tab** and **Shift+Tab** cycle through focusable elements inside the calendar without escaping
  - When `required` is set, `aria-required="true"` is applied and validation fires on blur
  - Error messages are rendered via `<nys-errormessage>` and associated with the input for assistive technology

{% endblock %}

{% block options %}
<nys-alert heading="Browser behavior" type="info">
  <p>The calendar popup does not appear in Safari or mobile browsers (iOS and Android). In those environments, users enter dates manually or use the native date picker provided by the operating system.</p>
</nys-alert>

### Value and form output
The `value` prop accepts a `Date` object or an ISO date string (`YYYY-MM-DD`). The input displays the date in `MM/DD/YYYY` format. Internally, the component stores and submits the value as a string in ISO format (`YYYY-MM-DD`).

<nys-alert heading="Date object warning" type="info">
  <p>
    Passing <code>new Date("YYYY-MM-DD")</code> to <code>value</code> can result in an off-by-one-day error due to UTC versus local time conversion. The component handles this internally when you pass an ISO string attribute.
    <br />
    <a href="https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off">
      Why this happens
    </a>
  </p>

  <p>
    Prefer setting the value as an ISO string attribute: <code>&lt;nys-datepicker value="2025-06-01"&gt;</code>. If you must use a <code>Date</code> object in JavaScript, construct it with explicit year/month/day to avoid UTC shifting: <code>new Date(2025, 5, 1)</code>.
  </p>
</nys-alert>

#### Valid value examples
{% set code %}// Using a Date object (month is 0-indexed)
datepicker.value = new Date(2025, 5, 1); // June 1, 2025

// Using an ISO string (recommended)
datepicker.value = "2025-06-01";{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

{% set code %}<nys-datepicker
  label="Benefits enrollment deadline"
  value="2025-06-01"
></nys-datepicker>{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

{% set code %}// FormData submits the value as a string in YYYY-MM-DD format
// e.g. "2025-06-01"{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

### Width
Set the `width` prop to adjust the width of the input field. Supported values:
  - `md`: 200px _(default)_
  - `lg`: 384px
  - `full`: takes the full width of the parent container

{% set preview %}
<div style="display: flex; flex-direction: column; gap: 16px;">
  <nys-datepicker label="Medium width" width="md"></nys-datepicker>
  <nys-datepicker label="Large width" width="lg"></nys-datepicker>
  <nys-datepicker label="Full width" width="full"></nys-datepicker>
</div>
{% endset %}
{% set codeLanguage = "html" %}
{% set codeExpanded = false %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Custom Start Date
Set `startDate` to open the calendar to a specific month. This is helpful when the expected date is far from today, such as a fiscal year start or a future project deadline. The value must be in `YYYY-MM-DD` format.
{% set preview %}
<nys-datepicker
  label="Fiscal year start date"
  description="Select the first day of the fiscal year"
  startDate="2026-04-01"
></nys-datepicker>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Hiding Buttons
The calendar popup includes "Today" and "Clear" buttons by default. Hide them with `hideTodayButton` and `hideClearButton` when you need users to intentionally select a specific date.
{% set preview %}
<nys-datepicker
  label="Court appearance date"
  hideTodayButton
  hideClearButton
></nys-datepicker>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Required
Set `required` to make the date field mandatory. The component displays a "Required" flag next to the label and validates on blur.
{% set preview %}
<nys-datepicker
  label="Application submission date"
  required
></nys-datepicker>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Optional
Set `optional` to display an "Optional" flag. Use this when most fields in the form are required and you need to call out the few that are not.
{% set preview %}
<nys-datepicker
  label="Preferred callback date"
  optional
></nys-datepicker>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Tooltip
Set `tooltip` to display an info icon with hover text that provides additional context about the field.
{% set preview %}
<nys-datepicker
  label="Inspection date"
  tooltip="The date your vehicle was last inspected by an authorized station"
></nys-datepicker>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Error Message
Set `errorMessage` to define custom error text. The message only appears when `showError` is also set. When used with `required`, the component automatically validates on blur and shows errors after the first interaction.
{% set preview %}
<nys-datepicker
  label="Permit expiration date"
  showError
  errorMessage="A valid expiration date is required to continue"
></nys-datepicker>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Disabled
Set `disabled` to prevent interaction. The calendar button and input are both disabled, and the field is excluded from form submission.
{% set preview %}
<nys-datepicker
  label="Registration date"
  disabled
  value="2025-01-15"
></nys-datepicker>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}


{% block properties %}

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>string</td>
      <td><code>""</code> (auto-generated)</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>string</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>string</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>string</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>string | Date | undefined</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td><code>"md"</code> | <code>"lg"</code> | <code>"full"</code></td>
      <td><code>"md"</code></td>
    </tr>
    <tr>
      <td><code>startDate</code></td>
      <td>string (format <code>YYYY-MM-DD</code>)</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>required</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>optional</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>showError</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>errorMessage</code></td>
      <td>string</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>tooltip</code></td>
      <td>string</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>inverted</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>hideTodayButton</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>hideClearButton</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>form</code></td>
      <td>string | <code>null</code></td>
      <td><code>null</code></td>
    </tr>
  </table>
</nys-table>

The `form` property associates this component with a `<form>` element by ID, even if the component is not a descendant of that form. See [Form Patterns](/foundations/forms/) for details on form association and ElementInternals.

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-datepicker>` component emits **two** custom JavaScript events:

  1.  **`nys-input`** -- Fired when the user selects or types a valid date.
  2.  **`nys-blur`** -- Fired when the input or calendar loses focus. Triggers validation.

### Event details
The `nys-input` event includes a `detail` object with the following properties:

  - **id** (string): The `id` of the datepicker component.
  - **value** (Date): The selected date as a `Date` object.

The `nys-blur` event is a plain `Event` with no additional detail.

You can listen to these events using JavaScript:
{% set code %}// Select the datepicker component
const datepicker = document.querySelector("nys-datepicker");

// Listen for date selection
datepicker.addEventListener("nys-input", (event) => {
  const { id, value } = event.detail;
  console.log(`Datepicker (${id}) date selected:`, value);
});

// Listen for blur (triggers validation)
datepicker.addEventListener("nys-blur", () => {
  console.log("Datepicker lost focus");
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block updates %}{% endblock %}
