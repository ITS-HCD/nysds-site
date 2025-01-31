---
permalink: /components/unav-header/
title: Unav Header
description: 
image: 
draft: true
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-select&gt;</code> is a reusable web component for use in New York State digital products. It allows users to select data from a dropdown to be collected. It accepts the child element <code class="language-js">&lt;nys-option&gt;</code> to define the options in the dropdown.
{% endblock %}

{% block example %}

<nys-select label="Select your favorite borough" id="borough">
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>      
</nys-select>
{% endblock %}

{% block examplecode %}

<nys-select label="Select your favorite borough" id="borough">
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>      
</nys-select>
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

  - Don't use the native `&lt;option&gt;` element in the `nys-select` component
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

<nys-select label="Select your favorite borough" disabled>
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>  
</nys-select>

<details>
  <summary>Code</summary>
  {% highlight "html" %}
<nys-select label="Select your favorite borough" disabled>
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>  
</nys-select>
{% endhighlight %}

</details>

### Width
The following width options are available:

  - `sm` (Small): 88px, ideal for compact layouts.
  - `md` (Medium): 200px, ideal for balanced designs.
  - `lg` (Large): 384px, suitable for displaying longer content.
  - `full` (Full Width): default size. Expands to fill the available space.

<nys-select label="Select your favorite width" description="Valid widths are sm, md, lg, and full" width="sm">
  <nys-option value="sm" label="sm"></nys-option>
  <nys-option value="md" label="md"></nys-option>
  <nys-option value="lg" label="lg"></nys-option>
  <nys-option value="full" label="full"></nys-option>
</nys-select>

### Error Message
To display an error message, pass in the `showError` property to the `nys-select` component. Setting `errorMessage` does not display the message without `showError` set to true.

<nys-select label="Select your favorite borough" errorMessage="You did not select a borough" showError>
  <nys-option value="bronx" label="The Bronx"></nys-option>
  <nys-option value="brooklyn" label="Brooklyn"></nys-option>
  <nys-option value="manhattan" label="Manhattan"></nys-option>
  <nys-option value="staten_island" label="Staten Island"></nys-option>
  <nys-option value="queens" label="Queens"></nys-option>  
</nys-select>

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
