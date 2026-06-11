---
permalink: /components/breadcrumbs/
title: Breadcrumbs
description: "Help users understand their location within a site’s hierarchy and navigate between different levels of content."
image: /assets/img/components/breadcrumbs.svg
image_alt: An illustration of a breadcrumbs.
image_header: /assets/img/components/breadcrumbs-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=24282-39250

hasA11yPages: true
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

{% block usagedo %}

- Use on pages at level 2 and deeper in a site hierarchy. If a level 2 page has child pages, all pages starting at that level should include a breadcrumb.
- Place breadcrumb below the header and above the main content.
- Show the site hierarchy, not the path a user took.
- For the home page of a site, use a specific label rather than a generic "Home." This differentiates the main site home from other landing pages (e.g., "myBenefits Home" instead of just "Home").

{% endblock %}

{% block usagedont %}

- Don't use on top-level pages, or on sites with only one or two levels of hierarchy.
- Don't make the current page clickable.
- Don't use breadcrumbs as the only navigation method.
- Don't use breadcrumbs for sequential processes like multi-step forms or wizards. Use a stepper instead.
- Don't add breadcrumbs when they don't provide meaningful context or navigation value.

{% endblock %}

{% block options %}

### Basic Usage

Wrap an ordered list (`<ol>`) with links (`<a>`) inside `<nys-breadcrumbs>`. The last `<li>` should be plain text (the current page).

**Note:** If you prefer not to display the current page in the breadcrumb trail, simply leave it out.

{% set preview %}<nys-breadcrumbs>

  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Del Water Gap</li>
  </ol>
</nys-breadcrumbs>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Back to Parent (Mobile Only)

Add the `backToParent` prop to collapse the full breadcrumb trail into a single "back to parent" button on screens narrower than 767px. The component automatically determines which crumb represents the parent of the current page. Resize your browser to a small width to see it in action.

{% set preview %}<nys-breadcrumbs backToParent>

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
</nys-breadcrumbs>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Size

Set the `size` prop to adjust text size. Available sizes:

- `md`: Default size (16px)
- `sm`: Smaller text (14px)

{% set preview %}<nys-breadcrumbs size="sm">

  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/government">Government</a></li>
    <li><a href="/government/agencies">Agencies</a></li>
    <li>Parks & Recreation</li>
  </ol>
</nys-breadcrumbs>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Background Bar

Add the `backgroundBar` prop to display breadcrumbs on a light gray background bar.

{% set preview %}<nys-breadcrumbs backgroundBar>

  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/tickets">Ticket System</a></li>
    <li>Del Water Gap</li>
  </ol>
</nys-breadcrumbs>{% endset %}
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

The `<nys-breadcrumbs>` component emits **one** custom Javascript event:

1.  **`nys-expand`** – Fired when the button is clicked.

You can listen to these events using JavaScript:

{% set code %}// Select the breadcrumbs component
const breadcrumbs = document.querySelector('nys-breadcrumbs');
// Listen for the 'nys-expand' event
breadcrumbs.addEventListener("nys-expand", () => {
console.log("Breadcrumbs expanded");
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
