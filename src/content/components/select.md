---
permalink: /components/select/
title: Select
description: Dropdown menu for selecting a single option.
image: /assets/img/components/select.svg
image_alt: An illustration of a select dropdown.
image_header: /assets/img/components/select-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=3981-9877
navOrder: 16
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-select>` is a reusable web component for use in New York State digital products. It allows users to select data from a dropdown to be collected. It accepts the child `<option>` and `<optgroup>` to define the options in the dropdown.

{% endblock %}

{% block example %}
  {% set preview %}<nys-select label="Select your favorite borough" id="borough">
  <option value="bronx" label="The Bronx"></option>
  <option value="brooklyn" label="Brooklyn"></option>
  <option value="manhattan" label="Manhattan"></option>
  <option value="staten_island" label="Staten Island"></option>
  <option value="queens" label="Queens"></option>      
</nys-select>{% endset %}
{% set backgroundSolid = true %}
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

  - Use the native `<option>` component to define the options in the dropdown
  - Use the `<optgroup>` element to group related options within the dropdown
{% endblock %}

{% block usagedont %}

  - Don't use the `<nys-option>` element in the `<nys-select>` component, it will be deprecated with the 2.0 release.

{% endblock %}

{% block accessibility %}

The `<nys-select>` component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the select dropdown correctly.
  - Keyboard navigation support, allowing users to tab to the `<nys-select>` using the keyboard and spacebar to select an option.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Default Value
You can set a default value by adding the `selected` attribute to the desired `<option>`.
  {% set preview %}<nys-select label="Select your favorite borough" id="borough">
  <option value="bronx" label="The Bronx"></option>
  <option value="brooklyn" label="Brooklyn" selected></option>
  <option value="manhattan" label="Manhattan"></option>
  <option value="staten_island" label="Staten Island"></option>
  <option value="queens" label="Queens"></option>      
</nys-select>{% endset %}
{% set backgroundSolid = true %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Option Group
You can separate the options by using the `<optgroup>` tag.
{% set preview %}<nys-select
  label="Which New York State service are you contacting us about?"
  description="This is for demo purposes and the list might not be exhaustive."
>
  <optgroup label="Transportation Services">
    <option value="mta">MTA / Public Transit</option>
    <option value="dmv">Department of Motor Vehicles (DMV)</option>
    <option value="highway">Highway Maintenance</option>
  </optgroup>
  <optgroup label="Health & Human Services">
    <option value="medicaid">Medicaid / Health Insurance</option>
    <option value="mental-health">Mental Health Support</option>
    <option value="child-family">Child and Family Services</option>
  </optgroup>
  <optgroup label="Public Safety">
    <option value="state-police">State Police</option>
    <option value="emergency-management">Emergency Management</option>
    <option value="fire-safety">Fire Safety</option>
  </optgroup>
  <optgroup label="Environment & Energy">
    <option value="environmental-conservation">
      Environmental Conservation
    </option>
    <option value="clean-energy">Clean Energy Programs</option>
    <option value="waste-management">Waste Management</option>
  </optgroup>
</nys-select>{% endset %}
{% set backgroundSolid = true %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Disabled
  {% set preview %}<nys-select label="Select your favorite borough" id="borough" disabled>
  <option value="bronx" label="The Bronx"></option>
  <option value="brooklyn" label="Brooklyn"></option>
  <option value="manhattan" label="Manhattan"></option>
  <option value="staten_island" label="Staten Island"></option>
  <option value="queens" label="Queens"></option>      
</nys-select>{% endset %}
{% set backgroundSolid = true %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Required
Set `required` to `<nys-select>` to make selecting an option mandatory.

{% set preview %}
<nys-select label="Select your favorite borough" required>
  <option value="bronx" label="The Bronx"></option>
  <option value="brooklyn" label="Brooklyn"></option>
  <option value="manhattan" label="Manhattan"></option>
  <option value="staten_island" label="Staten Island"></option>
  <option value="queens" label="Queens"></option>  
</nys-select>{% endset %}
{% set backgroundSolid = true %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Optional
Adding the `optional` prop will add an optional flag to the input.

{% set preview %}
<nys-select label="Select your favorite borough" optional>
  <option value="bronx" label="The Bronx"></option>
  <option value="brooklyn" label="Brooklyn"></option>
  <option value="manhattan" label="Manhattan"></option>
  <option value="staten_island" label="Staten Island"></option>
  <option value="queens" label="Queens"></option>  
</nys-select>{% endset %}
{% set backgroundSolid = true %}
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
  <option value="sm" label="sm"></option>
  <option value="md" label="md"></option>
  <option value="lg" label="lg"></option>
  <option value="full" label="full"></option>
</nys-select>{% endset %}
{% set backgroundSolid = true %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Slotted Description
Add a description using the `description` prop for plain text, or use the description slot to include custom HTML for more flexibility.

{% set preview %}
<nys-select label="Select your favorite borough">
  <label slot="description">This is a slot</label>
  <option value="bronx">The Bronx</option>
  <option value="brooklyn">Brooklyn</option>
  <option value="manhattan">Manhattan</option>
  <option value="staten_island">Staten Island</option>
  <option value="queens">Queens</option>        
</nys-select>{% endset %}
{% set backgroundSolid = true %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Error Message

To display an error message, pass in the `showError` property to the `<nys-select>` component. 

Setting `errorMessage` does not display the message without `showError` set to true.

{% set preview %}
<nys-select label="Select your favorite borough" errorMessage="You did not select a borough" showError>
  <option value="bronx" label="The Bronx"></option>
  <option value="brooklyn" label="Brooklyn"></option>
  <option value="manhattan" label="Manhattan"></option>
  <option value="staten_island" label="Staten Island"></option>
  <option value="queens" label="Queens"></option>
</nys-select>{% endset %}
{% set backgroundSolid = true %}
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
| `hidden`       | boolean                                | only `<option>` |
| `optional`     | boolean                                | only `<nys-select>` |
| `required`     | boolean                                | only `<nys-select>` |
| `selected`     | boolean                                | only `<option>` |
| `showError`    | boolean                                | only `<nys-select>` |
| `value`        | String                                 | both                |
| `width`        | `"sm"` \| `"md"` \| `"lg"` \| `"full"` | only `<nys-select>` |
| `form`         | String \| `null`                       | only `<nys-select>` |


{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-select>` component emits **three** custom Javascript events:
1.  **`nys-change`** – Fired when the select state changes. The event detail includes the value of the selected option.
2.  **`nys-focus`** – Fired when the select gains focus.
3.  **`nys-blur`** – Fired when the select loses focus.

### Event details
The `nys-change` event includes a detail object with the following properties:

  - id (string): The id of the select.
  - value (string): The value of the selected option.

You can listen to these events using JavaScript:
{% set code %}
// Select the select component
const select = document.querySelector('nys-select');
// Listen for the 'nys-change' event
select.addEventListener('nys-change', (event) => {
  const { id, value } = event.detail;
  console.log(`Select (${id}) changed to: ${value}`);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}