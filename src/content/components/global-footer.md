---
title: Global Footer
layout: layouts/component.njk
permalink: /components/global-footer/
imagery:
  - type: smallcard
    smallcardimage: /assets/img/components/global-footer.svg
    smallcardimagealt: Global footer imagee
  - type: pageheader
    pageheaderimage: /assets/img/components/global-footer-header.svg
    pageheaderimagealt: Global footer image on geometric shapes
description: Provide users with essential information, secondary navigation,
  legal links, and contact details across all pages.
long_description: >
  The `<nys-globalfooter>` component is a reusable web component for use in New
  York State digital products. It helps provide users with essential
  information, secondary navigation, legal links, and contact details across all
  pages.
navOrder: 6
mainexample: |-
  <nys-globalfooter agencyName="Office of Information Technology Services">
  </nys-globalfooter>
usage: >
  ### When to use this component

  - Use nys-globalfooter to provide consistent access to essential links like contact details, privacy policies, and terms of use across all pages.

  - Ideal for displaying organizational information and secondary navigation

  ### When to consider something else

  - Don’t use the global footer for primary navigation or highly interactive features.

  - Avoid adding content that is not relevant or essential for all pages.
do: |
  - Include essential links and information users need site-wide.
  - Minimize the number of links.
dont: |
  - Don't use it for critical alerts or primary navigation.
accessibility: >
  The `<nys-globalfooter>` component includes the following
  accessibility-focused features:


  - Proper use of `<footer>` and `<a>` elements ensures compatibility with assistive technologies.

  - Keyboard navigation: Users can tab through all links in the footer.
properties: |
  | Property       | Type         |
  |----------------|--------------|
  | `agencyName`   | String       |
  | `homepageLink` | String (URL) |
cssvars: n/a
eventsdescription: n/a
component_options:
  - type: option
    description: >
      ### With Links

      For public-facing sites, the Global Footer can include navigation links. To add links, follow this format:


      1. Use an unordered list (`<ul>`) inside the `<nys-globalfooter>` slot. 


      2. Each list item (`<li>`) should contain an anchor (`<a href="">`) linking to the desired URL.


      Use the prop `homepageLink` to link your `agencyName` to your homepage.
    examplecode: >-
      <nys-globalfooter agencyName="Office of Information Technology Services"
      homepageLink="https://ny.gov">
        <ul>
          <li><a href="https://its.ny.gov">ITS Home</a></li>
          <li><a href="https://its.ny.gov/about">About ITS</a></li>
        </ul>
      </nys-globalfooter>
---
