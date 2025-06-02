---
permalink: /components/skipnav/
title: Skip To Content
description: An accessibility feature that allows keyboard and screen readers to bypass navigation items and jump directly to the main content of a webpage.
image: /assets/img/components/skipnav.svg
image_alt: An illustration of a skip to content button.
image_header: /assets/img/components/skipnav-header.svg
navOrder: 11
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-skipnav&gt;</code> is an accessibility feature that allows keyboard and screen readers to bypass navigation items and jump directly to the main content of a webpage.

{% endblock %}

{% block example %}
{% set preview %}
<nys-skipnav id="skipnav-demo" href="#main-content"></nys-skipnav>
<p style="margin-top:55px;">
  This skip link is visible for demo purposes. In our mockup of a
  real-world scenario further down this page, you'll see it's hidden until
  focused.
</p>
<script type="module">
  customElements.whenDefined('nys-skipnav').then(async () => {
    const skipnav = document.getElementById('skipnav-demo');
    // Wait until the Lit component finishes updating
    await skipnav.updateComplete;
    const link = skipnav?.shadowRoot?.querySelector('.nys-skipnav__link');
    if (link) {
      link.classList.add('show');
    }
  });
</script>
{% endset %}

{% set code %}
<nys-skipnav id="skipnav-demo" href="#main-content"></nys-skipnav>
{% endset %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block usage %}

### When to use this component
  - When your page has a large header or navigation before the main content
  - When you want to improve keyboard and screen reader accessibility
### When to consider something else

  - If your layout already starts with the main content and has no navigation to skip
{% endblock %}

{% block usagedo %}

  - Use on pages with navigation or repeated elements before the main content
  - Make sure the `href` matches the `id` of your main content container

{% endblock %}

{% block usagedont %}

  - Don’t use if there’s no content to skip over
  - Don’t forget to set the correct `href` or matching `id`

{% endblock %}

{% block accessibility %}

The `<nys-skipnav>` component includes the following accessibility-focused features:
  - First focusable element on page load for easy keyboard navigation
  - Visible only on focus, with a clear focus indicator that meets WCAG 2.2
  - Pressing Enter moves focus to the main content section
  - Screen readers correctly announce the link and shift focus on activation

{% endblock %}

{% block options %}

The `<nys-skipnav>` component adds a hidden "Skip to main content" link that appears on Tab, allowing keyboard and screen reader users to jump directly to the main content. By default, `href` is set to `href="#main-content"`, but you can change it to match the id of your main content container.

**IMPORTANT:** To work correctly, `<nys-skipnav>` should be the first focusable element. Ideally right after the opening `<body>` tag, before any headers or nav elements.

{% set preview %}<nys-skipnav href="#main-content1"></nys-skipnav>
<nys-unavheader hideTranslate hideSearch></nys-unavheader>
<div id="main-content1" style="padding:10px 30px; background-color: #f0f0f0;">
  <h1>Main Content</h1>
  <p style="display:flex; align-items:top; gap:10px;">
      <nys-icon name="info" size="2xl"></nys-icon>
      Press Tab to focus on the hidden "Skip to main content" link. This feature 
      allows screen reader users and keyboard navigators to jump directly to the 
      main content section, improving accessibility and usability.
  </p>
</div>
<nys-unavfooter></nys-unavfooter>{% endset %}
{% set code = preview%}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}{% endblock %}

{% block cssvariables %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
