---
title: Typography
layout: layouts/3-col.njk
permalink: /foundations/utilities/typography/
description: Typography for The New York State Design System
long_description: Typography for The New York State Design System
navOrder: 7
section: Foundations
parent: Utilities
---
<section id="overview">

# Typography

Typography is a core pillar of the New York State Design System, providing a consistent foundation for readability, accessibility, and brand alignment across all New York State digital applications.

## Overview 

Typography in NYSDS is powered by the core fonts that define the New York State brand. These include:

*   **Proxima Nova**: The primary typeface for body text and UI elements.
*   **D Sari**: The brand font used for agency, program, and initiative titles.
*   **Oswald**: A supporting typeface for content-heavy websites (optional).

Due to licensing restrictions, the fonts themselves are not distributed as part of the open-source NYSDS Design System. They are available exclusively to New York State teams via [NYSDS Fonts](https://github.com/ITS-HCD/nysds-fonts) _(internal)_. However, NYSDS provides a set of typography tokens and utilities that work well with Proxima Nova but will fall back to system fonts if the primary fonts are not available.

</section>
<section id="typography-tokens">

## Typography Tokens

<p>NYSDS defines typography tokens (also known as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" rel="nofollow">CSS variables</a>) — for each font property. These tokens are organized into <strong>primitive</strong> and <strong>semantic</strong> categories.</p>

### Primitive

Primitive tokens are the raw typographical building blocks: family, size, weight, line height, and letter spacing. These tokens represent a range of sensible default values that can be used to build out interfaces. This includes tokens like `--nys-font-family-sans`, `--nys-font-size-md`, and `--nys-font-lineheight-lg`.

⛔️ These values **are not** meant to be used directly in your stylesheets. They are used to define the **semantic** tokens.
### Semantic

Semantic tokens map specific properties to specific roles, like headings, body text, and UI elements.

✅ They **are** meant to be used directly in stylesheets. They help standardize font usage across components and applications.

Here are a few examples of NYSDS' semantic typography tokens:

| Token Name               | Description                       | Example Value                 |
|--------------------------|-----------------------------------|-------------------------------|
| `--nys-font-family-body` | Font family for body text.        | `var(--nys-font-family-sans)` |
| `--nys-font-size-h1`     | Font size for Heading 1 elements. | `var(--nys-font-size-5xl)`    |
| `--nys-font-size-ui-md`  | Medium font size for UI elements. | `var(--nys-font-size-md)`     |

</section>
<section id="installing-fonts">

## Installing Fonts

⚠️ Note: Fonts in the design system include some proprietary typefaces that are licensed for use exclusively by New York State government agencies and their digital products. These fonts are distributed separately from the design system and are not part of the open-source package to comply with licensing restrictions.

| Token Name               | Description                       | Example Value                 |
|--------------------------|-----------------------------------|-------------------------------|
| `--nys-font-family-body` | Font family for body text.        | `var(--nys-font-family-sans)` |
| `--nys-font-size-h1`     | Font size for Heading 1 elements. | `var(--nys-font-size-5xl)`    |
| `--nys-font-size-ui-md`  | Medium font size for UI elements. | `var(--nys-font-size-md)`     |

### Download and Install

To access these fonts:

1.  Download the appropriate font bundle from [NYSDS Fonts](https://github.com/ITS-HCD/nysds-fonts). (🔒 _Internal NYS Only_)
2.  Extract the fonts into your project.
3.  Reference the provided `nysds-fonts.css` in the HTML head of your project:

{% set code %}<link rel="stylesheet" href="/assets/fonts/nysds-fonts.css">{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

NYSDS web components use the typography tokens, so as soon as the fonts are installed, the components will appear correctly. More details about using tokens below.

### Preload Critical Fonts (optional)

For better performance, preload critical fonts. This helps reduce the chance of a fallback font loading and then the web font loading later, causing layout reflow and a Flash of Unstyled Text (FOUT):

{% set code %}<head>
  <link rel="preload" href="/assets/fonts/proximanova-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</head>{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

Find more details about preloading fonts and web font best practices in Google's [Using Web Fonts guide](https://fonts.google.com/knowledge/using_type/using_web_fonts).

</section>
<section id="using-typography-in-a-project">

## Using Typography in a Project

NYSDS' native web components use the typography tokens.

If you're not using NYSDS components or if you're styling custom elements or parts of the site not covered by the components, use the typography tokens or utility classes directly in CSS and HTML.

### Tokens

Apply them using `var()` in CSS or by using utility classes. Here are some examples:

{% set code %}body {
  font-family: var(--nys-font-family-body);
  font-size: var(--nys-font-size-body-md);
  line-height: var(--nys-font-lineheight-body-md);
}{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}

Unfortunately, each property must be set individually, as CSS does not support setting multiple properties at once with `var()`.

This approach isn't too cumbersome when creating a library of components where you can define it once, but it can lead to a lot of repetition for everyday use. To help with this, NYSDS provides utility classes.

### Utility Classes

NYSDS also provides utility classes that combine several font tokens into common styles. These can be applied directly in your HTML or included in your project’s CSS.

For example, NYSDS defines several utility classes that apply the font size, line height, and family for specific semantic text roles like heading, body, UI, and display:

{% set code %}.nys-font-h1 {
  font: var(--nys-font-size-h1) / var(--nys-font-lineheight-h1) var(--nys-font-family-heading);
  letter-spacing: var(--nys-font-letterspacing-h1);
}
.nys-font-body {
  font: var(--nys-font-size-md) / var(--nys-font-lineheight-md) var(--nys-font-family-body);
}{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}

You can reference these classes in your HTML:

{% set code %}<h1 class="nys-font-h1">Welcome to NYSDS</h1>
<div class="nys-font-body">
  <p>This is a sample paragraph styled using NYSDS typography utilities.</p>
  <p>The parent element has the .nys-font-body class applied.</p>
</div>{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### Full List of Utility Classes

| Class Name             | Description                | Example                                                                                                                                                                   |
|------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `.nys-font-body-xs`    | Extra small body text      | <div class="nys-font-body-xs">Discover the latest initiatives happening across New York State.</div>                                                                      |
| `.nys-font-body-sm`    | Small body text            | <div class="nys-font-body-sm">Explore outdoor adventures, from the Adirondacks to Niagara Falls.</div>                                                                    |
| `.nys-font-body-md`    | Medium body text           | <div class="nys-font-body-md">Welcome to the official website for New York State, where you’ll find services, programs, and resources for residents and businesses.</div> |
| `.nys-font-h1`         | Heading 1                  | <div class="nys-font-h1">Experience the Empire State</div>                                                                                                                |
| `.nys-font-h2`         | Heading 2                  | <div class="nys-font-h2">Explore New York City and Beyond</div>                                                                                                           |
| `.nys-font-h3`         | Heading 3                  | <div class="nys-font-h3">Parks, Trails, and Natural Wonders</div>                                                                                                         |
| `.nys-font-h4`         | Heading 4                  | <div class="nys-font-h4">Plan Your Visit Today</div>                                                                                                                      |
| `.nys-font-h5`         | Heading 5                  | <div class="nys-font-h5">Join Our Community</div>                                                                                                                         |
| `.nys-font-h6`         | Heading 6                  | <div class="nys-font-h6">Stay Informed with NYS Updates</div>                                                                                                             |
| `.nys-font-ui-xs`      | Extra small UI text        | <div class="nys-font-ui-xs">Next</div>                                                                                                                                    |
| `.nys-font-ui-sm`      | Small UI text              | <div class="nys-font-ui-sm">Apply Now</div>                                                                                                                               |
| `.nys-font-ui-md`      | Medium UI text             | <div class="nys-font-ui-md">View All Services</div>                                                                                                                       |
| `.nys-font-ui-lg`      | Large UI text              | <div class="nys-font-ui-lg">Explore Programs</div>                                                                                                                        |
| `.nys-font-ui-xl`      | Extra large UI text        | <div class="nys-font-ui-xl">Get Started</div>                                                                                                                             |
| `.nys-font-display-sm` | Small display text         | <div class="nys-font-display-sm">Discover the beauty of upstate New York.</div>                                                                                           |
| `.nys-font-display-md` | Medium display text        | <div class="nys-font-display-md">Welcome to the Empire State</div>                                                                                                        |
| `.nys-font-display-lg` | Large display text         | <div class="nys-font-display-lg">Find Your Next Adventure</div>                                                                                                           |
| `.nys-font-display-xl` | Extra large display text   | <div class="nys-font-display-xl">New York State: It’s All Here</div>                                                                                                      |
| `.nys-font-agency`     | Agency-specific font style | <div class="nys-font-agency">New York State Department of Transportation</div>                                                                                            |

</section>
<section id="best-practices">

## Best Practices
1.  **Use Semantic Tokens for Consistency**  
    Always use semantic typography tokens for fonts, sizes, and line heights. Avoid primitive tokens or hardcoding font properties.
    
2.  **Use Utilities When Necessary**  
    Use the predefined `.nys-font-*` classes for rapid development and consistent styling for parts of your applications or site not powered by NYSDS components.
    
3.  **Preload Critical Fonts**  
    Preload the most-used font weights and styles to improve perceived performance — in most cases, this is Proxima Nova Regular.
    
4.  **Extend Existing Components**  
    NYSDS web components automatically reference typography tokens. Use custom styles to extend or override these tokens for specific needs before creating new components.
</section>
<section id="resources">

## Resources
*   [NYSDS Fonts Repository (Internal)](https://github.com/ITS-HCD/nysds-fonts)
*   [NYSDS Design System Tokens](#)
*   [Using Web Fonts](https://fonts.google.com/knowledge/using_type/using_web_fonts)
</section>
