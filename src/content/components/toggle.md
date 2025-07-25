---
permalink: /components/toggle/
title: Toggle
description: Switch component for enabling or disabling a setting.
image: /assets/img/components/toggle.svg
image_alt: An illustration of a toggle switch.
image_header: /assets/img/components/toggle-header.svg
navOrder: 16
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

  The `<nys-toggle>` component is a reusable web component for use in New York State digital products. It allows users to toggle a toggle switch "on" or "off".
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

### Slotted Description
Add help text to the toggle using the `label` and `description` props.
Descriptions can be provided either through the `description` prop or via the `slot="description"`.

**Note**: Use the prop for simple text. Use the slot when you need custom HTML, such as links or formatting.
  {% set preview %}<nys-toggle label="Toggle Switch" name="toggle-switch" value="access">
  <p slot="description">This slot is called 'description' (<a href="https://www.ny.gov/" target="_blank">learn more</a>)</p>
</nys-toggle>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Disabled Toggle
  {% set preview %}<nys-toggle label="Disabled Unchecked" name="toggle-switch" value="access" disabled></nys-toggle>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Disable Icon
  {% set preview %}<nys-toggle noIcon label="No Icon on the toggle" name="toggle-switch" value="access"></nys-toggle>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property      | Type             |
|---------------|------------------|
| `id`          | String           |
| `label`       | String           |
| `name`        | String           |
| `checked`     | boolean          |
| `description` | String           |
| `disabled`    | boolean          |
| `form`        | String           |
| `noIcon`      | boolean          |
| `size`        | `"sm"` \| `"md"` |
| `value`       | String           |


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

The `<nys-toggle>` component emits **three** custom Javascript events:
1.  **`nys-change`** – Fired when the toggle state changes (checked/unchecked).
2.  **`nys-focus`** – Fired when the toggle gains focus.
3.  **`nys-blur`** – Fired when the toggle loses focus.

You can listen to these events using JavaScript:
{% set code %}// Select the toggle component
const toggle = document.querySelector('nys-toggle');
// Listen for the 'nys-change' event
toggle.addEventListener('nys-change', (event) => {
  console.log('Checkbox changed:', event.detail.checked);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}