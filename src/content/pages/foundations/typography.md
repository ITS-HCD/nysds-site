---
permalink: /foundations/typography/
title: Typography
description: "How the NYS Design System handles fonts, typography tokens, and type scale across New York State digital products."
---

{% block content %}

<section id="overview">

# Typography

Typography in the NYS Design System establishes a consistent, accessible reading experience across all New York State digital products. The system provides a curated set of typefaces, a two-layer token architecture for type properties, and utility classes for rapid development.

</section>
<section id="core-fonts">

## Core Fonts

The NYS Design System uses three typefaces, each with a specific role:

*   **Proxima Nova** — The primary typeface for body text, headings, UI elements, and display text. Its neutral character and large x-height make it highly legible at all sizes, from form labels to page titles.
*   **D Sari** — The brand font, used exclusively for agency, program, and initiative titles (e.g. in the global header). Do not use D Sari for body text or general headings.
*   **Oswald** — An optional supporting typeface for content-heavy sites that need a distinctive heading treatment. Not used by default in any NYSDS component.

Every font family token includes a fallback stack. If the primary font is unavailable, the system falls back to system fonts so content remains readable.

### Licensing

These fonts are **not included** in the open-source NYS Design System packages. They are proprietary typefaces licensed exclusively for New York State government agencies and their digital products.

