---
title: Button
description: "Used primarily for actions that have an immediate result like 'Save', 'Close', or 'Add'."
draft: true
image: 
image_alt: An illustration of an button.
---

{% extends "layouts/component.njk" %}

{% block longdescription %}
A button is used for actions that have an immediate result inside an application such as saving progress or navigating back. It is also used in content sites for Call-to-Action (CTA).
{% endblock %}

{% block example %}
<nys-button></nys-button>
{% endblock %}

{% block examplecode %}
<nys-button></nys-button>
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
  - For buttons that open a dropdown use a Cheveron Down icon on the right side of the button label.
  - [Dev] Always set the type attribute. Define the purpose and behavior of a button with the type attribute. The type attribute can accept three values: submit, button, and reset. If no type attribute is defined, the button will behave as a submit button.
{% endblock %}

{% block usagedont %}
  - Don't use buttons for external navigation. Use an HTML link (<a>) or Text button if the result of clicking the element is opening a link of an external page.
  - Don't use icons in buttons without a text label. Very few icons are universally understood.
  - Try not to create new buttons with other styling (color, shape, size). Consistency helps users understand what type of button to look for and what the resulting action will be. If you need additions to NYS Button, or any component, for your application or website please contact the Excelsior Design System team.
{% endblock %}

{% block accessibility %}
The <code class="language-js">nys-</code> component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the toggle correctly.
  - Keyboard navigation support, allowing users to toggle the toggle switch using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
  - Screen readers handle buttons and links differently. When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link. Text buttons are read as a button by a screen reader, creating a better experience for users with assitive technology. Ensure you use Text buttons for actions and Links for navigation.
{% endblock %}

{% block content %}
Button labels need to be clear and predictable. Users should be able to anticipate what will happen when they select a button. Never mislead someone by mislabeling a button.

- Verbs like “View” or “Go” or “Read” are often unnecessary since the button itself already conveys these actions
- No articles or uncessary words (“a” “an” “the”)
- No punctuation
- Always write button text in sentence case, which means the first word is capitalized and the rest are lowercase (unless a term is a proper noun).

Do: Add menu item
Don't: Add a Menu Item

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
