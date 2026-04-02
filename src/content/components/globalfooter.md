---
permalink: /components/globalfooter/
title: Global Footer
description: Provide users with essential information, secondary navigation, legal links, and contact details across all pages.
image: /assets/img/components/global-footer.svg
image_alt: An illustration of a global footer.
image_header: /assets/img/components/global-footer-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=4003-64216
navOrder: 13
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-globalfooter>` component renders an agency-branded footer section that sits above the `<nys-unavfooter>`. It displays your agency name and supports slotted content for navigation links, contact information, and other site-wide resources. The layout automatically adjusts between a single-section and multi-column format based on the content structure you provide.

{% endblock %}

{% block example %}
  {% set preview %}
<nys-globalfooter agencyName="Office of Information Technology Services">
</nys-globalfooter>{% endset %}  
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
 - Use on every agency site and application. The Global Footer is a required page element that provides consistent agency branding and secondary navigation.
 - Use to surface essential links such as contact information, privacy policies, accessibility statements, and related program pages.
 - Use with slotted `<ul>` content for single-list links, or nested `<ul>` with `<span>` headings for multi-column layouts.

### When to consider something else
 - Don’t use the Global Footer for primary navigation. Primary navigation belongs in `<nys-globalheader>`.
 - Don’t use the Global Footer for page-specific content or calls to action. Footer content should be relevant site-wide.
 - If you need statewide universal links (Agencies, Services, Counties), those belong in `<nys-unavfooter>`, which renders below this component.
{% endblock %}

{% block usagedo %}

 - Set `agencyName` to your agency's full official name (e.g., "Office of Information Technology Services").
 - Set `homepageLink` to make the agency name a clickable link back to your site's homepage.
 - Keep footer link lists concise. Group related links under `<span>` headings when you have more than 5-6 links.
 - Place `<nys-globalfooter>` above `<nys-unavfooter>` and below your page content and `<nys-backtotop>`.
{% endblock %}

{% block usagedont %}

  - Don't use the Global Footer for primary navigation or interactive features. Use `<nys-globalheader>` for primary navigation.
  - Don't include page-specific content that only applies to certain sections of your site.
  - Don't embed `<script>`, `<iframe>`, `<object>`, or `<img>` elements in slotted content. These are sanitized and removed by the component for security.
{% endblock %}

{% block accessibility %}

The `<nys-globalfooter>` component includes the following accessibility-focused features:

 - Renders a `<footer>` landmark element, which screen readers identify as a `contentinfo` region. This allows users to navigate directly to the footer using landmark shortcuts.
 - The agency name is rendered as an `<h2>` heading, providing a clear content hierarchy within the footer region.
 - All links use standard `<a>` elements, ensuring they are keyboard-focusable and announced correctly by assistive technologies.
 - Keyboard navigation: users can `Tab` through all links in the footer in a logical reading order.
 - When `homepageLink` is set, the agency name becomes a link, providing an additional path back to the agency homepage.
{% endblock %}

{% block options %}

### With Links
For simpler footers or public-facing sites, the Global Footer can include a single list of navigation links. To add links, follow this format:

1. Use an unordered list (`<ul>`) inside the `<nys-globalfooter>` slot. 

2. Each list item (`<li>`) should contain an anchor (`<a href="">`) linking to the desired URL.

Use the prop `homepageLink` to link your `agencyName` to your homepage.

  {% set preview %}<nys-globalfooter agencyName="Office of Information Technology Services" homepageLink="https://ny.gov">
  <ul>
    <li><a href="https://its.ny.gov">ITS Home</a></li>
    <li><a href="https://its.ny.gov/about">About ITS</a></li>
  </ul>
</nys-globalfooter>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### With Column Links
For sites that need to organize multiple navigation sections, the Global Footer supports column-based links. To add column links, follow this format:

1. Use an unordered list (`<ul>`) inside the `<nys-globalfooter>` slot. 

2. Group related links into columns by giving each column a parent list item (`<li>`) with a heading (`<span>`).

3. Nest another unordered list (`<ul>`) inside each column to hold individual link items.

4. Inside that nested `<ul>`, add `<li>` items, each containing an anchor tag (`<a href="">`) that points to the desired URL.

Use the prop `homepageLink` to link your `agencyName` to your homepage.

  {% set preview %}<nys-globalfooter agencyName="Office of Information Technology Services" homepageLink="https://ny.gov">
  <ul>
    <li>
      <span>About</span>
      <ul>
        <li><a href="https://its.ny.gov/about-us">About ITS</a></li>
        <li><a href="https://its.ny.gov/contact-us">Contact</a></li>
        <li><a href="https://its.ny.gov/policies">Policies</a></li>
      </ul>
    </li>
    <li>
      <span>Resources</span>
      <ul>
        <li><a href="https://its.ny.gov/resources">Developer Tools</a></li>
        <li><a href="https://its.ny.gov/accessibility">Accessibility</a></li>
        <li><a href="https://its.ny.gov/its-tech-podcast">Tech Podcast</a></li>
      </ul>
    </li>
  </ul>
</nys-globalfooter>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>agencyName</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>homepageLink</code></td>
      <td>String (URL)</td>
      <td><code>""</code></td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}
