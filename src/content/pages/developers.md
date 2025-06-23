---
title: Developers
layout: layouts/3-col.njk
permalink: /getting-started/developers/
description: asdf
long_description: asdf
navOrder: 3
section: Getting Started
parent: ""
---
# Getting Started for Developers

## Install the libraries

To start using NYSDS in your project, you need to install the core libraries:

{% set code %}npm install @nysds/components @nysds/styles
{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

## Reference the files in your application
Once the packages are installed, you need to reference the required files in your HTML or app's entry point:

{% set code %}<script type="module" src="[path-to-dir]/nysds.js"></script>
<link rel="stylesheet" href="[path-to-dir]/nysds-full.min.css" />
{% endset %}
{% set accordionLabel = "CLI Command" %}
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
