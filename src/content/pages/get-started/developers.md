---
permalink: /get-started/developers/
title: "Developers"
description: "Integrate the New York State Design System into your project with web components, design tokens, and styles. Learn how to install, customize, and use it in Angular, .NET, React, and more."
section: Get Started
---

# Developers

## Install the libraries

To start using NYSDS in your project, you need to install the core libraries:

{% set code %}npm install @nysds/components @nysds/styles
{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

## Reference the files in your application
Once the packages are installed, you need to reference the required files in your HTML or app's entry point. Replace the `path/to` with the actual path to the installed files.

**NOTE**: primarily intended for users who do not have an existing framework like React or Angular. Use as needed based on your setup.
{% set code %}<!-- Load the NYS Design System JavaScript module -->
<script src="/path/to/nysds.js"></script>
<!-- Load the full NYS Design System CSS -->
<link rel="stylesheet" href="/path/to/nysds-full.min.css" />
{% endset %}
{% set accordionLabel = "HTML Snippet" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

## Copying Assets (Alternative Step)
If you prefer to store the assets within your project directory instead of referencing them from node_modules, run this command:

{% set code %}mkdir -p src/assets/css/vendor && mkdir -p src/assets/js/vendor && cp -r node_modules/@nysds/components/dist/nysds.* src/assets/js/vendor && cp -r node_modules/@nysds/styles/dist/* src/assets/css/vendor
{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}
This ensures that the required styles and scripts are available locally, but note that you will need to manually update them when new versions are released.

{% block scripts %}
{% endblock %}