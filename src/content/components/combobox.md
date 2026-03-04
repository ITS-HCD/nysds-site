---
permalink: /components/combobox/
title: Combobox
description: 
image: /assets/img/components/combobox.svg
image_alt: An illustration of a combobox.
image_header: /assets/img/components/combobox-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=17435-36797&
navOrder: 8
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-combobox>`  is a reusable web component for use in New York State digital products. It combines a text box with a dropdown list, allowing users to either select a predefined option or type in their own custom value.

{% endblock %}

{% block example %}
  {% set preview %}{% endset %}
  {% set code = preview %}
  {% set backgroundSolid = true %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block options %}

{% endblock %}

{% block usagedo %}

{% endblock %}

{% block usagedont %}

{% endblock %}

{% block usage %}

### When to use this component
- The option list is long (more than 15 items)
- Use a combo box for presenting options when screen real estate is limited.
- Combo boxes work best when:
  - Users can predict the value
  - The value has a recognizable name

{% endblock %}

{% block accessibility %}

- Don’t auto-select options while typing. 
  - Only commit a value when the user explicitly selects it (Enter, click, or tap). Auto-selection causes accidental choices and is hard to notice, especially for keyboard and screen-reader users.
- Always show meaningful feedback states. 
  - Provide clear loading, empty, and “no results” states so users understand what’s happening and what to do next, rather than assuming the component is broken.

{% endblock %}

{% block properties %}

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}

{% endblock %}

{% block events %}

{% endblock %}
