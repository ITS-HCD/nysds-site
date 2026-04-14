---
permalink: /foundations/design/
title: Design
description: "Good design starts before pixels. How the NYS Design System fits into the broader UX process."
section: Foundations
navOrder: 2
---

{% block content %}

# Design

Good design does not start with what you see. It starts with understanding who you are building for, what they need, and how your service fits into their life. The NYS Design System helps teams build accessible, consistent digital products — but using components alone does not guarantee good design.

<section id="elements-of-ux">

## The Elements of User Experience

Strong digital experiences are built in layers, from abstract strategy to concrete interface. Each layer builds on the one before it:

<div class="ux-layers" style="max-width: 32rem; margin: 2rem auto;">
  <div style="background: var(--nys-color-theme-stronger); color: #fff; padding: 1rem 1.5rem; text-align: center; border-radius: 0.5rem 0.5rem 0 0;">
    <strong>Surface</strong><br><span style="font-size: 0.875rem;">UI Design, UX Writing</span>
  </div>
  <div style="background: var(--nys-color-theme-strong); color: #fff; padding: 1rem 1.5rem; text-align: center;">
    <strong>Skeleton</strong><br><span style="font-size: 0.875rem;">Interaction Design, Layout</span>
  </div>
  <div style="background: var(--nys-color-theme); color: #fff; padding: 1rem 1.5rem; text-align: center;">
    <strong>Structure</strong><br><span style="font-size: 0.875rem;">UX Architecture</span>
  </div>
  <div style="background: var(--nys-color-theme-weak); color: var(--nys-color-ink); padding: 1rem 1.5rem; text-align: center;">
    <strong>Scope</strong><br><span style="font-size: 0.875rem;">Requirements</span>
  </div>
  <div style="background: var(--nys-color-theme-faint); color: var(--nys-color-ink); padding: 1rem 1.5rem; text-align: center; border-radius: 0 0 0.5rem 0.5rem;">
    <strong>Strategy</strong><br><span style="font-size: 0.875rem;">User Needs, Business Objectives</span>
  </div>
</div>

The NYS Design System primarily operates at the **Surface** and **Skeleton** layers — providing the visual building blocks and interaction patterns that make up the interface. But a great interface built on a weak foundation of strategy, scope, and structure will still fail users.

Strong UX comes from a thoughtful process that includes research, personas, user flows, prototyping, and testing. The design system accelerates the final steps, but it cannot replace the earlier ones.

</section>

<section id="design-support">

## Design Support

The ITS Experience Design (XD) team helps agencies with research, design strategy, and UX architecture. If your team is starting a new project or redesigning an existing service, connect with XD early in the process — before you start building.

The design system gives you standard components and patterns. The XD team helps you figure out which ones to use, and how to arrange them into an experience that works for your users.

</section>

<section id="from-design-to-build">

## From Design to Build

Once your team has defined the strategy, scope, and structure of your service, the design system provides the building blocks for the interface layer:

<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/components/">How Components Work</a></div>
        <div class="card__desc">Custom HTML elements with built-in accessibility, encapsulated styles, and consistent behavior.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/tokens/">Design Tokens</a></div>
        <div class="card__desc">The design decision layer — colors, spacing, typography, and sizing defined as reusable values.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/styles/">Styles Framework</a></div>
        <div class="card__desc">CSS endpoints for tokens, typography, utilities, and a baseline reset.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/typography/">Typography</a></div>
        <div class="card__desc">Core typefaces, token-based sizing, and utility classes for consistent type.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/themes/">Agency Themes</a></div>
        <div class="card__desc">Color palettes for each agency group — apply once and every component updates.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <div class="card card__no-border card__flat nys-flex-fill">
      <div class="card__inner">
        <div class="card__title"><a href="/foundations/forms/">Form Patterns</a></div>
        <div class="card__desc">Validation, submission, error handling, and accessibility patterns for form-heavy applications.</div>
      </div>
    </div>
  </div>
</div>

</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
