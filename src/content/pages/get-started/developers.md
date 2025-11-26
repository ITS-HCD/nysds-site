---
permalink: /get-started/developers/
title: "Developers"
description: "Integrate the New York State Design System into your project with web components, design tokens, and styles. Learn how to install, customize, and use it in Angular, .NET, React, and more."
section: Get Started
---

# Get Started as a Developer
There are two parts of the NYS Design System that are crucial for engineers to understand: 
- A library of custom HTML elements, called web components, built with lit.dev and native JS and designed to work anywhere
- A collection of CSS variables that define the style of components and can be used to extend those styles to other components, and layout utilities that can be used to create mobile-responsive layouts

## Install Component Library

To start using the NYS Design System in your project, you need to install the core libraries:

{% set code %}npm install @nysds/components @nysds/styles{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

### Reference the files in your application

Once you've installed the packages, reference them in your application or site. 

{% set code %}<!-- Load the NYS Design System Javascript library -->
<script src="/path/to/nysds.js"></script>
<!-- Load the full NYS Design System CSS -->
<link rel="stylesheet" href="/path/to/nysds-full.min.css" />
{% endset %}
{% set accordionLabel = "HTML Snippet" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

**Important:** 
- Replace the `path/to` with the actual path to the installed files (for example, from `node_modules`).
- Place the `<script>` right before the closing `</body>` tag, so the DOM is fully loaded before the NYS Design System initializes.
- Many modern build tools allow you to reference files directly from `node_modules`, but you can also copy them into your project assets (see "Copying Assets (Alternative Step)").

#### Copying Assets (Alternative Step)

If you prefer to host the NYS Design System files locally within your project, you can copy them from `node_modules` to your project's asset directories.

If you wanted to copy the NYS Design System CSS and JS files to `src/assets/css/vendor` and `src/assets/js/vendor` respectively, you could use the following command:

{% set code %}
mkdir -p src/assets/css/vendor && mkdir -p src/assets/js/vendor
cp -r node_modules/@nysds/components/dist/nysds.* src/assets/js/vendor
cp -r node_modules/@nysds/styles/dist/* src/assets/css/vendor
{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

This will copy over styles and scripts, but when new versions are released, you will need to update via npm and copy them over again.

#### Manual Asset Management (Alternative Step)

If you want to avoid npm altogether, you can download the latest release from the [NYS Design System GitHub repository](https://github.com/ITS-HCD/nysds/releases/latest/) and copy the files you need directly into your project. Keep in mind that you will need to manually check for updates and replace the files as new versions are released.

## Install Styles

### Full CSS Reference

The recommended way to use the NYS Design System styles is to include the full stylesheet, which contains all component styles and layout utilities.

{% set code %}<!-- Load the NYS Design System Javascript library -->
<script src="/path/to/nysds.js"></script>
<!-- Load the full NYS Design System CSS -->
<link rel="stylesheet" href="/path/to/nysds-full.min.css" />
{% endset %}
{% set accordionLabel = "HTML Snippet" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

### Minimal CSS Reference

If you only need access to the design tokens and layout utilities, you can include the minimal stylesheet instead.

{% set code %}<!-- Load the NYS Design System Javascript library -->
<script src="/path/to/nysds.js"></script>
<!-- Load the minimal NYS Design System CSS -->
<link rel="stylesheet" href="/path/to/nysds.min.css" />
{% endset %}
{% set accordionLabel = "HTML Snippet" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

### Install Font Styles

Fonts must be downloaded separately due to licensing restrictions. 

**Important:** 
Note: These fonts are licensed for New York State applications only and are not distributed as part of the open-source design system.

{% set code %}<!-- Load the NYS Design System Javascript library -->
<script src="/path/to/nysds.js"></script>
<!-- Load the minimal NYS Design System CSS -->
<link rel="stylesheet" href="/path/to/nysds-typography.css" />
{% endset %}
{% set accordionLabel = "HTML Snippet" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

### Apply Agency Theming

The NYS Design System includes prebuilt theme stylesheets for agency branding (e.g. colors, buttons, etc). 

To apply a theme, add the agency stylesheet in the `<head>` alongside core NYS Design System styles. For example, "Office of Children and Family Services" uses the `health` theme. :

{% set code %}<!-- Core NYS Design System styles -->
<link rel="stylesheet" href="/path/to/nysds-full.min.css" /> 
<!-- Agency theme (Health) --> 
<link rel="stylesheet" href="/path/to/nysds-theme-health.min.css" /> 
{% endset %} 
{% set accordionLabel = "HTML Snippet" %} 
{% set codeExpanded = true %} 
{% include "partials/code-preview.njk" %}

**Note:** If no agency theme is applied, components will default to NYS blue.

## Component Integration

## Adding a Component
Once the references are set up, you can start using NYSDS components directly in your HTML.
For example, to add an `nys-alert` component:

{% set code %}
<nys-alert
  heading="Welcome to the Design System!"
  text="You can use all the web components the design system offers."
></nys-alert>
{% endset %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

### Using CSS Variables

The New York State Design System is built on a foundation of CSS variable ramps that define colors, spacing, and other design tokens. These variables style the components themselves but are also meant to be used across your site for consistency. Apply them in your own CSS to align custom layouts and elements to create a consistent visual experience for New Yorkers.

View all [available design tokens here](/foundations/tokens/).{# , and read more about how they work and how to use them effectively here. TODO: add link to article once published #}

### Accessibility

All components in our design system are built with accessibility in mind. They are WCAG 2.2 compliant and have been tested for screen readers and keyboard navigation. By using these components, your site gains built-in accessibility features, helping ensure a more inclusive experience for all users.

### Event Interactions

Most NYS Design System components emit custom JavaScript events that allow developers to respond to user interactions such as clicks, selections, and state changes.

Each component’s event behavior is documented in the “Events” section on its reference page. There, you’ll find:
- A list of all custom events the component emits (e.g., `nys-change`, `nys-click`, etc.)
- The event detail object describing what data is passed when the event is fired
- These events are fully accessible through standard DOM event listeners, allowing you to hook into component behavior from your scripts.

## Get Support
Need help or want to report an issue? You can:

<ul>
  <li>Submit or track issues on <a href="https://github.com/ITS-HCD/nysds/issues" target="_blank" rel="noopener noreferrer">GitHub<nys-icon name="open_in_new" size="lg"></nys-icon></a></li>
  <li>Review the latest <a href="/updates/" target="_self" rel="noopener noreferrer">Release Notes</a></li>
  <li>Ask questions or get troubleshooting help in the <a href="https://teams.microsoft.com/l/channel/19%3A0228156e2bb5419c8152047f596a7bfb%40thread.tacv2/Troubleshooting?groupId=40dc9e8f-13b9-4301-8cb7-db5c2b21c9fa&tenantId=f46cb8ea-7900-4d10-8ceb-80e8c1c81ee7" target="_blank" rel="noopener noreferrer">Troubleshooting channel on Teams<nys-icon name="open_in_new" size="lg"></nys-icon></a></li>
</ul>