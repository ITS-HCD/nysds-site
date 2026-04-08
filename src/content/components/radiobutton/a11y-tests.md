---
permalink: /components/radiobutton/accessibility-tests.html
title: Accessibility Checklist
description: How to test the accessibility of a radio button.
image: /assets/img/components/radiobutton.svg
image_alt: An illustration of a radio button
image_header: /assets/img/components/radiobutton-header.svg
stable: true
parent: Radio Button
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
