---
permalink: /components/toggle/
title: Toggle
description: Switch component for enabling or disabling a setting.
image: /assets/img/components/toggle.svg
image_alt: An illustration of a toggle switch.
image_header: /assets/img/components/toggle-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=3981-9988
navOrder: 23
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

  The `<nys-toggle>` allows users to toggle a toggle switch "on" or "off".

{% endblock %}

{% block example %}
  {% set preview %}<nys-toggle 
  label="Dark Mode"
  description="Enable dark mode for a more comfortable viewing experience."
  name="toggle-switch"
  value="access">
</nys-toggle>{% endset %}
  {% set code = preview %}
  {% set backgroundSolid = true %}
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

  - Provide a clear label and optional description to explain what the toggle controls.
  - Use `<nys-checkbox>` for forms, especially when you're not expecting immediate action.
  - Ensure the page clearly reflects the toggle’s on/off state through visible changes (e.g. switching to dark mode).

{% endblock %}

{% block usagedont %}

  - Don’t use toggles for complex or multi-state choices.
  - Don’t overuse for minor settings that don’t affect the user experience.
  - Don’t hide labels unless an accessible alternative is in place.

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
{% set backgroundSolid = true %}
  {% include "partials/code-preview.njk" %}

### Slotted Description
Add help text to the toggle using the `label` and `description` props.
Descriptions can be provided either through the `description` prop or via the `slot="description"`.

**Note**: Use the prop for simple text. Use the slot when you need custom HTML, such as links or formatting.
  {% set preview %}<nys-toggle label="Toggle Switch" name="toggle-switch" value="access">
  <p slot="description">This slot is called 'description' (<a href="https://www.ny.gov/" target="_blank">learn more</a>)</p>
</nys-toggle>{% endset %}
  {% set code = preview %}
  {% set backgroundSolid = true %}
  {% include "partials/code-preview.njk" %}

### Disabled Toggle
  {% set preview %}<nys-toggle label="Disabled Unchecked" name="toggle-switch" value="access" disabled></nys-toggle>{% endset %}
  {% set code = preview %}
  {% set backgroundSolid = true %}
  {% include "partials/code-preview.njk" %}

### Disable Icon
  {% set preview %}<nys-toggle noIcon label="No Icon on the toggle" name="toggle-switch" value="access"></nys-toggle>{% endset %}
  {% set code = preview %}
  {% set backgroundSolid = true %}
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
| `noIcon`      | boolean          |
| `size`        | `"sm"` \| `"md"` |
| `value`       | String           |
| `form`        | String \| `null` |


{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-toggle>` component emits **three** custom Javascript events:
1.  **`nys-change`** – Fired when the toggle state changes (checked/unchecked).
2.  **`nys-focus`** – Fired when the toggle gains focus.
3.  **`nys-blur`** – Fired when the toggle loses focus.

### Event details
The `nys-change` event includes a detail object with the following properties:
  - id (string): The id of the toggle.
  - checked (boolean): Whether the toggle is currently checked.

You can listen to these events using JavaScript:
{% set code %}// Select the toggle component
const toggle = document.querySelector('nys-toggle');
// Listen for the 'nys-change' event
toggle.addEventListener('nys-change', (event) => {
    const { checked } = event.detail;
    console.log('Toggle changed. Checked:', checked);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}