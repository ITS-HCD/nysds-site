---
permalink: /components/modal/accessibility-tests.html
title: Accessibility Checklist
description: How to test the accessibility of a modal.
image: /assets/img/components/modal.svg
image_alt: An illustration of a modal
image_header: /assets/img/components/modal-header.svg
stable: true
parent: Modal
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
