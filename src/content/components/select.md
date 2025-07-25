---
permalink: /components/select/
title: Select
description: Dropdown menu for selecting a single option.
image: /assets/img/components/select.svg
image_alt: An illustration of a select dropdown.
image_header: /assets/img/components/select-header.svg
navOrder: 12
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

### Required
Set `required` to `<nys-select>` to make selecting an option mandatory.

{% set preview %}
<nys-select label="Select your favorite borough" required>
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>  
</nys-select>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Optional
Adding the `optional` prop will add an optional flag to the input.

{% set preview %}
<nys-select label="Select your favorite borough" optional>
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

### Slotted Description
Add a description using the `description` prop for plain text, or use the description slot to include custom HTML for more flexibility.

{% set preview %}
<nys-select label="Select your favorite borough">
  <label slot="description">This is a slot</label>
  <nys-option value="bronx">The Bronx</nys-option>
  <nys-option value="brooklyn">Brooklyn</nys-option>
  <nys-option value="manhattan">Manhattan</nys-option>
  <nys-option value="staten_island">Staten Island</nys-option>
  <nys-option value="queens">Queens</nys-option>        
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

| Property       | Type                                   | Component           |
|----------------|----------------------------------------|---------------------|
| `id`           | String                                 | only `<nys-select>` |
| `name`         | String                                 | only `<nys-select>` |
| `label`        | String                                 | both                |
| `description`  | String                                 | only `<nys-select>` |
| `disabled`     | boolean                                | both                |
| `errorMessage` | String                                 | only `<nys-select>` |
| `hidden`       | boolean                                | only `<nys-option>` |
| `optional`     | boolean                                | only `<nys-select>` |
| `required`     | boolean                                | only `<nys-select>` |
| `selected`     | boolean                                | only `<nys-option>` |
| `showError`    | boolean                                | only `<nys-select>` |
| `form`         | String                                 | only `<nys-select>` |
| `value`        | String                                 | both                |
| `width`        | `"sm"` \| `"md"` \| `"lg"` \| `"full"` | only `<nys-select>` |


{% endblock %}

{% block cssvariables %}


{% endblock %}

{% block events %}

The `<nys-select>` component emits **three** custom Javascript events:
1.  **`nys-change`** – Fired when the select state changes. The event detail includes the value of the selected option.
2.  **`nys-focus`** – Fired when the select gains focus.
3.  **`nys-blur`** – Fired when the select loses focus.

You can listen to these events using JavaScript:
{% set code %}
// Select the select component
const select = document.querySelector('nys-select');
// Listen for the 'nys-change' event
select.addEventListener('nys-change', (event) => {
  console.log('Select changed:', event.detail.value);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}