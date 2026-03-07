---
permalink: /foundations/utilities/position/
title: Position
description: Utility classes for controlling element positioning in the NYS Design System.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}

<section id="overview">

# Position

Position utilities set the CSS `position` property on an element, controlling how it's placed in the document flow. Positioned elements can then use offset properties (`top`, `right`, `bottom`, `left`) and [z-index utilities](/foundations/utilities/zindex/) for layering.

</section>

<section id="position-classes">

## Position classes

| Class | CSS value | Behavior |
|-------|-----------|----------|
| `.nys-position-static` | `position: static` | Default. Element flows normally in the document. |
| `.nys-position-relative` | `position: relative` | Flows normally but can be offset from its natural position. Creates a positioning context for children. |
| `.nys-position-absolute` | `position: absolute` | Removed from flow. Positioned relative to nearest positioned ancestor. |
| `.nys-position-fixed` | `position: fixed` | Removed from flow. Positioned relative to the viewport. Stays in place during scrolling. |
| `.nys-position-sticky` | `position: sticky` | Flows normally until it reaches a scroll threshold, then "sticks" in place. |

</section>

<section id="relative-and-absolute">

## Relative and absolute

Use `.nys-position-relative` on a parent and `.nys-position-absolute` on a child to position elements relative to their container — for example, placing a badge on a card.

{% set preview %}
<div class="nys-position-relative" style="border: 1px solid var(--nys-color-theme-weak); border-radius: var(--nys-border-radius-md); padding: var(--nys-space-400); min-height: 120px;">
  <span class="docs-demo-box nys-position-absolute" style="top: var(--nys-space-100); right: var(--nys-space-100); padding: var(--nys-space-50) var(--nys-space-200); font-size: var(--nys-font-size-ui-sm);">
    <code>Absolute child</code>
  </span>
  <p style="margin: 0;">Card content positioned normally in the flow.</p>
</div>
{% endset %}
{% set code %}
<div class="nys-position-relative">
  <span class="nys-position-absolute" style="top: 8px; right: 8px;">
    Badge
  </span>
  <p>Card content positioned normally in the flow.</p>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="sticky">

## Sticky

Use `.nys-position-sticky` with a `top` offset to make an element stick in place when the user scrolls past it. This is commonly used for section headers or navigation within a long page.

{% set preview %}
<div style="max-height: 200px; overflow-y: auto; border: 1px solid var(--nys-color-theme-weak); border-radius: var(--nys-border-radius-md);">
  <div class="nys-position-sticky nys-z-100 docs-demo-box" style="top: 0; border-radius: 0;">
    <code>.nys-position-sticky</code> — scroll to see this stick
  </div>
  <div style="padding: var(--nys-space-200);">
    <p>The New York State Department of Health oversees public health programs across the state, including disease prevention, environmental health, and health facility regulation.</p>
    <p>The Office of Mental Health operates psychiatric centers and regulates mental health services provided by local governments and private agencies.</p>
    <p>The Department of Labor protects workers, assists job seekers, and collects labor market data to support economic development in all 62 counties.</p>
    <p>The Office for People With Developmental Disabilities coordinates services for individuals with intellectual and developmental disabilities and their families.</p>
  </div>
</div>
{% endset %}
{% set code %}
<div class="nys-position-sticky" style="top: 0;">
  Section header that sticks on scroll
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="responsive">

## Responsive variants

All position utilities support responsive prefixes. See [Responsive Utilities](/foundations/utilities/responsive/) for breakpoint details.

```html
<!-- Static on mobile, sticky on desktop -->
<nav class="nys-position-static nys-desktop:nys-position-sticky" style="top: 0;">
  Section navigation
</nav>
```

</section>

{% endblock %}

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url }}/assets/css/utilities.css">
{% endblock %}

{% block scripts %}
{% endblock %}
