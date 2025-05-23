---
permalink: /components/radiobutton/
title: Radiobutton
description: Form input for selecting one option from a group.
image: /assets/img/components/radiobutton.svg
image_alt: An illustration of a radiobutton.
image_header: /assets/img/components/radio-button-header.svg
navOrder: 9
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-radiobutton&gt;</code> component is a reusable web component for use in New York State digital products. It provides users with the ability to choose from a group of options. Only one option can be selected at a time.
<p style="display:flex; align-items:top; gap:10px; flex-wrap: wrap;"><nys-icon name="info" size="2xl"></nys-icon> NOTE: <code class="language-js">&lt;nys-radiogroup&gt;</code> must be used to wrap multiple radio buttons so they function as a single form control.</p>

{% endblock %}

{% block example %}
<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-radiogroup label="What is your primary work location?" description="This is the location you use for your in office days." size="md">
      <nys-radiobutton name="office" label="Albany" description="Upstate New York" value="albany" checked></nys-radiobutton>
      <nys-radiobutton name="office" label="Manhattan" description="New York City" value="manhattan"></nys-radiobutton>
    </nys-radiogroup>
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
<nys-radiogroup 
  label="What is your primary work location?"
  description="This is the location you use for your in office days."
  size="md"
>
  <nys-radiobutton
    name="office"
    label="Albany"
    description="Upstate New York"
    value="albany"
  ></nys-radiobutton>
  <nys-radiobutton
    name="office"
    label="Manhattan"
    description="New York City"
    value="manhattan"
  ></nys-radiobutton>
</nys-radiogroup>
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
  - When the user needs to select only one option from a list.
  - When there are 7 or fewer options to choose from (for better usability).

### When to consider something else
  - When users need to select multiple options (consider checkboxes instead).
  - When there are more than 7 options (consider a dropdown for better space utilization).
{% endblock %}

{% block usagedo %}

  - Always wrap a set of `nys-radiobutton`s with a `nys-radiogroup`
  - Group radio buttons vertically for easier scanning, especially when labels are lengthy.
  - Use a clear default selection if applicable (e.g., the most common or recommended choice).
  - Provide descriptive and concise labels for each option.
  - Group related radio buttons with a heading or contextual instructions to clarify the choice.
{% endblock %}

{% block usagedont %}

  - Use radio buttons for yes/no questions (consider a toggle or checkbox).
  - Overload the user with too many radio button options; simplify or use a dropdown if needed.
  - Leave all radio buttons unselected if a default selection would help guide users.

{% endblock %}

{% block accessibility %}

The <code class="language-js">nys-radiobutton</code> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the radiobutton correctly.
    - <code class="language-js">aria-checked</code>
    - <code class="language-js">aria-disabled</code>
    - <code class="language-js">aria-required</code>
  - Keyboard navigation support, allowing users to toggle the radiobutton using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Disabled

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-radiogroup label="Current Title:" description="Note: You cannot change your title.">
      <nys-radiobutton name="title" label="Software Engineer 1" description="<1 year experience" value="eng-1" checked disabled></nys-radiobutton>
      <nys-radiobutton name="title" label="Software Engineer 2" description="1-3 years experience" value="eng-2" disabled></nys-radiobutton>
      <nys-radiobutton name="title" label="Software Engineer 3" description="3-5 years experience" value="eng-3" disabled></nys-radiobutton>
    </nys-radiogroup>
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
<nys-radiogroup label="Current Title:" description="Note: You cannot change your title.">
  <nys-radiobutton disabled name="title" label="Software Engineer 1" description="<1 year experience" value="eng-1" checked></nys-radiobutton>
  <nys-radiobutton disabled name="title" label="Software Engineer 2" description="1-3 years experience" value="eng-2"></nys-radiobutton>
  <nys-radiobutton disabled name="title" label="Software Engineer 3" description="3-5 years experience" value="eng-3"></nys-radiobutton>
</nys-radiogroup>
        {% endhighlight %}
      </div>
    </div>
  </div>
</div>

