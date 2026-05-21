---
permalink: /foundations/utilities/
title: "Utilities"
description: "CSS utility classes for layout, spacing, visibility, and responsive behavior in the NYS Design System."
section: Foundations
layout: layouts/3-col.njk
---

{% block content %}

<section id="overview">

# Utilities

Utility classes are single-purpose CSS classes that apply one specific style — like hiding an element, adding spacing, or controlling layout direction. They're available through `@nysds/styles` and complement NYSDS components by handling the layout and spacing between them.

All utility classes use the `nys-` prefix. Most support [responsive variants](/foundations/utilities/responsive/) that let you apply styles at specific breakpoints.

</section>

<section id="utility-categories">

## Categories

- **[Display](/foundations/utilities/display/)** — Control element visibility and display behavior
- **[Flexbox](/foundations/utilities/flex/)** — Build flexible one-dimensional layouts with alignment and ordering
- **[Float](/foundations/utilities/float/)** — Float elements left or right within a container
- **[Grid](/foundations/utilities/grid/)** — Structure content with a responsive 12-column flexbox grid
- **[Margin & Padding](/foundations/utilities/margin-padding/)** — Add consistent spacing inside and outside elements
- **[Opacity](/foundations/utilities/opacity/)** — Control element transparency
- **[Overflow](/foundations/utilities/overflow/)** — Manage content overflow and scrolling behavior
- **[Position](/foundations/utilities/position/)** — Control element positioning (static, relative, absolute, fixed, sticky)
- **[Responsive](/foundations/utilities/responsive/)** — Apply utility classes at specific screen-width breakpoints
- **[Typography](/foundations/utilities/typography/)** — Apply font size, weight, and style presets
- **[Z-index](/foundations/utilities/zindex/)** — Control stacking order of overlapping elements

</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
