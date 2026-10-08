---
permalink: /get-started/developers/
title: "Developers"
description: "Install the New York State Design System. Use web components and CSS variables in your project. Integrate with React, Angular, Vue, or .NET."
section: Get Started
---

# Get Started as a Developer

Choose your framework:

<div class="nys-grid-row nys-grid-gap-400" style="--nys-card-height: 100%">
    <nys-card class="nys-tablet:nys-grid-col-6" heading="No framework" description="CSS/JS and HTML custom elements" headingLevel="h3">
      <nys-button fullWidth slot="footer" href="#quick-start" variant="outline">Framework-less quick start</nys-button>
    </nys-card>
    <nys-card class="nys-tablet:nys-grid-col-6" heading="Angular" description="Pre-built NYSDS Angular components" headingLevel="h3">
      <nys-button fullWidth slot="footer" href="/get-started/developers/angular/" variant="outline">Angular quick start</nys-button>
    </nys-card>
    <nys-card class="nys-tablet:nys-grid-col-6" heading="React" description="Pre-built NYSDS React components" headingLevel="h3">
      <nys-button fullWidth slot="footer" href="/get-started/developers/react/" variant="outline">React quick start</nys-button>
    </nys-card>
    <nys-card class="nys-tablet:nys-grid-col-6" heading="Vue" description="Pre-built NYSDS Vue components" headingLevel="h3">
      <nys-button fullWidth slot="footer" href="/get-started/developers/vue/" variant="outline">Vue quick start</nys-button>
    </nys-card>



</div>

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

**Layout & Utilities** — A grid system and utility classes for spacing, flex layouts, and responsive design. See the [layout utilities reference](/utilities/).

**Typography** — Font styling and typography tokens. Fonts must be downloaded separately due to licensing. See [fonts and typography](/foundations/typography/).

**Accessibility** — All components are WCAG 2.2 compliant with keyboard navigation and screen reader support. See [accessibility](/foundations/accessibility/).

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
