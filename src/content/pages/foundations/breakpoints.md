---
permalink: /foundations/breakpoints/
title: "How NYSDS Breakpoints Work"
navTitle: "Breakpoints"
description: "Understand how NYSDS web components work — custom elements, shadow DOM, slots, CSS custom properties, and the patterns you need to use them effectively."
layout: layouts/3-col.njk
---

{% block content %}

# Breakpoints

The NYS Design System uses five breakpoints to keep layouts consistent across devices, from small mobile screens to large desktop monitors. Each breakpoint sets a viewport range and a grid gutter size, so spacing scales as the screen grows.

<section id="breakpoint-scale">

## The Breakpoint Scale
Gutters increase from 20px on mobile to 64px on desktop large.

<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4">
    <nys-card
      heading="Mobile"
      description="Below 480px. Gutters = 20px."
    ></nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4">
    <nys-card
      heading="Mobile Large"
      description="Above 480px. Gutters = 20px."
    ></nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4">
    <nys-card
      heading="Tablet"
      description="Above 768px. Gutters = 32px."
    ></nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4">
    <nys-card
      heading="Desktop"
      description="Above 1024px. Gutters = 32px."
    ></nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4">
    <nys-card
      heading="Desktop Large"
      description="Above 1280px. Gutters = 64px."
    ></nys-card>
  </div>
</div>

<img src="/assets/img/breakpoints.png" style="width: 100%">

</section>

<section id="the-grid">

## Breakpoints & The Grid

Our [grid system](http://localhost:8080/foundations/utilities/grid/) is built on the same breakpoints. Columns and gutters resize automatically as the viewport crosses each breakpoint, so teams don't need custom media queries for common layouts.


<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      heading="Design Tokens"
      description="Breakpoint and spacing values are defined as reusable tokens, not hardcoded pixel values."
      href="/foundations/tokens/"
    ></nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      heading="Styles Framework"
      description="Grid classes and utilities for rows, columns, and gap spacing across breakpoints."
      href="/foundations/styles/"
    ></nys-card>
  </div>
</div>

</section>

<section id="page-templates">

## Page Templates

How the standard page layout looks at each breakpoint.
<img src="/assets/img/page_templates.png" style="width: 100%">

</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}