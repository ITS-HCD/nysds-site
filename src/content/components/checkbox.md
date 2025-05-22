---
permalink: /components/checkbox/
title: Checkbox
description: A checkbox is a form input for users to select options (zero, one, or multiple) from a collection of choices.
image: /assets/img/components/checkbox.svg
image_alt: An illustration of a checkbox.
image_header: /assets/img/components/checkbox-header.svg
navOrder: 5
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-checkbox&gt;</code> component is a form input for users to select options (zero, one, or multiple) from a collection of choices. It provides users with the ability to toggle a binary state (checked/unchecked). Indeterminate states are not (currently) supported.

<p style="display:flex; align-items:top; gap:10px; flex-wrap: wrap;"><nys-icon name="info" size="2xl"></nys-icon>Optional: <code class="language-js">&lt;nys-checkboxgroup&gt;</code> can be used to group multiple checkboxes so they function as a single form control.</p>

{% endblock %}

{% block example %}
<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-checkboxgroup label="Select your favorite New York landmarks" description="Last year's winner is not eligible to win again.">
      <nys-checkbox name="landmarks" value="adirondacks" label="Adirondacks" checked></nys-checkbox>
      <nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" checked></nys-checkbox>
      <nys-checkbox name="landmarks" value="catskills" label="Catskills"></nys-checkbox>
      <nys-checkbox name="landmarks" value="niagara-falls" label="Niagara Falls"></nys-checkbox>
      <nys-checkbox name="landmarks" value="coney-island" label="Coney Island"></nys-checkbox>
      <nys-checkbox name="landmarks" value="statue-liberty" label="Statue of Liberty (Last Year's Winner)" description="Disabled as it was the winner of the previous year." disabled></nys-checkbox>
    </nys-checkboxgroup>
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
<nys-checkboxgroup
  label="Select your favorite New York landmarks"
  description="Choose from the options below"
>
  <nys-checkbox
    label="Adirondacks"
    name="landmarks"
    value="adirondacks"
    checked
  ></nys-checkbox>
  <nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" checked></nys-checkbox>
  <nys-checkbox name="landmarks" value="catskills" label="Catskills" checked></nys-checkbox>
  <nys-checkbox name="landmarks" value="niagara-falls" label="Niagara Falls"></nys-checkbox>
  <nys-checkbox name="landmarks" value="coney-island" label="Coney Island"></nys-checkbox>
  <nys-checkbox name="landmarks" value="statue-liberty" label="Statue of Liberty (Last Year's Winner)" description="Disabled as it was the winner of the previous year." disabled></nys-checkbox>
</nys-checkboxgroup>
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
  - When collecting binary answers in a form.
  - When obtaining confirmation from users.
  - When allowing users to select multiple options from a list.

### When to consider something else
  - Use a toggle when changing the state of a binary input immediately changes the system's state; such as enabling Dark Mode.
  - When users need to select only one option consider a radio button (1-6 choices) or select (7 or more choice) instead.
{% endblock %}

{% block usagedo %}

  - Use checkboxes for binary decisions (agree/disagree).
  - Use checkboxes for multi-select lists (like selecting interests).
{% endblock %}

{% block usagedont %}

 - Avoid using when you have more than 10 options to choose from; instead, consider a multiselect dropdown (coming soon in NYSDS, contact Design System team for guidance).
 - Don't change status of another checkbox when another one is clicked.
{% endblock %}

{% block accessibility %}

The <code class="language-js">nys-checkbox</code> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the checkbox correctly.
  - Keyboard navigation support, allowing users to toggle the checkbox using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Checkbox group

The <code class="language-js">nys-checkboxgroup</code> component can be used to group multiple checkboxes so they function as a single form control. This is useful when you want to allow users to select multiple options from a list.

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-checkboxgroup label="Do you attest to the following:" description="By checking below you agree to our terms">
      <nys-checkbox label="I have read the terms and conditions." id="terms-conditions" name="terms" value="terms-conditions"></nys-checkbox>
      <nys-checkbox label="I agree to the NDA" id="legal" name="legal" value="legal"></nys-checkbox>
    </nys-checkboxgroup>
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
<nys-checkboxgroup label="Do you attest to the following:" description="By checking below you agree to our terms">
  <nys-checkbox label="I have read the terms and conditions." id="terms-conditions" name="terms" value="terms-conditions"></nys-checkbox>
  <nys-checkbox label="I agree to the NDA" id="legal" name="legal" value="legal"></nys-checkbox>
</nys-checkboxgroup>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
      </div>
    </div>
  </div>
</div>

### Disabled

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-checkbox disabled label="I agree to the terms and conditions" description="This option is currently unavailable." name="earlyVoting" value="early-voting"></nys-checkbox>
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
<nys-checkbox disabled label="I agree to the terms and conditions" description="This option is currently unavailable."></nys-checkbox>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
      </div>
    </div>
  </div>
</div>

### Size

