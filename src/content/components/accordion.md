---
permalink: /components/accordion/
title: Accordion
description: Vertically stacked list of headers that reveal or hide associated content.
image: /assets/img/components/accordion.svg
image_alt: An illustration of an accordion
image_header: /assets/img/components/accordion-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=4469-1783
navOrder: 2
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `nys-accordion` and `nys-accordionitem` components are vertically stacked list of headers that can be clicked to reveal or hide associated content, helping to organize and condense information.

{% endblock %}

{% block example %}
{% set preview %}
<nys-accordion>
  <nys-accordionitem id="accordionId1" heading="How do I renew my passport or apply for a new one?" expanded>
    <p>
      You can apply for or renew a U.S. passport through the U.S. Department
      of State. Some renewals can be done by mail.
    </p>
    <div style="display: flex; gap: 0.5rem; font-size: 1rem;">
      <a href="https://www.ny.gov" target="_blank">Check your registration</a>
      <a href="https://www.ny.gov" target="_blank">Fill out application</a>
    </div>
  </nys-accordionitem>
  <nys-accordionitem id="accordionId2" heading="How can I find out if I’m registered to vote?">
    <p>You can check your registration status, update your information, or find out how to register through the National Association of Secretaries of State.</p>
  </nys-accordionitem>
</nys-accordion>
  {% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block usage %}

### When to use this component

  - Use an accordion when you need to organize related information into expandable sections, reducing the need for users to scroll through long content.
  - Ideal for supplemental details like optional steps, extra instructions, or secondary eligibility notes—similar to FAQs.
  - Helpful in mobile layouts to keep pages compact while still allowing access to full details.


### When to consider something else

  - Do not hide essential, universal information such as critical deadlines, main eligibility criteria, or urgent alerts inside collapsed panels. Keep these visible by default!
  - If users need to compare details from multiple sections at once, consider using a table or side-by-side layout instead of an accordion.

{% endblock %}

{% block usagedo %}

  - Use accordions for FAQs on state services, like DMV procedures or benefits information.
  - Use to break up long program descriptions into manageable sections without overwhelming the reader.
  - Label headings clearly so users understand the content before expanding.

{% endblock %}

{% block usagedont %}

  - Don't hide time-sensitive deadlines or required steps in a collapsed section.
  - Don't use vague or unclear headings that make it hard to know what is inside.
  - Don't overuse accordions for content that is short enough to display fully on the page.

{% endblock %}

{% block accessibility %}

The `nys-accordionitem` component includes the following accessibility-focused features:

  - Keyboard navigation (e.g. Tab to move between headers, Enter or Space to toggle).
   -Headers are large enough to interact with easily (minimum 44x44px).

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
    <p>Empire ipsum dolor sit amet, across the Brooklyn Bridge to Central Park, consectetur adipiscing elit.</p>
  </nys-accordionitem>
</nys-accordion>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Accordion wrapper
The `nys-accordion` is a wrapper that holds a group of `nys-accordionitem` components.

When the `singleSelect` boolean property is set, only one `nys-accordionitem` in the wrapper can be open at a time.

{% set preview %}
<nys-accordion singleSelect>
  <nys-accordionitem id="accordion1" heading="Welcome to New York" expanded>
   <p>Learn about state programs, services, and resources available at
      <a href="https://www.ny.gov" target="_blank">ny.gov</a>
    </p>
  </nys-accordionitem>
  <nys-accordionitem id="accordion2" heading="Liberty Ipsum: Bridges & Boroughs">
    <p>Empire ipsum dolor sit amet, across the Brooklyn Bridge to Central Park, consectetur adipiscing elit.</p>
  </nys-accordionitem>
  <nys-accordionitem id="accordion3" heading="Hudson Ipsum: Riverfront Stories">
    <p>From the banks of the Hudson to the peaks of the Adirondacks, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </nys-accordionitem>
</nys-accordion>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Bordered
The `bordered` prop is available on `nys-accordion`. When set, all `nys-accordionitem` inside the wrapper will display borders.

{% set preview %}
<nys-accordion singleSelect bordered>
  <nys-accordionitem heading="We are a group of accordions">
   <p>Stronger together! Learn more at
      <a href="https://www.ny.gov" target="_blank">ny.gov</a>
    </p>
  </nys-accordionitem>
  <nys-accordionitem heading="Liberty Ipsum: Bridges & Boroughs">
    <p>Empire ipsum dolor sit amet, across the Brooklyn Bridge to Central Park, consectetur adipiscing elit.</p>
  </nys-accordionitem>
  <nys-accordionitem heading="Hudson Ipsum: Riverfront Stories">
    <p>From the banks of the Hudson to the peaks of the Adirondacks, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </nys-accordionitem>
</nys-accordion>
{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

<nys-table striped bordered>
  <table>
      <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Component</th>
      </tr>
      <tr>
          <td><code>id</code></td>
          <td>String</td>
          <td>both</td>
      </tr>
      <tr>
          <td><code>heading</code></td>
          <td>String</td>
          <td>only <code>nys-accordionitem</code></td>
      </tr>
      <tr>
          <td><code>expanded</code></td>
          <td>Boolean</td>
          <td>only <code>nys-accordionitem</code></td>
      </tr>
      <tr>
          <td><code>bordered</code></td>
          <td>Boolean</td>
          <td>only <code>nys-accordion</code></td>
      </tr>
      <tr>
          <td><code>singleSelect</code></td>
          <td>Boolean</td>
          <td>only <code>nys-accordion</code></td>
      </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-accordionitem>` component emits **one** custom Javascript events:

  1.  **`nys-accordionitem-toggle`** – Emitted when the accordion is clicked.

### Event details
The `nys-accordionitem-toggle` event includes a detail object with the following properties:

  - id (string): The id of the accordion.
  - heading (string): The accordion’s heading text.
  - expanded (boolean): true if the accordion is expanded, otherwise false.

You can listen to these events using JavaScript:
{% set code %}// Select the accordion component
const accordion = document.querySelector("nys-accordionitem");
// Listen for the 'nys-accordionitem-toggle' event
accordion.addEventListener("nys-accordionitem-toggle", (event) => {
  console.log("Accordion toggled:", {
    id: event.detail.id,
    heading: event.detail.heading,
    expanded: event.detail.expanded
  });
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