NYS teams can access the fonts through the [NYS Design System Fonts repository](https://github.com/ITS-HCD/nysds-fonts) (internal, requires NYS GitHub access). If the fonts are not installed, all typography tokens resolve to system font fallbacks — your application will still work, just without the branded typefaces.

</section>
<section id="typography-tokens">

## Typography Tokens

The NYS Design System defines typography as [design tokens](/foundations/tokens/) — CSS custom properties that encode font family, size, weight, line height, and letter spacing. These tokens are organized into two layers: **primitive** and **semantic**.

### Primitive Tokens

Primitive tokens are the raw typographical building blocks. They define a range of values without any opinion about where those values should be used.

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Example Token</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>Family</td>
      <td><code>--nys-font-family-sans</code></td>
      <td>"Proxima Nova", -apple-system, ...</td>
    </tr>
    <tr>
      <td>Size</td>
      <td><code>--nys-font-size-md</code></td>
      <td>1rem</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td><code>--nys-font-weight-bold</code></td>
      <td>700</td>
    </tr>
    <tr>
      <td>Line height</td>
      <td><code>--nys-font-lineheight-md</code></td>
      <td>1.5625rem</td>
    </tr>
    <tr>
      <td>Letter spacing</td>
      <td><code>--nys-font-letterspacing-400</code></td>
      <td>0.003rem</td>
    </tr>
  </table>
</nys-table>

Do **not** use primitive tokens directly in your stylesheets. They exist to define the semantic layer. If you reference `--nys-font-size-5xl` directly and the design team later reassigns heading sizes, your layout will not update.

### Semantic Tokens

Semantic tokens map primitive values to specific roles — headings, body text, UI labels, display text, and agency titles. Use these in your stylesheets.

<nys-table striped>
  <table>
    <tr>
      <th>Token</th>
      <th>Role</th>
      <th>Resolves To</th>
    </tr>
    <tr>
      <td><code>--nys-font-family-body</code></td>
      <td>Body text</td>
      <td>var(--nys-font-family-sans)</td>
    </tr>
    <tr>
      <td><code>--nys-font-family-heading</code></td>
      <td>Headings</td>
      <td>var(--nys-font-family-sans)</td>
    </tr>
    <tr>
      <td><code>--nys-font-family-ui</code></td>
      <td>UI labels and controls</td>
      <td>var(--nys-font-family-sans)</td>
    </tr>
    <tr>
      <td><code>--nys-font-family-display</code></td>
      <td>Display / hero text</td>
      <td>var(--nys-font-family-sans)</td>
    </tr>
    <tr>
      <td><code>--nys-font-family-agency</code></td>
      <td>Agency titles</td>
      <td>"D Sari", Arial, sans-serif</td>
    </tr>
    <tr>
      <td><code>--nys-font-size-h1</code></td>
      <td>Heading 1 size</td>
      <td>var(--nys-font-size-7xl) = 2.5rem</td>
    </tr>
    <tr>
      <td><code>--nys-font-size-body-md</code></td>
      <td>Medium body size</td>
      <td>var(--nys-font-size-md) = 1rem</td>
    </tr>
    <tr>
      <td><code>--nys-font-size-ui-md</code></td>
      <td>Medium UI size</td>
      <td>var(--nys-font-size-md) = 1rem</td>
    </tr>
    <tr>
      <td><code>--nys-font-lineheight-h1</code></td>
      <td>Heading 1 line height</td>
      <td>2.5rem</td>
    </tr>
    <tr>
      <td><code>--nys-font-letterspacing-h1</code></td>
      <td>Heading 1 letter spacing</td>
      <td>var(--nys-font-letterspacing-0) = 0</td>
    </tr>
  </table>
</nys-table>

Semantic tokens exist for every heading level (h1--h6), body sizes (xs, sm, md, lg), UI sizes (xs--xl), display sizes (sm--xl), and agency sizes (md--xl). Browse the complete list in the [token reference](/tokens/).

For a deeper explanation of how primitive and semantic token layers work together, see [Design Tokens](/foundations/tokens/).

</section>
<section id="installing-fonts">

## Installing Fonts

### In a NYSDS Application

1. Download the font bundle from the [NYS Design System Fonts repository](https://github.com/ITS-HCD/nysds-fonts) (internal, requires NYS GitHub access).
2. Extract the fonts into your project's assets directory.
3. Reference the provided stylesheet in your HTML `<head>`:

{% set code %}<link rel="stylesheet" href="/assets/fonts/nysds-fonts.css">{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

NYSDS web components use typography tokens internally, so once the fonts are installed and the stylesheet is loaded, components will render with the correct typefaces automatically.

For full project setup instructions including npm installation and script references, see [Getting Started for Developers](/get-started/developers/).

### On Desktop (for Designers)

Designers working in design tools need the font files installed on their local machine. Download the font package from the [NYS Design System Fonts repository](https://github.com/ITS-HCD/nysds-fonts) and install the `.otf` or `.ttf` files using your operating system's font manager.

</section>
<section id="font-preloading">

## Font Preloading

When a browser loads a page, it may briefly display text in a fallback font before the web font finishes loading. This is called a Flash of Unstyled Text (FOUT). Preloading critical fonts tells the browser to start downloading them earlier, reducing or eliminating the flash.

Add `<link rel="preload">` tags for the font weights your application uses most. For most NYS applications, this is Proxima Nova Regular:

{% set code %}<head>
  <link rel="preload" href="/assets/fonts/proximanova-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</head>{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

Only preload fonts you are certain will be used on the page. Preloading too many fonts wastes bandwidth and can slow down initial page load.

For more on web font performance, see Google's [Using Web Fonts](https://fonts.google.com/knowledge/using_type/using_web_fonts) guide.

</section>
<section id="using-typography">

## Using Typography in a Project

The full NYSDS stylesheet (`nysds-full.min.css`) includes predefined typography styles that handle most use cases. If you include this stylesheet, headings, body text, and common elements will use the correct fonts, sizes, and line heights automatically. See [Styles Framework](/foundations/styles/) for full installation and usage instructions.

If you need to customize beyond the defaults or can't use the full stylesheet, you can use typography tokens and utility classes directly:

### Tokens via CSS Custom Properties

Apply semantic tokens directly in your CSS using `var()`:

{% set code %}.service-description {
  font-family: var(--nys-font-family-body);
  font-size: var(--nys-font-size-body-md);
  line-height: var(--nys-font-lineheight-body-md);
  letter-spacing: var(--nys-font-letterspacing-body-md);
}

.section-heading {
  font-family: var(--nys-font-family-heading);
  font-size: var(--nys-font-size-h2);
  line-height: var(--nys-font-lineheight-h2);
  letter-spacing: var(--nys-font-letterspacing-h2);
}{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}

Each property must be set individually — CSS does not support setting multiple properties at once with `var()`. This is fine when building reusable components, but can be verbose for one-off styling. That is where utility classes help.

### Utility Classes

The NYS Design System provides `.nys-font-*` utility classes that bundle the correct font family, size, line height, and letter spacing for common text roles. Apply them directly in your HTML:

{% set code %}<h1 class="nys-font-h1">Apply for Benefits</h1>
<p class="nys-font-body-md">
  Use this form to apply for health insurance, food assistance,
  or other programs administered by New York State.
</p>
<span class="nys-font-ui-sm">Required fields are marked with an asterisk (*)</span>{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

For the complete list of typography utility classes with live previews, see [Typography Utilities](/foundations/utilities/typography/).

</section>
<section id="best-practices">

## Best Practices

1.  **Use semantic tokens, not primitives.** Semantic tokens like `--nys-font-size-h1` will stay correct if the design team adjusts the type scale. Primitive tokens like `--nys-font-size-5xl` will not.

2.  **Use utility classes for rapid development.** The `.nys-font-*` classes combine multiple token properties into a single class. Use them for content areas and page layouts where you need consistent type styling without writing custom CSS.

3.  **Preload critical fonts.** Add `<link rel="preload">` for the one or two font files your application uses most. This eliminates the flash of unstyled text on initial load.

4.  **Extend existing components before building custom ones.** NYSDS web components already reference typography tokens. Override specific CSS custom properties on a component rather than rebuilding its type styling from scratch.

5.  **Maintain heading hierarchy.** Use heading levels (h1--h6) for document structure, not visual sizing. If you need a heading that looks like an h2 but is structurally an h3, apply the `.nys-font-h2` utility class to the `<h3>` element.

</section>
<section id="resources">

## Resources

<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-grid-col-12">
    <a class="card card--horizontal" href="https://github.com/ITS-HCD/nysds-fonts">
      <div class="card__inner">
        <div class="card__media card__media--thin">
          <img src="/assets/img/font-card.svg" />
        </div>
        <div class="card__content">
          <div class="card__title">NYSDS Fonts Repository</div>
          <div class="card__desc">Download the complete NYSDS font bundle including Proxima Nova, D Sari, and Oswald. Available to NYS staff only.
            <p></p>
            <nys-badge label="For NYS staff" prefixIcon="lock_filled"></nys-badge>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

*   [Typography Utility Classes](/foundations/utilities/typography/) — full reference with live previews
*   [Design Tokens](/foundations/tokens/) — how primitive and semantic token layers work
*   [Token Reference](/tokens/) — browse all tokens including typography
*   [Using Web Fonts](https://fonts.google.com/knowledge/using_type/using_web_fonts) — Google's guide to web font performance

</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
