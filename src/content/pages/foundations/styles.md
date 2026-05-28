---
permalink: /foundations/styles/
title: "Styles Framework"
navTitle: "CSS"
description: "The @nysds/styles package provides design tokens, a CSS reset, typography styles, and utility classes as composable CSS endpoints."
navOrder: 15
---

{% block content %}

# Styles Framework

The `@nysds/styles` package is the CSS foundation of the NYS Design System. It delivers design tokens as CSS custom properties, a selective CSS reset, typography styles, and layout utility classes — bundled into composable stylesheets you can import based on what your project needs.

Components from `@nysds/components` handle their own internal styling through shadow DOM. The styles package is for everything outside of components: page layout, typography, spacing, and ensuring your application's baseline styles align with the design system.

For installation and setup instructions, see [Get Started as a Developer](/get-started/developers/).

At a glance, the package provides three composable endpoints:

<nys-table caption="@nysds/styles Endpoints" striped>
  <table>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>File</th>
        <th>Use when...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tokens only</td>
        <td><code>nysds.min.css</code></td>
        <td>You only need design tokens and FOUC prevention</td>
      </tr>
      <tr>
        <td>Typography</td>
        <td><code>nysds-typography.min.css</code></td>
        <td>You need role-based font classes</td>
      </tr>
      <tr>
        <td>Full</td>
        <td><code>nysds-full.min.css</code></td>
        <td>You want everything: reset + tokens + typography + utilities</td>
      </tr>
    </tbody>
  </table>
</nys-table>

<section id="stylesheet-endpoints">

## Stylesheet Endpoints

The `@nysds/styles` package ships three CSS files, each building on the last. Choose the one that matches your project's needs.

### Default — Tokens Only

**File:** `nysds.min.css`
**Import path:** `@nysds/styles`

