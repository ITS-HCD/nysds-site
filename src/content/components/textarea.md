---
permalink: /components/textarea/
title: Text Area
description: Field for entering multiple lines of text.
image: /assets/img/components/textarea.svg
image_alt: An illustration of a textarea field.
image_header: /assets/img/components/textarea-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=3981-10108
navOrder: 17
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-textarea>` is a reusable web component for use in New York State digital products. It allows users to input multiple lines of text to be collected.

{% endblock %}

{% block example %}
  {% set preview %}<nys-textarea
  id="quote"
  label="Enter your favorite quote:"
  value="Majorities, of course, start with minorities.">
</nys-textarea>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block usage %}

### When to use this component
  - To collect multiple lines of text input from the user (e.g., comments, descriptions).
  - For open-ended input specific to the user (e.g., personal notes, feedback).
### When to consider something else
  - If you need to collect a single line of text input, use an input field instead.
  - If the input should be selected from predefined options, use a dropdown or radio button.
{% endblock %}

{% block usagedo %}

  - Use the `<nys-textarea>` for long-form or multi-line input, like descriptions or feedback.
  - Use when users need space to write detailed, precise responses.
{% endblock %}

{% block usagedont %}

  - Don't use the `<nys-textarea>` for short or single-line inputs (use `<nys-input>` instead).
  - Don’t use for selecting predefined values (use dropdowns or other inputs).

{% endblock %}

{% block accessibility %}

The `<nys-textarea>` component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the label correctly.
  - Keyboard navigation support, allowing users to tab into the input using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Rows
The `rows` attribute specifies the visible height of a text area, in number of lines.

The default value is `4`

  {% set preview %}<nys-textarea label="This textarea renders with 6 rows" rows="6"></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Width
If no `width` is provided, the `<nys-textarea>` will default to `full`. Supported widths are `sm`, `md`, `lg`, and `full`. Setting property `width="full"` will take up the full width of the parent container.

If an invalid option is assigned to `width`, it will be ignored and default to `width="full"`

  {% set preview %}<nys-textarea width="md" label="This textarea is md"></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Resize Behavior
By default a user can resize the `<nys-textarea>` vertically. If you want to disallow resizing altogether add `resize="none"`.

**Note:** `resize` is not affected by setting `<nys-textarea>` to `disabled` or `readonly` as they are independent.

  {% set preview %}<nys-textarea label="This textarea is not resizable" resize="none"></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Description
You can include a description to provide additional context for the user. This is useful for providing instructions or clarifying the input. You can include a description as a property or slot it into the element.

  {% set preview %}<nys-textarea label="Label" description="description property"></nys-textarea>
<br />
<nys-textarea label="Label">
  <p slot="description">Description slot 
    <a href="https://ny.gov">providing more options</a>
  </p>
</nys-textarea>{% endset %}
  {% set code %}<nys-textarea label="Label" description="description property"></nys-textarea>
<nys-textarea label="Label">
  <p slot="description">Description slot 
    <a href="https://ny.gov">providing more options</a>
  </p>
</nys-textarea>{% endset %}
  {% include "partials/code-preview.njk" %}

### Placeholder 
  {% set preview %}<nys-textarea label="Placeholder" placeholder="this is a placeholder"></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Disabled 
  {% set preview %}<nys-textarea label="Disabled textarea" disabled></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Readonly
  {% set preview %}<nys-textarea readonly label="Readonly textarea" value="This text cannot be changed"></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Max length
  {% set preview %}<nys-textarea maxlength="10" label="Max Length" description="You cannot type more than 10 characters in the below field"></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Required
  {% set preview %}<nys-textarea required label="Required textarea"></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Optional
  {% set preview %}<nys-textarea optional label="Optional textarea"></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Error Message
To display an error message, pass in the `showError` property to the `<nys-textarea>` component. Setting `errorMessage` does not display the message without `showError` set to true.

  {% set preview %}<nys-textarea showError errorMessage="You did not provide a value for this field." label="Describe the incident" ></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property       | Type                                   |
|----------------|----------------------------------------|
| `id`           | String                                 |
| `name`         | String                                 |
| `label`        | String                                 |
| `description`  | String                                 |
| `disabled`     | boolean                                |
| `errorMessage` | String                                 |
| `maxLength`    | integer                                |
| `optional`     | boolean                                |
| `placeholder`  | String                                 |
| `readonly`     | boolean                                |
| `required`     | boolean                                |
| `resize`       | `"vertical"` |\ `"none"`               |
| `rows`         | integer                                |
| `showError`    | boolean                                |
| `value`        | String                                 |
| `width`        | `"sm"` \| `"md"` \| `"lg"` \| `"full"` |
| `form`         | String                                 |

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-textarea>` component emits **four** custom Javascript events:

1.  **`nys-input`** – Fired when the textarea state changes.
2.  **`nys-focus`** – Fired when the textarea gains focus.
3.  **`nys-blur`** – Fired when the textarea loses focus.
4.  **`nys-select`** – Fired when the user selects text within the textarea.

#### Event details
The `nys-input` and `nys-select` event includes a detail object with the following properties:
  - id (string): The id of the textarea.
  - value (string): The currently selected text.

You can listen to these events using JavaScript:
{% set code %}// Select the textarea component
const textarea = document.querySelector('nys-textarea');
// Listen for the 'nys-input' event
textarea.addEventListener('nys-input', (event) => {
  const { id, value } = event.detail;
  console.log(`Textarea (${id}) changed:`, value);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}