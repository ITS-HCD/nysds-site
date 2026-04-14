---
permalink: /foundations/utilities/overflow/
title: Overflow
description: Utility classes for managing content overflow and scrolling behavior in the NYS Design System.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}

<section id="overview">

# Overflow

Overflow utilities control what happens when content is larger than its container. Use them to clip content, add scrollbars, or allow content to overflow visibly.

</section>

<section id="overflow-classes">

## Overflow classes

<nys-table striped><table>
<thead>
<tr>
<th>Class</th>
<th>CSS value</th>
<th>Behavior</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.nys-overflow-auto</code></td>
<td><code>overflow: auto</code></td>
<td>Adds scrollbars only when content overflows</td>
</tr>
<tr>
<td><code>.nys-overflow-hidden</code></td>
<td><code>overflow: hidden</code></td>
<td>Clips overflowing content with no scrollbar</td>
</tr>
<tr>
<td><code>.nys-overflow-scroll</code></td>
<td><code>overflow: scroll</code></td>
<td>Always shows scrollbars</td>
</tr>
<tr>
<td><code>.nys-overflow-visible</code></td>
<td><code>overflow: visible</code></td>
<td>Content overflows visibly (default)</td>
</tr>
</tbody>
</table></nys-table>

{% set preview %}
<div class="nys-grid-row nys-grid-gap">
  <div class="nys-grid-col-6">
    <p style="margin-top: 0;"><strong>overflow-auto</strong></p>
    <div class="nys-overflow-auto docs-overflow-box">
      <div class="docs-overflow-content">
        The NYS Office of General Services manages state buildings, procurement contracts, and fleet vehicles across the Capital District and beyond. Their services support every state agency's operations.
      </div>
    </div>
  </div>
  <div class="nys-grid-col-6">
    <p style="margin-top: 0;"><strong>overflow-hidden</strong></p>
    <div class="nys-overflow-hidden docs-overflow-box">
      <div class="docs-overflow-content">
        The NYS Office of General Services manages state buildings, procurement contracts, and fleet vehicles across the Capital District and beyond. Their services support every state agency's operations.
      </div>
    </div>
  </div>
</div>
{% endset %}
{% set code %}
<!-- Scrollbar only when needed -->
<div class="nys-overflow-auto" style="max-height: 100px;">
  Long content here...
</div>

<!-- Clip overflowing content -->
<div class="nys-overflow-hidden" style="max-height: 100px;">
  Long content here...
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="axis-overflow">

## Axis-specific overflow

Control overflow on a single axis with `-x` and `-y` variants. This is useful for horizontal scrolling containers or vertically clipped content.

### Overflow-x

<nys-table striped><table>
<thead>
<tr>
<th>Class</th>
<th>CSS value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.nys-overflow-x-auto</code></td>
<td><code>overflow-x: auto</code></td>
</tr>
<tr>
<td><code>.nys-overflow-x-hidden</code></td>
<td><code>overflow-x: hidden</code></td>
</tr>
<tr>
<td><code>.nys-overflow-x-scroll</code></td>
<td><code>overflow-x: scroll</code></td>
</tr>
<tr>
<td><code>.nys-overflow-x-visible</code></td>
<td><code>overflow-x: visible</code></td>
</tr>
</tbody>
</table></nys-table>

{% set preview %}
<div class="nys-overflow-x-auto" style="border: 1px solid var(--nys-color-theme-weak); border-radius: var(--nys-border-radius-md); padding: var(--nys-space-200);">
  <div style="white-space: nowrap; font-family: var(--nys-font-family-monospace); font-size: var(--nys-font-size-ui-sm);">
    Albany &bull; Buffalo &bull; Rochester &bull; Syracuse &bull; Yonkers &bull; New Rochelle &bull; Mount Vernon &bull; Schenectady &bull; Utica &bull; White Plains &bull; Hempstead &bull; Troy &bull; Niagara Falls &bull; Binghamton &bull; Freeport &bull; Valley Stream
  </div>
</div>
{% endset %}
{% set code %}
<!-- Horizontal scroll when content overflows -->
<div class="nys-overflow-x-auto">
  <div style="white-space: nowrap;">
    Wide content that may exceed the container width...
  </div>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

### Overflow-y

<nys-table striped><table>
<thead>
<tr>
<th>Class</th>
<th>CSS value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.nys-overflow-y-auto</code></td>
<td><code>overflow-y: auto</code></td>
</tr>
<tr>
<td><code>.nys-overflow-y-hidden</code></td>
<td><code>overflow-y: hidden</code></td>
</tr>
<tr>
<td><code>.nys-overflow-y-scroll</code></td>
<td><code>overflow-y: scroll</code></td>
</tr>
<tr>
<td><code>.nys-overflow-y-visible</code></td>
<td><code>overflow-y: visible</code></td>
</tr>
</tbody>
</table></nys-table>

{% set preview %}
<div class="nys-overflow-y-auto" style="max-height: 120px; border: 1px solid var(--nys-color-theme-weak); border-radius: var(--nys-border-radius-md); padding: var(--nys-space-200);">
  <p style="margin-top: 0;"><strong>NYS Department of Transportation</strong> — Maintains over 100,000 miles of highway and more than 7,500 bridges statewide.</p>
  <p><strong>Thruway Authority</strong> — Operates the 570-mile New York State Thruway, one of the longest toll highways in the United States.</p>
  <p><strong>MTA</strong> — Provides public transit in the New York metropolitan area, serving millions of riders daily across subway, bus, and rail.</p>
  <p><strong>NYSDOT Regions</strong> — Divided into 11 regional offices to manage construction, maintenance, and traffic operations locally.</p>
</div>
{% endset %}
{% set code %}
<!-- Vertical scroll when content overflows -->
<div class="nys-overflow-y-auto" style="max-height: 120px;">
  Tall content that may exceed the container height...
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="responsive">

## Responsive variants

All overflow utilities support responsive prefixes. See [Responsive Utilities](/foundations/utilities/responsive/) for breakpoint details.

```html
<!-- Scroll on mobile, visible on desktop -->
<div class="nys-overflow-auto nys-desktop:nys-overflow-visible">
  Content that scrolls on small screens
</div>
```

</section>

{% endblock %}

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url }}/assets/css/utilities.css">
<style>
  .docs-overflow-box {
    max-height: 80px;
    border: 1px solid var(--nys-color-theme-weak);
    border-radius: var(--nys-border-radius-md);
    padding: var(--nys-space-200);
  }
  .docs-overflow-content {
    font-size: var(--nys-font-size-ui-sm);
  }
</style>
{% endblock %}

{% block scripts %}
{% endblock %}
