---
permalink: /components/textarea/
title: Textarea
description: Field for entering multiple lines of text.
image: /assets/img/components/textarea.svg
image_alt: An illustration of a textarea field.
image_header: /assets/img/components/textarea-header.svg
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-textarea&gt;</code> is a reusable web component for use in New York State digital products. It allows users to input multiple lines of text to be collected.
{% endblock %}

{% block example %}

<nys-textarea id="quote" label="Enter your favorite quote:" value="Majorities, of course, start with minorities."></nys-textarea>
{% endblock %}

{% block examplecode %}

<nys-textarea
  id="quote"
  label="Enter your favorite quote:"
  value="Majorities, of course, start with minorities."
></nys-textarea>
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

The <code class="language-js">nys-textarea</code> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the label correctly.
  - Keyboard navigation support, allowing users to tab into the input using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Rows
The `rows` attribute specifies the visible height of a text area, in number of lines.

The default value is `4`

<nys-textarea label="This textarea renders with 6 rows" rows="6"></nys-textarea>

<details>
<summary>Example Code</summary>

```html
<nys-textarea label="This textarea renders with 6 rows" rows="6"></nys-textarea>

```

</details>

### Width
If no `width` is provided, the `nys-textarea` will default to `full`. Supported widths are `sm`, `md`, `lg`, and `full`.

`width="full"` will take up the full width of the parent container.

If an invalid option is assigned to `width`, it will be ignored and default to `full`.

<nys-textarea width="md" label="This textarea is md"></nys-textarea>

<details>
<summary>Example Code</summary>

```html
<nys-textarea width="md" label="This textarea is md"></nys-textarea>

```

</details>

### Resize
By default a user can resize the `nys-textarea` vertically. If you want to disallow resizing altogether add `resize="none"`

Note: `resize` is not affected by setting `nys-textarea` to `disabled` or `readonly` and they are independent.

<nys-textarea label="This textarea is not resizable" rows="4" resize="none"></nys-textarea>

<details>
<summary>Example Code</summary>

```html
<nys-textarea label="This textarea is not resizable" resize="none"></nys-textarea>

```

</details>

### Description
You can include a description to provide additional context for the user. This is useful for providing instructions or clarifying the input. You can include a description as a property or slot it into the element.

<nys-textarea label="Label" description="description property"></nys-textarea>

<nys-textarea label="Label">
  <p slot="description">Description slot <a href="https://ny.gov">providing more options</a></p>
</nys-textarea>

<details>
<summary>Example Code</summary>

```html
<nys-textarea label="Label" description="description property"></nys-textarea>

<nys-textarea label="Label">
  <p slot="description">Description slot <a href="https://ny.gov">providing more options</a></p>
</nys-textarea>


```

</details>


### Disabled 

<nys-textarea label="Disabled textarea" disabled></nys-textarea>

<details>
<summary>Example Code</summary>

```html
<nys-textarea label="Disabled textarea" disabled></nys-textarea>

```

</details>

### Readonly

<nys-textarea label="Readonly teextarea" value="This text cannot be changed" readonly></nys-textarea>

<details>
<summary>Example Code</summary>

```html
<nys-textarea readonly label="Readonly teextarea" value="This text cannot be changed"></nys-textarea>

```

</details>


### Max length

<nys-textarea label="Max Length" description="You cannot type more than 10 characters in the below field" maxlength="10"></nys-textarea>

<details>
<summary>Example Code</summary>

```html
<nys-textarea maxlength="10" label="Max Length" description="You cannot type more than 10 characters in the below field"></nys-textarea>

```

</details>

### Error Message
To display an error message, pass in the `showError` property to the `nys-select` component. Setting `errorMessage` does not display the message without `showError` set to true.


<nys-textarea label="Describe the incident" showError errorMessage="You did not provide a value for this field."></nys-textarea>

<details>
<summary>Example Code</summary>

```html
<nys-textarea showError errorMessage="You did not provide a value for this field." label="Describe the incident" ></nys-textarea>

```

</details>

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

<p>The <code class="language-js">nys-textarea</code> component emits <strong>three</strong> custom Javascript events:</p>
<ol>
<li><strong><code>nys-checkValidity</code></strong> – Fired when the textarea state changes.</li>
<li><strong><code>focus</code></strong> – Fired when the textarea gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the textarea loses focus.</li>
</ol>

You can listen to these events using JavaScript:
{% highlight "js" %}
// Select the textarea component
const textarea = document.querySelector('nys-textarea');

// Listen for the 'nys-checkValidity' event
textarea.addEventListener('nys-checkValidity', (event) => {
  console.log('Text input changed:', event.target.value);
});
{% endhighlight %}
{% endblock %}

{% block updates %}{% endblock %}