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

<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/foundations/accessibility/"
      headingLevel="h3"
      heading="Accessibility"
      description="How the design system supports WCAG 2.2 AA compliance, with guidance for developers, content creators, and leadership.">
    </nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/foundations/styles/"
      headingLevel="h3"
      heading="Styles framework"
      description="The @nysds/styles CSS package — design tokens as custom properties, a CSS reset, typography classes, and layout utilities.">
    </nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/foundations/themes/"
      headingLevel="h3"
      heading="Agency Themes"
      description="Apply agency-specific color palettes with a single attribute — build once, switch themes, and every component updates automatically.">
    </nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/foundations/tokens/"
      headingLevel="h3"
      heading="Design Tokens"
      description="The shared language of colors, spacing, and typography values — how primitive, semantic, and theme tokens connect design decisions to code.">
    </nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/foundations/components/"
      headingLevel="h3"
      heading="How Components Work"
      description="Web components, shadow DOM, slots, CSS custom properties, and the patterns you need to use NYSDS components effectively.">
    </nys-card>
  </div>
</div>

## Implementation Guides

Practical references for building interfaces with the design system — typography, form patterns, layout utilities, and the broader design process.

<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/foundations/design/"
      headingLevel="h3"
      heading="Design"
      description="Where the design system fits in the broader UX process — from strategy and scope to the interface layer.">
    </nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/foundations/typography/"
      headingLevel="h3"
      heading="Typography"
      description="Core typefaces, typography tokens, font installation, and utility classes for consistent, accessible type across your application.">
    </nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/foundations/forms/"
      headingLevel="h3"
      heading="Form Patterns"
      description="Form association, validation strategies, event handling, and submission patterns that work across all NYSDS form components.">
    </nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/foundations/utilities/"
      headingLevel="h3"
      heading="Utilities"
      description="Layout grid, flexbox, spacing, display, and responsive utility classes for rapid, consistent page layout.">
    </nys-card>
  </div>
</div>

## Reference

Need to look up a specific token value or component API? These are also always available in the main navigation.

<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/tokens/"
      headingLevel="h3"
      heading="Token Browser"
      description="Browse all design tokens — colors, spacing, typography, and theme values — with an interactive theme switcher.">
    </nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <nys-card
      href="/components/"
      headingLevel="h3"
      heading="Component Catalog"
      description="All 27 NYSDS components — properties, events, accessibility details, and copy-paste examples.">
    </nys-card>
  </div>
</div>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
