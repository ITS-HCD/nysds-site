---
permalink: /components/textinput/
title: Textinput
description: Field for entering short text strings, like email, number, password, and more.
image: /assets/img/components/textinput.svg
image_alt: An illustration of a text input field.
image_header: /assets/img/components/textinput-header.svg
navOrder: 12
---

{% extends "layouts/component.njk" %}


{% block longdescription %}

The <code class="language-js">&lt;nys-textinput&gt;</code> is a reusable web component for use in New York State digital products. It allows users to input data to be collected.
{% endblock %}

{% block example %}

<nys-textinput label="This is a text input"></nys-textinput>
{% endblock %}

{% block examplecode %}

<nys-textinput label="This is a text input"></nys-textinput>
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

  - Use clear and concise labels to describe the input required.
  - Provide helper text to guide the user, but don’t rely on placeholders as a substitute for labels.
  - Validate input in real-time to catch errors early (e.g., invalid email formats).
{% endblock %}

{% block usagedont %}

  - Don't use single-line text inputs for collecting long or detailed text responses (use a textarea).
  - Don't overwhelm users with too many single-line inputs; group similar fields when possible.

{% endblock %}

{% block accessibility %}

The <code class="language-js">nys-textinput</code> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the label correctly.
  - Keyboard navigation support, allowing users to tab into the input using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Width
If no `width` is provided, the `nys-textinput` will default to `full`. Supported widths are `sm`, `md`, `lg`, and `full`.

Width full will take up the full width of the parent container.

If an invalid option is assigned to `width`, it will be ignored and default to `full`.

<nys-textinput width="sm" label="This label is sm"></nys-textinput>

<details>
<summary>Example Code</summary>

```html
<nys-textinput width="sm" label="This label is sm"></nys-textinput>

```

</details>


### Type
Accepted types are: `text`, `email`, `number`, `password`, `search`, `tel`, `url`

Any other input defaults to `type="text"`

<nys-textinput type="password" label="Password"></nys-textinput>

<details>
<summary>Example Code</summary>

```html
<nys-textinput type="password" label="Password"></nys-textinput>

```

</details>



### Placeholder

<nys-textinput label="placeholder" placeholder="this is a placeholder"></nys-textinput>

<details>
<summary>Example Code</summary>

```html
<nys-textinput label="placeholder" placeholder="this is a placeholder"></nys-textinput>

```

</details>


### Disabled

<nys-textinput label="Disabled" disabled></nys-textinput>

<details>
<summary>Example Code</summary>

```html
<nys-textinput label="Disabled" disabled></nys-textinput>

```

</details>

### Readonly

<nys-textinput label="Readonly" value="Read only value" readonly></nys-textinput>

<details>
<summary>Example Code</summary>

```html
<nys-textinput readonly label="Readonly" value="Read only value"></nys-textinput>

```

</details>


### Min Max and step

`max`, `min`, and `step` only apply when `type="number"`

<nys-textinput label="Max/Min Example" description="Must be between 0 and 100" type="number" min="0"  max="100" step="10"></nys-textinput>

<details>
<summary>Example Code</summary>

```html
<nys-textinput type="number" min="0"  max="100" step="10" label="Max/Min Example" description="Must be between 0 and 100" ></nys-textinput>

```

</details>


### Maxlength

<nys-textinput label="Max Length" description="You cannot type more than 10 characters in the below field" maxlength="10"></nys-textinput>

<details>
<summary>Example Code</summary>

```html
<nys-textinput maxlength="10" label="Max Length" description="You cannot type more than 10 characters in the below field"></nys-textinput>

```

</details>


### Pattern

Takes any valid regex value.

<nys-textinput placeholder="N00000000" label="Please enter your Employee number" description="include the N prefix" maxlength="9" pattern="N[0-9]{8}" id="nID"></nys-textinput>

<details>
<summary>Example Code</summary>

```html
<nys-textinput placeholder="N00000000" pattern="N[0-9]{8}" label="Please enter your Employee number" description="include the N prefix" maxlength="9" id="nID"></nys-textinput>

```

</details>


### Error Message
Set an error message and choose to activate it. The error message will appear ONLY when the <code class="language-js">showError</code> attribute is set to <code class="language-js">true</code>. Setting only <code class="language-js">errorMessage</code> will not display the error message by default.

<nys-textinput showError errorMessage="Cannot be left blank" label="Full Name"></nys-textinput>

<details>
<summary>Example Code</summary>

```html
<nys-textinput showError errorMessage="Cannot be left blank" label="Full Name"></nys-textinput>

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
      <td><code>id</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>string ("email", "number", "password", "search", "tel", "text", "url")</td>
      </td>
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
      <td><code>pattern</code></td>
      <td>REGEX</td>
    </tr>
    <tr>
      <td><code>maxlength</code></td>
      <td>integer</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>string ('sm", "md", "lg", "full")</td>
    </tr>
    <tr>
      <td><code>step</code></td>
      <td>integer</td>
    </tr>
    <tr>
      <td><code>min</code></td>
      <td>integer</td>
    </tr>
    <tr>
      <td><code>max</code></td>
      <td>integer</td>
    </tr>
    <tr>
      <td><code>showError</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>errorMessage</code></td>
      <td>string</td>
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

<p>The <code class="language-js">nys-textinput</code> component emits <strong>three</strong> custom Javascript events:</p>
<ol>
<li><strong><code>nys-checkValidity</code></strong> – Fired when the textinput state changes.</li>
<li><strong><code>focus</code></strong> – Fired when the textinput gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the textinput loses focus.</li>
</ol>

You can listen to these events using JavaScript:
{% highlight "js" %}
// Select the textinput component
const textinput = document.querySelector('nys-textinput');

// Listen for the 'nys-checkValidity' event
textinput.addEventListener('nys-checkValidity', (event) => {
  console.log('Text input changed:', event.target.value);
});
{% endhighlight %}
{% endblock %}

{% block updates %}{% endblock %}