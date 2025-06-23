---
title: Global Header
layout: layouts/component.njk
permalink: /components/global-header/
imagery:
  - type: smallcard
    smallcardimage: /assets/img/components/global-header.svg
    smallcardimagealt: Global footer imagee
  - type: pageheader
    pageheaderimage: /assets/img/components/global-header-header.svg
    pageheaderimagealt: Global footer image on geometric shapes
description: Provide users with consistent access to key features, branding, and
  primary navigation across all pages.
long_description: >+
  The `<nys-globalheader>` component is a reusable web component for use in New
  York State digital products. It helps provide users with consistent access to
  key features, branding, and primary navigation across all pages.

navOrder: 7
mainexample: >-
  <nys-globalheader appName="User Registration Form" agencyName="Office of
  Information Technology Services">

  </nys-globalheader>
usage: >
  ### When to use this component

  - nys-globalheader application header should be used at the top of all agency related sites and applications.

  ### When to consider something else

  - If an application is not for a single agency, the Agency Name can be removed.
do: >
  - Use `agencyName` as stand alone if public-facing site and not in the context
  of a specific application.

  - Use `appName` if this is an application
dont: |+
  - Don't use `appName` for an agency name.

accessibility: >
  The `<nys-globalheader>` component includes the following
  accessibility-focused features:


  - Proper use of `<header>` and `<a>` elements ensures compatibility with assistive technologies.

  - Keyboard navigation: Users can tab through all links in the header.
properties: |
  | Property              | Type         |
  |-----------------------|--------------|
  | `agencyName`          | String       |
  | `appName`             | String       |
  | `homepageLink`        | String (URL) |
cssvars: n/a
eventsdescription: n/a
component_options:
  - type: option
    description: >
      ### With Links


      For public-facing sites, the Global Header can include navigation links. To add links, follow this format:


      1. Use an unordered list (`<ul>`) inside the `<nys-globalheader>` slot. 

      2. Each list item (`<li>`) should contain an anchor (`<a href="">`) linking to the desired URL.


      Use the prop `homepageLink` to link your `agencyName` to your homepage.


      **Note:** Applications using the Global Header typically do not include links in the application or agency name to reduce distractions. Public-facing sites may include them, especially in mobile or collapsed menus, to aid navigation.
    examplecode: >
      <nys-globalheader homepageLink="https://ny.gov" agencyName="Office of
      Information Technology Services">
        <ul>
          <li><a href="https://its.ny.gov/services">Services</a></li>
          <li><a href="https://its.ny.gov/get-help">Help Center</a></li>
          <li><a href="https://its.ny.gov/cybersecurity">Cybersecurity</a></li>
          <li><a href="https://its.ny.gov/policies">Policies and Laws</a></li>
          <li><a href="https://its.ny.gov/procurement">Procurement</a></li>
          <li><a href="https://its.ny.gov/about-us">About Us</a></li>
        </ul>
      </nys-globalheader>
  - type: option
    description: |
      ### Just Agency Name
    examplecode: |
      <nys-globalheader agencyName="Office of Information Technology Services">
      </nys-globalheader>
  - type: option
    description: |
      ### Just Application Name
    examplecode: |
      <nys-globalheader appName="NYS Employee Portal">
      </nys-globalheader>
---
