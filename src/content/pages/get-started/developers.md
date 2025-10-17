---
permalink: /get-started/developers/
title: "Developers"
description: "Integrate the New York State Design System into your project with web components, design tokens, and styles. Learn how to install, customize, and use it in Angular, .NET, React, and more."
section: Get Started
---

# Get Started as a Developer

The NYS Design System provides a set of reusable, accessible web components, design tokens, and styles to help New York State teams build consistent, user-friendly digital products. This guide will walk you through the steps to integrate the NYS Design System into your project.

## Install the libraries

To start using the NYS Design System in your project, you need to install the core libraries:

{% set code %}npm install @nysds/components @nysds/styles{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

## Reference the files in your application

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

## Apply Agency Theming
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

## Copying Assets (Alternative Step)

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

## Manual Asset Management (Alternative Step)

If you want to avoid npm altogether, you can download the latest release from the [NYS Design System GitHub repository](https://github.com/ITS-HCD/nysds/releases/latest/) and copy the files you need directly into your project. Keep in mind that you will need to manually check for updates and replace the files as new versions are released.

{% block scripts %}
{% endblock %}