Set the size property of the <code class="language-js">nys-checkboxgroup</code> to have all <code class="language-js">nys-checkbox</code> be the same size. Our current sizes are:

<code class="language-js">sm</code> : Set to 24px in width and height

<code class="language-js">md</code> : The <code class="language-js">default</code> size. Set to 32px in width and height.

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-checkboxgroup label="Select your favorite New York landmarks" description="Choose from the options below" size="sm">
      <nys-checkbox label="Adirondacks" name="landmarks" value="adirondacks" checked></nys-checkbox>
      <nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" checked></nys-checkbox>
      <nys-checkbox name="landmarks" value="catskills" label="Catskills" checked></nys-checkbox>
      <nys-checkbox name="landmarks" value="niagara-falls" label="Niagara Falls"></nys-checkbox>
      <nys-checkbox name="landmarks" value="coney-island" label="Coney Island"></nys-checkbox>
      <nys-checkbox label="Mount Greylock" description="This is disabled because it's not in New York." disabled></nys-checkbox>
    </nys-checkboxgroup>
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
<nys-checkboxgroup size="sm" label="Select your favorite New York landmarks" description="Choose from the options below" >
  <nys-checkbox label="Adirondacks" name="landmarks" value="adirondacks" checked></nys-checkbox>
  <nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" checked></nys-checkbox>
  <nys-checkbox name="landmarks" value="catskills" label="Catskills" checked></nys-checkbox>
  <nys-checkbox name="landmarks" value="niagara-falls" label="Niagara Falls"></nys-checkbox>
  <nys-checkbox name="landmarks" value="coney-island" label="Coney Island"></nys-checkbox>
  <nys-checkbox label="Mount Greylock" description="This is disabled because it's not in New York." disabled></nys-checkbox>
</nys-checkboxgroup>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
      </div>
    </div>
  </div>
</div>

### Error

Set an error message and choose to activate it. The error message will appear ONLY when the <code class="language-js">showError</code> attribute is set to <strong>true</strong>. Setting only <code class="language-js">errorMessage</code> will not display the error message by default.

Errors can be assigned to both <code class="language-js">&lt;nys-checkboxgroup&gt;</code> and individual <code class="language-js">&lt;nys-checkbox&gt;</code> components.

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-checkboxgroup label="Select your favorite New York landmarks" description="Choose from the options below" showError errorMessage="You must select at least one option to continue.">
      <nys-checkbox label="Adirondacks" name="landmarks" value="adirondacks" ></nys-checkbox>
      <nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" ></nys-checkbox>
      <nys-checkbox name="landmarks" value="catskills" label="Catskills" ></nys-checkbox>
    </nys-checkboxgroup>
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
<nys-checkboxgroup showError errorMessage="You must select at least one option to continue." label="Select your favorite New York landmarks" description="Choose from the options below" >
  <nys-checkbox label="Adirondacks" name="landmarks" value="adirondacks" ></nys-checkbox>
  <nys-checkbox name="landmarks" value="finger-lakes" label="Finger Lakes" ></nys-checkbox>
  <nys-checkbox name="landmarks" value="catskills" label="Catskills" ></nys-checkbox>
</nys-checkboxgroup>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
      </div>
    </div>
  </div>
</div>


### Slotted Description

When the description requires more complexity than a simple string, use the description slot to hold the text. This allows the developer to include HTML in the description, such as anchors or bold text.

<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-checkbox label="Subscribe to NYS Government Updates" id="subscribe-updates" name="subscribe" value="email-updates">
      <label slot="description">Read about our <a href="https://www.ny.gov/" target="__blank">previous updates</a></label>
    </nys-checkbox>
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
<nys-checkbox label="Subscribe to NYS Government Updates" id="subscribe-updates" name="subscribe" value="email-updates">
  <label slot="description">Read about our <a href="https://www.ny.gov/" target="__blank">previous updates</a></label>
</nys-checkbox>
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
      <td><code>checked</code></td>
      <td>boolean</td>
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
      <td><code>label</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>description</code></td>
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
      <td><code>showError</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>errorMessage</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>string (sm, md)</td>
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

<p>The <code class="language-js">nys-checkbox</code> component emits <strong>four</strong> custom Javascript events:</p>
<ol>
<li><strong><code>change</code></strong> – Fired when the checkbox state changes (checked/unchecked).</li>
<li><strong><code>focus</code></strong> – Fired when the checkbox gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the checkbox loses focus.</li>
<li><strong><code>keydown</code></strong> – Fired when a key is pressed while the checkbox is focused.</li>
</ol>

You can listen to these events using JavaScript:
{% highlight "js" %}
// Select the checkbox component
  const checkbox = document.querySelector('nys-checkbox');

  // Listen for the 'change' event
  checkbox.addEventListener('change', (event) => {
    console.log('Checkbox changed:', event.target.checked);
  });
{% endhighlight %}
{% endblock %}

{% block updates %}{% endblock %}
