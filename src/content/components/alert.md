---
permalink: /components/alert/
title: Alert
description: An alert displays a prominent message, with optional links, at the top of the screen.
image: /assets/img/components/alert.svg
image_alt: An illustration of an alert message.
image_header: /assets/img/components/alert-header.svg
navOrder: 2
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

Alert banners are designed to display critical information, updates, or warnings that require the user's attention.

The `<nys-alert>` component is a banner-like component that appears at the top of a screen to prominently display important information, along with optional links. Alerts keep users informed of important and sometimes time-sensitive changes.

{% endblock %}

{% block example %}
  {% set preview %}<nys-alert
  type="base"
  heading="Default status"
  text="This is an example of an neutral base alert."
  primaryLabel="Learn more on ny.gov"
  primaryAction="https://www.ny.gov/"
  secondaryLabel="Alternate action link"
  secondaryAction="https://www.ny.gov/"
  dismissible
></nys-alert><br>
<nys-alert
  type="info"
  heading="Info status"
  text="This is an example of an info alert."
  primaryLabel="Learn more on ny.gov"
  primaryAction="https://www.ny.gov/"
  secondaryLabel="Alternate action link"
  secondaryAction="https://www.ny.gov/"
  dismissible
></nys-alert><br>
<nys-alert type="success" heading="Success status" text="This is an example of a success alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert><br>
<nys-alert type="warning" heading="Warning status" text="This is an example of a warning alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert><br>
<nys-alert type="danger" heading="Danger status" text="This is an example of a danger alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert><br>
<nys-alert type="emergency" heading="Emergency status" text="This is an example of an emergency alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>{% endset %}
  {% set code %}
<nys-alert
  type="base"
  heading="Default status"
  text="This is an example of an neutral base alert."
  primaryLabel="Learn more on ny.gov"
  primaryAction="https://www.ny.gov/"
  secondaryLabel="Alternate action link"
  secondaryAction="https://www.ny.gov/"
  dismissible
></nys-alert>
<nys-alert
  type="info"
  heading="Info status"
  text="This is an example of an info alert."
  primaryLabel="Learn more on ny.gov"
  primaryAction="https://www.ny.gov/"
  secondaryLabel="Alternate action link"
  secondaryAction="https://www.ny.gov/"
  dismissible
></nys-alert>
<nys-alert type="success" heading="Success status" text="This is an example of a success alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<nys-alert type="warning" heading="Warning status" text="This is an example of a warning alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<nys-alert type="danger" heading="Danger status" text="This is an example of a danger alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
<nys-alert type="emergency" heading="Emergency status" text="This is an example of an emergency alert." dismissible primaryLabel="Learn more on ny.gov" secondaryLabel="Alternate action link" primaryAction="https://www.ny.gov/" secondaryAction="https://www.ny.gov/"></nys-alert>
  {% endset %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block usage %}

### When to use this component

  - Use `<nys-alert>` to communicate important, time-sensitive information to users in a visually prominent way.
  - Ideal for messages such as success notifications, danger alerts, warnings, or informational updates.
  - Use for dismissible or temporary alerts when the message is not critical to user workflow.

### When to consider something else

  - If the information is not time-sensitive or critical, consider using an inline message.
  - Avoid using alerts for repetitive or non-actionable content that could frustrate users.

{% endblock %}

{% block usagedo %}

  - Use the appropriate `theme` (e.g., `info`, `success`, `warning`, or `danger`) to match the intent of the alert.
  - Use the `dismissible` property for non-critical alerts.
  - Keep the alert content concise and focused on the message.
  - Limit alerts to one per page.
  - Use `success` type to confirm a positive system status to users such as saving a form.
  - Use `danger` type to display system status error messages.
  - Only use `emergency` for real emergencies (e.g., missing person, severe weather). Remember to swap icon if a more relevant one exists.

{% endblock %}

{% block usagedont %}

- Do not remove the left icon, it is required for accessibility.
- Don’t use alerts to highlight actions that should be clear in the UI itself.
- Do not use error messages to communicate form field validation issues; use field error states instead.
- Don't include more than two link actions in an alert.
- Avoid overusing alerts for low-priority info — this can desensitize users.
- Don't use alerts as toasts. Place them at the top of the page content.
- Don't add any shadows to alerts.
</ul>
{% endblock %}

{% block accessibility %}

The `<nys-alert>` component includes the following accessibility-focused features:

  - Users with colorblindness use the alert's icon to differentiate the alert type; for accessibility it is best to use the default icon.
  - Keyboard navigation support, allowing users to use voiceover to read the alert using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Each alert theme contains an ARIA role attribute that can notify assistive technologies of time-sensitive and important messages.

| **ARIA Role**   | **Attribute**                                                                                                                             | **Use Case**                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| `role="alert"`  | Important messages that demand the user's immediate attention.                                                                            | Example: Danger and Emergency alert                                          |
| `role="status"` | Messages that provide advisory information but do not have the same urgency as alerts.                                                    | Example: Success alert                                                       |
| `role="region"` | Messages that provide information the user would want to be able to easily find, but are not important enough to interrupt user workflow. | Information and Warning alert (An `aria-label` will be added for this role.) |

