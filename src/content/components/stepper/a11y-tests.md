---
permalink: /components/stepper/accessibility-tests.html
title: Accessibility Checklist
description: How to test the accessibility of a stepper.
image: /assets/img/components/stepper.svg
image_alt: An illustration of a stepper
image_header: /assets/img/components/stepper-header.svg
stable: true
parent: Stepper
navOrder: 1
eleventyExcludeFromCollections: true
---

<!-- Remove eleventyExcludeFromCollections to render page -->
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
