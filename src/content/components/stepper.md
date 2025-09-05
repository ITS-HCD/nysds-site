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
    <div slot="actions">
      <nys-button
        variant="outline"
        label="Save & Exit"
        fullWidth
      ></nys-button>
    </div>
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
### When to consider something else
{% endblock %}

{% block usagedo %}{% endblock %}

{% block usagedont %}{% endblock %}

{% block accessibility %}{% endblock %}

{% block options %}

### Disabled

{% endblock %}

{% block properties %}

| Property       | Type                                   |
|----------------|----------------------------------------|
| `id`           | String                                 |
| `name`         | String                                 |

{% endblock %}

{% block cssvariables %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}