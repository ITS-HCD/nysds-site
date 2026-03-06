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

The `<nys-combobox>`  is a reusable web component for use in New York State digital products. It combines a text box with a dropdown list, allowing users to either select a predefined option or type to filter a list.

{% endblock %}

{% block example %}

{% set preview %}
<nys-combobox label="Choose a county" id='my-combobox'>
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
<nys-combobox label="Choose a county" id='my-combobox'>
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

### Preselected Value
Use the `selected` attribute on an `<option>` to set a default value when the combobox loads.

{% set preview %}
<nys-combobox label="Choose a county" id='my-combobox'>
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
    <option value="saratoga" selected>Saratoga</option>
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
<nys-combobox label="Choose a county" id='my-combobox'>
  <option value="albany">Albany</option>
  <option value="allegany">Allegany</option>
  <option value="bronx">Bronx</option>
  <option value="broome">Broome</option>
   ...rest of options...
  <option value="saratoga" selected>Saratoga</option>
  ...rest of options...
</nys-combobox>
  {% endset %}
  {% set backgroundSolid = true %}
  {% include "partials/code-preview.njk" %}

### Option Groups
Use `<optgroup>` to organize options into labeled categories, making long lists easier to navigate.

{% set preview %}
<nys-combobox label="Choose a county" id='my-combobox'>
    <optgroup label="New York City">
        <option value="bronx">Bronx</option>
        <option value="kings">Kings</option>
        <option value="new-york">New York</option>
        <option value="queens">Queens</option>
        <option value="richmond">Richmond</option>
    </optgroup>
    <optgroup label="Long Island">
        <option value="nassau">Nassau</option>
        <option value="suffolk">Suffolk</option>
    </optgroup>
    <optgroup label="Hudson Valley">
        <option value="dutchess">Dutchess</option>
        <option value="orange">Orange</option>
        <option value="putnam">Putnam</option>
        <option value="rockland">Rockland</option>
        <option value="sullivan">Sullivan</option>
        <option value="ulster">Ulster</option>
        <option value="westchester">Westchester</option>
    </optgroup>
    <optgroup label="Capital Region">
        <option value="albany">Albany</option>
        <option value="columbia">Columbia</option>
        <option value="greene">Greene</option>
        <option value="rensselaer">Rensselaer</option>
        <option value="saratoga">Saratoga</option>
        <option value="schenectady">Schenectady</option>
        <option value="schoharie">Schoharie</option>
        <option value="warren">Warren</option>
        <option value="washington">Washington</option>
    </optgroup>
    <optgroup label="North Country">
        <option value="clinton">Clinton</option>
        <option value="essex">Essex</option>
        <option value="franklin">Franklin</option>
        <option value="hamilton">Hamilton</option>
        <option value="jefferson">Jefferson</option>
        <option value="lewis">Lewis</option>
        <option value="st-lawrence">St. Lawrence</option>
    </optgroup>
    <optgroup label="Mohawk Valley">
        <option value="fulton">Fulton</option>
        <option value="herkimer">Herkimer</option>
        <option value="montgomery">Montgomery</option>
        <option value="oneida">Oneida</option>
        <option value="otsego">Otsego</option>
        <option value="schuyler">Schuyler</option>
    </optgroup>
    <optgroup label="Central New York">
        <option value="cayuga">Cayuga</option>
        <option value="cortland">Cortland</option>
        <option value="madison">Madison</option>
        <option value="onondaga">Onondaga</option>
        <option value="oswego">Oswego</option>
    </optgroup>
    <optgroup label="Southern Tier">
        <option value="broome">Broome</option>
        <option value="chemung">Chemung</option>
        <option value="chenango">Chenango</option>
        <option value="delaware">Delaware</option>
        <option value="steuben">Steuben</option>
        <option value="tioga">Tioga</option>
        <option value="tompkins">Tompkins</option>
    </optgroup>
    <optgroup label="Finger Lakes">
        <option value="genesee">Genesee</option>
        <option value="livingston">Livingston</option>
        <option value="monroe">Monroe</option>
        <option value="ontario">Ontario</option>
        <option value="seneca">Seneca</option>
        <option value="wayne">Wayne</option>
        <option value="wyoming">Wyoming</option>
        <option value="yates">Yates</option>
    </optgroup>
    <optgroup label="Western New York">
        <option value="allegany">Allegany</option>
        <option value="cattaraugus">Cattaraugus</option>
        <option value="chautauqua">Chautauqua</option>
        <option value="erie">Erie</option>
        <option value="niagara">Niagara</option>
    </optgroup>
</nys-combobox>
{% endset %}
{% set code %}
<nys-combobox label="Choose a county" id='my-combobox'>
  <optgroup label="New York City">
    <option value="bronx">Bronx</option>
    ...rest of options...
  </optgroup>
  <optgroup label="Long Island">
    ...rest of options...
  </optgroup>
  <optgroup label="Hudson Valley">
    ...rest of options...
  </optgroup>
  <optgroup label="Capital Region">
    ...rest of options...
  </optgroup>
  <optgroup label="North Country">
    ...rest of options...
  </optgroup>
  <optgroup label="Mohawk Valley">
    ...rest of options...
  </optgroup>
  <optgroup label="Central New York">
    ...rest of options...
  </optgroup>
  <optgroup label="Southern Tier">
    ...rest of options...
  </optgroup>
  <optgroup label="Finger Lakes">
    ...rest of options...
  </optgroup>
  <optgroup label="Western New York">
    ...rest of options...
  </optgroup>