{% set code %}<!-- Tokens only (smallest footprint) -->
<link rel="stylesheet" href="/path/to/nysds.min.css" />{% endset %}
{% set accordionLabel = "HTML" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

This is the smallest stylesheet. It includes:

- **Design tokens** — All NYSDS color, spacing, typography, and sizing values as CSS custom properties (e.g., `--nys-color-theme-primary`, `--nys-space-200`, `--nys-font-size-md`)
- **FOUC prevention** — Rules that hide NYSDS web components (via `:not(:defined)`) until they finish registering, preventing a flash of unstyled content

Use this when you want access to the design system's token values in your CSS but plan to handle typography, layout, and resets yourself.

### Typography — Font Classes

**File:** `nysds-typography.min.css`
**Import path:** `@nysds/styles/typography`

{% set code %}<!-- Typography classes only -->
<link rel="stylesheet" href="/path/to/nysds-typography.min.css" />{% endset %}
{% set accordionLabel = "HTML" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

This stylesheet provides role-based CSS classes for applying consistent typography across your application:

- **Body text** — `.nys-font-body-xs`, `.nys-font-body-sm`, `.nys-font-body-md`
- **Headings** — `.nys-font-h1` through `.nys-font-h6`
- **UI text** — `.nys-font-ui-xs` through `.nys-font-ui-xl`
- **Display text** — `.nys-font-display-sm` through `.nys-font-display-xl`
- **Agency titles** — `.nys-font-agency`

These classes reference NYSDS font tokens, so they require the default stylesheet (or the full stylesheet) to be loaded alongside them for the CSS custom properties to resolve.

Typography classes are designed to match the text styles in the NYSDS Figma library. For more on fonts, font licensing, and font installation, see [Typography](/foundations/typography/).

### Full — Everything

**File:** `nysds-full.min.css`
**Import path:** `@nysds/styles/full`

{% set code %}<!-- Full stylesheet (recommended for most projects) -->
<link rel="stylesheet" href="/path/to/nysds-full.min.css" />{% endset %}
{% set accordionLabel = "HTML" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

This is the recommended stylesheet for most projects. It bundles everything together:

- **CSS reset** — A selective reset that normalizes box-sizing, margins, list styles, heading styles, link colors, and paragraph spacing
- **Design tokens** — All CSS custom properties
- **FOUC prevention** — Component visibility rules
- **Typography styles** — Heading, body, list, and link styles using design system tokens
- **Utility classes** — Layout grid, flexbox, spacing, display, float, opacity, z-index, and responsive helpers

This is the same stylesheet referenced in the [developer setup guide](/get-started/developers/).

</section>

<section id="how-to-reference">

## How to Reference Stylesheets

There are several ways to load `@nysds/styles` depending on your project setup.

### From node_modules

After installing with `npm install @nysds/styles`, reference the dist files from `node_modules`. Most modern build tools (Vite, webpack, Parcel) can resolve these paths directly:

{% set code %}/* In your main CSS file */
@import "@nysds/styles/dist/nysds-full.min.css";{% endset %}
{% set accordionLabel = "CSS @import" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeExpanded = false %}{% set codeLanguage = "" %}

Or reference the file as a `<link>` tag pointed at the resolved path in your build output.

### Copying to your project

If your build tool does not resolve `node_modules` paths, copy the CSS files into your project's asset directory:

{% set code %}cp node_modules/@nysds/styles/dist/nysds-full.min.css src/assets/css/{% endset %}
{% set accordionLabel = "CLI Command" %}
{% set codeExpanded = true %}
{% set codeLanguage = "bash" %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeExpanded = false %}{% set codeLanguage = "" %}

Then reference the local copy:

{% set code %}<link rel="stylesheet" href="/assets/css/nysds-full.min.css" />{% endset %}
{% set accordionLabel = "HTML" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeExpanded = false %}{% set codeLanguage = "" %}

For the full installation walkthrough, including copying both CSS and JS files, see [Get Started as a Developer](/get-started/developers/).

### Manual download

For teams that cannot use npm, download the latest release from the <a href="https://github.com/ITS-HCD/nysds/releases/latest/" target="_blank" rel="noopener noreferrer">NYSDS GitHub releases page<nys-icon name="open_in_new" size="lg"></nys-icon></a> and include the CSS files in your project manually. Keep in mind that you will need to check for updates and replace the files when new versions are released.

{% set code = "" %}{% set accordionLabel = "" %}{% set codeExpanded = false %}{% set codeLanguage = "" %}

</section>

<section id="css-reset">

## CSS Reset

The full stylesheet includes a selective CSS reset that establishes consistent baseline styles across browsers. Unlike aggressive resets that strip all default styling, the NYSDS reset is targeted — it normalizes the specific areas where browser defaults cause inconsistency while preserving useful defaults elsewhere.

The reset applies the following:

- **Box-sizing** — Sets `box-sizing: border-box` on all elements, including `::before` and `::after` pseudo-elements
- **Margins and padding** — Zeroes out default margins on `body`, headings, paragraphs, lists, `blockquote`, `figure`, and `pre`
- **Lists** — Removes default list styling (`list-style: none`) so you can build lists without fighting browser defaults
- **Body defaults** — Sets the base font to `--nys-font-size-md` with `--nys-font-lineheight-md` using the `--nys-font-family-body` font family, and sets text color to `--nys-color-ink`
- **Headings** — Applies `--nys-font-family-heading` with appropriate font sizes, line heights, letter spacing, and margin spacing for `h1` through `h6`
- **Links** — Colors links with `--nys-color-link`, with hover/focus and active states using `--nys-color-link-strong` and `--nys-color-link-strongest`
- **List markers** — Colors list markers with `--nys-color-theme-primary`
- **Smooth scrolling** — Enables `scroll-behavior: smooth` on the `html` element

The reset is included only in the **full** stylesheet (`nysds-full.min.css`). If you use the default tokens-only stylesheet, you are responsible for your own reset.

</section>

<section id="utility-classes">

## Utility Classes

The full stylesheet includes a set of CSS utility classes for layout and common styling needs. These classes follow the `nys-` prefix convention and cover:

- **Layout grid** — A mobile-first, flexbox-based 12-column grid system with responsive breakpoints
- **Flexbox** — Direction, wrap, alignment, and justify utilities
- **Margin and padding** — Spacing utilities using the design system's spacing scale
- **Display** — Block, flex, inline, none, and table display modes
- **Float** — Float left, right, and clear utilities
- **Opacity** — Opacity scale from 0 to 100
- **Z-index** — Layering utilities
- **Position** — Static, relative, absolute, fixed, and sticky
- **Overflow** — Overflow handling for both axes
- **Responsive** — Breakpoint-prefixed variants for most utilities (e.g., `nys-tablet:nys-grid-col-6`)

For the complete reference of available utility classes and usage examples, see [Utilities](/foundations/utilities/).

</section>

<section id="choosing-an-endpoint">

## Choosing an Endpoint

<nys-table striped>
  <table>
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Stylesheet</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Starting a new NYS application</td>
        <td><code>nysds-full.min.css</code></td>
        <td>Get tokens, reset, typography, and layout utilities out of the box</td>
      </tr>
      <tr>
        <td>Adding NYSDS components to an existing site with its own CSS</td>
        <td><code>nysds.min.css</code></td>
        <td>Tokens and FOUC prevention without overriding your existing typography or reset</td>
      </tr>
      <tr>
        <td>Building an email template or print stylesheet</td>
        <td><code>nysds.min.css</code></td>
        <td>Tokens only — you control all other styling</td>
      </tr>
      <tr>
        <td>Need typography classes but have your own reset</td>
        <td><code>nysds.min.css</code> + <code>nysds-typography.min.css</code></td>
        <td>Combine the base tokens with typography classes without bringing in the full reset</td>
      </tr>
    </tbody>
  </table>
</nys-table>

</section>

<section id="related-resources">

## Related Resources

- <a href="https://www.npmjs.com/package/@nysds/styles" target="_blank" rel="noopener noreferrer">@nysds/styles on npm<nys-icon name="open_in_new" size="lg"></nys-icon></a>
- [Get Started as a Developer](/get-started/developers/) — Installation, setup, and framework guides
- [Design Tokens](/foundations/tokens/) — How the token architecture works
- Token Reference — Browse [color](/tokens/), [typography](/tokens/typography/), and [spacing & layout](/tokens/other/) tokens
- [Utilities](/foundations/utilities/) — Complete utility class reference
- [Typography](/foundations/typography/) — Fonts, font licensing, and typography tokens
- [Agency Themes](/foundations/themes/) — How to apply agency-specific theming

</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
