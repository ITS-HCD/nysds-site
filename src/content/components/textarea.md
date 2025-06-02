---
permalink: /components/textarea/
title: Textarea
description: Field for entering multiple lines of text.
image: /assets/img/components/textarea.svg
image_alt: An illustration of a textarea field.
image_header: /assets/img/components/textarea-header.svg
navOrder: 12
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-textarea&gt;</code> is a reusable web component for use in New York State digital products. It allows users to input multiple lines of text to be collected.
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

  - Use the nys-textarea for long-form text like descriptions or detailed feedback.
  - Use the nys-textarea when precise user input is required in multiple lines.
{% endblock %}

{% block usagedont %}

  - Don't use the nys-textarea for short or single-line inputs (use nys-input instead).
  - Don't use the nys-textarea for data selection tasks (e.g., dropdowns or predefined options).

{% endblock %}

{% block accessibility %}

The <code class="language-js">&lt;nys-textarea&gt;</code> component includes the following accessibility-focused features:

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
If no <code class="language-js">width</code> is provided, the <code class="language-js">&lt;nys-textarea&gt;</code> will default to `full`. Supported widths are `sm`, `md`, `lg`, and `full`.
Setting property <code class="language-js">width="full"</code> will take up the full width of the parent container.

<p style="display:flex; align-items:top; gap:10px; flex-wrap:wrap;"><nys-icon name="info" size="2xl"></nys-icon>If an invalid option is assigned to <code class="language-js">width</code>, it will be ignored and default to <code class="language-js">width="full"</code></p>

  {% set preview %}<nys-textarea width="md" label="This textarea is md"></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Resize
By default a user can resize the <code class="language-js">&lt;nys-textarea&gt;</code> vertically. If you want to disallow resizing altogether add <code class="language-js">resize="none"</code>

<p style="display:flex; align-items:top; gap:10px; flex-wrap:wrap;"><nys-icon name="info" size="2xl"></nys-icon> <code class="language-js">resize</code> is not affected by setting <code class="language-js">&lt;nys-textarea&gt;</code> to <code class="language-js">disabled</code> or <code class="language-js">readonly</code> as they are independent.</p>

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

### Error Message
To display an error message, pass in the <code class="language-js">showError</code> property to the <code class="language-js">&lt;nys-textarea&gt;</code> component. Setting <code class="language-js">errorMessage</code> does not display the message without <code class="language-js">showError</code> set to true.

  {% set preview %}<nys-textarea showError errorMessage="You did not provide a value for this field." label="Describe the incident" ></nys-textarea>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block properties %}

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>label</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>errorMessage</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>showError</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>readonly</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>required</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>form</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>maxLength</code></td>
      <td>integer</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>string ("sm", "md", "lg", "full")</td>
    </tr>
    <tr>
      <td><code>rows</code></td>
      <td>integer</td>
    </tr>
    <tr>
      <td><code>resize</code></td>
      <td>string ("none")</td>
    </tr>
  </tbody>
</table>

{% endblock %}
[[TODO]]
<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--nys-toggle-width</code></td>
      <td>Width of the toggle switch.</td>
    </tr>
  </tbody>
  </table>

{% block cssvariables %}


{% endblock %}

{% block events %}

<p>The <code class="language-js">&lt;nys-textarea&gt;</code> component emits <strong>three</strong> custom Javascript events:</p>
<ol>
<li><strong><code>nys-checkValidity</code></strong> – Fired when the textarea state changes.</li>
<li><strong><code>focus</code></strong> – Fired when the textarea gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the textarea loses focus.</li>
</ol>

You can listen to these events using JavaScript:
{% set code %}// Select the textarea component
const textarea = document.querySelector('nys-textarea');
// Listen for the 'nys-checkValidity' event
textarea.addEventListener('nys-checkValidity', (event) => {
  console.log('Text input changed:', event.target.value);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}