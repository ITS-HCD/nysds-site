---
permalink: /components/stepper/
title: Stepper
description: Displays to users how many steps are in a process and indicates their progress.
image: /assets/img/components/stepper.svg
image_alt: An illustration of a stepper dropdown.
image_header: /assets/img/components/stepper-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=4897-5811
navOrder: 15
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-stepper>` is a reusable web component for use in New York State digital products. It indicates to a user how many steps are in a process. It updates to reflect the user's progress through the form.

{% endblock %}

{% block example %}
  {% set preview %}
<div class="nys-grid-row">
  <nys-stepper
    label="Register for Design System Office Hours"
    class="nys-desktop:nys-grid-col-4"
  >
    <nys-step
      label="Personal Details"
      href="/stepper-pages/personal.html"
    ></nys-step>
    <nys-step
      label="Team Info"
      selected
      href="/stepper-pages/team.html"
    ></nys-step>
    <nys-step
      label="Usage Survey"
      current
      href="/stepper-pages/survey.html"
      onClick="handleStepClick(event)"
    ></nys-step>
    <nys-step
      label="Newsletter Opt-In"
      href="/stepper-pages/newsletter.html"
    ></nys-step>
  </nys-stepper>
  <div class="nys-desktop:nys-grid-col-8" id="nys-stepper-content">
    Loading...
  </div>
</div>
  {% endset %}
  {% set css%}
  <style>
    #nys-stepper-content {
      background-color: #fff;
    }
  </style>
  {% endset %}
  {% set script%}
<script>
  function handleStepClick(e) {
    alert("This step also has a function called on it");
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const stepper = document.querySelector("nys-stepper");

    if (stepper?.updateComplete) {
      await stepper.updateComplete; // Wait for Lit to finish rendering
    }

    const selectedStep = document.querySelector("nys-step[selected]");
    if (selectedStep) {
      const href = selectedStep.getAttribute("href");
      if (href) {
        try {
          const res = await fetch(href);
          if (!res.ok) throw new Error("Failed to load " + href);
          const html = await res.text();
          const container = document.querySelector("#nys-stepper-content");
          if (container) container.innerHTML = html;
        } catch (err) {
          console.error("Error loading initial step content:", err);
        }
      }
    }
  });

  document.addEventListener("nys-step-click", async (e) => {
    const href = e.detail?.href;
    if (!href) return;

    e.preventDefault();
    try {
      const res = await fetch(href);
      if (!res.ok) throw new Error("Failed to fetch ", href);
      const html = await res.text();

      const container = document.querySelector("#nys-stepper-content");
      if (container) {
        container.innerHTML = html;
      }
    } catch (err) {
      console.error("Error loading innerHTML:", err);
    }
  });
</script>
  {% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
- Use a stepper for linear, ordered forms with more than 2 sections.
- Use a stepper to show progress through a multi-step process.

### When to consider something else
- If there are only 1 or 2 sections to a form do not use a stepper.
- Forms that are nonlinear and can be completed in any order should not use a stepper.

{% endblock %}

{% block usagedo %}
- Use a stepper for linear, ordered forms with more than 2 sections.
- Use a stepper to show progress through a multi-step process.
- Ensure that users can navigate back to previous steps to review or change information.
{% endblock %}

{% block usagedont %}
- Do not use the stepper if there are only 1 or 2 sections to the form.
- Do not use the stepper for forms that are nonlinear and can be completed in any order.
{% endblock %}

{% block accessibility %}

The `nys-stepper` component includes the following accessibility-focused features:

- Proper ARIA roles and attributes to ensure screen readers can interpret the steps correctly.
- Keyboard navigation support, allowing users to iterate the steps using the keyboard.
- Visual focus indicators to help users navigate the component.

{% endblock %}

{% block options %}

### Multi Page vs. Single Page Stepper
The `nys-stepper` can be used in both multi-page and single-page applications.

#### Multi-Page
- The `href` should contain the URL of the page to navigate to when the step is clicked.
- You will be responsible for managing the `current` and `selected` states of the steps as the user progresses through the pages.
- Be sure to add the `nys-stepper` to each page of the multi-page application, since each step will be a separate page load.

#### Single-Page
- The `href` should contain only the inner HTML of the step, not a full page URL.
- The `selected` step will dynamically update as the user clicks on different steps.
- You will be responsible for managing the `current` state of the steps as the user progresses through the steps.
- You will need to listen for the `nys-step-click` event to load the content of the step into a container on the page.

{% set code %}
// load content into the content container
document.addEventListener("DOMContentLoaded", async () => {
  const stepper = document.querySelector("nys-stepper");
  if (stepper?.updateComplete) {
    await stepper.updateComplete;
  }
  const selectedStep = document.querySelector("nys-step[selected]");
  if (selectedStep) {
    const href = selectedStep.getAttribute("href");
    if (href) {
      try {
        const res = await fetch(href);
        if (!res.ok) throw new Error("Failed to load " + href);
        const html = await res.text();
        const container = document.querySelector("#nys-stepper-content");
        if (container) container.innerHTML = html;
      } catch (err) {
        console.error("Error loading initial step content:", err);
      }
    }
  }
});
// listen for step click to prevent default page reload
document.addEventListener("nys-step-click", async (e) => {
  const href = e.detail?.href;
  if (!href) return;
  e.preventDefault();
  try {
    const res = await fetch(href);
    if (!res.ok) throw new Error("Failed to fetch ", href);
    const html = await res.text();
    const container = document.querySelector("#nys-stepper-content");
    if (container) {
      container.innerHTML = html;
    }
  } catch (err) {
    console.error("Error loading innerHTML:", err);
  }
});
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

### Compact
On small screens, the `nys-stepper` will render in a compact mode where the progress is indicated by bars rather than complete steps. You can expand to see the names of steps by clicking on "Step x of y"

### Actions Slot
- You can add actions to the stepper by using the `actions` slot. The action slot only accepts `nys-button` and will render at the top of the `nys-stepper` on desktop and at the end of the stepper on mobile.

## Step Options
Each step is represented by a `<nys-step>` element inside the `<nys-stepper>`.

### Label
{% set code %}<nys-step label="Personal Details">{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### href and onClick
Add a `href` if the content of the step is plain html:

{% set code %}<nys-step 
  label="Personal Details"
  href="/nys-stepper/personal.html">
</nys-step>{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

Add an `onClick` if the content of the step is retrieved from an API or a function needs to be called:

{% set code %}<nys-step 
  label="Personal Details" 
  onClick="yourFunction()">
</nys-step>{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### States

#### Selected
- Represents which step is being displayed to the user.
- The `selected` step by default will match `current` step if `selected` is not defined.
- `selected` cannot exist on a step later than the `current` step, if this is done by mistake it will correct to match `current`.

#### Current
- Represents which step is the user is up to in the stepper's progress.
- This is the last step the user is able to navigate to.
- Users can go back and review past completed steps, therefor `current` and `selected` might not be the same at a given moment.
- As the user completes steps, update the `current` flag to the next step, this needs to be done on the user side.
- if `current` is not defined, the first step is marked by default.

#### Previous
- This prop is automatically applied to all steps before the `current` step and is used to style the steps properly.
- Do not add `previous` to a step on the implementation side.

{% endblock %}

{% block properties %}

| Property       | Type         | Component     | 
|----------------|--------------|---------------|
| `id`           | String       | `nys-stepper` |
| `name`         | String       | `nys-stepper` |
| `label`        | String       | both          |
| `selected`     | boolean      | `nys-step`    |
| `current`      | boolean      | `nys-step`    |
| `href`         | String (URL) | `nys-step`    |
| `onClick`      | JS function  | `nys-step`    |

{% endblock %}

{% block cssvariables %}{% endblock %}

{% block events %}

The `<nys-stepper>` component emits the following events:

1. **`nys-step-click`** -  Emitted when a `nys-step` is clicked

You can listen to these events using JavaScript:

{% set code %}
// Select the stepper component
const stepper = document.querySelector("nys-stepper");
// Listen for the 'nys-step-click' event
stepper.addEventListener("nys-step-click", () => {
	console.log("nys-step clicked");
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}