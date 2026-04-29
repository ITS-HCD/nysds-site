---
permalink: /components/unav-header/
title: UNav Header
description: A small NYS-branded header at the top of every page to ensure users they are on a secure NYS site.
image: /assets/img/components/unav-header.svg
image_alt: An illustration of a unav header.
image_header: /assets/img/components/unav-header-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System?node-id=4024-7292&t=EXsXvlMbCdRw10ir-4
navOrder: 28
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-unavheader>` is a reusable web component for use in New York State digital products. It helps provide users with a small NYS-branded header at the top of every page to ensure users they are on a secure NYS site.

**Note:** The Universal Navigation Header remains consistent across all sites.

{% endblock %}

{% block example %}

<nys-alert type="warning" heading="Proper Usage">
<p>The <code>&lt;nys-unavheader&gt;</code> should only be used on official NYS websites or applications that are <strong>hosted on a ny.gov domain</strong> and <strong>secured with HTTPS encryption</strong>. Intranets and back office applications are not currently required to use the <code>&lt;nys-unavheader&gt;</code>.</p>
<p>Please refer to the <a target="_blank" href="https://its.ny.gov/system/files/documents/2025/02/nys-s16-001-nys-universal-web-navigation.pdf">New York State Universal Web Navigation Policy (NYS-S16-001)</a> for more details.</p>
</nys-alert>

  {% set preview %}<nys-unavheader></nys-unavheader>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block usage %}

### When to use this component
  - Use `<nys-unavheader>` at the top of every page.
### When to consider something else
  - Do not place the `<nys-unavheader>` anywhere other than the top of the page.

{% endblock %}

{% block usagedo %}

  - Place it only at the top of the page as the final footer.
  - Toggle search (`hideSearch`) and translate (`hideTranslate`) on/off depending on your needs.

{% endblock %}

{% block usagedont %}

  - Place it anywhere other than the top of the page.
  - Modify the universal header.

{% endblock %}

{% block accessibility %}

The `<nys-unavheader>` component includes the following accessibility-focused features:

  - Proper use of `<header>` and `<a>` elements ensures compatibility with assistive technologies.
  - Keyboard navigation: Users can tab through all links in the header.
{% endblock %}

{% block options %}

### Search Off
  {% set preview %}
    <nys-unavheader hideSearch></nys-unavheader>
  {% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Custom Search Endpoint

The default search URL for the `<nys-unavheader>` is `https://search.its.ny.gov/search/search.html?q=`. The `searchUrl` property allows you to override the search endpoint with a custom url. 

<nys-alert type="warning" heading="Make sure the query is included in the string, otherwise it will not correctly append the search result."></nys-alert>

  {% set preview %}
    <nys-unavheader searchUrl="https://designsystem.ny.gov/search/?q=" hideTranslate></nys-unavheader>
  {% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Translate Off
  {% set preview %}
    <nys-unavheader hideTranslate></nys-unavheader>
  {% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Custom Language Endpoints
By default, the translate feature utilizes Smartling, which reroutes the page to the same URL with the language code prepended (e.g. `https://www.ny.gov/` becomes `https://es.ny.gov/`). If your site does not use Smartling, you can override the default translate behavior to function with your translation service.

You also can override the default list of languages offered if your translation service does not support all of the default languages. 

{% set preview %}
<nys-unavheader id="my-header"></nys-unavheader>
<script>
  const header = document.querySelector('#my-header');
  header.languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' , url: '"https://ny.gov/?lang=es"'},
    { code: 'fr', label: 'Français', url: '"https://ny.gov/?lang=fr"'},
  ];
</script>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

You also can override the default translate behavior to work with JavaScript rather than rerouting the URL. This allows you to implement a custom translation solution that does not require page reroutes.

{% set preview %}
<nys-unavheader id="my-header2" hideSearch></nys-unavheader>
<script>
  document.querySelector('#my-header2').addEventListener('nys-language-select', (event) => {
    event.preventDefault();
    const selectedLanguage = event.detail.language.label;
    alert(`Language changed to: ${selectedLanguage}`);
  });
</script>

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
    </tr>
    <tr>
      <td><code>searchUrl</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>hideSearch</code></td>
      <td>Boolean</td>
    </tr>
    <tr><
      <td><code>hideTranslate</code></td>
      <td>Boolean</td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}

The `nys-unavheader` does not have any css variables because this component must remain consistent across applications and sites.

{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
