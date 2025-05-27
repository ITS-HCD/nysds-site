---
permalink: /foundations/utilities/typography/
title: Typography
description: The New York State Design System makes it easier to build usable, accessible, mobile-friendly websites for New York State residents.
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}

<section id="overview">

# Typography

Typography is a core pillar of the New York State Design System, providing a consistent foundation for readability, accessibility, and brand alignment across all New York State digital applications.

## Overview 

<p>Typography in NYSDS is powered by the core fonts that define the New York State brand. These include:</p>
<ul>
<li><strong>Proxima Nova</strong>: The primary typeface for body text and UI elements.</li>
<li><strong>D Sari</strong>: The brand font used for agency, program, and initiative titles.</li>
<li><strong>Oswald</strong>: A supporting typeface for content-heavy websites (optional).</li>
</ul>

<p>Due to licensing restrictions, the fonts themselves are not distributed as part of the open-source NYSDS Design System. They are available exclusively to New York State teams via <a href="https://github.com/ITS-HCD/nysds-fonts" rel="nofollow">NYSDS Fonts</a> <em>(internal)</em>. However, NYSDS provides a set of typography tokens and utilities that work well with Proxima Nova but will fall back to system fonts if the primary fonts are not available.</p>

</section>
<section id="typography-tokens">

## Typography Tokens

