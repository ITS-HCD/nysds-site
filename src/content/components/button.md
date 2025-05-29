---
permalink: /components/button/
title: Button
description: "Used primarily for actions that have an immediate result like 'Save', 'Close', or 'Add'."
image: /assets/img/components/button.svg
image_alt: An illustration of a button.
image_header: /assets/img/components/button-header.svg
navOrder: 4
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-button&gt;</code> component is used for actions that have an immediate result inside an application such as saving progress or navigating back. It is also used in content sites for Call-to-Action (CTA).
{% endblock %}

{% block example %}
  {% set preview %}<nys-button label="Button"></nys-button>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
  - Use for the most important actions you want users to take on your site, such as Download, Sign up or Log out.
  - Use Fill for the primary action on the page; use sparingly, there should be only one primary action on each page.
  - Use Outline for secondary actions; should be placed next to the primary action / Fill button.
  - Use Ghost buttons when there are additional actions beyond primary and secondary.
  - Use Text buttons when an action needs to appear within a text block.

### When to consider something else
  - Text Buttons do something, whereas Links go somewhere. Use a Link instead of a text button if clicking the element takes the user somewhere else.
{% endblock %}

{% block usagedo %}

  - Use sentence-case capitalization for button labels.
  - For buttons that open a dropdown use a Chevron Down icon on the right side of the button label.
  - [Dev] Always set the type attribute. Define the purpose and behavior of a button with the type attribute. The type attribute can accept three values: submit, button, and reset. If no type attribute is defined, the button will behave as a submit button.
{% endblock %}

{% block usagedont %}

  - Don't use buttons for external navigation. Use an HTML link (&lt;a&gt;) or Text button if the result of clicking the element is opening a link of an external page.
  - Don't use icons in buttons without a text label. Very few icons are universally understood.
  - Try not to create new buttons with other styling (color, shape, size). Consistency helps users understand what type of button to look for and what the resulting action will be. If you need additions to NYS Button, or any component, for your application or website please contact the NYSDS team.
{% endblock %}

{% block accessibility %}

The <code class="language-js">&lt;nys-button&gt;</code> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the toggle correctly.
  - Keyboard navigation support, allowing users to toggle the toggle switch using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
  - Screen readers handle buttons and links differently. When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link. Text buttons are read as a button by a screen reader, creating a better experience for users with assistive technology. Ensure you use Text buttons for actions and Links for navigation.
{% endblock %}

{% block content %}

Button labels need to be clear and predictable. Users should be able to anticipate what will happen when they select a button. Never mislead someone by mislabeling a button.

- Verbs like “View” or “Go” or “Read” are often unnecessary since the button itself already conveys these actions
- No articles or unnecessary words (“a” “an” “the”)
- No punctuation
- Always write button text in sentence case, which means the first word is capitalized and the rest are lowercase (unless a term is a proper noun).

{% endblock %}

{% block options %}

### Size
<p>Set the <code class="language-js">size</code> prop of the <code class="language-js">&lt;nys-button&gt;</code> to adjust the height of the button. The width of the button is determined by the label. Our current sizes are:</p>
<ul>
<li><code>sm</code>: Set to 40px in height</li>
<li><code>md</code>: The default size. Set to 48px in height.</li>
<li><code>lg</code>: Set to 56px in height.</li>
</ul>
<p>Add the <code class="language-js">fullWidth</code> prop to make the button take the width of its container. Default behavior will size the button to fit its label.</p>

{% set preview %}<div class="nys-grid-row">
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button size="sm" id="button1" name="button1" label="Small"></nys-button></div>
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button size="md" id="button2" name="button2" label="Medium"></nys-button></div>
<div class="nys-grid-col"><nys-button size="lg" id="button3" name="button3" label="Large"></nys-button></div>
</div><br>
<nys-button fullWidth size="sm" id="button4" name="button4" label="Small Full"></nys-button><br>
<nys-button fullWidth id="button5" name="button5" label="Medium Full"></nys-button><br>
<nys-button fullWidth size="lg" id="button6" name="button6" label="Large Full"></nys-button>{% endset %}
{% set code %}
<nys-button size="sm" id="button1" name="button1" label="Small"></nys-button>
<nys-button size="md" id="button2" name="button2" label="Medium"></nys-button>
<nys-button size="lg" id="button3" name="button3" label="Large"></nys-button>
<nys-button fullWidth size="sm" id="button4" name="button4" label="Small Full"></nys-button>
<nys-button fullWidth size="md" id="button5" name="button5" label="Medium Full"></nys-button>
<nys-button fullWidth size="lg" id="button6" name="button6" label="Large Full"></nys-button>
{% endset %}
{% include "partials/code-preview.njk" %}

### Button Type

Set the type prop of the <code class="language-js">&lt;nys-button&gt;</code> to define the button's behavior in a form context. The available types are:

 - `button` (default): A standard button that does not submit a form.
 - `submit`: Submits the nearest form when clicked.
 - `reset`: Resets all inputs in the nearest form to their default values.

### Variant

Set the variant prop of the <code class="language-js">&lt;nys-button&gt;</code> to adjust the appearance of the button. Our current variants are:

 - `filled`: The default variant. Use for primary actions.
 - `outline`: Use for secondary actions.
 - `ghost`: Use for uncommon actions.
 - `text`: Use for inline actions.

