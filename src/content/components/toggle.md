---
permalink: /components/toggle/
title: Toggle
description: Switch component for enabling or disabling a setting.
image: /assets/img/components/toggle.svg
image_alt: An illustration of a toggle switch.
image_header: /assets/img/components/toggle-header.svg
navOrder: 14
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

  The `<nys-toggle`> component is a reusable web component for use in New York State digital products. It allows users to toggle a toggle switch "on" or "off".
{% endblock %}

{% block example %}
  {% set preview %}<nys-toggle 
  label="Dark Mode"
  description="Enable dark mode for a more comfortable viewing experience."
  name="toggle-switch"
  value="access">
</nys-toggle>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block usage %}

### When to use this component
  - Consider using `<nys-toggle`> when expecting immediate UI effects when turning switch on/off.
  - Ideal for settings pages, feature toggles, or user preferences.
### When to consider something else
  - Consider using `<nys-checkbox>` or `<nys-radiobutton>` to select one or more options from a list where the selections
  - Use `<nys-checkbox>` for forms, especially when you're not expecting immediate action.
{% endblock %}

{% block usagedo %}

  - Provide a clear label and optional description to explain the toggle's purpose.
  - Show the UI for toggle’s state is visually distinct for on/off positions.

{% endblock %}

{% block usagedont %}

  - Use toggles for complex multi-state options.
  - Overuse toggles for trivial settings that do not impact user experience significantly.
  - Hide labels entirely unless another accessible method of describing the toggle exists.

{% endblock %}

{% block accessibility %}

The `<nys-toggle`> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the toggle correctly.
  - Keyboard navigation support, allowing users to toggle the toggle switch using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Sizes
  {% set preview %}<nys-toggle size="sm" label='Small (size="sm")' name="toggle-switch" value="access"></nys-toggle><br>
<nys-toggle size="md" label='Medium (size="md")' name="toggle-switch" value="access"></nys-toggle>{% endset %}
  {% set code %}
  <nys-toggle size="sm" label='Small (size="sm")' name="toggle-switch" value="access"></nys-toggle>
<nys-toggle size="md" label='Medium (size="md")' name="toggle-switch" value="access"></nys-toggle>{% endset %}
  {% include "partials/code-preview.njk" %}

### Disable Icon
  {% set preview %}<nys-toggle noIcon label="No Icon on the toggle" name="toggle-switch" value="access"></nys-toggle>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property      | Type             |
|---------------|------------------|
| `checked`     | boolean          |
| `description` | string           |
| `disabled`    | boolean          |
| `form`        | string           |
| `label`       | string           |
| `name`        | string           |
| `noIcon`      | boolean          |
| `size`        | `"sm"` \| `"md"` |
| `value`       | string           |


{% endblock %}

{% block cssvariables %}

| Variable                                | Description                                           |
|-----------------------------------------|-------------------------------------------------------|
| `--nys-toggle-background-color`         | Background color of the toggle switch when it is off. |
| `--nys-toggle-border-radius`            | Border radius of the toggle switch.                   |
| `--nys-toggle-checked-background-color` | Background color of the toggle switch when it is on.  |
| `--nys-toggle-height`                   | Height of the toggle switch.                          |
| `--nys-toggle-width`                    | Width of the toggle switch.                           |

{% endblock %}

{% block events %}
The `<nys-toggle`> component emits three custom Javascript events:
1.  **`change`** – Fired when the toggle state changes (checked/unchecked).
2.  **`focus`** – Fired when the toggle gains focus.
3.  **`blur`** – Fired when the toggle loses focus.
4.  **`keydown`** – Fired when a key is pressed while the toggle is focused.

You can listen to these events using JavaScript:
{% set code %}// Select the toggle component
  const toggle = document.querySelector('nys-toggle');
// Listen for the 'change' event
toggle.addEventListener('change', (event) => {
  console.log('Checkbox changed:', event.target.checked);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}