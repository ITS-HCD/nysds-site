---
permalink: /components/radiobutton/
title: Radiobutton
description: Form input for selecting one option from a group.
image: /assets/img/components/radiobutton.svg
image_alt: An illustration of a radiobutton.
image_header: /assets/img/components/radio-button-header.svg
navOrder: 9
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-radiobutton>` component is a reusable web component for use in New York State digital products. It provides users with the ability to choose from a group of options. Only one option can be selected at a time.

**Note:** `<nys-radiogroup>` must be used to wrap multiple radio buttons so they function as a single form control.

{% endblock %}

{% block example %}
  {% set preview %}<nys-radiogroup label="What is your primary work location?" description="This is the location you use for your in office days." size="md">
  <nys-radiobutton name="office" label="Albany" description="Upstate New York" value="albany" checked></nys-radiobutton>
  <nys-radiobutton name="office" label="Manhattan" description="New York City" value="manhattan"></nys-radiobutton>
</nys-radiogroup>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block usage %}

### When to use this component
  - When the user needs to select only one option from a list.
  - When there are 7 or fewer options to choose from (for better usability).

### When to consider something else
  - When users need to select multiple options (consider checkboxes instead).
  - When there are more than 7 options (consider a dropdown for better space utilization).
{% endblock %}

{% block usagedo %}

  - Always wrap a group of `<nys-radiobutton>` with a `<nys-radiogroup>`
  - Group radio buttons vertically for easier scanning, especially when labels are lengthy.
  - Use a clear default selection if applicable (e.g., the most common or recommended choice).
  - Provide descriptive and concise labels for each option.
  - Group related radio buttons with a heading or contextual instructions to clarify the choice.
{% endblock %}

{% block usagedont %}

  - Use radio buttons for yes/no questions (consider a toggle or checkbox).
  - Overload the user with too many radio button options; simplify or use a dropdown if needed.
  - Leave all radio buttons unselected if a default selection would help guide users.

{% endblock %}

{% block accessibility %}

The `<nys-radiobutton>` component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the radiobutton correctly.
    - `aria-checked`
    - `aria-disabled`
    - `aria-required`
  - Keyboard navigation support, allowing users to toggle the radiobutton using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Disabled

  {% set preview %}<nys-radiogroup label="Current Title:" description="Note: You cannot change your title.">
  <nys-radiobutton name="title" label="Software Engineer 1" description="<1 year experience" value="eng-1" checked disabled></nys-radiobutton>
  <nys-radiobutton name="title" label="Software Engineer 2" description="1-3 years experience" value="eng-2" disabled></nys-radiobutton>
  <nys-radiobutton name="title" label="Software Engineer 3" description="3-5 years experience" value="eng-3" disabled></nys-radiobutton>
</nys-radiogroup>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Size
Set the `size` prop of the `<nys-radiogroup>` to have all `<nys-radiobutton>` be the same size. Our current sizes are:

  - `sm`: Set to 24px in width and height
  - `md`: The default size. Set to 32px in width and height.

  {% set preview %}<nys-radiogroup label="Select your agency" description="This is the agency, department, or office you work for." size="sm">
  <nys-radiobutton name="agency" checked label="Department of Health" value="doh" ></nys-radiobutton>
  <nys-radiobutton name="agency" label="Office of Information Technology Services" value="its" ></nys-radiobutton>  
  <nys-radiobutton name="agency" label="Office of the New York State Attorney General" value="ag" ></nys-radiobutton>
</nys-radiogroup>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Tile 
  The `tile` prop will change the styling of the radio button to a tile. This is useful when you want a larger clickable area for the user.\
  Note: The `tile` prop is applied  to the `<nys-radiogroup>` component, not the `<nys-radiobutton>`. Each `<nys-radiobutton>` in the `<nys-radiogroup>` will be set to tile.

  {% set preview %}<nys-radiogroup label="Select your agency" description="This is the agency, department, or office you work for." tile>
  <nys-radiobutton name="agency" checked label="Department of Health" value="doh"></nys-radiobutton>
  <nys-radiobutton name="agency" label="Office of Information Technology Services" value="its"></nys-radiobutton>  
  <nys-radiobutton name="agency" label="Office of the New York State Attorney General" value="ag" disabled></nys-radiobutton>
</nys-radiogroup>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Error
To display an error message, pass in the `showError` property to the `<nys-radiogroup>` component. Set an error message and choose to activate it. Setting `errorMessage` does not display the message without boolean prop `showError`.

  {% set preview %}<nys-radiogroup label="What is your primary work location?" description="This is the location you use for your in office days." required showError errorMessage="You must select one of the above options to continue">
  <nys-radiobutton name="office" label="Albany" description="Upstate New York" value="albany" ></nys-radiobutton>
  <nys-radiobutton name="office" label="Manhattan" description="New York City"  value="manhattan"></nys-radiobutton>
</nys-radiogroup>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Slotted Description
When the description requires more complexity than a simple string, use the description slot to hold the text. This allows the developer to include HTML in the description, such as anchors or bold text.

Both `<nys-radiobutton>` and `<nys-radiogroup>` support the description slot.

  {% set preview %}
<nys-radiogroup label="What is your primary work location?">
  <label slot="description">This is the location you use for your <a href="https://www.ny.gov/" target="__blank">in office days.</a></label>
  <nys-radiobutton name="office" label="Albany" value="albany">
    <label slot="description">A part of <a href="https://www.ny.gov/" target="__blank">Upstate New York</a></label>      
  </nys-radiobutton>
  <nys-radiobutton name="office" label="Manhattan" value="manhattan">
    <label slot="description">A part of <a href="https://www.ny.gov/" target="__blank">New York City</a></label>      
  </nys-radiobutton>
</nys-radiogroup>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property       | Type             |
|----------------|------------------|
| `checked`      | boolean          |
| `description`  | string           |
| `disabled`     | boolean          |
| `errorMessage` | string           |
| `form`         | string           |
| `id`           | string           |
| `label`        | string           |
| `name`         | string           |
| `required`     | boolean          |
| `showError`    | boolean          |
| `size`         | `"sm"` \| `"md"` |
| `value`        | string           |

{% endblock %}

{% block cssvariables %}


{% endblock %}

{% block events %}

The `<nys-radiobutton>` component emits <strong>four</strong> custom Javascript events:

1.  **`change`** – Fired when the radiobutton state changes (checked/unchecked).
2.  **`focus`** – Fired when the radiobutton gains focus.
3.  **`blur`** – Fired when the radiobutton loses focus.
4.  **`keydown`** – Fired when a key is pressed while the radiobutton is focused.

You can listen to these events using JavaScript:
{% set code %}// Select the radiobutton component
const radiobutton = document.querySelector('nys-radiobutton');
// Listen for the 'change' event
radiobutton.addEventListener('change', (event) => {
  console.log('Radio Button changed:', event.target.checked);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}