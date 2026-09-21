---
permalink: /get-started/developers/
title: "Developers"
description: "Install the New York State Design System. Use web components and CSS variables in your project. Integrate with React, Angular, Vue, or .NET."
section: Get Started
---

# Get Started as a Developer

The NYSDS gives you a library of web components and a set of design tokens and styles. Install via npm, load the files in your HTML, and start building.

## Quick Start

Install the core libraries:

{% set code %}npm install @nysds/components @nysds/styles{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

Reference the files in your HTML:

{% set code %}<!-- Load the full NYS Design System CSS. Link should go in head. -->
<link rel="stylesheet" href="node_modules/@nysds/styles/dist/nysds-full.min.css" />
<!-- Load the NYS Design System JS library. Should go before the closing body tag -->
<script type="module" src="node_modules/@nysds/components/dist/nysds.js"></script>
{% endset %}
{% set accordionLabel = "HTML Snippet" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

Then use NYSDS components directly in your HTML:

{% set code %}<nys-alert
  heading="Application received"
  text="Your permit application has been submitted for review."
></nys-alert>{% endset %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

**Important:** Adjust paths based on your build tool. Many tools (Vite, Webpack) resolve `node_modules` automatically — use bare imports like `import ‘@nysds/components’` and `@import ‘@nysds/styles/full’`.

## Design System Features

**Components** — A library of accessible, reusable web components for forms, navigation, alerts, modals, and more. See the [component reference](/components/) and read about [web component fundamentals](/foundations/components/).

**Design Tokens** — CSS custom properties for colors, spacing, typography, shadows, and more. Use them to style custom layouts and align with NYSDS. See the [tokens reference](/foundations/tokens/).

**Styles Framework** — The `@nysds/styles` package provides typography classes, a CSS reset, layout utilities, and agency themes. See the [styles framework guide](/foundations/styles/).

**Layout & Utilities** — A grid system and utility classes for spacing, flex layouts, and responsive design. See the [layout utilities reference](/foundations/utilities/).

**Typography** — Font styling and typography tokens. Fonts must be downloaded separately due to licensing. See [fonts and typography](/foundations/typography/).

**Accessibility** — All components are WCAG 2.2 compliant with keyboard navigation and screen reader support. See [accessibility](/foundations/accessibility/).

## Framework Guides

NYSDS components are standard web components. They work in any framework. Below are sample setup steps for common frameworks used across New York State agencies. If you notice a bug in these configurations, [drop a bug report issue in GitHub](https://github.com/ITS-HCD/nysds/issues/new/choose).


### React
<nys-alert type="success" heading="Updated React support as of v1.21.1"></nys-alert>

Full React support is available through our dedicated `@nysds/react` package, which provides React-wrapped versions of each web component. Event bindings, forms integration, and slots all included.

{% set code %}npm install @nysds/react @nysds/styles{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

For a full walkthrough covering project setup, custom events, slots, and forms, see the [React Tutorial](/get-started/developers/react/).

### Angular
<nys-alert type="success" heading="Updated Angular support as of v1.21.1"></nys-alert>

Full Angular support is available through `@nysds/angular`, with Angular components for standalone and NgModule-based apps. No `CUSTOM_ELEMENTS_SCHEMA` required.
 
{% set code %}npm install @nysds/angular{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

For a full walkthrough covering standalone components, NgModule setup, and forms integration, see the [Angular Tutorial](/get-started/developers/angular/).

### Vue

<nys-alert heading="Vue support is currently in ALPHA"></nys-alert>

We package the Vue JSX files in the @nysds/components/react package. Configure Vite to recognize `nys-` tags as custom elements:

{% set code %}// vite.config.js
import vue from '@vitejs/plugin-vue';
export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('nys-')
        }
      }
    })
  ]
}{% endset %}
{% set accordionLabel = "Vue Config" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

### .NET / Blazor

Load NYSDS in your layout via local path:

{% set code %}<!-- In _Layout.cshtml or _Host.cshtml -->
<!-- Load the NYS Design System JavaScript library -->
<script type="module" src="node_modules/@nysds/components/dist/nysds.js"></script>
<!-- Load the full NYS Design System CSS -->
<link rel="stylesheet" href="node_modules/@nysds/styles/dist/nysds-full.min.css" />{% endset %}
{% set accordionLabel = ".NET Layout" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

## VSCode Autocomplete

Copy `.vscode/` from `node_modules/@nysds/components/dist/.vscode/` to your project root. Then add to `.vscode/settings.json`:

```json
"html.customData": [".vscode/vscode.html-custom-data.json"],
"css.customData": [".vscode/vscode.css-custom-data.json"]
```

## Essential Links

- **NPM Packages:** [@nysds/components](https://www.npmjs.com/package/@nysds/components), [@nysds/styles](https://www.npmjs.com/package/@nysds/styles)
- **GitHub:** [ITS-HCD/nysds](https://github.com/ITS-HCD/nysds)
- **Component Reference:** Browse all [components](/components/)
- **Release Notes:** Read the latest [updates](/about/updates/)
- **Report Issues:** [GitHub Issues](https://github.com/ITS-HCD/nysds/issues)
- **ITS Teams:** [Troubleshooting channel](https://teams.microsoft.com/l/channel/19%3A0228156e2bb5419c8152047f596a7bfb%40thread.tacv2/Troubleshooting?groupId=40dc9e8f-13b9-4301-8cb7-db5c2b21c9fa&tenantId=f46cb8ea-7900-4d10-8ceb-80e8c1c81ee7) (ITS staff only)
