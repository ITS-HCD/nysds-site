---
permalink: /getting-started/developers/
title: "Developers"
description: "Integrate the New York State Design System into your project with web components, design tokens, and styles. Learn how to install, customize, and use it in Angular, .NET, React, and more."
section: Getting Started
---

# Developers

## Install the libraries

To start using NYSDS in your project, you need to install the core libraries:

```html
npm install @nysds/components @nysds/styles
```

## Reference the files in your application
Once the packages are installed, you need to reference the required files in your HTML or app's entry point:

```html
<script type="module" src="[path-to-dir]/nysds.js"></script>
<link rel="stylesheet" href="[path-to-dir]/nysds-full.min.css" />
```

## Copying Assets (Alternative Step)
If you prefer to store the assets within your project directory instead of referencing them from node_modules, run this command:

```html
mkdir -p src/assets/css/vendor && mkdir -p src/assets/js/vendor && cp -r node_modules/@nysds/components/dist/nysds.* src/assets/js/vendor && cp -r node_modules/@nysds/styles/dist/* src/assets/css/vendor
```
This ensures that the required styles and scripts are available locally, but note that you will need to manually update them when new versions are released.

{% block scripts %}
{% endblock %}