---
permalink: /components/globalheader/
title: Global Header
description: Provide users with consistent access to key features, branding, and primary navigation across all pages.
image: /assets/img/components/global-header.svg
image_alt: An illustration of a global header.
image_header: /assets/img/components/global-header-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System?node-id=4024-14432&t=EXsXvlMbCdRw10ir-4
navOrder: 14
---

{% extends "layouts/component.njk" %}


{% block longdescription %}

The `<nys-globalheader>` component renders an agency-branded header with application and agency names, primary navigation links, and a responsive mobile menu. It sits below `<nys-unavheader>` and automatically highlights the active navigation link based on the current URL.

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
 - Use on every agency site and application. The Global Header is a required page element that provides agency branding and primary navigation.
 - Place below `<nys-unavheader>` when using the Universal Navigation Header. Together, these components form the complete top-of-page structure.
 - Use with slotted `<ul>` navigation links on public-facing sites that need section-level navigation (e.g., Services, About Us, Contact).
 - Use the `user-actions` slot for authenticated applications that need log-out buttons or user profile controls.

### When to consider something else
 - If your site is not agency-specific (e.g., a statewide portal), you can omit the `agencyName` and use only `appName`.
 - Don't place secondary or utility navigation in the Global Header. Use `<nys-globalfooter>` for secondary links.

{% endblock %}

{% block usagedo %}

 - Use `agencyName` alone for public-facing agency websites that are not tied to a specific application.
 - Use `appName` for named applications (e.g., "Employee Time Tracker" or "License Renewal Portal").
 - Combine `appName` and `agencyName` when an application belongs to a specific agency.
 - Set `homepageLink` to make the header title clickable. On public-facing sites, this is the primary path back to the homepage.
 - Keep navigation link lists to 6 items or fewer. On mobile, these collapse into a full-width menu.
{% endblock %}

{% block usagedont %}

  - Don't use `appName` for an agency name. Use the `agencyName` prop instead.
  - Don't add navigation links to application headers where the user should remain focused on a task (e.g., a multi-step benefits application form).
  - Don't duplicate navigation that already exists in `<nys-globalfooter>`. The header is for primary navigation; the footer is for secondary links.
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
  {% set preview %}<nys-globalheader agencyName="Office of Information Technology Services">
</nys-globalheader>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Just Application Name
  {% set preview %}<nys-globalheader appName="NYS Employee Portal">
</nys-globalheader>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### User Actions
The `<nys-globalheader>` component includes a named slot called `user-actions`. This slot allows you to insert custom HTML content, such as user profile links, settings, or logout buttons, into the header.

{% set preview %}
<nys-globalheader 
  appName="User Registration Form" 
  agencyName="Office of Information Technology Services"
>
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
