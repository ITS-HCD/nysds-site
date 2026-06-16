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

{% block usagedo %}

- Use on every agency site and application. The Global Header is a required page element.
- Place below `<nys-unavheader>` when using the Universal Navigation Header.
- Use `agencyName` alone for public-facing agency websites not tied to a specific application; omit it for statewide portals that aren't agency-specific.
- Use `appName` for named applications (e.g., "Employee Time Tracker" or "License Renewal Portal").
- Combine `appName` and `agencyName` when an application belongs to a specific agency.
- Set `homepageLink` to make the header title clickable. On public-facing sites, this is the primary path back to the homepage.
- Use the `user-actions` slot for authenticated applications that need log-out buttons or user profile controls.
- Keep navigation link lists to 6 items or fewer. On mobile, these collapse into a full-width menu.
- Add the `nysLogo` property to display the NYS brand mark for internal applications that don't require public-facing agency branding.

{% endblock %}

{% block usagedont %}

- Don't use `appName` for an agency name. Use the `agencyName` prop instead.
- Don't add navigation links to application headers where users should remain focused on a task (e.g., a multi-step form).
- Don't place secondary or utility navigation in the Global Header. Use `<nys-globalfooter>` for secondary links.
- Don't use the `nysLogo` property on public-facing sites, instead use the `<nys-unavheader>` for statewide branding.

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

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}
