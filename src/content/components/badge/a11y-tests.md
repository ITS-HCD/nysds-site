---
permalink: /components/badge/accessibility-tests.html
title: Accessibility Checklist
description: How to test the accessibility of a badge.
image: /assets/img/components/badge.svg
image_alt: An illustration of a badge
image_header: /assets/img/components/badge-header.svg
stable: true
parent: Badge
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