### Size
Set the <code class="language-js">size</code> prop of the <code class="language-js">&lt;nys-radiogroup&gt;</code> to have all <code class="language-js">&lt;nys-radiobutton&gt;</code> be the same size. Our current sizes are:

  - `sm`: Set to 24px in width and height
  - `md`: The default size. Set to 32px in width and height.

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-radiogroup label="Select your agency" description="This is the agency, department, or office you work for." size="sm">
      <nys-radiobutton name="agency" checked label="Department of Health" value="doh" ></nys-radiobutton>
      <nys-radiobutton name="agency" label="Office of Information Technology Services" value="its" ></nys-radiobutton>  
      <nys-radiobutton name="agency" label="Office of the New York State Attorney General" value="ag" ></nys-radiobutton>
    </nys-radiogroup>
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
<nys-radiogroup size="sm" label="Select your agency" description="This is the agency, department, or office you work for.">
  <nys-radiobutton name="agency" checked label="Department of Health" value="doh" ></nys-radiobutton>
  <nys-radiobutton name="agency" label="Office of Information Technology Services" value="its" ></nys-radiobutton>  
  <nys-radiobutton name="agency" label="Office of the New York State Attorney General" value="ag" ></nys-radiobutton>
</nys-radiogroup>
        {% endhighlight %}
      </div>
    </div>
  </div>
</div>


### Error
To display an error message, pass in the <code class="language-js">showError</code> property to the <code class="language-js">&lt;nys-radiogroup&gt;</code> component. Setting <code class="language-js">errorMessage</code> does not display the message without <code class="language-js">showError</code> set to <strong>true</strong>.

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-radiogroup label="What is your primary work location?" description="This is the location you use for your in office days." required showError errorMessage="You must select one of the above options to continue">
      <nys-radiobutton   name="office"   label="Albany"   description="Upstate New York"   value="albany" ></nys-radiobutton> <nys-radiobutton   name="office"   label="Manhattan" description="New York City"  value="manhattan"></nys-radiobutton>
    </nys-radiogroup>
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
<nys-radiogroup required showError errorMessage="You must select one of the above options to continue" label="What is your primary work location?" description="This is the location you use for your in office days.">
  <nys-radiobutton name="office" label="Albany" description="Upstate New York" value="albany"></nys-radiobutton>
  <nys-radiobutton name="office" label="Manhattan" description="New York City" value="manhattan"></nys-radiobutton>
</nys-radiogroup>
        {% endhighlight %}
      </div>
    </div>
  </div>
</div>

### Slotted Description
When the description requires more complexity than a simple string, use the description slot to hold the text. This allows the developer to include HTML in the description, such as anchors or bold text.

Both <code class="language-js">&lt;nys-radiobutton&gt;</code> and <code class="language-js">&lt;nys-radiogroup&gt;</code> support the description slot.

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-radiogroup label="What is your primary work location?">
      <label slot="description">This is the location you use for your <a href="https://www.ny.gov/" target="__blank">in office days.</a></label>
      <nys-radiobutton name="office" label="Albany" value="albany">
        <label slot="description">A part of <a href="https://www.ny.gov/" target="__blank">Upstate New York</a></label>      
      </nys-radiobutton>
      <nys-radiobutton name="office" label="Manhattan" value="manhattan"  >
        <label slot="description">A part of <a href="https://www.ny.gov/" target="__blank">New York City</a></label>      
      </nys-radiobutton>
    </nys-radiogroup>
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
<nys-radiogroup label="What is your primary work location?">
  <label slot="description">This is the location you use for your <a href="https://www.ny.gov/" target="__blank">in office days.</a></label>
  <nys-radiobutton name="office" label="Albany" value="albany">
    <label slot="description">A part of <a href="https://www.ny.gov/" target="__blank">Upstate New York</a></label>      
  </nys-radiobutton>
  <nys-radiobutton name="office" label="Manhattan" value="manhattan">
    <label slot="description">A part of <a href="https://www.ny.gov/" target="__blank">New York City</a></label>      
  </nys-radiobutton>
</nys-radiogroup>
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
      <td><code>name</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>description</code></td>
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
      <td><code>checked</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>string ("sm", "md")</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>form</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>required</code></td>
      <td>boolean</td>
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


{% endblock %}

{% block events %}

<p>The <code class="language-js">nys-radiobutton</code> component emits <strong>four</strong> custom Javascript events:</p>
<ol>
<li><strong><code>change</code></strong> – Fired when the radiobutton state changes (checked/unchecked).</li>
<li><strong><code>focus</code></strong> – Fired when the radiobutton gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the radiobutton loses focus.</li>
<li><strong><code>keydown</code></strong> – Fired when a key is pressed while the radiobutton is focused.</li>
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
// Select the radiobutton component
  const radiobutton = document.querySelector('nys-radiobutton');

  // Listen for the 'change' event
  radiobutton.addEventListener('change', (event) => {
    console.log('Radio Button changed:', event.target.checked);
  });
{% endhighlight %}

  </div>
    </div>
  </div>
</div>
{% endblock %}

{% block updates %}{% endblock %}