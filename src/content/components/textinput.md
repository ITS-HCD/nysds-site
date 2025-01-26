---
title: Textinput
description: Field for entering short text strings, like email, number, password, and more.
---

{% extends "layouts/component.njk" %}


{% block longdescription %}
The `nys-textinput` is a reusable web component for use in New York State digital products. It allows users to input data to be collected.
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
### Option 1


### Option 2

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
  </tbody>
</table>

{% endblock %}


{% block cssvariables %}
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