---
title: Alert
description: Alert cards are designed to display critical information, updates, or warnings that require the user's attention.
image: /assets/img/components/alert.svg
---


{% extends "layouts/component.njk" %}

{% block longdescription %}
The <code class="language-js">nys-alert</code> component is a reusable web component for use in New York State digital products. It provides users with the ability to keep users informed of important and sometimes time-sensitive changes.
{% endblock %}

{% block example %}
<nys-alert theme="base" heading="Default status" text="This is an example of an neutral base alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<br>
<nys-alert theme="info" heading="Info status" text="This is an example of an info alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<br>
<nys-alert theme="success" heading="Success status" text="This is an example of a success alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<br>
<nys-alert theme="warning" heading="Warning status" text="This is an example of a warning alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<br>
<nys-alert theme="danger" heading="Danger status" text="This is an example of a danger alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<br>
<nys-alert theme="emergency" heading="Emergency status" text="This is an example of an emergency alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
{% endblock %}

{% block examplecode %}
<nys-alert
  theme="base"
  heading="Default status"
  text="This is an example of an neutral base alert."
  primaryLabel="Learn more on ny.gov"
  primaryAction="https://www.ny.gov/"
  secondaryLabel="Alternate action link"
  secondaryAction="https://www.ny.gov/"
  dismissible
></nys-alert>
<nys-alert
  theme="info"
  heading="Info status"
  text="This is an example of an info alert."
  primaryLabel="Learn more on ny.gov"
  primaryAction="https://www.ny.gov/"
  secondaryLabel="Alternate action link"
  secondaryAction="https://www.ny.gov/"
  dismissible
></nys-alert>
<nys-alert theme="success" heading="Success status" text="This is an example of a success alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<nys-alert theme="warning" heading="Warning status" text="This is an example of a warning alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<nys-alert theme="danger" heading="Danger status" text="This is an example of a danger alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<nys-alert theme="emergency" heading="Emergency status" text="This is an example of an emergency alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
{% endblock %}

{% block usage %}
### When to use this component

  - Use nys-alert to communicate important, time-sensitive information to users in a visually prominent way.
  - Ideal for messages such as success notifications, danger alerts, warnings, or informational updates.
  - Use for dismissible or temporary alerts when the message is not critical to user workflow.

### When to consider something else

  - If the information is not time-sensitive or critical, consider using a less intrusive component, such as a tooltip or inline message.
  - Avoid using alerts for repetitive or non-actionable content that could frustrate users.
  - For notifications outside the page context, consider using a toast or modal component instead.
{% endblock %}

{% block usagedo %}
  - Keep the alert content concise and focused on the message.
  - Use the appropriate <code class="language-js">theme</code> (e.g., <code class="language-js">info</code>, <code class="language-js">success</code>, <code class="language-js">warning</code>, or <code class="language-js">danger</code>) to match the intent of the alert.
  - Use the <code class="language-js">dismissible</code> property for non-critical alerts, allowing users to clear them from the screen.
{% endblock %}

{% block usagedont %}
<ul>
<li><p>Overuse alerts for non-critical information, as this can desensitize users to important messages.</p></li>
<li><p>Use icons or themes that don’t clearly communicate the purpose of the alert.</p></li>
</ul>
{% endblock %}

{% block accessibility %}
The <code class="language-js">nys-alert</code> component includes the following accessibility-focused features:

  - Keyboard navigation support, allowing users to use voiceover to read the alert using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Each alert theme contains an ARIA role attribute that can notify assistive technologies of time-sensitive and important messages.

<table>
  <thead>
    <tr>
      <th><strong>ARIA Role</strong></th>
      <th><strong>Attribute</strong></th>
      <th><strong>Use Case</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-js">role="alert"</code></td>
      <td>Important messages that demand the user's immediate attention.</td>
      <td>Example: Danger and Emergency alert</td>
    </tr>
    <tr>
      <td><code class="language-js">role="status"</code></td>
      <td>
        Messages that provide advisory information but do not have the same
        urgency as alerts.
      </td>
      <td>Example: Success alert</td>
    </tr>
    <tr>
      <td><code class="language-js">role="region"</code></td>
      <td>
        Messages that provide information the user would want to be able to
        easily find, but are not important enough to interrupt user workflow.
      </td>
      <td>
        Information and Warning alert (An
        <code class="language-js">aria-label</code>will be added for this role.)
      </td>
    </tr>
  </tbody>
</table>

{% endblock %}

{% block options %}
### Custom text description

<nys-alert theme="success" heading="Custom Descriptions">
  <p slot="text">This is a custom alert with <strong>HTML content</strong>.</p>
  <a slot="text" href="https://www.ny.gov/" target="_blank">Learn more</a>
</nys-alert>


### Dismissible

Use the <code class="language-js">dismissible</code> property to make the alert dismissible.

The <code class="language-js">nys-alert-closed</code> custom event is dispatched when the alert is dismissed. Developers can implement their own event listeners to handle custom actions, such as saving the alert's state locally. This allows for features like remembering dismissed alerts across page reloads.

<nys-alert theme="info" heading="Information status" dismissible>
  <p slot="text">Adirondack peaks auctor Hudson River flows semper Statue of Liberty est. <br/>Click here: <a href="https://www.ny.gov/" target="_blank">https://www.ny.gov/</a> for more info.</p>
</nys-alert>

### Duration

Set the <code class="language-js">duration</code> property to automatically hide the alert after a specified time (in milliseconds). This is ideal for non-critical alerts that do not require user acknowledgment.

<button onclick="showAlert()">Open alert</button>

<div class="alert-container"></div>

### Icon Customization

Override the default theme icon by setting the <code class="language-js">icon</code> property to any name from the icon library.

<nys-alert 
  theme="emergency" 
  heading="Winter storm warning: Dec 10th, 2024."
  text="A major snowfall is expected across the state of New York for the weekend of Dec 7th. Stay home if possible and use extreme caution when driving." 
  icon="ac_unit">
</nys-alert>

### Heading only

You may find having just a heading without description as a good compact version of the alert, ideal for short contexts. An empty description will center the text and icon for a cleaner layout.

<nys-alert 
  theme="info"
  heading="Adirondack peaks auctor Hudson River flows semper Statue of Liberty est.">
</nys-alert>

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
      <td><code>theme</code></td>
      <td>string (base, info, success, warning, danger, emergency)</td>
    </tr>
    <tr>
      <td><code>heading</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>string (no HTML)</td>
    </tr>
    <tr>
      <td><code>primaryLabel</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>primaryAction</code></td>
      <td>URL</td>
    </tr>
    <tr>
      <td><code>secondaryLabel</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>secondaryAction</code></td>
      <td>URL</td>
    </tr>
    <tr>
      <td><code>duration</code></td>
      <td>integer</td>
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
[[TODO]]
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






{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}