{% set preview %}<div class="nys-grid-row">
<div class="nys-grid-col"><nys-button id="button1" name="button1" label="Filled"></nys-button></div>
<div class="nys-grid-col"><nys-button id="button2" name="button2" label="Outline" variant="outline"></nys-button></div>
<div class="nys-grid-col"><nys-button id="button3" name="button3" label="Ghost" variant="ghost"></nys-button></div>
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button id="button4" name="button4" label="Text" variant="text"></nys-button></div>
</div>{% endset %}
{% set code %}
<nys-button id="button1" name="button1" label="Filled"></nys-button>
<nys-button id="button2" name="button2" label="Outline" variant="outline"></nys-button>
<nys-button id="button3" name="button3" label="Ghost" variant="ghost"></nys-button>
<nys-button id="button4" name="button4" label="Text" variant="text"></nys-button>
{% endset %}
{% include "partials/code-preview.njk" %}

### Icons
Set the <code class="language-js">prefixIcon</code> prop to include an icon in the button. The icon will appear to the left of the label.

Set the <code class="language-js">suffixIcon</code> prop to include an icon in the button. The icon will appear to the right of the label.

  {% set preview %}<nys-button id="button1" name="button1" label="Click Me" prefixIcon="chevron_left" suffixIcon="chevron_right"><nys-button>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Disabled
{% set preview %}<div class="nys-grid-row">
<div class="nys-grid-col"><nys-button disabled id="button1" name="button1" label="Filled"></nys-button></div>
<div class="nys-grid-col"><nys-button disabled id="button2" name="button2" label="Outline" variant="outline"></nys-button></div>
<div class="nys-grid-col"><nys-button disabled id="button3" name="button3" label="Ghost" variant="ghost"></nys-button></div>
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button disabled id="button4" name="button4" label="Text" variant="text"></nys-button></div>
</div>{% endset %}
{% set code %}
<nys-button disabled id="button1" name="button1" label="Filled"></nys-button>
<nys-button disabled id="button2" name="button2" label="Outline" variant="outline"></nys-button>
<nys-button disabled id="button3" name="button3" label="Ghost" variant="ghost"></nys-button>
<nys-button disabled id="button4" name="button4" label="Text" variant="text"></nys-button>
{% endset %}
{% include "partials/code-preview.njk" %}

### Link
Set the <code class="language-js">href</code> prop when using the button to navigate to a different page. This will render the `nys-button` as an `<a>` tag.\
Set the <code class="language-js">target</code> prop of the **`nys-button`** to specify where to open the linked document. The available targets are:
- `_self`: Opens the link in the same frame as it was clicked (default).
- `_blank`: Opens the link in a new tab or window.
- `_parent`: Opens the link in the parent frame.
- `_top`: Opens the link in the full body of the window.
- `framename`: Opens the link in a named iframe.

{% set preview %}<nys-button href="https://www.ny.gov/" id="button1" name="button1" label="Visit NY.gov"></nys-button>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Inverted
Set the <code class="language-js">inverted</code> when the button is on a dark background.

{% set preview %}<div class="nys-grid-row">
<div class="nys-grid-col"><nys-button inverted id="button1" name="button1" label="Filled"></nys-button></div>
<div class="nys-grid-col"><nys-button inverted id="button2" name="button2" label="Outline" variant="outline"></nys-button></div>
<div class="nys-grid-col"><nys-button inverted id="button3" name="button3" label="Ghost" variant="ghost"></nys-button></div>
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button inverted id="button4" name="button4" label="Text" variant="text"></nys-button></div>
</div>{% endset %}
{% set code %}
<nys-button inverted id="button1" name="button1" label="Filled"></nys-button>
<nys-button inverted id="button2" name="button2" label="Outline" variant="outline"></nys-button>
<nys-button inverted id="button3" name="button3" label="Ghost" variant="ghost"></nys-button>
<nys-button inverted id="button4" name="button4" label="Text" variant="text"></nys-button>
{% endset %}
{% set previewInverted = true %}
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
      <td><code>onClick</code></td>
      <td>JS function</td>
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
      <td><code>size</code></td>
      <td>string ("sm", "md", "lg")</td>
    </tr>
    <tr>
      <td><code>fullWidth</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>variant</code></td>
      <td>string ("filled", "outline", "ghost", "text")</td>
    </tr>
    <tr>
      <td><code>inverted</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>prefixIcon</code></td>
      <td>`nys-icon` name</td>
    </tr>
    <tr>
      <td><code>suffixIcon</code></td>
      <td>`nys-icon` name</td>
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
      <td><code>value</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td>strong (URL)</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>string ("submit", "reset", "button")</td>
    </tr>
  </tbody>
</table>

{% endblock %}

{% block cssvariables %}{% endblock %}

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


{% block events %}

<p>The <code class="language-js">&lt;nys-button&gt;</code> component emits <strong>three</strong> custom Javascript events:</p>
<ol>
<li><strong><code>click</code></strong> – Fired when the button is clicked.</li>
<li><strong><code>focus</code></strong> – Fired when the button gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the button loses focus.</li>
</ol>

You can listen to these events using JavaScript:
{% set code %}// Select the button component
const button = document.querySelector('nys-button');
// Listen for the 'change' event
button.addEventListener('click', (event) => {
  console.log('Button Clicked');
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