<p>NYSDS defines typography tokens (also known as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" rel="nofollow">CSS variables</a>) — for each font property. These tokens are organized into <strong>primitive</strong> and <strong>semantic</strong> categories.</p>

### Primitive

<p>Primitive tokens are the raw typographical building blocks: family, size, weight, line height, and letter spacing. These tokens represent a range of sensible default values that can be used to build out interfaces. This includes tokens like <code>--nys-font-family-sans</code>, <code>--nys-font-size-md</code>, and <code>--nys-font-lineheight-lg</code>.</p>
<p>⛔️ These values <strong>are not</strong> meant to be used directly in your stylesheets. They are used to define the <strong>semantic</strong> tokens.</p>

### Semantic

<p>Semantic tokens map specific properties to specific roles, like headings, body text, and UI elements.</p>
<p>✅ They <strong>are</strong> meant to be used directly in stylesheets. They help standardize font usage across components and applications.</p>
<p>Here are a few examples of NYSDS' semantic typography tokens:</p>

<table>
  <thead>
    <tr>
      <th>Token Name</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--nys-font-family-body</code></td>
      <td>Font family for body text.</td>
      <td><code>var(--nys-font-family-sans)</code></td>
    </tr>
    <tr>
      <td><code>--nys-font-size-h1</code></td>
      <td>Font size for Heading 1 elements.</td>
      <td><code>var(--nys-font-size-5xl)</code></td>
    </tr>
      <tr><td><code>--nys-font-size-ui-md</code></td>
      <td>Medium font size for UI elements.</td>
      <td><code>var(--nys-font-size-md)</code></td>
    </tr>
  </tbody>
</table>

</section>
<section id="installing-fonts">

## Installing Fonts

<p>⚠️ Note: Fonts in the design system include some proprietary typefaces that are licensed for use exclusively by New York State government agencies and their digital products. These fonts are distributed separately from the design system and are not part of the open-source package to comply with licensing restrictions.

<table><thead><tr><th>Token Name</th><th>Description</th><th>Example Value</th></tr></thead><tbody><tr><td><code>--nys-font-family-body</code></td><td>Font family for body text.</td><td><code>var(--nys-font-family-sans)</code></td></tr><tr><td><code>--nys-font-size-h1</code></td><td>Font size for Heading 1 elements.</td><td><code>var(--nys-font-size-5xl)</code></td></tr><tr><td><code>--nys-font-size-ui-md</code></td><td>Medium font size for UI elements.</td><td><code>var(--nys-font-size-md)</code></td></tr></tbody></table></p>

### Download and Install

<p>To access these fonts:</p>
<ol>
<li>Download the appropriate font bundle from <a href="https://github.com/ITS-HCD/nysds-fonts" rel="nofollow" class="sbdocs sbdocs-a css-ajfpqr">NYSDS Fonts</a>. (🔒 <em>Internal NYS Only</em>)</li>
<li>Extract the fonts into your project.</li>
<li>Reference the provided <code class="css-1kwwth4">nysds-fonts.css</code> in the HTML head of your project:</li>
</ol>

{% set code %}<link rel="stylesheet" href="/assets/fonts/nysds-fonts.css">{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

<p>NYSDS web components use the typography tokens, so as soon as the fonts are installed, the components will appear correctly. More details about using tokens below.</p>

### Preload Critical Fonts (optional)

<p>For better performance, preload critical fonts. This helps reduce the chance of a fallback font loading and then the web font loading later, causing layout reflow and a Flash of Unstyled Text (FOUT):</p>

{% set code %}<head>
  <link rel="preload" href="/assets/fonts/proximanova-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</head>{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

<p>Find more details about preloading fonts and web font best practices in Google's <a href="https://fonts.google.com/knowledge/using_type/using_web_fonts" rel="nofollow" class="sbdocs sbdocs-a css-ajfpqr">Using Web Fonts guide</a>.</p>

</section>
<section id="using-typography-in-a-project">

## Using Typography in a Project

<p>NYSDS' native web components use the typography tokens.</p>
<p>If you're not using NYSDS components or if you're styling custom elements or parts of the site not covered by the components, use the typography tokens or utility classes directly in CSS and HTML.</p>

### Tokens

<p>Apply them using <code>var()</code> in CSS or by using utility classes. Here are some examples:</p>

{% set code %}body {
  font-family: var(--nys-font-family-body);
  font-size: var(--nys-font-size-body-md);
  line-height: var(--nys-font-lineheight-body-md);
}{% endset %}
{% set accordionLabel = "Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}

<p>Unfortunately, each property must be set individually, as CSS does not support setting multiple properties at once with <code>var()</code>.</p>
<p>This approach isn't too cumbersome when creating a library of components where you can define it once, but it can lead to a lot of repetition for everyday use. To help with this, NYSDS provides utility classes.</p>

### Utility Classes

<p>NYSDS also provides utility classes that combine several font tokens into common styles. These can be applied directly in your HTML or included in your project’s CSS.</p>
<p>For example, NYSDS defines several utility classes that apply the font size, line height, and family for specific semantic text roles like heading, body, UI, and display:</p>

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

<p>You can reference these classes in your HTML:</p>

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

<table><thead><tr><th>Class Name</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>.nys-font-body-xs</code></td><td>Extra small body text</td><td><div class="nys-font-body-xs">Discover the latest initiatives happening across New York State.</div></td></tr><tr><td><code>.nys-font-body-sm</code></td><td>Small body text</td><td><div class="nys-font-body-sm">Explore outdoor adventures, from the Adirondacks to Niagara Falls.</div></td></tr><tr><td><code>.nys-font-body-md</code></td><td>Medium body text</td><td><div class="nys-font-body-md">Welcome to the official website for New York State, where you’ll find services, programs, and resources for residents and businesses.</div></td></tr><tr><td><code>.nys-font-h1</code></td><td>Heading 1</td><td><div class="nys-font-h1">Experience the Empire State</div></td></tr><tr><td><code>.nys-font-h2</code></td><td>Heading 2</td><td><div class="nys-font-h2">Explore New York City and Beyond</div></td></tr><tr><td><code>.nys-font-h3</code></td><td>Heading 3</td><td><div class="nys-font-h3">Parks, Trails, and Natural Wonders</div></td></tr><tr><td><code>.nys-font-h4</code></td><td>Heading 4</td><td><div class="nys-font-h4">Plan Your Visit Today</div></td></tr><tr><td><code>.nys-font-h5</code></td><td>Heading 5</td><td><div class="nys-font-h5">Join Our Community</div></td></tr><tr><td><code>.nys-font-h6</code></td><td>Heading 6</td><td><div class="nys-font-h6">Stay Informed with NYS Updates</div></td></tr><tr><td><code>.nys-font-ui-xs</code></td><td>Extra small UI text</td><td><div class="nys-font-ui-xs">Next</div></td></tr><tr><td><code>.nys-font-ui-sm</code></td><td>Small UI text</td><td><div class="nys-font-ui-sm">Apply Now</div></td></tr><tr><td><code>.nys-font-ui-md</code></td><td>Medium UI text</td><td><div class="nys-font-ui-md">View All Services</div></td></tr><tr><td><code>.nys-font-ui-lg</code></td><td>Large UI text</td><td><div class="nys-font-ui-lg">Explore Programs</div></td></tr><tr><td><code>.nys-font-ui-xl</code></td><td>Extra large UI text</td><td><div class="nys-font-ui-xl">Get Started</div></td></tr><tr><td><code>.nys-font-display-sm</code></td><td>Small display text</td><td><div class="nys-font-display-sm">Discover the beauty of upstate New York.</div></td></tr><tr><td><code>.nys-font-display-md</code></td><td>Medium display text</td><td><div class="nys-font-display-md">Welcome to the Empire State</div></td></tr><tr><td><code>.nys-font-display-lg</code></td><td>Large display text</td><td><div class="nys-font-display-lg">Find Your Next Adventure</div></td></tr><tr><td><code>.nys-font-display-xl</code></td><td>Extra large display text</td><td><div class="nys-font-display-xl">New York State: It’s All Here</div></td></tr><tr><td><code>.nys-font-agency</code></td><td>Agency-specific font style</td><td><div class="nys-font-agency">New York State Department of Transportation</div></td></tr></tbody></table>
</section>
<section id="best-practices">

## Best Practices

<ol>
  <li>
    <p><strong>Use Semantic Tokens for Consistency</strong><br>
    Always use semantic typography tokens for fonts, sizes, and line heights. Avoid primitive tokens or hardcoding font properties.</p>
  </li>
  <li>
    <p><strong>Use Utilities When Necessary</strong><br>
    Use the predefined <code class="css-1kwwth4">.nys-font-*</code> classes for rapid development and consistent styling for parts of your applications or site not powered by NYSDS components.</p>
  </li>
  <li>
    <p><strong>Preload Critical Fonts</strong><br>
    Preload the most-used font weights and styles to improve perceived performance — in most cases, this is Proxima Nova Regular.</p>
  </li>
  <li>
    <p><strong>Extend Existing Components</strong><br>
    NYSDS web components automatically reference typography tokens. Use custom styles to extend or override these tokens for specific needs before creating new components.</p>
  </li>
</ol>
</section>
<section id="resources">

## Resources

<ul>
  <li><a href="https://github.com/ITS-HCD/nysds-fonts" rel="nofollow">NYSDS Fonts Repository (Internal)</a></li>
  <li><a href="#">NYSDS Design System Tokens</a></li>
  <li><a href="https://fonts.google.com/knowledge/using_type/using_web_fonts" rel="nofollow">Using Web Fonts</a></li>
</ul>
</section>
{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}