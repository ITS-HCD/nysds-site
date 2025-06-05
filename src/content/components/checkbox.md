---
permalink: /components/checkbox/
title: Checkbox
description: A checkbox is a form input for users to select options (zero, one, or multiple) from a collection of choices.
image: /assets/img/components/checkbox.svg
image_alt: An illustration of a checkbox.
image_header: /assets/img/components/checkbox-header.svg
navOrder: 5
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-checkbox>` component is a form input for users to select options (zero, one, or multiple) from a collection of choices. It provides users with the ability to toggle a binary state (checked/unchecked). Indeterminate states are not (currently) supported.

**Optional:** `<nys-checkboxgroup>` can be used to group multiple checkboxes so they function as a single form control.

{% endblock %}

{% block example %}
  {% set preview %}<nys-checkboxgroup label="Select your favorite New York landmarks" description="Last year's winner is not eligible to win again.">
      <nys-checkbox name="landmarks" value="adirondacks" label="Adirondacks" checked></nys-checkbox>
      <nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" checked></nys-checkbox>
      <nys-checkbox name="landmarks" value="catskills" label="Catskills"></nys-checkbox>
      <nys-checkbox name="landmarks" value="niagara-falls" label="Niagara Falls"></nys-checkbox>
      <nys-checkbox name="landmarks" value="coney-island" label="Coney Island"></nys-checkbox>
      <nys-checkbox name="landmarks" value="statue-liberty" label="Statue of Liberty (Last Year's Winner)" description="Disabled as it was the winner of the previous year." disabled></nys-checkbox>
    </nys-checkboxgroup>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
  - When collecting binary answers in a form.
  - When obtaining confirmation from users.
  - When allowing users to select multiple options from a list.

### When to consider something else
  - Use a toggle when changing the state of a binary input immediately changes the system's state; such as enabling Dark Mode.
  - When users need to select only one option consider a radio button (1-6 choices) or select (7 or more choice) instead.
{% endblock %}

{% block usagedo %}

  - Use checkboxes for binary decisions (agree/disagree).
  - Use checkboxes for multi-select lists (like selecting interests).
{% endblock %}

{% block usagedont %}

 - Avoid using when you have more than 10 options to choose from; instead, consider a multiselect dropdown (coming soon in NYSDS, contact Design System team for guidance).
 - Don't change status of another checkbox when another one is clicked.
{% endblock %}

{% block accessibility %}

The `<nys-checkbox>` component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the checkbox correctly.
  - Keyboard navigation support, allowing users to toggle the checkbox using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Checkbox group

The `<nys-checkboxgroup>` component can be used to group multiple checkboxes so they function as a single form control. This is useful when you want to allow users to select multiple options from a list.

{% set preview %}<nys-checkboxgroup label="Do you attest to the following:" description="By checking below you agree to our terms">
<nys-checkbox label="I have read the terms and conditions." id="terms-conditions" name="terms" value="terms-conditions"></nys-checkbox>
<nys-checkbox label="I agree to the NDA" id="legal" name="legal" value="legal"></nys-checkbox>
</nys-checkboxgroup>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Disabled

{% set preview %}<nys-checkbox disabled label="I agree to the terms and conditions" description="This option is currently unavailable." name="earlyVoting" value="early-voting"></nys-checkbox>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Size

Set the size property of the `<nys-checkboxgroup>` to have all `<nys-checkbox>` be the same size. Our current sizes are: 
- `sm` : Set to 24px in width and height 
- `md` : The `default` size. Set to 32px in width and height.

{% set preview %}
<nys-checkboxgroup label="Select your favorite New York landmarks" description="Choose from the options below" size="sm">
<nys-checkbox label="Adirondacks" name="landmarks" value="adirondacks" checked></nys-checkbox>
<nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" checked></nys-checkbox>
<nys-checkbox name="landmarks" value="catskills" label="Catskills" checked></nys-checkbox>
<nys-checkbox name="landmarks" value="niagara-falls" label="Niagara Falls"></nys-checkbox>
<nys-checkbox name="landmarks" value="coney-island" label="Coney Island"></nys-checkbox>
<nys-checkbox label="Mount Greylock" description="This is disabled because it's not in New York." disabled></nys-checkbox>
</nys-checkboxgroup>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Tile

The `tile` prop will change the styling of the checkbox to a tile. This is useful when you want a larger clickable area for the user. 
- The `tile` prop can be applied to the `<nys-checkboxgroup>` or the `<nys-checkbox>` component. If applied to the `<nys-checkboxgroup>`, all checkboxes will be displayed as tiles. If applied to the `<nys-checkbox>`, only that checkbox will be displayed as a tile. 
- Do not use the `tile` prop on a checkbox if it is inside a `<nys-checkboxgroup>`. All checkboxes in a group should be the same size and style.

{% set preview %}
<nys-checkboxgroup label="Select your favorite New York landmarks" description="Choose from the options below" tile>
<nys-checkbox label="Adirondacks" name="landmarks" value="adirondacks" checked></nys-checkbox>
<nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" checked></nys-checkbox>
<nys-checkbox name="landmarks" value="catskills" label="Catskills" checked></nys-checkbox>
<nys-checkbox name="landmarks" value="niagara-falls" label="Niagara Falls"></nys-checkbox>
<nys-checkbox name="landmarks" value="coney-island" label="Coney Island"></nys-checkbox>
<nys-checkbox label="Mount Greylock" description="This is disabled because it's not in New York." disabled></nys-checkbox>
</nys-checkboxgroup>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Error

Set an error message and choose to activate it. Setting `errorMessage` does not display the message without boolean prop `showError`.

Errors can be assigned to both `<nys-checkboxgroup>` and individual `<nys-checkbox>` components.

{% set preview %}
<nys-checkboxgroup label="Select your favorite New York landmarks" description="Choose from the options below" showError errorMessage="You must select at least one option to continue.">
<nys-checkbox label="Adirondacks" name="landmarks" value="adirondacks" ></nys-checkbox>
<nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" ></nys-checkbox>
<nys-checkbox name="landmarks" value="catskills" label="Catskills" ></nys-checkbox>
</nys-checkboxgroup>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Slotted Description

When the description requires more complexity than a simple string, use the description slot to hold the text. This allows the developer to include HTML in the description, such as anchors or bold text.

  {% set preview %}<nys-checkbox label="Subscribe to NYS Government Updates" id="subscribe-updates" name="subscribe" value="email-updates">
  <label slot="description">Read about our <a href="https://www.ny.gov/" target="__blank">previous updates</a></label>
</nys-checkbox>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property       | Type             |
|----------------|------------------|
| `checked`      | boolean          |
| `disabled`     | boolean          |
| `required`     | boolean          |
| `label`        | string           |
| `description`  | string           |
| `name`         | string           |
| `value`        | string           |
| `showError`    | boolean          |
| `errorMessage` | string           |
| `id`           | string           |
| `size`         | `"sm"` \| `"md"` |

{% endblock %}
[[TODO]]
| Variable             | Description                 |
|----------------------|-----------------------------|
| `--nys-toggle-width` | Width of the toggle switch. |

{% block cssvariables %}


{% endblock %}

{% block events %}

The `<nys-checkbox>` component emits **four** custom Javascript events:
1.  **`change`** – Fired when the checkbox state changes (checked/unchecked).
2.  **`focus`** – Fired when the checkbox gains focus.
3.  **`blur`** – Fired when the checkbox loses focus.
4.  **`keydown`** – Fired when a key is pressed while the checkbox is focused.

You can listen to these events using JavaScript:
{% set code %}// Select the checkbox component
const checkbox = document.querySelector('nys-checkbox');
// Listen for the 'change' event
checkbox.addEventListener('change', (event) => {
  console.log('Checkbox changed:', event.target.checked);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
