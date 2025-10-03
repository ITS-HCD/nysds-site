---
permalink: /components/modal/
title: Modal
description: Used as a dialog that appears on top of the page, requiring user interaction before returning to the main content.
image: /assets/img/components/modal.svg
image_alt: An illustration of a modal.
image_header: /assets/img/components/modal-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=4739-1812
navOrder: 13
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-modal>` component allows users to select and upload one or more files from their device (like a computer or phone) to a server or app.

{% endblock %}

{% block example %}
{% set preview %}
<div>
  <nys-button label="Open Modal" onClick="showModal('modal1')"></nys-button>
  <nys-modal
    id="modal1"
    heading="Update Available"
    subheading="A new version of this application is ready to install."
  >
    <p>
        Would you like to install the latest version? Albany ipsum dolor sit
        Empire, Hudson consectetur Adirondack elit, sed do MetroCard tempor
        incididunt ut Capitol et Broadway magna Niagara. Ut enim ad Erie
        veniam, quis nostrud Catskill ullamco Bronx nisi ut LongIsland ex ea
        Cuomo consequat.
    </p>
    <div slot="actions">
      <nys-button label="Not now" variant="text" onClick="closeModal('modal1')"></nys-button>
      <nys-button label="Update" onClick="showMessage('modal1', 'Executing update...')"></nys-button>
    </div>
  </nys-modal>
</div>
{% endset %}
{% set code %}
  <nys-button label="Open Modal" onClick="yourOpenModalFunction()"></nys-button>
<nys-modal
  id="modal1"
  heading="Update Available"
  subheading="A new version of this application is ready to install."
>
  <p>
      Would you like to install the latest version? Albany ipsum dolor sit
      Empire, Hudson consectetur Adirondack elit, sed do MetroCard tempor
      incididunt ut Capitol et Broadway magna Niagara. Ut enim ad Erie
      veniam, quis nostrud Catskill ullamco Bronx nisi ut LongIsland ex ea
      Cuomo consequat.
  </p>
  <div slot="actions">
    <nys-button label="Not now" variant="text" onClick="yourCloseFunction()"></nys-button>
    <nys-button label="Update" onClick="yourUpdateFunction()"></nys-button>
  </div>
</nys-modal>
{% endset %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

- When you need to confirm an important action (e.g., “Are you sure you want to delete this?”).
- When you need to present a form without navigating away (e.g., login, signup, feedback).
- When you need to show alerts or notifications that require acknowledgment.
- When you want to display additional information without leaving the current page.

### When to consider something else

- When your content is long or complex - consider a dedicated page instead.
- When you only need to show inline status - use a banner or `nys-alert`.
- When you want to provide quick hints for form fields - use a `nys-tooltip`.
{% endblock %}

{% block usagedo %}

  - Use for actions that need confirmation.
  - Keep content short and focused.
  - Use the `mandatory` prop to disable the dismiss button when the user must make a critical decision or acknowledge essential information.
  - Keep the `subheading` short and use `<p>` tag within the modal for longer information.

{% endblock %}

{% block usagedont %}

  - Don’t overload with long forms or texts.
  - Don’t show trivial info.
  - Don’t stack multiple modals.
  - Don’t force a mandatory modal unnecessarily.

{% endblock %}

{% block accessibility %}

The `<nys-modal>` component includes the following accessibility-focused features:

  - Trap focus inside the modal so keyboard users can’t tab to background content.
  - Return focus to the triggering element when the modal closes.
  - Support keyboard interaction: allow "esc" key to close the modal.
  - Announce the modal to screen readers using role="dialog".
  - Prevent background scroll so users don’t lose context.

{% endblock %}

{% block options %}

### Scrolling Behavior
Avoid content-heavy modals. If the content is too long, consider using a dedicated page or a Stepper.

**IMPORTANT:**  `<nys-modal>` blocks page scrolling to keep focus within the modal.

### Adding basic slots
Use the default slot to add content such as text, links, or other elements inside the modal.

**Note:** The `heading` is required for the modal title, while `subheading` is optional for extra context or instructions.

{% set preview %}
<div>
  <nys-button label="Open Modal" onClick="showModal('modal2')"></nys-button>
  <nys-modal id="modal2" heading="System Maintenance Notice" subheading="Scheduled downtime will occur this weekend.">
    <p>
      Please be advised that the system will be unavailable for maintenance
      from 10 PM Friday to 6 AM Saturday. Ensure you save your work and
      plan accordingly. For more details, visit the
      <a href="https://www.ny.gov/" target="_blank" rel="noopener noreferrer">NYS site</a>.
    </p>
  </nys-modal>
</div>
{% endset %}
{% set code %}
<nys-modal id="modal2" heading="System Maintenance Notice" subheading="Scheduled downtime will occur this weekend.">
  <p>
    Please be advised that the system will be unavailable for maintenance
    from 10 PM Friday to 6 AM Saturday. Ensure you save your work and
    plan accordingly. For more details, visit the
    <a href="https://www.ny.gov/" target="_blank" rel="noopener noreferrer">NYS site</a>.
  </p>
</nys-modal>
{% endset %}
{% include "partials/code-preview.njk" %}

### Adding action buttons
Control a modal’s visibility with the `open` (boolean) property on `<nys-modal>`. Place action buttons (typically `<nys-button>`) inside the actions slot to close the modal or confirm a task by updating the `open` property.

**Tip**: By convention, the secondary/cancel button is usually placed first, followed by the primary/confirm button. This helps maintain consistent UX and accessibility patterns.

{% set preview %}
<div>
  <nys-button label="Open Modal" onClick="showModal('modal3')"></nys-button>
  <nys-modal id="modal3" heading="Update password?">
    <nys-textinput label="Username" name="username" type="text" width="full"></nys-textinput>
    <nys-textinput label="Password" name="password" type="password" width="full"></nys-textinput>
    <div slot="actions">
      <nys-button label="Not now" variant="outline" onClick="closeModal('modal3')"></nys-button>
      <nys-button label="Update" onClick="showMessage('modal3', 'Changes saved!')"></nys-button>
    </div>
  </nys-modal>
</div>
{% endset %}
{% set code %}
<nys-modal id="modal3" heading="Update password?">
  <nys-textinput label="Username" name="username" type="text" width="full"></nys-textinput>
  <nys-textinput label="Password" name="password" type="password" width="full"></nys-textinput>
  <div slot="actions">
    <nys-button label="Not now" variant="outline" onClick="yourFunctionHere()"></nys-button>
    <nys-button label="Update" onClick="yourFunctionHere()"></nys-button>
  </div>
</nys-modal>
{% endset %}
{% include "partials/code-preview.njk" %}

### Mandatory Action
A forced action modal requires users to make a choice before continuing. Set the `mandatory` prop, which turns off the dismissible button.

**Note:** You must provide an action button to allow the user to exit the modal!

{% set preview %}
<div>
  <nys-button label="Open Modal" onClick="showModal('modal4')"></nys-button>
  <nys-modal
    id="modal4"
    heading="Your session has expired. 🪡"
    subheading="You will need to log in again in order to continue."
    mandatory
  >
    <div slot="actions">
      <nys-button label="Login" onClick="closeModal('modal4', 'Logging In...')"></nys-button>
    </div>
  </nys-modal>
</div>
{% endset %}
{% set code %}
<nys-modal
  id="modal4"
  heading="Your session has expired. 🪡"
  subheading="You will need to log in again in order to continue."
  mandatory
>
  <div slot="actions">
    <nys-button label="Login" onClick="yourFunctionHere()"></nys-button>
  </div>
</nys-modal>
{% endset %}
{% set script%}
<!-- The script tag here impacts all the examples above. -->
  <script>
    function showModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.open = true;
      }
    };
    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.open = false;
      }
    }; 
    function showMessage(id, message) {
      /* Uncomment the below when the <nys-button> onClick issue with it calling the function twice is fixed... leaving this function here for now */
      // alert(`Mock Alert: ${message}`);
      closeModal(id);
    }; 
  </script>
{% endset %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property      | Type                                                               |
|---------------|--------------------------------------------------------------------|
| `id`          | String                                                             |
| `heading`     | String                                                             |
| `subheading`  | String                                                             |
| `open`        | Boolean                                                            |
| `mandatory`   | Boolean                                                            |


{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}


{% block events %}

The `<nys-modal>` component emits **two** custom Javascript events:

1.  **`nys-open`** – Fired when the modal is opened.
2.  **`nys-close`** – Fired when the modal is closed.

#### Event details
The `nys-open` and `nys-close` events include a detail object with the following properties:

- id (string): The id of the file input.


You can listen to these events using JavaScript:
{% set code %}// Select the modal component
const modal = document.querySelector("nys-modal");
// Listen for the 'nys-open' event
modal.addEventListener("nys-open", (event) => {
  const { id } = event.detail;
  console.log(`Modal (${id}) is opened`);
});
// Listen for the 'nys-close' event
modal.addEventListener("nys-close", (event) => {
  const { id, reason } = event.detail;
  console.log(`Modal (${id}) is closed.`);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
