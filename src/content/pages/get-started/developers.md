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

{% set code %}<!-- Load the NYS Design System JavaScript library -->
<script type="module" src="node_modules/@nysds/components/dist/nysds.js"></script>
<!-- Load the full NYS Design System CSS -->
<link rel="stylesheet" href="node_modules/@nysds/styles/dist/nysds-full.min.css" />
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

## CDN Alternative

If your project cannot use npm (legacy .NET, static sites, prototypes), load from a CDN:

{% set code %}<!-- Load NYSDS from CDN -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@nysds/components/dist/nysds.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nysds/styles/dist/nysds-full.min.css" />{% endset %}
{% set accordionLabel = "CDN Setup" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

Pin to a specific version for production:

{% set code %}<!-- Pin to a specific version -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@nysds/components@1.13.0/dist/nysds.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nysds/styles@1.13.0/dist/nysds-full.min.css" />{% endset %}
{% set accordionLabel = "Pinned Version" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

## Framework Guides

NYSDS components are standard web components. They work in any framework. Below are the key setup steps for common frameworks used across New York State agencies.

### React

Web components work in React, but React's synthetic event system does not automatically listen to custom events from web components. Use `ref` callbacks or `addEventListener` for NYSDS events like `nys-change`.

{% set code %}import '@nysds/components';
function LicenseRenewalForm() {
  const handleChange = (e) => {
    console.log('Selected:', e.detail.value);
  };
  return (
    <nys-select
      label="License type"
      ref={(el) => el?.addEventListener('nys-change', handleChange)}
    >
      <option value="driver">Driver License</option>
      <option value="commercial">Commercial Driver License</option>
    </nys-select>
  );
}{% endset %}
{% set accordionLabel = "React Example" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

### Angular

Add `CUSTOM_ELEMENTS_SCHEMA` to your module:

{% set code %}// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import '@nysds/components';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}{% endset %}
{% set accordionLabel = "Angular Setup" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

### Vue

Configure Vite to recognize `nys-` tags as custom elements:

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

Load NYSDS in your layout via CDN or local path:

{% set code %}<!-- In _Layout.cshtml or _Host.cshtml -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@nysds/components/dist/nysds.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nysds/styles/dist/nysds-full.min.css" />{% endset %}
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
- **Component Reference:** Browse all [26 components](/components/)
- **Release Notes:** Read the latest [updates](/about/updates/)
- **Report Issues:** [GitHub Issues](https://github.com/ITS-HCD/nysds/issues)
- **ITS Teams:** [Troubleshooting channel](https://teams.microsoft.com/l/channel/19%3A0228156e2bb5419c8152047f596a7bfb%40thread.tacv2/Troubleshooting?groupId=40dc9e8f-13b9-4301-8cb7-db5c2b21c9fa&tenantId=f46cb8ea-7900-4d10-8ceb-80e8c1c81ee7) (ITS staff only)
