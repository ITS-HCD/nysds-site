---
permalink: /foundations/
title: Foundations
description: "The New York State Design System makes it easier to build accessible, usable websites for New York State."
navOrder: 10
---

{% block content %}

# Foundations

Let's start by defining the parts of the system. The NYS Design System includes:

<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-grid-col-6 nys-desktop:nys-grid-col-3 nys-display-flex">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__media">
          <img src="/assets/img/toggle-card.svg" alt="toggle graphic">
        </div>
        <div class="card__title">Component Library</div>
        <div class="card__desc">This a collection of common front-end code grouped together in components that can be shared and reused across multiple codebases, often with design, state, and default behavior built-in.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-6 nys-desktop:nys-grid-col-3 nys-display-flex">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__media">
            <img src="/assets/img/flex-card.svg" alt="flex"></div>
        <div class="card__title">Design Libraries</div>
        <div class="card__desc">This is a library of icons, styles, components, and variables that can be shared and reused across multiple design files for consistent design and prototyping.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-6 nys-desktop:nys-grid-col-3 nys-display-flex">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__media">
            <img src="/assets/img/4-up-card.svg" alt="4 up graphic"></div>
        <div class="card__title">Design Tokens</div>
        <div class="card__desc">A collection of design decisions stored in key-value pairs, abstracted so they can easily be used across a wide range of platforms, design and code.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-6 nys-desktop:nys-grid-col-3 nys-display-flex">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__media">
            <img src="/assets/img/font-card.svg" alt="fonts"></div>
        <div class="card__title">Fonts</div>
        <div class="card__desc">A collection of standard NYS brand-approved typefaces that need to be used in both design and development product work.</div>
      </div>
    </div>
  </div>
</div>

## Why Foundations Matter

A great design system isn't just about reusable components—it’s about the consistency and predictability that allow those components to work together seamlessly.

Here are a few examples:

  - **Standardizing design values with design tokens** means that when designers select a primary button or an alert in their design tool, that same values are applied in code, creating a 1:1 design-to-development experience.
  - **Building components with a consistent set of color values** makes it possible to apply the design system to different NYS agencies while maintaining a unified user experience.
  - **Starting with inclusivity as a requirement (not an afterthought)**, we've built with WCAG 2.2 AA accessibility standards in mind. Components are built and tested for accessibility, which can help teams avoid costly rework.

Without a strong foundation, a design system becomes just another collection of UI elements. This section helps teams understand how NYS Design System components are built and why they work the way they do.

## Explore Foundations

- [Accessibility](/foundations/accessibility/) – What you should know about accessibility and how the NYS Design System can help.
- [Design Tokens](/foundations/tokens/) – The shared language of colors, spacing, typography, and UI styles, available in both design and code.
- [Utilities](/foundations/utilities) – Practical ways to adapt the NYS Design System to different needs. Layout, mobile-responsiveness, and agency theming.

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}