---
permalink: /components/select/
title: Select
description: Dropdown menu for selecting a single option.
image: /assets/img/components/select.svg
image_alt: An illustration of a select dropdown.
image_header: /assets/img/components/select-header.svg
navOrder: 10
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-select&gt;</code> is a reusable web component for use in New York State digital products. It allows users to select data from a dropdown to be collected. It accepts the child element <code class="language-js">&lt;nys-option&gt;</code> to define the options in the dropdown.
{% endblock %}

{% block example %}

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-select label="Select your favorite borough" id="borough">
      <nys-option value="bronx" label="The Bronx"></nys-option>
      <nys-option value="brooklyn" label="Brooklyn"></nys-option>
      <nys-option value="manhattan" label="Manhattan"></nys-option>
      <nys-option value="staten_island" label="Staten Island"></nys-option>
      <nys-option value="queens" label="Queens"></nys-option>      
    </nys-select>
  </div>

  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <div class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_right" size="xl"></nys-icon>
        <p>Example Code</p>
      </div>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy Code</div>
    </div>
    <div class="code-preview__code-container">
      <div class="code-preview__code-block">
        {% highlight "html" %}
<nys-select label="Select your favorite borough" id="borough">
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>      
</nys-select>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
      </div>
    </div>
  </div>
</div>

{% endblock %}

{% block usage %}

### When to use this component
  - When you need to collect data from a dropdown
  - When you need to provide a list of options for users to select a single option from
### When to consider something else
  - When you need to collect multiple items from a list
{% endblock %}

{% block usagedo %}

  - Use the `nys-option` component to define the options in the dropdown
{% endblock %}

{% block usagedont %}

  - Don't use the native `<option>` element in the `nys-select` component

{% endblock %}

{% block accessibility %}

The <code class="language-js">nys-select</code> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the select dropdown correctly.
  - Keyboard navigation support, allowing users to tab to the `nys-select` using the keyboard and spacebar to select an option.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Disabled
<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-select label="Select your favorite borough" disabled>
      <nys-option value="bronx" label="The Bronx"></nys-option>
      <nys-option value="brooklyn" label="Brooklyn"></nys-option>
      <nys-option value="manhattan" label="Manhattan"></nys-option>
      <nys-option value="staten_island" label="Staten Island"></nys-option>
      <nys-option value="queens" label="Queens"></nys-option>  
    </nys-select>
  </div>

  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <div class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_right" size="xl"></nys-icon>
        <p>Example Code</p>
      </div>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy Code</div>
    </div>
    <div class="code-preview__code-container">
      <div class="code-preview__code-block">
        {% highlight "html" %}
<nys-select label="Select your favorite borough" disabled>
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>  
</nys-select>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
      </div>
    </div>
  </div>
</div>

### Width
The following <code class="language-js">width</code> options are available:

  - `sm` (Small): 88px, ideal for compact layouts.
  - `md` (Medium): 200px, ideal for balanced designs.
  - `lg` (Large): 384px, suitable for displaying longer content.
  - `full` (Full Width): default size. Expands to fill the available space.

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-select label="Select your favorite width" description="Valid widths are sm, md, lg, and full" width="sm">
      <nys-option value="sm" label="sm"></nys-option>
      <nys-option value="md" label="md"></nys-option>
      <nys-option value="lg" label="lg"></nys-option>
      <nys-option value="full" label="full"></nys-option>
    </nys-select>
  </div>

  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <div class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_right" size="xl"></nys-icon>
        <p>Example Code</p>
      </div>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy Code</div>
    </div>
    <div class="code-preview__code-container">
      <div class="code-preview__code-block">
        {% highlight "html" %}
<nys-select label="Select your favorite width" description="Valid widths are sm, md, lg, and full" width="sm">
  <nys-option value="sm" label="sm"></nys-option>
  <nys-option value="md" label="md"></nys-option>
  <nys-option value="lg" label="lg"></nys-option>
  <nys-option value="full" label="full"></nys-option>
</nys-select>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
      </div>
    </div>
  </div>
</div>

### Error Message
To display an error message, pass in the <code class="language-js">showError</code> property to the <code class="language-js">&lt;nys-select&gt;</code> component. Setting <code class="language-js">errorMessage</code> does not display the message without <code class="language-js">showError</code> set to true.

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-select label="Select your favorite borough" errorMessage="You did not select a borough" showError>
      <nys-option value="bronx" label="The Bronx"></nys-option>
      <nys-option value="brooklyn" label="Brooklyn"></nys-option>
      <nys-option value="manhattan" label="Manhattan"></nys-option>
      <nys-option value="staten_island" label="Staten Island"></nys-option>
      <nys-option value="queens" label="Queens"></nys-option>  
    </nys-select>
  </div>

  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <div class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_right" size="xl"></nys-icon>
        <p>Example Code</p>
      </div>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy Code</div>
    </div>
    <div class="code-preview__code-container">
      <div class="code-preview__code-block">
        {% highlight "html" %}
<nys-select label="Select your favorite borough" errorMessage="You did not select a borough" showError>
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>  
</nys-select>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
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
      <td><code>description</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
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
      <td><code>width</code></td>
      <td>string ("sm", "md", "lg", "full")</td>
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

<p>The <code class="language-js">nys-select</code> component emits <strong>three</strong> custom Javascript events:</p>
<ol>
<li><strong><code>change</code></strong> – Fired when the select state changes (checked/unchecked).</li>
<li><strong><code>focus</code></strong> – Fired when the select gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the select loses focus.</li>
</ol>

You can listen to these events using JavaScript:
{% highlight "js" %}
// Select the select component
  const select = document.querySelector('nys-select');

  // Listen for the 'change' event
  select.addEventListener('change', (event) => {
    console.log('Select changed:', event.target.checked);
  });
{% endhighlight %}
{% endblock %}

{% block updates %}{% endblock %}