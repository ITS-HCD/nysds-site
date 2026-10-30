---
permalink: /components/globalheader/
title: Global Header
description: Provide users with consistent access to key features, branding, and primary navigation across all pages.
image: /assets/img/components/global-header.svg
image_alt: An illustration of a global header.
image_header: /assets/img/components/global-header-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System?node-id=4024-14432&t=EXsXvlMbCdRw10ir-4
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-globalheader>` component renders an agency-branded header with application and agency names, primary navigation links, and a responsive mobile menu. It sits below `<nys-unavheader>` and automatically highlights the active navigation link based on the current URL.

{% endblock %}

{% block example %}
{% set preview %}
<nys-globalheader 
  appName="User Registration Form" 
  agencyName="Office of Information Technology Services"
></nys-globalheader>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block accessibility %}

The `<nys-globalheader>` component includes the following accessibility-focused features:

- Renders a `<header>` landmark element, which screen readers identify as a `banner` region. Users can navigate directly to this landmark using assistive technology shortcuts.
- All navigation links use standard `<a>` elements and are fully keyboard-focusable.
- On narrow screens (below 1024px), navigation collapses into a mobile menu toggled by a button with a visible "MENU" / "CLOSE" label and corresponding icon.
- The active navigation link is visually highlighted with a bold font weight and bottom border (desktop) or left border (mobile), providing clear orientation.
- When using `<nys-skipnav>` on your page, it should target your main content area. The Global Header provides the `banner` landmark that skip navigation helps users bypass.
- The `user-actions` slot supports keyboard-accessible controls like log-out buttons, maintaining tab order within the header.
  {% endblock %}

{% block options %}

### With Links

For public-facing sites, the Global Header can include navigation links. To add links, follow this format:

1. Use an unordered list (`<ul>`) inside the `<nys-globalheader>` slot.
2. Each list item (`<li>`) should contain an anchor (`<a href="">`) linking to the desired URL.

Use the prop `homepageLink` to link your `agencyName` to your homepage.

The component automatically highlights the active link based on the current URL path. It matches the most specific path, so `/services/benefits` will match before `/services`.

**Note:** On screens below 1024px, navigation links collapse into a mobile menu. A "MENU" button appears to the left of the header content and toggles the full link list. Applications using the Global Header typically do not include links in the application or agency name to reduce distractions. Public-facing sites may include them to aid navigation.

{% set preview %}
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
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Just Agency Name

Use the prop `homepageLink` to link your `agencyName` to your homepage.

{% set preview %}
<nys-globalheader agencyName="Office of Information Technology Services">
</nys-globalheader>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Just Application Name

{% set preview %}
<nys-globalheader appName="NYS Employee Portal"></nys-globalheader>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### User Actions

The `<nys-globalheader>` component includes a named slot called `user-actions`. This slot allows you to insert custom HTML content, such as user profile links, settings, or logout buttons, into the header.

{% set preview %}
<nys-globalheader appName="User Registration Form" agencyName="Office of Information Technology Services">
  <nys-button id="my-action-slot" slot="user-actions" label="John Smith" prefixIcon="slotted">
    <nys-avatar
      slot="prefix-icon"
      ariaLabel="User avatar"
      initials="JS"
      ></nys-avatar>
  </nys-button>
</nys-globalheader>
<nys-dropdownmenu id="dropdownmenu" for="my-action-slot">
  <nys-dropdownmenuitem label="Profile" href="/profile"></nys-dropdownmenuitem>
  <nys-dropdownmenuitem label="Repositories & Github Pages" href="/repos"></nys-dropdownmenuitem>
  <nys-dropdownmenuitem label="Organizations" href="/organizations" disabled></nys-dropdownmenuitem>
  <nys-dropdownmenuitem label="Sign out" href="/logout"></nys-dropdownmenuitem>
</nys-dropdownmenu>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### NYS Brand Logo

The NYS Brand Logo can be toggled on via the `nysLogo` property for back-office applications.

**Note:** Do not use the NYS brand mark on public-facing applications. This is intended exclusively for internal and back-office use.

{% set preview %}
<nys-globalheader nysLogo appName="Admin Dashboard"></nys-globalheader>
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
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>agencyName</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>appName</code></td>
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

{% block cssvariables %}
  {%
    set variables = [
    { name: "--nys-max-width--content", description: "Overrides the max width of the inner content area on .nys-grid-container and all header/footer/breadcrumb components at once. Set this at a higher level (e.g. `:root`) so it cascades down to every instance — setting it directly on one component only affects that instance. Takes priority over the size-specific variable below." }
    ]
  %}
{% include "partials/css-vars.njk" %}

{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}


{% block dependencies %}

{% set dependencies = [
  "<nys-icon>"
] %}

{% include "partials/dependencies.njk" %}

{% endblock %}

{% block updates %}{% endblock %}
