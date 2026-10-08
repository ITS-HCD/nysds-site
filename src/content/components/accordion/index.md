---
permalink: /components/accordion/
title: Accordion
description: Vertically stacked list of headers that reveal or hide associated content.
image: /assets/img/components/accordion.svg
image_alt: An illustration of an accordion
image_header: /assets/img/components/accordion-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=4469-1783

hasA11yPages: true
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-accordion>` and `<nys-accordionitem>` components are vertically stacked list of headers that can be clicked to reveal or hide associated content, helping to organize and condense information.

{% endblock %}

{% block example %}
{% set preview %}
<nys-accordion>
<nys-accordionitem
id="accordionId1"
heading="How do I renew my passport or apply for a new one?"
expanded

>

    <p>
      You can apply for or renew a U.S. passport through the U.S. Department
      of State. Some renewals can be done by mail.
    </p>
    <div style="display: flex; gap: 0.5rem; font-size: 1rem;">
      <a href="https://www.ny.gov" target="_blank">Check your registration</a>
      <a href="https://www.ny.gov" target="_blank">Fill out application</a>
    </div>

  </nys-accordionitem>
  <nys-accordionitem
    id="accordionId2"
    heading="How can I find out if I’m registered to vote?"
  >
    <p>
      You can check your registration status, update your information, or
      find out how to register through the National Association of
      Secretaries of State.
    </p>
  </nys-accordionitem>
</nys-accordion>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block accessibility %}

  <!--
The `nys-accordionitem` component includes the following accessibility-focused features:

  - Keyboard navigation (e.g. Tab to move between headers, Enter or Space to toggle).
  - Headers are large enough to interact with easily (minimum 44x44px).-->

{% endblock %}

{% block options %}

### Individual accordion

The `nys-accordionitem` toggles open or closed with the `expanded` prop. Add this prop to a `nys-accordionitem` to have it open by default when the component first renders.

<b>Note</b>: Always wrap `nys-accordionitem` components in a `nys-accordion`.

{% set preview %}
<nys-accordion>
<nys-accordionitem
id="individualAcc1"
heading="Liberty Ipsum: Bridges & Boroughs"
expanded

>

    <p>
      Empire ipsum dolor sit amet, across the Brooklyn Bridge to Central
      Park, consectetur adipiscing elit.
    </p>

  </nys-accordionitem>
</nys-accordion>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Accordion wrapper

The `nys-accordion` is a wrapper that holds a group of `nys-accordionitem` components. When the `singleSelect` boolean property is
set, only one `nys-accordionitem` in the wrapper can be open at a time.

{% set preview %}
<nys-accordion singleSelect>
<nys-accordionitem id="accordion1" heading="Welcome to New York" expanded>
<p>
Learn about state programs, services, and resources available at
<a href="https://www.ny.gov" target="_blank">ny.gov</a>
</p>
</nys-accordionitem>
<nys-accordionitem id="accordion2" heading="Liberty Ipsum: Bridges & Boroughs">
<p>
Empire ipsum dolor sit amet, across the Brooklyn Bridge to Central
Park, consectetur adipiscing elit.
</p>
</nys-accordionitem>
<nys-accordionitem id="accordion3" heading="Hudson Ipsum: Riverfront Stories">
<p>
From the banks of the Hudson to the peaks of the Adirondacks, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
</nys-accordionitem>
</nys-accordion>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Bordered The `bordered` prop is available on `nys-accordion`. When set,

all `nys-accordionitem` inside the wrapper will display borders.

{% set preview %}
<nys-accordion singleSelect bordered>
<nys-accordionitem heading="We are a group of accordions">
<p>
Stronger together! Learn more at
<a href="https://www.ny.gov" target="_blank">ny.gov</a>
</p>
</nys-accordionitem>
<nys-accordionitem heading="Liberty Ipsum: Bridges & Boroughs">
<p>
Empire ipsum dolor sit amet, across the Brooklyn Bridge to Central
Park, consectetur adipiscing elit.
</p>
</nys-accordionitem>
<nys-accordionitem heading="Hudson Ipsum: Riverfront Stories">
<p>
From the banks of the Hudson to the peaks of the Adirondacks, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
</nys-accordionitem>
</nys-accordion>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block events %}

<nys-alert type="info"><span>Some components emit `nys-` events with a `detail` object containing the relevant data, instead of relying on native events alone. Stick to one approach per interaction, don't mix native and `nys-` listeners for the same thing.<span></nys-alert>

The `<nys-accordionitem>` component emits **one** custom Javascript event:

### Event details

<nys-table striped>
  <table>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Return details</th>
    </tr>
    <tr>
      <td><code>nys-accordionitem-toggle</code></td>
      <td>Emitted when an accordion item is expanded or collapsed.</td>
      <td>
        <ul>
          <li><code>id</code> (string): The id of the accordion.</li>
          <li><code>heading</code> (string): The accordion's heading text.</li>
          <li><code>expanded</code> (boolean): <code>true</code> if expanded, otherwise <code>false</code>.</li>
        </ul>
      </td>
    </tr>
  </table>
</nys-table>

<br/>
You can listen to these events using JavaScript:
{% set code %}
// Select the accordion component
const accordion = document.querySelector("nys-accordionitem");
// Listen for the 'nys-accordionitem-toggle' event
accordion.addEventListener("nys-accordionitem-toggle", (event) => {
  console.log("Accordion toggled:", {
    id: event.detail.id,
    heading: event.detail.heading,
    expanded: event.detail.expanded
  });
});
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block dependencies %}

{%
    set dependencies = [
      "<nys-icon>"
    ]
  %}
{% include "partials/dependencies.njk" %}
{% endblock %}

{% block updates %}
{% endblock %}
