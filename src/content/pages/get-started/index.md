---
permalink: /get-started/
title: "Get Started"
description: "The New York State Design System makes it easier to build accessible, usable websites for New York State."
section: Get Started
navOrder: 1
---

{% block content %}

# Get Started with the NYS Design System

The NYS Design System gives your team the tools to build accessible, consistent digital experiences faster. There are three ways to use it, whether you are starting from scratch or working within an existing application.

## Three Ways to Use the Design System

<div class="nys-grid-row nys-grid-gap-lg">

<div class="nys-grid-col-12" style="background: var(--nys-color-theme-faint); border-left: 4px solid var(--nys-color-theme); padding: var(--nys-space-400); margin-bottom: 24px;">

<nys-badge label="Recommended for new projects"></nys-badge>

### Code: Use the Web Components

Build new products and modernize existing ones faster with prebuilt, accessible UI components. Our web components handle responsiveness, keyboard navigation, screen reader support, and theme switching automatically—so your team can focus on application logic, not accessibility infrastructure.

Each component is production-ready, thoroughly tested, and built for government use cases: DMV forms, benefits applications, permit systems, and agency dashboards.

**[Browse All Components →](/components/)**

</div>

<div class="nys-tablet:nys-grid-col-6" style="border: 1px solid var(--nys-color-neutral-200); padding: var(--nys-space-300);">

### Styles: Use Design Tokens and CSS Framework

Don't want to adopt components yet? Use our design tokens and CSS framework to maintain visual consistency across your site. Apply tokens for color, typography, spacing, and borders to custom HTML—no component wrapper needed.

**[Explore Tokens & Styles](/foundations/styles/)**

</div>

<div class="nys-tablet:nys-grid-col-6" style="border: 1px solid var(--nys-color-neutral-200); padding: var(--nys-space-300);">

### Guidance: Build Accessibly

Learn how to design and build clear, usable digital experiences for all New Yorkers. We cover WCAG compliance, plain language, keyboard navigation, screen reader testing, and accessibility patterns for forms, tables, and complex workflows.

**[Read Accessibility Best Practices](/foundations/accessibility/)**

</div>

</div>

**You can adopt all three approaches or start with what fits your situation.** Many teams begin with styles and tokens in an existing application, then add web components incrementally as their team builds confidence and finds the right moments to refactor.

## Choose Your Path

<div class="nys-grid-row nys-grid-gap-lg">
<nys-button
    label="For Designers"
    href="/get-started/designers/"
    variant="outline"
    fullWidth
    class="nys-tablet:nys-grid-col-4"
    style="margin-bottom: 16px;"></nys-button>
<nys-button
    label="For Developers"
    href="/get-started/developers/"
    variant="outline"
    fullWidth
    class="nys-tablet:nys-grid-col-4"
    style="margin-bottom: 16px;"></nys-button>
<nys-button
    label="For Agency Leaders"
    href="/get-started/leadership/"
    variant="outline"
    fullWidth
    class="nys-tablet:nys-grid-col-4"
    style="margin-bottom: 16px;"></nys-button>
</div>

- **Designers:** Set up design libraries, use component variants, prototype with system components.
- **Developers:** Install via npm, integrate with your framework, start using components and tokens.
- **Agency Leaders:** Understand the value proposition, adoption strategy, and support available.

## Learn the System

The NYS Design System team created a [video tour](/learn/) to walk you through how the system works and how to use it in your team's workflow.

{% endblock %}
