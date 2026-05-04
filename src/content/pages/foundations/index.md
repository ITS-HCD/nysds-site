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

## System Foundations

How the design system is built — the token layers, styling framework, theming system, component architecture, and accessibility standards that power everything.

<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/foundations/accessibility/">
      <div class="card__inner">
        <div class="card__title">Accessibility</div>
        <div class="card__desc">How the design system supports WCAG 2.2 AA compliance, with guidance for developers, content creators, and leadership.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/foundations/styles/">
      <div class="card__inner">
        <div class="card__title">Styles Framework</div>
        <div class="card__desc">The <code>@nysds/styles</code> CSS package — design tokens as custom properties, a CSS reset, typography classes, and layout utilities.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/foundations/themes/">
      <div class="card__inner">
        <div class="card__title">Agency Themes</div>
        <div class="card__desc">Apply agency-specific color palettes with a single attribute — build once, switch themes, and every component updates automatically.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/foundations/tokens/">
      <div class="card__inner">
        <div class="card__title">Design Tokens</div>
        <div class="card__desc">The shared language of colors, spacing, and typography values — how primitive, semantic, and theme tokens connect design decisions to code.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/foundations/components/">
      <div class="card__inner">
        <div class="card__title">How Components Work</div>
        <div class="card__desc">Web components, shadow DOM, slots, CSS custom properties, and the patterns you need to use NYSDS components effectively.</div>
      </div>
    </a>
  </div>
</div>

## Implementation Guides

Practical references for building interfaces with the design system — typography, form patterns, layout utilities, and the broader design process.

<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/foundations/design/">
      <div class="card__inner">
        <div class="card__title">Design</div>
        <div class="card__desc">Where the design system fits in the broader UX process — from strategy and scope to the interface layer.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/foundations/typography/">
      <div class="card__inner">
        <div class="card__title">Typography</div>
        <div class="card__desc">Core typefaces, typography tokens, font installation, and utility classes for consistent, accessible type across your application.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/foundations/forms/">
      <div class="card__inner">
        <div class="card__title">Form Patterns</div>
        <div class="card__desc">Form association, validation strategies, event handling, and submission patterns that work across all NYSDS form components.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/foundations/utilities/">
      <div class="card__inner">
        <div class="card__title">Utilities</div>
        <div class="card__desc">Layout grid, flexbox, spacing, display, and responsive utility classes for rapid, consistent page layout.</div>
      </div>
    </a>
  </div>
</div>

## Reference

Need to look up a specific token value or component API? These are also always available in the main navigation.

<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/tokens/">
      <div class="card__inner">
        <div class="card__title">Token Browser</div>
        <div class="card__desc">Browse all design tokens — colors, spacing, typography, and theme values — with an interactive theme switcher.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/components/">
      <div class="card__inner">
        <div class="card__title">Component Catalog</div>
        <div class="card__desc">All 27 NYSDS components — properties, events, accessibility details, and copy-paste examples.</div>
      </div>
    </a>
  </div>
</div>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
