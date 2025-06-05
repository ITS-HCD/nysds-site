---
permalink: /components/select/
title: Select
description: Dropdown menu for selecting a single option.
image: /assets/img/components/select.svg
image_alt: An illustration of a select dropdown.
image_header: /assets/img/components/select-header.svg
navOrder: 10
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-select>` is a reusable web component for use in New York State digital products. It allows users to select data from a dropdown to be collected. It accepts the child element `<nys-option>` to define the options in the dropdown.

{% endblock %}

{% block example %}
  {% set preview %}<nys-select label="Select your favorite borough" id="borough">
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>      
</nys-select>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
  - When you need to collect data from a dropdown
  - When you need to provide a list of options for users to select a single option from
### When to consider something else
  - When you need to collect multiple items from a list
{% endblock %}

{% block usagedo %}

  - Use the `nys-option` component to define the options in the dropdown
{% endblock %}

{% block usagedont %}

  - Don't use the native `<option>` element in the `nys-select` component

{% endblock %}

{% block accessibility %}

The `<nys-select>` component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the select dropdown correctly.
  - Keyboard navigation support, allowing users to tab to the `<nys-select>` using the keyboard and spacebar to select an option.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Disabled
  {% set preview %}<nys-select label="Select your favorite borough" id="borough" disabled>
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>      
</nys-select>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Width
The following `width` options are available:

  - `sm` (Small): 88px, ideal for compact layouts.
  - `md` (Medium): 200px, ideal for balanced designs.
  - `lg` (Large): 384px, suitable for displaying longer content.
  - `full` (Full Width): default size. Expands to fill the available space.

{% set preview %}
<nys-select label="Select your favorite width" description="Valid widths are sm, md, lg, and full" width="sm">
  <nys-option value="sm" label="sm"></nys-option>
  <nys-option value="md" label="md"></nys-option>
  <nys-option value="lg" label="lg"></nys-option>
  <nys-option value="full" label="full"></nys-option>
</nys-select>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Error Message

To display an error message, pass in the `showError` property to the `<nys-select>` component. 

Setting `errorMessage` does not display the message without `showError` set to true.

{% set preview %}
<nys-select label="Select your favorite borough" errorMessage="You did not select a borough" showError>
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>
</nys-select>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property       | Type                                   |
|----------------|----------------------------------------|
| `description`  | String                                 |
| `disabled`     | boolean                                |
| `errorMessage` | String                                 |
| `form`         | String                                 |
| `id`           | String                                 |
| `label`        | String                                 |
| `name`         | String                                 |
| `required`     | boolean                                |
| `showError`    | boolean                                |
| `value`        | String                                 |
| `width`        | `"sm"` \| `"md"` \| `"lg"` \| `"full"` |


{% endblock %}
[[TODO]]
| Variable             | Description                 |
|----------------------|-----------------------------|
| `--nys-toggle-width` | Width of the toggle switch. |

{% block cssvariables %}


{% endblock %}

{% block events %}

The `<nys-select>` component emits **three** custom Javascript events:
1.  **`change`** – Fired when the select state changes (checked/unchecked).
2.  **`focus`** – Fired when the select gains focus.
3.  **`blur`** – Fired when the select loses focus.

You can listen to these events using JavaScript:
{% set code %}
// Select the select component
const select = document.querySelector('nys-select');
// Listen for the 'change' event
select.addEventListener('change', (event) => {
  console.log('Select changed:', event.target.checked);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}