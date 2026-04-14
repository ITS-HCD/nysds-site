---
permalink: /get-started/designers/
title: "Designers"
description: "Learn how to use The New York State Design System Figma libraries, design tokens, and accessibility guidelines to create consistent, user-friendly digital experiences for New York State."
section: Get Started
---

{% block content %}

# Get Started as a Designer

The NYS Design System helps your team build accessible, consistent, and user-friendly digital products. But components alone don't guarantee good design—strong experiences come from thoughtful user research, testing, and iteration.

The design system handles the solved problems: buttons, forms, navigation, modals, and more. This frees you to focus on what's unique to your agency: user flows, content strategy, and the specific needs of New Yorkers.

## How the Design System Team Uses Figma

The NYS Design System team designs every component in Figma before building it in code. Each component in the Figma library has the same properties, variants, and states as its coded counterpart. When the team updates a component, the Figma library and the code library are updated together. This means designs created with the library stay accurate through development and into production.

The team also uses Figma variables to power agency theming. When you switch an agency theme in the library, colors, typography, and spacing update across your entire file automatically.

## NYS Design System’s Figma Libraries

Designing and prototyping with the NYS Design System is powered by prebuilt Figma libraries that mirror the coded components. This connectedness makes it easier for designers and developers to collaborate and ensures that what is designed matches what is built.

<a class="card card--horizontal" href="https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System">
    <div class="card__inner">
        <div class="card__media card__media--thin">
            <img src="/assets/img/design-token-card.svg" />
        </div>
        <div class="card__content">
            <div class="card__title">
                NYS Design System for NYS Employees
            </div>
            <div class="card__desc">
                The core Figma file containing all UI components with built-in properties, variants, and prototyping features.
                <p></p>
                <nys-badge label="For NYS staff" prefixIcon="lock_filled"></nys-badge>
            </div>
        </div>
    </div>
</a>

<a class="card card--horizontal" href="https://www.figma.com/community/file/1574803287825265318">
    <div class="card__inner">
        <div class="card__media card__media--thin">
            <img src="/assets/img/brand-card.svg" />
        </div>
        <div class="card__content">
            <div class="card__title">
                NYS Design System for the Community
            </div>
            <div class="card__desc">
                The community Figma library for use in interfaces. No NYS account required.
                <p></p>
                <nys-badge label="Open to all" prefixIcon="public"></nys-badge>
            </div>
        </div>
    </div>
</a>

### How the Libraries Help

The NYS Design System is designed to speed up and standardize UI design. Here’s how:

- **Design & Code Parity:** Components in Figma match the NYS Design System web components 1:1, reducing the need for custom styling. Developers can easily find and implement the same components seen in designs.
- **Auto-Theming for NYS Agencies:** The NYS Design System adapts to agency branding using built-in Figma theme variables. Project templates automatically apply the correct colors, typography, and design tokens.
- **Built-In Prototyping:** Many components have pre-configured interactions (e.g., modals, buttons, and inputs). Click-through prototypes help teams test and refine user flows before development begins.

## How to Start Designing with The NYS Design System

1. Search for "NYS Design System" in the Figma Assets panel and activate the libraries.
2. Use the [Design System project template](https://www.figma.com/design/DS5Nm2AdMDzpelPfEJ2hnn/%F0%9F%94%B2-Project-Template?m=auto&t=NclNpstvX9JkuC7w-7) to start with the correct agency theming and design variables.
3. Leverage components with built-in properties and variants to speed up your workflow.

## Your First 15 Minutes

Once you have activated the NYS Design System library, here is a quick workflow to get familiar with what is available.

### 1. Browse the component library

Open the Assets panel in Figma and expand the NYS Design System section. Scroll through to see the full list of components: buttons, alerts, form inputs, navigation elements, and more. Each component name matches a corresponding web component, so what you see here is what developers will implement.

### 2. Insert a few components

Create a new page in your file and drag in a handful of components. Try a button, an alert, and a text input. You will see that each one drops in with realistic default content and proper styling already applied.

### 3. Explore variants and properties

Select any component instance and look at the right-side panel. You can switch between variants (such as button types or alert styles), toggle properties on or off, and change text content. Experiment with the options to see how each component adapts.

### 4. Check color and typography styles

Open the local styles panel or use the selection colors section to see what design tokens are available. The library includes a full set of color and typography styles that stay consistent across every component. These map directly to the design tokens that developers use in code.

### 5. Look at example layouts

Open the project template to see how components come together in realistic page layouts. These examples show common patterns like form pages, content pages, and navigation structures. Use them as starting points for your own work.

<a class="card card--horizontal" href="https://www.figma.com/design/DS5Nm2AdMDzpelPfEJ2hnn/%F0%9F%94%B2-Project-Template?m=auto&t=NclNpstvX9JkuC7w-7">
    <div class="card__inner">
        <div class="card__media card__media--thin">
            <img src="/assets/img/4-up-card.svg" />
        </div>
        <div class="card__content">
            <div class="card__title">
                NYS Design System Project Template
            </div>
            <div class="card__desc">
                Start with the correct agency theming and design variables already applied. Includes example layouts for common page types.
                <p></p>
                <nys-badge label="For NYS staff" prefixIcon="lock_filled"></nys-badge>
            </div>
        </div>
    </div>
</a>

After this quick tour, you will have a solid sense of what the library offers. From here, you can start applying components to your actual project work.

## Next Steps: Learn More About the Design System

The NYS Design System isn’t just about using components—it’s about creating better, more accessible digital experiences for New Yorkers.

<div class="nys-grid-row nys-grid-gap-lg">
<nys-button 
    label="Learn More About Foundations"
    href="/foundations"
    variant="outline"
    fullWidth
    class="nys-tablet:nys-grid-col-6"
    style="margin-bottom: 16px;"></nys-button>
<nys-button 
    label="Get Started for Developers"
    href="/get-started/developers"
    variant="outline"
    fullWidth
    class="nys-tablet:nys-grid-col-6"></nys-button>
</div>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
