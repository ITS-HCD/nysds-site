---
permalink: /foundations/utilities/float/
title: Float
description: Utility classes for floating elements left, right, or clearing floats in the NYS Design System.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}

<section id="overview">

# Float

Float utilities position an element to the left or right of its container, allowing inline content to wrap around it. For most layout needs, use [Grid](/foundations/utilities/grid/) or [Flexbox](/foundations/utilities/flex/) instead — floats are best suited for wrapping text around images or similar content-flow patterns.

</section>

<section id="float-classes">

## Float classes

<nys-table striped>
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th>CSS value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>.nys-float-left</code></td>
        <td><code>float: left</code></td>
      </tr>
      <tr>
        <td><code>.nys-float-right</code></td>
        <td><code>float: right</code></td>
      </tr>
      <tr>
        <td><code>.nys-float-none</code></td>
        <td><code>float: none</code></td>
      </tr>
    </tbody>
  </table>
</nys-table>

{% set preview %}
<div style="overflow: hidden;">
  <div class="nys-float-left docs-demo-box" style="margin-right: var(--nys-space-200); margin-bottom: var(--nys-space-100);">
    <code>.nys-float-left</code>
  </div>
  <p>The New York State Department of Environmental Conservation manages the state's natural resources, from the Adirondack Park to Long Island's coastal waters. The department provides hunting and fishing licenses, oversees environmental permits, and monitors air and water quality across the state.</p>
</div>
{% endset %}
{% set code %}
<div class="nys-float-left" style="margin-right: 1rem;">
  <img src="image.jpg" alt="Adirondack Park" width="200">
</div>
<p>The New York State Department of Environmental Conservation
manages the state's natural resources, from the Adirondack Park
to Long Island's coastal waters.</p>
{% endset %}
{% include "partials/code-preview.njk" %}

{% set preview %}
<div style="overflow: hidden;">
  <div class="nys-float-right docs-demo-box" style="margin-left: var(--nys-space-200); margin-bottom: var(--nys-space-100);">
    <code>.nys-float-right</code>
  </div>
  <p>The Division of Homeland Security and Emergency Services coordinates the state's response to natural disasters, severe weather events, and other emergencies. Residents can sign up for NY-Alert notifications to receive real-time updates.</p>
</div>
{% endset %}
{% set code %}
<div class="nys-float-right" style="margin-left: 1rem;">
  <aside>Related links</aside>
</div>
<p>The Division of Homeland Security and Emergency Services
coordinates the state's response to natural disasters and
severe weather events.</p>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="clearfix">

## Clearfix

Use `.nys-clearfix` on a container to clear floated children and prevent layout collapse. This adds a `::after` pseudo-element with `clear: both`.

{% set preview %}
<div class="nys-clearfix" style="border: 2px dashed var(--nys-color-theme-weak); padding: var(--nys-space-200);">
  <div class="nys-float-left docs-demo-box">
    <code>Floated left</code>
  </div>
  <div class="nys-float-right docs-demo-box">
    <code>Floated right</code>
  </div>
</div>
{% endset %}
{% set code %}
<div class="nys-clearfix">
  <div class="nys-float-left">Floated left</div>
  <div class="nys-float-right">Floated right</div>
</div>
<!-- Container wraps around floated children -->
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="responsive">

## Responsive variants

All float utilities support responsive prefixes. See [Responsive Utilities](/foundations/utilities/responsive/) for breakpoint details.

```html
<!-- Float left on tablet and wider, no float on mobile -->
<div class="nys-float-none nys-tablet:nys-float-left">
  Sidebar content
</div>
```

</section>

{% endblock %}

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url }}/assets/css/utilities.css">
{% endblock %}

{% block scripts %}
{% endblock %}
