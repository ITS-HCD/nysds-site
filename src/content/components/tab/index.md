---
permalink: /components/tab/
title: Tab
description: A clickable interface to toggle between different sets of information without leaving the page.
image: /assets/img/components/tab.svg
image_alt: An illustration of a tab.
image_header: /assets/img/components/tab-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=20950-976
navOrder: 22
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-tab>` acts as a clickable interface to toggle between different sets of information without leaving the page. It is not intended for navigation.

{% endblock %}

{% block example %}
{% set preview %}
<nys-tabgroup>
    <nys-tab label="Marcy"></nys-tab>
    <nys-tab label="Algonquin"></nys-tab>
    <nys-tab label="Haystack"></nys-tab>
    <nys-tab label="Skylight" id="tab4"></nys-tab>
    <nys-tab label="Whiteface" id="tab5"></nys-tab>
    <nys-tabpanel>Mount Marcy is the tallest peak in the Adirondacks. It has an elevation of 5344 feet with 3166 feet of elevation gain. The roundtrip hike to the top is 14.8 miles and is an out-and-back route.
    </nys-tabpanel>
    <nys-tabpanel>Algonquin Peak is the 2nd tallest peak in the Adirondacks. It has an elevation of 5114 feet with 3050 feet of elevation gain. The roundtrip hike to the top is 7.8 miles and is an out-and-back route.</nys-tabpanel>
    <nys-tabpanel>Mount Haystack is the 3rd tallest peak in the Adirondacks. It has an elevation of 4960 feet with 4000 feet of elevation gain. The roundtrip hike to the top is 16.4 miles and is an out-and-back route.</nys-tabpanel>
    <nys-tabpanel>Mount Skylight is the 4th tallest peak in the Adirondacks. It has an elevation of 4926 feet with 5100 feet of elevation gain. The roundtrip hike to the top is 16 miles and is an out-and-back route.</nys-tabpanel>
    <nys-tabpanel>Whiteface is the 5th tallest peak in the Adirondacks. It has an elevation of 4867 feet with 3050 feet of elevation gain. The roundtrip hike to the top is 7.2 miles and is an out-and-back route.</nys-tabpanel>
    <p style="padding: 1rem;">
        <strong>Note:</strong> The content in the tab panels was gathered from <a href="https://www.lakeplacid.com/do/outdoors/summerfall/hiking">lakeplacid.com</a> and may not be completely accurate. This is meant to be a demo of how the component works, not a hiking guide.
    </p>
</nys-tabgroup>
{% endset %}
{% set code %}
<nys-tabgroup>
    <nys-tab label="Marcy"></nys-tab>
    <nys-tab label="Algonquin"></nys-tab>
    ...rest of the tabs...
    <nys-tabpanel>content inside the tab panel</nys-tabpanel>
    <nys-tabpanel>content inside the tab panel</nys-tabpanel>
    ...rest of the tabpanels...
</nys-tabgroup>
{% endset %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block options %}

## Disabled Tabs
To disable a tab, add the `disabled` attribute to the `<nys-tab>` element. Disabled tabs will not be clickable and will have a different visual style to indicate that they are inactive.

{% set preview %}
<nys-tabgroup>
    <nys-tab label="Marcy"></nys-tab>
    <nys-tab label="Algonquin"></nys-tab>
    <nys-tab label="Haystack"></nys-tab>
    <nys-tab label="Skylight" id="tab4"></nys-tab>
    <nys-tab label="Whiteface" id="tab5"></nys-tab>
    <nys-tab label="Gore (Not a High Peak)" disabled></nys-tab>
    <nys-tabpanel>Mount Marcy is the tallest peak in the Adirondacks. It has an elevation of 5344 feet with 3166 feet of elevation gain. The roundtrip hike to the top is 14.8 miles and is an out-and-back route.
    </nys-tabpanel>
    <nys-tabpanel>Algonquin Peak is the 2nd tallest peak in the Adirondacks. It has an elevation of 5114 feet with 3050 feet of elevation gain. The roundtrip hike to the top is 7.8 miles and is an out-and-back route.</nys-tabpanel>
    <nys-tabpanel>Mount Haystack is the 3rd tallest peak in the Adirondacks. It has an elevation of 4960 feet with 4000 feet of elevation gain. The roundtrip hike to the top is 16.4 miles and is an out-and-back route.</nys-tabpanel>
    <nys-tabpanel>Mount Skylight is the 4th tallest peak in the Adirondacks. It has an elevation of 4926 feet with 5100 feet of elevation gain. The roundtrip hike to the top is 16 miles and is an out-and-back route.</nys-tabpanel>
    <nys-tabpanel>Whiteface is the 5th tallest peak in the Adirondacks. It has an elevation of 4867 feet with 3050 feet of elevation gain. The roundtrip hike to the top is 7.2 miles and is an out-and-back route.</nys-tabpanel>
    <p style="padding: 1rem;">
        <strong>Note:</strong> The content in the tab panels was gathered from <a href="https://www.lakeplacid.com/do/outdoors/summerfall/hiking">lakeplacid.com</a> and may not be completely accurate. This is meant to be a demo of how the component works, not a hiking guide.
    </p>
</nys-tabgroup>
{% endset %}
{% set code %}
<nys-tabgroup>
    <nys-tab label="Marcy"></nys-tab>
    <nys-tab label="Algonquin"></nys-tab>
    <nys-tab label="Gore (Not a High Peak)" disabled></nys-tab>
    ...rest of the tabs...
    <nys-tab label="Gore (Not a High Peak)" disabled></nys-tab>
    <nys-tabpanel>content inside the tab panel</nys-tabpanel>
    <nys-tabpanel>content inside the tab panel</nys-tabpanel>
    ...rest of the tabpanels...
</nys-tabgroup>
{% endset %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block usage %}

### When to use this component

### When to consider something else

{% endblock %}

{% block usagedo %}

{% endblock %}

{% block usagedont %}

{% endblock %}

{% block accessibility %}

{% endblock %}

{% block cssvariables %}
{% endblock %}

{% block events %}

{% endblock %}

{% block updates %}{% endblock %}
