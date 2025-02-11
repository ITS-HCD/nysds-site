---
permalink: /components/global-header/
title: Global Header
description: Provide users with consistent access to key features, branding, and primary navigation across all pages.
image: 
---

{% extends "layouts/component.njk" %}


{% block longdescription %}

The <code class="language-js">&lt;nys-globalheader&gt;</code> component is a reusable web component for use in New York State digital products. It helps provide users with consistent access to key features, branding, and primary navigation across all pages.

{% endblock %}

{% block example %}

<nys-globalheader appName="User Registration Form" agencyName="Office of Information Technology Services">
</nys-globalheader>
{% endblock %}

{% block examplecode %}

<nys-globalheader appName="User Registration Form" agencyName="Office of Information Technology Services">
</nys-globalheader>
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

The <code class="language-js">nys-globalheader</code> component includes the following accessibility-focused features:

 - Proper use of &lt;header&gt; and &lt;a&gt; elements ensures compatibility with assistive technologies.
 - Keyboard navigation: Users can tab through all links in the header.
{% endblock %}

{% block options %}

### With Links

For public-facing content sites, the Global Header can include menu links. To add them, place an unordered list (`<ul>`) inside the nys-globalheader slot. Each list item (`<li>`) should contain an anchor (`<a href="">`) linking to the desired destination.

Use the prop `homepageLink` to link your `agencyName` to your homepage. If `homepageLink` is not provided, default fallback is `window.location.origin` otherwise (use `disableHomepageLink` to disable the homepage link).

<nys-icon name="info"></nys-icon> Applications using the Global Header typically do not include links in the application or agency name to avoid distractions and keep users on task. However, public-facing sites may include links, often within a collapsed menu for better navigation.

<nys-globalheader homepageLink="https://ny.gov" agencyName="Office of Information Technology Services">
  <ul>
    <li><a href="https://its.ny.gov/services">Services</a></li>
    <li><a href="https://its.ny.gov/get-help">Help Center</a></li>
    <li><a href="https://its.ny.gov/cybersecurity">Cybersecurity</a></li>
    <li><a href="https://its.ny.gov/policies">Policies and Laws</a></li>
    <li><a href="https://its.ny.gov/procurement">Procurement</a></li>
    <li><a href="https://its.ny.gov/about-us">About Us</a></li>
  </ul>
</nys-globalheader>

<details>
  <summary>Code</summary>

```html
<nys-globalheader homepageLink="https://ny.gov" agencyName="Office of Information Technology Services">
  <ul>
    <li><a href="https://its.ny.gov/services">Services</a></li>
    <li><a href="https://its.ny.gov/get-help">Help Center</a></li>
    <li><a href="https://its.ny.gov/cybersecurity">Cybersecurity</a></li>
    <li><a href="https://its.ny.gov/policies">Policies and Laws</a></li>
    <li><a href="https://its.ny.gov/procurement">Procurement</a></li>
    <li><a href="https://its.ny.gov/about-us">About Us</a></li>
  </ul>
</nys-globalheader>
```

</details>

### Just Agency Name

<nys-globalheader disableHomepageLink agencyName="Office of Information Technology Services">
</nys-globalheader>

<details>
  <summary>Code</summary>

```html
<nys-globalheader disableHomepageLink agencyName="Office of Information Technology Services">
</nys-globalheader>
```

</details>

### Just Application Name

<nys-globalheader disableHomepageLink appName="NYS Employee Portal">
</nys-globalheader>

<details>
  <summary>Code</summary>

```html
<nys-globalheader disableHomepageLink appName="NYS Employee Portal">
</nys-globalheader>
```

</details>


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
