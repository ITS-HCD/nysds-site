---
permalink: /foundations/
title: Foundations
description: "Excelsior makes it easier to build accessible, usable websites for New York State."
navOrder: 10
---

{% block content %}

## Overview

What is a design system? It isn't just a component library, a set of fonts and colors, or a prototyping kit. The core value of a design system is in its system-ness. A system is a set of things working together as parts of an interconnected network to create a cohesive whole.

What makes a design system unique is the connectedness. Our design libraries use variables, our code library is built on the same variables, the two have parity with each other, and our reference site is built using the same components, variables, and guiding principles. This interconnectedness is what makes a design system a system.

This connectedness helps brings consistency, accessibility, and efficiency to New York State’s digital experiences. This section will walk you through the system and the core principles, styles, and design tokens that make it flexible and scalable across applications.

## Defining Foundations

Let's start by defining the parts of the system. The NYS Design System includes:

- **Component library:** This a collection of common front-end code grouped together in components that can be shared and reused across multiple codebases, often with design, state, and default behavior built-in.
- **Design libraries:** This is a library of icons, styles, components, and variables that can be shared and reused across multiple design files for consistent design and prototyping.
- **Design tokens:** A collection design decisions stored in key-value pairs, abstracted so they can easily be used across a wide range of platforms, design and code.
- **Fonts:** A collection of standard NYS brand-approved typefaces that need to be used in both design and development product work.
- **Reference site:** You're reading it! This is a place to showcase and explain the design system. It contains guidelines about brand, aesthetics, usability, accessibility, common patterns, governance, contribution, etc.

## Why Foundations Matter

A great design system isn't just about reusable components—it’s about the consistency and predictability that allow those components to work together seamlessly.

Here are a few examples:

Standardizing design values with design tokens means that when designers select a primary button or an alert in their design tool, that same values are applied in code, creating a 1:1 design-to-development experience.

Building components with a consistent set of color values makes it possible to apply the design system to different NYS agencies while maintaining a unified user experience.

Starting with inclusivity as a requirement (not an afterthought), we've built with WCAG 2.2 AA accessibility standards in mind. Components are built and tested for accessibility, which can help teams avoid costly rework.

Without a strong foundation, a design system becomes just another collection of UI elements. This section helps teams understand how Excelsior components are built and why they work the way they do.

## Explore Foundations

This section covers:

- [Accessibility](/foundations/accessibility/) – What you should know about accessibility and how the NYS Design System can help.
- [Design Principles](/foundations/design-principles/) – The core philosophies that guide our design decisions.
- [Design Tokens](/foundations/tokens/) – The shared language of colors, spacing, typography, and UI styles, available in both design and code.
- [Utilities](/foundations/utilities) – Practical ways to adapt Excelsior to different needs. Layout, mobile-responsiveness, and agency theming.

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}