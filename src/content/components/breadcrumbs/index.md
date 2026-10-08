---
permalink: /components/breadcrumbs/
title: Breadcrumbs
description: "Help users understand their location within a site’s hierarchy and navigate between different levels of content."
image: /assets/img/components/breadcrumbs.svg
image_alt: An illustration of a breadcrumbs.
image_header: /assets/img/components/breadcrumbs-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=24282-39250

hasA11yPages: true
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-breadcrumbs>` component shows users their location within a site's structure and provides links to navigate back through parent pages.

{% endblock %}

{% block example %}
{% set preview %}
<nys-breadcrumbs>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Current Page</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block options %}

### Basic Usage

Wrap an ordered list (`<ol>`) with links (`<a>`) inside `<nys-breadcrumbs>`. The last `<li>` should be plain text (the current page).

**Note:** If you prefer not to display the current page in the breadcrumb trail, simply leave it out.

{% set preview %}
<nys-breadcrumbs>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Del Water Gap</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Single Item List

When only one `<li>` is provided, the component renders it as a back-to-parent link instead of a trail.

{% set preview %}
<nys-breadcrumbs>
  <ol>
    <li><a href="/services">Services</a></li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}


### Collapsed

Add the `collapsed` prop to render the breadcrumb trail in its collapsed state. Users can expand the full trail by selecting the ellipsis.

Breadcrumbs automatically collapse when the trail exceeds 5 items on desktop or 3 items on mobile.

{% set preview %}
<nys-breadcrumbs collapsed>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/government">Government</a></li>
    <li><a href="/government/agencies">Agencies</a></li>
    <li><a href="/government/agencies/parks">Parks & Recreation</a></li>
    <li><a href="/parks/state-parks">State Parks</a></li>
    <li><a href="/parks/state-parks/delaware">Delaware Region</a></li>
    <li><a href="/parks/state-parks/delaware/water-gap">Delaware Water Gap</a></li>
    <li>Trail Conditions</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Back to Parent (Mobile Only)

Add the `backToParent` prop to collapse the full breadcrumb trail into a single "back to parent" button on screens narrower than 767px. The component automatically determines which crumb represents the parent of the current page. Resize your browser to a small width to see it in action.


{% set preview %}
<nys-breadcrumbs backToParent>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/government">Government</a></li>
    <li><a href="/government/agencies">Agencies</a></li>
    <li><a href="/government/agencies/parks">Parks & Recreation</a></li>
    <li><a href="/parks/state-parks">State Parks</a></li>
    <li><a href="/parks/state-parks/delaware">Delaware Region</a></li>
    <li><a href="/parks/state-parks/delaware/water-gap">Delaware Water Gap</a></li>
    <li>Trail Conditions</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Size

Set the `size` prop to adjust text size. Available sizes:

- `md`: Default size (16px)
- `sm`: Smaller text (14px)

{% set preview %}
<nys-breadcrumbs size="sm">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/government">Government</a></li>
    <li><a href="/government/agencies">Agencies</a></li>
    <li>Parks & Recreation</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Background Bar

Add the `backgroundBar` prop to display breadcrumbs on a light gray background bar.

{% set preview %}
<nys-breadcrumbs backgroundBar>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Del Water Gap</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Disabled

Add the `disabled` prop to disable all links in the breadcrumbs.

{% set preview %}
<nys-breadcrumbs disabled>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Del Water Gap</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block events %}

<nys-alert type="info"><span>Some components emit `nys-` events with a `detail` object containing the relevant data, instead of relying on native events alone. Stick to one approach per interaction, don't mix native and `nys-` listeners for the same thing.</span></nys-alert>

The `<nys-breadcrumbs>` component emits **one** custom Javascript event:

### Event details

<nys-table striped>
  <table>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Return details</th>
    </tr>
    <tr>
      <td><code>nys-expand</code></td>
      <td>Fired when the collapsed breadcrumb trail is expanded.</td>
      <td>—</td>
    </tr>
  </table>
</nys-table>
<br/>

You can listen to these events using JavaScript:

{% set code %}
// Select the breadcrumbs component
const breadcrumbs = document.querySelector('nys-breadcrumbs');
// Listen for the 'nys-expand' event
breadcrumbs.addEventListener("nys-expand", () => {
  console.log("Breadcrumbs expanded");
});
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}


{% block dependencies %}

{% set dependencies = [
  "<nys-icon>"
] %}

{% include "partials/dependencies.njk" %}

{% endblock %}

{% block updates %}{% endblock %}
