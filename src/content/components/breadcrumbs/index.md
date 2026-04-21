---
permalink: /components/breadcrumbs/
title: Breadcrumbs
description: "Help users understand their location within a site’s hierarchy and navigate between different levels of content."
image: /assets/img/components/breadcrumbs.svg
image_alt: An illustration of a breadcrumbs.
image_header: /assets/img/components/breadcrumbs-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=24282-39188
navOrder: 6
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-breadcrumbs>` component shows users their location within a site's structure and provides links to navigate back through parent pages.

{% endblock %}

{% block example %}
{% set preview %}
<nys-breadcrumbs>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Current Page</li>
  </ol>
</nys-breadcrumbs>  
  {% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

  - For pages in hierarchies with more than 2 levels. The breadcrumb should be displayed starting at the level 2 page and persist on all child pages in the hierarchy. For example, if a level 2 page has child pages, all pages starting at that level 2 page would need a breadcrumb.
  - Users may land on a page from search or external links and need context.
  - Users may want to go back to a broader category or section.

### When to consider something else

  - Top-level pages (e.g., homepage).
  - Pages with only one or two levels and no deeper hierarchy.
  - Linear flows (e.g., multi-step forms or processes), use a stepper instead.
  - When breadcrumbs do not add meaningful context or navigation value.
  {% endblock %}

{% block usagedo %}

  - Place breadcrumb below the header and above the main content.
  - For the home page of a site, do not use icons or just "Home". This ensures that the main site home page is differentiated from other types of landing pages on the site (e.g., “myBenefits Home” instead of just “Home”).
  - Breadcrumbs should show the site hierarchy, not the path a user took.

{% endblock %}

{% block usagedont %}

  - Don't make the current page clickable.
  - Don't use breadcrumbs as the only navigation method.
  - Don't use breadcrumbs for sequential processes (wizards, forms).
  {% endblock %}

{% block accessibility %}

The `<nys-breadcrumbs>` component includes the following accessibility-focused features:

- Proper semantic HTML with `<nav>` and `<ol>` elements.
- ARIA labels to identify the navigation as breadcrumbs.
- Separators hidden from screen readers to avoid repetitive announcements.
- Keyboard navigation support for all links.

{% endblock %}

{% block options %}

### Basic Usage

Wrap an ordered list (`<ol>`) with links (`<a>`) inside `<nys-breadcrumbs>`. The last `<li>` should be plain text (the current page).

{% set preview %}
<nys-breadcrumbs>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Del Water Gap</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Back to Parent (Mobile Only)

Add the `backToParent` prop to collapse the full breadcrumb trail into a single "back to parent" button on screens narrower than 767px. The component automatically determines which crumb represents the parent of the current page. Resize your browser to a small width to see it in action.

{% set preview %}
<nys-breadcrumbs backToParent>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/government">Government</a></li>
    <li><a href="/government/agencies">Agencies</a></li>
    <li><a href="/government/agencies/parks">Parks & Recreation</a></li>
    <li><a href="/parks/state-parks">State Parks</a></li>
    <li><a href="/parks/state-parks/delaware">Delaware Region</a></li>
    <li><a href="/parks/state-parks/delaware/water-gap">Delaware Water Gap</a></li>
    <li>Trail Conditions</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Size

Set the `size` prop to adjust text size. Available sizes:

  - `md`: Default size (16px)
  - `sm`: Smaller text (14px)

{% set preview %}
<nys-breadcrumbs size="sm">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/government">Government</a></li>
    <li><a href="/government/agencies">Agencies</a></li>
    <li>Parks & Recreation</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Background Bar

Add the `backgroundBar` prop to display breadcrumbs on a light gray background bar.

{% set preview %}
<nys-breadcrumbs backgroundBar>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Del Water Gap</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Disabled
Add the `disabled` prop to disable all links in the breadcrumbs.

{% set preview %}
<nys-breadcrumbs disabled>
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Del Water Gap</li>
  </ol>
</nys-breadcrumbs>
{% endset %}
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
          <td>Auto-generated</td>
      </tr>
      <tr>
          <td><code>size</code></td>
          <td><code>"sm"</code>, <code>"md"</code></td>
          <td><code>"md"</code></td>
      </tr>
      <tr>
          <td><code>ariaLabel</code></td>
          <td>String</td>
          <td><code>"Breadcrumbs"</code></td>
      </tr>
      <tr>
          <td><code>collapsed</code></td>
          <td>Boolean</td>
          <td><code>false</code></td>
      </tr>
      <tr>
          <td><code>backToParent</code></td>
          <td>Boolean</td>
          <td><code>false</code></td>
      </tr>
      <tr>
          <td><code>backgroundBar</code></td>
          <td>Boolean</td>
          <td><code>false</code></td>
      </tr>
      <tr>
          <td><code>disabled</code></td>
          <td>Boolean</td>
          <td><code>false</code></td>
      </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}
{% include "partials/css-vars.njk" %}

{% endblock %}

{% block events %}
{% endblock %}

{% block updates %}{% endblock %}
