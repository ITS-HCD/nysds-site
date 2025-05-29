---
permalink: /components/global-header/
title: Global Header
description: Provide users with consistent access to key features, branding, and primary navigation across all pages.
image: /assets/img/components/global-header.svg
image_alt: An illustration of a global header.
image_header: /assets/img/components/global-header-header.svg
navOrder: 7
---

{% extends "layouts/component.njk" %}


{% block longdescription %}

The <code class="language-js">&lt;nys-globalheader&gt;</code> component is a reusable web component for use in New York State digital products. It helps provide users with consistent access to key features, branding, and primary navigation across all pages.

{% endblock %}

{% block example %}
  {% set preview %}<nys-globalheader appName="User Registration Form" agencyName="Office of Information Technology Services">
</nys-globalheader>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
 - nys-globalheader application header should be used at the top of all agency related sites and applications.
 ### When to consider something else
 - If an application is not for a single agency, the Agency Name can be removed.

{% endblock %}

{% block usagedo %}

 - Use `agencyName` as stand alone if public-facing site and not in the context of a specific application.
 - Use `appName` if this is an application
{% endblock %}

{% block usagedont %}

  - Don't use `appName` for an agency name.
{% endblock %}

{% block accessibility %}

The <code class="language-js">&lt;nys-globalheader&gt;</code> component includes the following accessibility-focused features:

 - Proper use of &lt;header&gt; and &lt;a&gt; elements ensures compatibility with assistive technologies.
 - Keyboard navigation: Users can tab through all links in the header.
{% endblock %}

{% block options %}

### With Links

For public-facing sites, the Global Header can include navigation links. To add links, follow this format:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Use an unordered list (`<ul>`) inside the <code class="language-js">&lt;nys-globalheader&gt;</code> slot. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Each list item (`<li>`) should contain an anchor (`<a href="">`) linking to the desired URL.

Use the prop <code class="language-js">homepageLink</code> to link your <code class="language-js">agencyName</code> to your homepage.

<p style="display:flex; align-items:top; gap:10px;"><nys-icon name="info" size="2xl"></nys-icon> Applications using the Global Header typically do not include links in the application or agency name to reduce distractions. Public-facing sites may include them, especially in mobile or collapsed menus, to aid navigation.</p>

  {% set preview %}<nys-globalheader homepageLink="https://ny.gov" agencyName="Office of Information Technology Services">
  <ul>
    <li><a href="https://its.ny.gov/services">Services</a></li>
    <li><a href="https://its.ny.gov/get-help">Help Center</a></li>
    <li><a href="https://its.ny.gov/cybersecurity">Cybersecurity</a></li>
    <li><a href="https://its.ny.gov/policies">Policies and Laws</a></li>
    <li><a href="https://its.ny.gov/procurement">Procurement</a></li>
    <li><a href="https://its.ny.gov/about-us">About Us</a></li>
  </ul>
</nys-globalheader>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Just Agency Name
  {% set preview %}<nys-globalheader disableHomepageLink agencyName="Office of Information Technology Services">
</nys-globalheader>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Just Application Name
  {% set preview %}<nys-globalheader disableHomepageLink appName="NYS Employee Portal">
</nys-globalheader>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>agencyName</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>appName</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>homepageLink</code></td>
      <td>string (URL)</td>
    </tr>
    <tr>
      <td><code>disableHomepageLink</code></td>
      <td>boolean</td>
    </tr>
  </tbody>
</table>

{% endblock %}

{% block cssvariables %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
