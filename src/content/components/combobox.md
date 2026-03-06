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
  {% set preview %}
<nys-combobox label="Choose a county">
    <option value="albany">Albany</option>
    <option value="allegany">Allegany</option>
    <option value="bronx">Bronx</option>
    <option value="broome">Broome</option>
    <option value="cattaraugus">Cattaraugus</option>
    <option value="cayuga">Cayuga</option>
    <option value="chautauqua">Chautauqua</option>
    <option value="chemung">Chemung</option>
    <option value="chenango">Chenango</option>
    <option value="clinton">Clinton</option>
    <option value="columbia">Columbia</option>
    <option value="cortland">Cortland</option>
    <option value="delaware">Delaware</option>
    <option value="dutchess">Dutchess</option>
    <option value="erie">Erie</option>
    <option value="essex">Essex</option>
    <option value="franklin">Franklin</option>
    <option value="fulton">Fulton</option>
    <option value="genesee">Genesee</option>
    <option value="greene">Greene</option>
    <option value="hamilton">Hamilton</option>
    <option value="herkimer">Herkimer</option>
    <option value="jefferson">Jefferson</option>
    <option value="kings">Kings</option>
    <option value="lewis">Lewis</option>
    <option value="livingston">Livingston</option>
    <option value="madison">Madison</option>
    <option value="monroe">Monroe</option>
    <option value="montgomery">Montgomery</option>
    <option value="nassau">Nassau</option>
    <option value="new-york">New York</option>
    <option value="niagara">Niagara</option>
    <option value="oneida">Oneida</option>
    <option value="onondaga">Onondaga</option>
    <option value="ontario">Ontario</option>
    <option value="orange">Orange</option>
    <option value="orleans">Orleans</option>
    <option value="oswego">Oswego</option>
    <option value="otsego">Otsego</option>
    <option value="putnam">Putnam</option>
    <option value="queens">Queens</option>
    <option value="rensselaer">Rensselaer</option>
    <option value="richmond">Richmond</option>
    <option value="rockland">Rockland</option>
    <option value="st-lawrence">St. Lawrence</option>
    <option value="saratoga">Saratoga</option>
    <option value="schenectady">Schenectady</option>
    <option value="schoharie">Schoharie</option>
    <option value="schuyler">Schuyler</option>
    <option value="seneca">Seneca</option>
    <option value="steuben">Steuben</option>
    <option value="suffolk">Suffolk</option>
    <option value="sullivan">Sullivan</option>
    <option value="tioga">Tioga</option>
    <option value="tompkins">Tompkins</option>
    <option value="ulster">Ulster</option>
    <option value="warren">Warren</option>
    <option value="washington">Washington</option>
    <option value="wayne">Wayne</option>
    <option value="westchester">Westchester</option>
    <option value="wyoming">Wyoming</option>
    <option value="yates">Yates</option>
</nys-combobox>
  {% endset %}
  {% set code %}
<nys-combobox label="Choose a county">
    <option value="albany">Albany</option>
    <option value="allegany">Allegany</option>
    <option value="bronx">Bronx</option>
    <option value="broome">Broome</option>
    ...rest of options...
</nys-combobox>
  {% endset %}
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
