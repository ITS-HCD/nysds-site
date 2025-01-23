---
title: Icon
description: Visual symbols used to convey meaning or action.
---

{% extends "layouts/component.njk" %}

{% block longdescription %}
{% endblock %}

{% block example %}
<nys-icon name="check_circle" size="4xl" color="var(--nys-color-success)"></nys-icon>
{% endblock %}

{% block examplecode %}
<nys-icon
  name="check_circle"
  size="4xl"
  color="var(--nys-color-success)"
>
{% endblock %}

{% block usage %}
### When to use this component
  - point 1
  - point 2
### When to consider something else
  - point 1
  - point 2
{% endblock %}

{% block usagedo %}
  - point 1
  - point 2
{% endblock %}

{% block usagedont %}
  - point 1
  - point 2
{% endblock %}

{% block accessibility %}
The <code class="language-js">nys-</code> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the toggle correctly.
  - Keyboard navigation support, allowing users to toggle the toggle switch using the keyboard.
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
<p>The <code class="language-js">&lt;nys-&gt;</code> component emits <strong>three</strong> custom Javascript events:</p>
<ol>
<li><strong><code>change</code></strong> – Fired when the toggle state changes (checked/unchecked).</li>
<li><strong><code>focus</code></strong> – Fired when the toggle gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the toggle loses focus.</li>
<li><strong><code>keydown</code></strong> – Fired when a key is pressed while the toggle is focused.</li>
</ol>

You can listen to these events using JavaScript:
{% highlight "js" %}
// Select the toggle component
  const toggle = document.querySelector('nys-toggle');

  // Listen for the 'change' event
  toggle.addEventListener('change', (event) => {
    console.log('Checkbox changed:', event.target.checked);
  });
{% endhighlight %}
{% endblock %}

{% block updates %}{% endblock %}