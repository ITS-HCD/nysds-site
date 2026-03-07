---
permalink: /foundations/
title: Foundations
description: "The building blocks, conventions, and architecture behind the NYS Design System — from tokens and themes to typography, forms, and accessibility."
navOrder: 1
---

{% block content %}

# Foundations

The NYS Design System is more than a collection of components. It is a set of shared decisions — about color, spacing, typography, accessibility, and interaction — that make those components consistent, themeable, and predictable across every New York State agency.

Foundations are where those decisions live. They define how components get their styles, how themes change an entire site's appearance without touching component code, how forms validate and submit, and how accessibility is built in from the start.

Whether you are building a new application with NYSDS components or integrating the design system's styles into an existing site, understanding these foundations will help you work with the system instead of around it.

## System Architecture

These pages explain how the design system is built — the technologies, token layers, styling framework, and theming system that power every component.

<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/components/">How Components Work</a></div>
        <div class="card__desc">Web components, shadow DOM, slots, CSS custom properties, and the patterns you need to use NYSDS components effectively.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/tokens/">Design Tokens</a></div>
        <div class="card__desc">The shared language of colors, spacing, and typography values — how primitive, semantic, and theme tokens connect design decisions to code.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/styles/">Styles Framework</a></div>
        <div class="card__desc">The <code>@nysds/styles</code> CSS package — design tokens as custom properties, a CSS reset, typography classes, and layout utilities.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/themes/">Agency Themes</a></div>
        <div class="card__desc">Apply agency-specific color palettes with a single attribute — build once, switch themes, and every component updates automatically.</div>
      </div>
    </div>
  </div>
</div>

## Building With NYSDS

These pages cover the practical topics you will encounter when building interfaces with the design system — typography, form patterns, layout utilities, and accessibility.

<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/typography/">Typography</a></div>
        <div class="card__desc">Core typefaces, typography tokens, font installation, and utility classes for consistent, accessible type across your application.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/forms/">Form Patterns</a></div>
        <div class="card__desc">Form association, validation strategies, event handling, and submission patterns that work across all NYSDS form components.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/utilities/">Utilities</a></div>
        <div class="card__desc">Layout grid, flexbox, spacing, display, and responsive utility classes for rapid, consistent page layout.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/accessibility/">Accessibility</a></div>
        <div class="card__desc">How the design system supports WCAG 2.2 AA compliance, with guidance tailored for developers, content creators, and leadership.</div>
      </div>
    </div>
  </div>
</div>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
