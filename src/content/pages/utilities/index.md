---
permalink: /utilities/
redirect_from: /foundations/utilities/
title: "Utilities"
description: "CSS utility classes for layout, spacing, visibility, and responsive behavior in the NYS Design System."
section: Utilities
layout: layouts/3-col.njk
navOrder: 1
---

{% block content %}

<section id="overview">

# Utilities

Utility classes are single-purpose CSS classes that apply one specific style — like hiding an element, adding spacing, or controlling layout direction. They're available through `@nysds/styles` and complement NYSDS components by handling the layout and spacing between them.

All utility classes use the `nys-` prefix. Most support [responsive variants](/utilities/responsive/) that let you apply styles at specific breakpoints.

</section>

<section id="utility-categories">

- **[Display](/utilities/display/)** — Control element visibility and display behavior
- **[Flexbox](/utilities/flex/)** — Build flexible one-dimensional layouts with alignment and ordering
- **[Float](/utilities/float/)** — Float elements left or right within a container
- **[Grid](/utilities/grid/)** — Structure content with a responsive 12-column flexbox grid
- **[Margin & Padding](/utilities/margin-padding/)** — Add consistent spacing inside and outside elements
- **[Opacity](/utilities/opacity/)** — Control element transparency
- **[Overflow](/utilities/overflow/)** — Manage content overflow and scrolling behavior
- **[Position](/utilities/position/)** — Control element positioning (static, relative, absolute, fixed, sticky)
- **[Responsive](/utilities/responsive/)** — Apply utility classes at specific screen-width breakpoints
- **[Typography](/utilities/typography/)** — Apply font size, weight, and style presets
- **[Z-index](/utilities/zindex/)** — Control stacking order of overlapping elements

</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
