---
permalink: /components/textinput/
title: Text Input
description: Field for entering short text strings, like email, number, password, and more.
image: /assets/img/components/textinput.svg
image_alt: An illustration of a text input field.
image_header: /assets/img/components/textinput-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=3981-10587
navOrder: 15
---

{% extends "layouts/component.njk" %}


{% block longdescription %}

The `<nys-textinput>` is a reusable web component for use in New York State digital products. It allows users to input data to be collected.

{% endblock %}

{% block example %}
  {% set preview %}<nys-textinput label="This is a text input"></nys-textinput>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
  - To collect short, single-line text input from the user (e.g., names, email addresses, or short descriptions).
  - For open-ended, user-specific input.
### When to consider something else
  - If you need to collect multiple lines of input, use textarea instead.
  - If the input can be chosen from predefined options, use select, radiobutton, or checkbox.
{% endblock %}

{% block usagedo %}

  - Use clear, concise labels that describe the expected input.
  - Add helper texts with the `description` property for context. 
  - Validate input live to catch errors early (e.g., invalid email formats).
{% endblock %}

{% block usagedont %}

  - Don’t use for long or detailed responses (use `<nys-textarea>` instead).
  - Don’t overwhelm users with too many fields; group related inputs.
  - Don’t use placeholders as labels.

{% endblock %}

{% block accessibility %}

The `<nys-textinput>` component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the label correctly.
  - Keyboard navigation support, allowing users to tab into the input using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Width
If no `width` is provided, the `<nys-textinput>` will default to `full`. Supported widths are `sm`, `md`, `lg`, and `full`.

Width full will take up the full width of the parent container.

If an invalid option is assigned to `width`, it will be ignored and default to `full`.

  {% set preview %}<nys-textinput width="sm" label="This label is sm"></nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Type
Accepted `types` are: `text`, `email`, `number`, `password`, `search`, `tel`, `url`

Any other input defaults to `type="text"`

  {% set preview %}<nys-textinput type="password" label="Password"></nys-textinput>
{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Placeholder
  {% set preview %}<nys-textinput label="Placeholder" placeholder="this is a placeholder"></nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Disabled
  {% set preview %}<nys-textinput label="Disabled" disabled></nys-textinput>
{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Readonly
  {% set preview %}<nys-textinput readonly label="Readonly" value="Read only value"></nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Min Max and step

`max`, `min`, and `step` only apply when `type="number"`

  {% set preview %}<nys-textinput type="number" min="0"  max="100" step="10" label="Max/Min Example" description="Must be between 0 and 100" ></nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Maxlength
  {% set preview %}<nys-textinput maxlength="10" label="Max Length" description="You cannot type more than 10 characters in the below field"></nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Pattern
Takes any valid regex value.
  {% set preview %}<nys-textinput placeholder="N00000000" pattern="N[0-9]{8}" label="Please enter your Employee number" description="include the N prefix" maxlength="9" id="nID"></nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Required
Set `required` to `<nys-textinput>` to make it mandatory.
  {% set preview %}<nys-textinput name="myTextInput7" required label="label"></nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Optional
Adding the `optional` prop will add an optional flag to the input.
  {% set preview %}<nys-textinput name="myTextInput7" optional label="label"></nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Slotted Description
Add a description using the `description` prop for plain text, or use the description slot to include custom HTML for more flexibility.
Takes any valid regex value.
  {% set preview %}<nys-textinput name="descriptionSlot" label="Label">
  <label slot="description">Slot: description</label>
</nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Slotted Button
  You can add a button to the input by adding a `slot="startButton"` or `slot="endButton"`. This will add a button to the left or right of the input respectively.

  **Note**: Use a `<nys-button>` for the slotted button. Do not use both `startButton` and `endButton` on the same input.

  **Note**: The slotted button will automatically be `size="sm"` and `variant="filled"` and support the disabled state of the input.

  **Note**: Use `width="lg"` or `width="full"` on `<nys-textinput>` to give users enough space to enter text when a button is present.

  {% set preview %}<nys-textinput 
  name="searchInput"
  type="search" 
  placeholder="Search"
  id="searchInput"
>
  <nys-button
  slot="endButton"
  type="submit"
  label="Search"
  prefixIcon="search"
  id="searchButton"
  ></nys-button>
</nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Error Message
  Set an error message and choose to activate it. The error message will appear ONLY when the `showError` attribute is set to `true`. Setting only `errorMessage` will not display the error message by default.

  {% set preview %}<nys-textinput showError errorMessage="Cannot be left blank" label="Full Name"></nys-textinput>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property       | Type                                                                                    |
|----------------|-----------------------------------------------------------------------------------------|
| `id`           | String                                                                                  |
| `name`         | String                                                                                  |
| `label`        | String                                                                                  |
| `description`  | String                                                                                  |
| `disabled`     | boolean                                                                                 |
| `errorMessage` | String                                                                                  |
| `form`         | String                                                                                  |
| `max`          | integer                                                                                 |
| `maxlength`    | integer                                                                                 |
| `min`          | integer                                                                                 |
| `optional`     | boolean                                                                                 |
| `pattern`      | REGEX                                                                                   |
| `placeholder`  | String                                                                                  |
| `readonly`     | boolean                                                                                 |
| `required`     | boolean                                                                                 |
| `showError`    | boolean                                                                                 |
| `step`         | integer                                                                                 |
| `type`         | `"email"` \| `"number"` \| `"password"` \| `"search"` \| `"tel"` \| `"text"` \| `"url"` |
| `value`        | String                                                                                  |
| `width`        | `"sm"` \| `"md"` \| `"lg"` \| `"full"`                                                  |


{% endblock %}

{% block cssvariables %}


{% endblock %}

{% block events %}

The `<nys-textinput>` component emits **three** custom Javascript events:
1.  **`nys-input`** – Fired when the textinput state changes.
2.  **`nys-focus`** – Fired when the textinput gains focus.
3.  **`nys-blur`** – Fired when the textinput loses focus.

#### Event details
The `nys-input` event includes a detail object with the following properties:
  - id (string): The id of the textarea.
  - value (string): The currently selected text.

You can listen to these events using JavaScript:
{% set code %}// Select the textinput component
const textinput = document.querySelector('nys-textinput');
// Listen for the 'nys-input' event
textinput.addEventListener('nys-input', (event) => {
  const { id, value } = event.detail;
  console.log(`Text input (${id}) changed:`, value);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}