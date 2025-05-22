---
permalink: /components/global-footer/
title: Global Footer
description: Provide users with essential information, secondary navigation, legal links, and contact details across all pages.
image: /assets/img/components/global-footer.svg
image_alt: An illustration of a global footer.
image_header: /assets/img/components/global-footer-header.svg
navOrder: 6
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-globalfooter&gt;</code> component is a reusable web component for use in New York State digital products. It helps provide users with essential information, secondary navigation, legal links, and contact details across all pages.


{% endblock %}

{% block example %}
<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-globalfooter agencyName="Office of Information Technology Services">
    <ul>
        <li><a href="https://its.ny.gov">ITS Home</a></li>
        <li><a href="https://its.ny.gov/about">About ITS</a></li>
      </ul>
    </nys-globalfooter>
  </div>

  <div class="code-preview__source">
  <div class="code-preview__buttons">
    <div class="code-preview__dropdown" onClick="showSourceCode(this)">
      <nys-icon class="code-preview__dropdown-icon" name="chevron_right" size="xl"></nys-icon>
      <p>Example Code</p>
    </div>
    <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
    <div class="copy-tooltip">Copy Code</div>
  </div>
  <div class="code-preview__code-container">
    <div class="code-preview__code-block">
      {% highlight "html" %}
<nys-globalfooter agencyName="Office of Information Technology Services">
  <ul>
    <li><a href="https://its.ny.gov">ITS Home</a></li>
    <li><a href="https://its.ny.gov/about">About ITS</a></li>
  </ul>
</nys-globalfooter>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
      </div>
    </div>
  </div>
</div>

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

The <code class="language-js">nys-globalfooter</code> component includes the following accessibility-focused features:

 - Proper use of &lt;footer&gt; and &lt;a&gt; elements ensures compatibility with assistive technologies.
 - Keyboard navigation: Users can tab through all links in the footer.
{% endblock %}

{% block options %}

### Without Links
<div class="code-preview-container">
  <div class="code-preview__preview">
    <nys-globalfooter agencyName="Office of Information Technology Services">
    </nys-globalfooter>
  </div>

  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <div class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_right" size="xl"></nys-icon>
        <p>Example Code</p>
      </div>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy Code</div>
    </div>
    <div class="code-preview__code-container">
      <div class="code-preview__code-block">
        {% highlight "html" %}
<nys-globalfooter agencyName="Office of Information Technology Services">
</nys-globalfooter>
        {% endhighlight %}
      </div>
      <div class="code-preview__code-tip">
        <p>Can’t use NYSDS web components in your project? Try using the <span><a href="https://designsystem.ny.gov/foundations/tokens/">CSS Variables</a></span> instead.</p>
      </div>
    </div>
  </div>
</div>



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
  </tbody>
</table>

{% endblock %}

{% block cssvariables %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