</nys-combobox>
{% endset %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

### Disabled 
Set the `disabled` attribute to prevent user interaction with the combobox.

{% set preview %}
<nys-combobox label="Choose a county" id='my-combobox' disabled>
</nys-combobox>
  {% endset %}
{% set backgroundSolid = true %}
  {% set code %}
<nys-combobox label="Choose a county" id='my-combobox' disabled>
  <option value="albany">Albany</option>
  <option value="allegany">Allegany</option>
  <option value="bronx">Bronx</option>
  <option value="broome">Broome</option>
  ...rest of options...
</nys-combobox>
  {% endset %}
  {% include "partials/code-preview.njk" %}

### Disabled Options
Set `disabled` on individual `<option>` elements to make specific choices unavailable while keeping others selectable.

{% set preview %}
<nys-combobox label="Choose a sports team" id='my-combobox'>
    <option value="brooklyn-nets">Brooklyn Nets</option>
    <option value="buffalo-bills" disabled>Buffalo Bills (off-season)</option>
    <option value="buffalo-sabres">Buffalo Sabres</option>
    <option value="gotham-fc" disabled>Gotham FC (off-season)</option>
    <option value="new-york-giants" disabled>New York Giants (off-season)</option>
    <option value="new-york-jets" disabled>New York Jets (off-season)</option>
    <option value="new-york-knicks">New York Knicks</option>
    <option value="new-york-liberty" disabled>New York Liberty (off-season)</option>
    <option value="new-york-mets" disabled>New York Mets (off-season)</option>
    <option value="new-york-rangers">New York Rangers</option>
    <option value="new-york-sirens">New York Sirens</option>
    <option value="new-york-yankees" disabled>New York Yankees (off-season)</option>
</nys-combobox>
{% endset %}
{% set code = preview %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

### Required
Set `required` to make the combobox mandatory. The field will be flagged during form validation if left empty.

{% set preview %}
<nys-combobox label="Choose a county" id='my-combobox' required>
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
<nys-combobox label="Choose a county" id='my-combobox' required>
  <option value="albany">Albany</option>
  <option value="allegany">Allegany</option>
  <option value="bronx">Bronx</option>
  <option value="broome">Broome</option>
  ...rest of options...
</nys-combobox>
  {% endset %}
  {% set backgroundSolid = true %}
  {% include "partials/code-preview.njk" %}

### Optional
Adding the `optional` prop will add an optional flag to the label.

{% set preview %}
<nys-combobox label="Choose a county" id='my-combobox' optional >
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
<nys-combobox label="Choose a county" id='my-combobox' optional>
  <option value="albany">Albany</option>
  <option value="allegany">Allegany</option>
  <option value="bronx">Bronx</option>
  <option value="broome">Broome</option>
  ...rest of options...
</nys-combobox>
  {% endset %}
  {% set backgroundSolid = true %}
  {% include "partials/code-preview.njk" %}

### Error Message
Set an `errorMessage` to display a validation message. The error will surface automatically on form submission or when the field loses focus without a valid selection.


{% set preview %}
<nys-combobox label="Choose a county" id='my-combobox' required errorMessage="County is required">
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
<nys-combobox label="Choose a county" id='my-combobox' required errorMessage="County is required">
  <option value="albany">Albany</option>
  <option value="allegany">Allegany</option>
  <option value="bronx">Bronx</option>
  <option value="broome">Broome</option>
  ...rest of options...
</nys-combobox>
  {% endset %}
  {% set backgroundSolid = true %}
  {% include "partials/code-preview.njk" %}

### Width
Use the `width` prop to control the size of the combobox. Available values are `md`, `lg`, and `full` (default).

{% set preview %}
<nys-combobox label="Choose a sports team" id='my-combobox' width="lg">
    <option value="brooklyn-nets">Brooklyn Nets</option>
    <option value="buffalo-bills">Buffalo Bills</option>
    <option value="buffalo-sabres">Buffalo Sabres</option>
    <option value="gotham-fc">Gotham FC</option>
    <option value="new-york-giants">New York Giants</option>
    <option value="new-york-jets">New York Jets</option>
    <option value="new-york-knicks">New York Knicks</option>
    <option value="new-york-liberty">New York Liberty</option>
    <option value="new-york-mets">New York Mets</option>
    <option value="new-york-rangers">New York Rangers</option>
    <option value="new-york-sirens">New York Sirens</option>
    <option value="new-york-yankees">New York Yankees</option>
</nys-combobox>
{% endset %}
{% set code = preview %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

### Description Slot
When the description requires more than a simple string, use the `description` slot to include HTML such as links or formatted text.

{% set preview %}
<nys-combobox label="Choose a state park" id='my-combobox'>
    <label slot="description">NY is home to some of the most beautiful state parks in the country.</label>
    <option value="adirondack">Adirondack</option>
    <option value="allegany">Allegany</option>
    <option value="bear-mountain">Bear Mountain</option>
    <option value="bethpage">Bethpage</option>
    <option value="buttermilk-falls">Buttermilk Falls</option>
    <option value="catskill">Catskill</option>
    <option value="chimney-bluffs">Chimney Bluffs</option>
    <option value="connetquot-river">Connetquot River</option>
    <option value="crown-point">Crown Point</option>
    <option value="fort-niagara">Fort Niagara</option>
    <option value="harriman">Harriman</option>
    <option value="hither-hills">Hither Hills</option>
    <option value="jones-beach">Jones Beach</option>
    <option value="letchworth">Letchworth</option>
    <option value="minnewaska">Minnewaska</option>
    <option value="niagara-falls">Niagara Falls</option>
    <option value="orient-beach">Orient Beach</option>
    <option value="robert-moses">Robert Moses</option>
    <option value="saratoga-spa">Saratoga Spa</option>
    <option value="taughannock-falls">Taughannock Falls</option>
    <option value="watkins-glen">Watkins Glen</option>
</nys-combobox>
{% endset %}
{% set code = preview %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

### Inverted
Use the `inverted` prop when placing the combobox on a dark background.

{% set preview %}
<nys-combobox label="Choose a county" id='my-combobox' inverted>
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
<nys-combobox label="Choose a county" id='my-combobox' inverted>
  <option value="albany">Albany</option>
  <option value="allegany">Allegany</option>
  <option value="bronx">Bronx</option>
  <option value="broome">Broome</option>
  ...rest of options...
</nys-combobox>
  {% endset %}
  {% set backgroundSolid = true %}
  {% set inverted = true %}
  {% include "partials/code-preview.njk" %}


{% endblock %}

{% block usagedo %}

  - Use when there are more than 15 options to choose from.
  - Use when screen real estate is limited.
  - Use when users can predict or recognize the value they're looking for.

{% endblock %}

{% block usagedont %}

  - Don't use when the number of options is small, use a select or radio button group instead.
  - Don't use when options are unfamiliar to users and browsing the full list is necessary.

{% endblock %}

{% block usage %}

### When to use this component
- The option list is long (more than 15 items)
- Use a combo box for presenting options when screen real estate is limited.
- Combo boxes work best when:
  - Users can predict the value
  - The value has a recognizable name

### When to consider something else

- When the number of options is small, instead use `<nys-select>` or `<nys-radiobutton>`

{% endblock %}

{% block accessibility %}

- Don’t auto-select options while typing. 
  - Only commit a value when the user explicitly selects it (Enter, click, or tap). Auto-selection causes accidental choices and is hard to notice, especially for keyboard and screen-reader users.
- Always show meaningful feedback states. 
  - Provide clear loading, empty, and “no results” states so users understand what’s happening and what to do next, rather than assuming the component is broken.

{% endblock %}

{% block properties %}

<nys-table striped>
  <table>
    <tr>
        <th>Property</th>
        <th>Type</th>
    </tr>
    <tr>
        <td><code>id</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>name</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>label</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>description</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>value</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>disabled</code></td>
        <td>boolean</td>
    </tr>
    <tr>
        <td><code>required</code></td>
        <td>boolean</td>
    </tr>
    <tr>
        <td><code>optional</code></td>
        <td>boolean</td>
    </tr>
    <tr>
        <td><code>tooltip</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>form</code></td>
        <td>String , <code>null</code></td>
    </tr>
    <tr>
        <td><code>width</code></td>
        <td><code>"md"</code> , <code>"lg"</code> , <code>"full"</code></td>
    </tr>
    <tr>
        <td><code>inverted</code></td>
        <td>boolean</td>
    </tr>
    <tr>
        <td><code>showError</code></td>
        <td>boolean</td>
    </tr>
    <tr>
        <td><code>errorMessage</code></td>
        <td>String</td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}

{% endblock %}

{% block events %}

The `<nys-combobox>` component emits **four** custom Javascript events:
1. **`nys-change`** – Fired when the selected value changes.
2. **`nys-input`** – Fired on every keystroke as the user types in the input.
3. **`nys-focus`** – Fired when the combobox gains focus.
4. **`nys-blur`** – Fired when the combobox loses focus.

### Event details
The `nys-change` and `nys-input` events include a detail object with the following properties:

  - id (string): The id of the combobox.
  - value (string): The current value of the combobox.

You can listen to these events using JavaScript:
{% set code %}
// Select the combobox component
const combobox = document.querySelector('nys-combobox');
// Listen for the 'nys-change' event
combobox.addEventListener('nys-change', (event) => {
  const { id, value } = event.detail;
  console.log(`Combobox ${id} changed: value=${value}`);
});
// Listen for the 'nys-input' event
combobox.addEventListener('nys-input', (event) => {
  const { id, value } = event.detail;
  console.log(`Combobox ${id} input: value=${value}`);
});
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}
