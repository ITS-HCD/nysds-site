---
permalink: /components/toggle/
title: Toggle
description: Switch component for enabling or disabling a setting.
image: /assets/img/components/toggle.svg
image_alt: An illustration of a toggle switch.
image_header: /assets/img/components/toggle-header.svg
navOrder: 13
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

  The <code class="language-js">&lt;nys-toggle&gt;</code> component is a reusable web component for use in New York State digital products. It allows users to toggle a toggle switch "on" or "off".
{% endblock %}

{% block example %}
<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-toggle 
      label="Dark Mode"
      description="Enable dark mode for a more comfortable viewing experience."
      name="toggle-switch"
      value="access">
    </nys-toggle>
  </div>

  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <button class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_right" size="xl"></nys-icon>
        <p>Example Code</p>
      </button>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy Code</div>
    </div>
    <div class="code-preview__code-container">
      <div class="code-preview__code-block">
        {% highlight "html" %}
<nys-toggle 
  label="Dark Mode"
  description="Enable dark mode for a more comfortable viewing experience."
  name="toggle-switch"
  value="access">
</nys-toggle>
        {% endhighlight %}
      </div>
    </div>
    <div class="code-preview__code-tip">
      <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
    </div>    
  </div>
</div>
{% endblock %}


{% block usage %}

### When to use this component
  - Consider using nys-toggle when expecting immediate UI effects when turning switch on/off.
  - Ideal for settings pages, feature toggles, or user preferences.
### When to consider something else
  - Consider using nys-checkbox or nys-radiobutton to select one or more options from a list where the selections
  - Use nys-checkbox for forms, especially when you're not expecting immediate action.
{% endblock %}

{% block usagedo %}

  - Provide a clear label and optional description to explain the toggle's purpose.
  - Show the UI for toggle’s state is visually distinct for on/off positions.

{% endblock %}

{% block usagedont %}

  - Use toggles for complex multi-state options.
  - Overuse toggles for trivial settings that do not impact user experience significantly.
  - Hide labels entirely unless another accessible method of describing the toggle exists.

{% endblock %}

{% block accessibility %}

The <code class="language-js">nys-toggle</code> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the toggle correctly.
  - Keyboard navigation support, allowing users to toggle the toggle switch using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Sizes
<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-toggle label='Small (size="sm")' name="toggle-switch" value="access" size="sm"></nys-toggle>
    </br>
    <nys-toggle label='Medium (size="md")' name="toggle-switch" value="access" size="md"></nys-toggle>
  </div>

  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <button class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_right" size="xl"></nys-icon>
        <p>Example Code</p>
      </button>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy Code</div>
    </div>
    <div class="code-preview__code-container">
      <div class="code-preview__code-block">
        {% highlight "html" %}
<nys-toggle size="sm" label='Small (size="sm")' name="toggle-switch" value="access"></nys-toggle>
<nys-toggle size="md" label='Medium (size="md")' name="toggle-switch" value="access"></nys-toggle>
        {% endhighlight %}
      </div>
    </div>
  </div>
</div>


### Disable Icon
<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-toggle label="No Icon on the toggle" name="toggle-switch" value="access" noIcon></nys-toggle>
  </div>

  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <button class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_right" size="xl"></nys-icon>
        <p>Example Code</p>
      </button>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy Code</div>
    </div>
    <div class="code-preview__code-container">
      <div class="code-preview__code-block">
        {% highlight "html" %}
<nys-toggle noIcon label="No Icon on the toggle" name="toggle-switch" value="access"></nys-toggle>
        {% endhighlight %}
      </div>
    </div>
  </div>
</div>

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
      <td><code>name</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>checked</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>noIcon</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>string (sm, md)</td>
    </tr>
    <tr>
      <td><code>form</code></td>
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
    <tr>
      <td><code>--nys-toggle-height</code></td>
      <td>Height of the toggle switch.</td>
    </tr>
    <tr>
      <td><code>--nys-toggle-border-radius</code></td>
      <td>Border radius of the toggle switch.</td>
    </tr>
    <tr>
      <td><code>--nys-toggle-background-color</code></td>
      <td>Background color of the toggle switch when it is off.</td>
    </tr>
    <tr>
      <td><code>--nys-toggle-checked-background-color</code></td>
      <td>Background color of the toggle switch when it is on.</td>
    </tr>
  </tbody>
  </table>

{% endblock %}

{% block events %}
<p>The <code class="language-js">&lt;nys-toggle&gt;</code> component emits three custom Javascript events:</p>
<ol>
<li><strong><code>change</code></strong> – Fired when the toggle state changes (checked/unchecked).</li>
<li><strong><code>focus</code></strong> – Fired when the toggle gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the toggle loses focus.</li>
<li><strong><code>keydown</code></strong> – Fired when a key is pressed while the toggle is focused.</li>
</ol>

You can listen to these events using JavaScript:
<div class="code-preview-container">
  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <button class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_down" size="xl"></nys-icon>
        <p>Sample Code</p>
      </button>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy Code</div>
    </div>
    <div class="code-preview__code-container expanded">
      <div class="code-preview__code-block">

{% highlight "js" %}
// Select the toggle component
  const toggle = document.querySelector('nys-toggle');
      
// Listen for the 'change' event
toggle.addEventListener('change', (event) => {
  console.log('Checkbox changed:', event.target.checked);
});
{% endhighlight %}
      
  </div>
    </div>
  </div>
</div>

{% endblock %}

{% block updates %}{% endblock %}