{% endblock %}

{% block options %}

### Theme

Set the `type` property to customize the alert style (e.g. `type="info"`).

{% set preview %}<nys-alert
 type="info"
 heading="Information status"
 text="Adirondack peaks auctor Hudson River flows semper Statue of Liberty est.">
</nys-alert>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Custom text description

Add descriptive content to your alert using the `text` prop or the our slot feature. 

Use the `text` prop for simple texts, or leverage the slot by simply putting HTML elements within our component for advanced HTML customizations, such as links or styled texts.

{% set preview %}<nys-alert type="success" heading="Custom Descriptions">
<p>This is a custom alert with <strong>HTML content</strong>.</p>
<a href="https://www.ny.gov/" target="_blank">Learn more about our accessibility services</a>
</nys-alert>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Dismissible

Use the `dismissible` property to make the alert dismissible.

The `nys-closed` custom event is dispatched when the alert is dismissed. Developers can implement their own event listeners to handle custom actions, such as saving the alert's state locally. This allows for features like remembering dismissed alerts across page reloads.

{% set preview %}<nys-alert type="info" heading="Information status" dismissible>
  <p>Adirondack peaks auctor Hudson River flows semper Statue of Liberty est. <br/>
  Click here: <a href="https://www.ny.gov/" target="_blank">https://www.ny.gov/</a> for more info.</p>
</nys-alert>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Duration

Set the `duration` property to automatically hide the alert after a specified time (in milliseconds). This is ideal for non-critical alerts that do not require user acknowledgment.

{% set preview %}<nys-button onClick="showAlert()" label="Open Alert"></nys-button>
<div class="alert-container" style="margin-top: 8px"></div>{% endset %}
  {% set code %}
<nys-alert 
  type="info" 
  heading="Duration 3sec" 
  duration="3000" 
  text="Auto-dismiss after 3 seconds">
</nys-alert>
  {% endset %}
  {% include "partials/code-preview.njk" %}

### Icon Customization

Override the default theme icon by setting the `icon` property to any name from the icon library.

{% set preview %}<nys-alert
  type="emergency"
  heading="Winter storm warning: Dec 10th, 2024."
  text="A major snowfall is expected across the state of New York for the weekend of Dec 7th. Stay home if possible and use extreme caution when driving."
  icon="ac_unit">
</nys-alert>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}
       
### Heading only

You may find having just a heading without description as a good compact version of the alert, ideal for short contexts. An empty description will center the text and icon for a cleaner layout.

{% set preview %}<nys-alert
  type="info"
  heading="Adirondack peaks auctor Hudson River flows semper Statue of Liberty est.">
</nys-alert>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Action Links

Display `primaryAction` and `secondaryAction` as links using the `primaryLabel` and `secondaryLabel` for the link text. You must provide both an action label and a URL for each action to ensure proper functionality.

{% set preview %}<nys-alert
  type="emergency"
  heading="Winter storm warning: Dec 10th, 2024."
  text="A major snowfall is expected across the state of New York for the weekend of Dec 7th. Stay home if possible and use extreme caution when driving."
  primaryAction="https://www.ny.gov/"
  secondaryAction="https://www.ny.gov/"
  primaryLabel="Weather Report"
  secondaryLabel="Plowing Schedule"
></nys-alert>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block properties %}

| Property          | Type                                                                              |
|-------------------|-----------------------------------------------------------------------------------|
| `id`              | String                                                                            |
| `dismissible`     | boolean                                                                           |
| `duration`        | integer                                                                           |
| `heading`         | String                                                                            |
| `icon`            | String (`<nys-icon name>`)                                                        |
| `primaryAction`   | URL                                                                               |
| `primaryLabel`    | String                                                                            |
| `secondaryAction` | URL                                                                               |
| `secondaryLabel`  | String                                                                            |
| `text`            | String                                                                            |
| `type`            | `"base"` \| `"info"` \| `"success"` \| `"warning"` \| `"danger"` \| `"emergency"` |

{% endblock %}
[[TODO]]
| Variable             | Description                 |
|----------------------|-----------------------------|
| `--nys-toggle-width` | Width of the toggle switch. |

{% block cssvariables %}{% endblock %}

{% block events %}

The `<nys-alert>` component emits **one** custom Javascript events:

1.  **`nys-closed`** – Fired when the button is clicked.

#### Event details
The `nys-closed` event includes a detail object with the following properties:

  - id (string): The id of the alert.
  - type (string): The alert’s type (e.g., "success", "error", "info").
  - label (string): The alert’s heading text.

You can listen to these events using JavaScript:
{% set code %}// Select the alert component
const alert = document.querySelector("nys-alert");
/** 
 * Consider persisting dismissal state (e.g., to localStorage or analytics)
 * This can be used to prevent the alert from appearing again
 */
// Listen for the 'nys-closed' event
alert.addEventListener("nys-closed", (event) => {
  const { id, type, label } = event.detail;
  console.log(`Alert ${id} closed. Type: ${type}, Label: ${label}`);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
