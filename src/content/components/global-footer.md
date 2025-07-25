---
permalink: /components/global-footer/
title: Global Footer
description: Provide users with essential information, secondary navigation, legal links, and contact details across all pages.
image: /assets/img/components/global-footer.svg
image_alt: An illustration of a global footer.
image_header: /assets/img/components/global-footer-header.svg
navOrder: 8
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-globalfooter>` component is a reusable web component for use in New York State digital products. It helps provide users with essential information, secondary navigation, legal links, and contact details across all pages.

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
 - Use nys-globalfooter to provide consistent access to essential links like contact details, privacy policies, and terms of use across all pages.
 - Ideal for displaying organizational information and secondary navigation
 ### When to consider something else
 - Don’t use the global footer for primary navigation or highly interactive features.
 - Avoid adding content that is not relevant or essential for all pages.
{% endblock %}

{% block usagedo %}

 - Include essential links and information users need site-wide.
 - Minimize the number of links.
{% endblock %}

{% block usagedont %}

  - Don't use it for critical alerts or primary navigation.
{% endblock %}

{% block accessibility %}

The `<nys-globalfooter>` component includes the following accessibility-focused features:

 - Proper use of &lt;footer&gt; and &lt;a&gt; elements ensures compatibility with assistive technologies.
 - Keyboard navigation: Users can tab through all links in the footer.
{% endblock %}

{% block options %}

### With Links
For public-facing sites, the Global Footer can include navigation links. To add links, follow this format:

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

{% endblock %}

{% block properties %}

| Property       | Type         |
|----------------|--------------|
| `agencyName`   | String       |
| `homepageLink` | String (URL) |

{% endblock %}

{% block cssvariables %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
