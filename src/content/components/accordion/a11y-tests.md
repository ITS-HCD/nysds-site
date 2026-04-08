---
permalink: /components/accordion/accessibility-tests.html
title: Accessibility Checklist
description: How to test the accessibility of an accordion.
image: /assets/img/components/accordion.svg
image_alt: An illustration of an accordion
image_header: /assets/img/components/accordion-header.svg
stable: true
parent: Accordion
navOrder: 1
---

{% extends "layouts/component-a11y-tests.njk" %}

{#
  In a11y-tests.11tydata.json5:
  Comment top-level members to determine which njk blocks will render.
  
  Members that may be commented are exactly these:
  disabilities
  keyboard
  mouse
  screenReader
  screenReaderMobile
  tests
  voice
  zoom
#}
