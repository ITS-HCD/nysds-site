---
permalink: /about/updates/shadowDOM-styling/
title: "Here Be Dragons: Slots, Styles, and Shadow DOM"
author: Robert Chen
subtitle: Lessons from adapting web components, styling slotted content, and the double-edged sword that is shadow DOM
description: Lessons from adapting web components, styling slotted content, and the double-edged sword that is shadow DOM
image: /assets/i/2026/shadow-dom-article/header.jpg
image_alt: TODO - describe header image
updatethumbnail: /assets/i/2026/shadow-dom-article/thumbnail.png
ogimage: /assets/i/2026/shadow-dom-article/thumbnail.jpg
thumbnailimage: /assets/i/2026/shadow-dom-article/thumbnail-alt.png
date: 2026-09-29
tags: article, web components, shadow DOM, slots, CSS, design system
---

<!-- <nys-alert type="info" heading="A note to readers">
<p>Dear readers, my hope is that you can take something away from our trials and errors in adapting web components, styling slotted content, and the double-edged sword that is shadow DOM. Whether you're looking to build your own Design System or simply understand our process, I hope you find something useful here.</p>
</nys-alert> -->
<nys-alert type="info" heading="Quick crash course: DOM and shadow DOM" icon="edit_square">
<span>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">DOM (Document Object Model)</a> is the browser's representation of an HTML page as a tree-like structure of connected nodes. The <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM">shadow DOM</a> creates a separate, encapsulated version of the DOM inside a component, allowing its structure and styles to be isolated from the rest of the page.</span>
</nys-alert>
<br/>

Dear readers, my hope is that you can take something away from our trials and errors in adapting web components, styling slotted content, and the double-edged sword that is shadow DOM. Whether you're looking to build your own Design System or simply understand our process, I hope you find something useful here.
<br/>

<nys-divider></nys-divider>
<br/>

A part of me breathed a sigh of relief as I submitted the long-anticipated solution to our slotted shadow DOM issue. I decided to celebrate by searching for one of my favorite songs: "[I Want Something Just Like This](https://www.youtube.com/watch?v=FM7MFYoylVs&list=RDFM7MFYoylVs&start_radio=1)."

To rewind a bit, the NYS Design System decided to tackle web components.
 
Now, "[web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)" aren't really one thing. It's an easier name we use to describe a collection of native web platform features that come together to create reusable custom HTML elements. Custom elements are the official part that lets us create our own HTML tags, such as `<nys-table>` or `<nys-button>`, to use across New York State applications. The other pieces, such as shadow DOM, slots, templates, and ElementInternals, provide different capabilities that help those custom elements work.
 
One of the pieces we use is shadow DOM, which gives a component its own isolated DOM and styling. Styles inside the shadow DOM generally stay inside the component, and styles from the outside generally do not reach in. That isolation is one of the biggest benefits of shadow DOM, but it also creates some interesting problems when users need to put their own content inside our components via slots.
 
#### An example of a slot in our `nys-alert`
 
{% set code %}
<!-- All content between the opening and closing <nys-alert> tags is slotted content.
     Unlike properties such as type and heading, the <p> and <a> elements are
     user-provided content placed into the component's slot. -->
 
<nys-alert type="success" heading="Custom Descriptions">
  <p>This is a custom alert with <strong>HTML content</strong>.</p>
  <a href="https://www.ny.gov/" target="_blank">Learn more about our accessibility services</a>
</nys-alert>
{% endset %}
{% set preview = "" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}
## The problem with slots
 
Our components use slots when we allow users to provide their own content. A slot is a place inside our component where users can insert their own HTML. For example, `nys-table` accepts a `<table>` through a slot. The `<table>` still belongs to the user, but we need to apply some styling to make that content work correctly and maintain a consistent visual style within our component.
 
The tricky part is that styling slotted content from inside the shadow DOM has limitations.
 
Our first attempt was using `::slotted()`. This works for styling slotted elements, but it has a major limitation: `::slotted()` only targets the direct child of the slot. It does not let us freely target descendants inside that content. This became a problem because we often needed to style more than just the top-level slotted element.
 
For example, if a user slots a `<div>` containing a `<p>`, we can style the `<div>`, but not the `<p>` inside it:
 
{% set code %}
::slotted(div) {
  /* works */
}
 
::slotted(div p) {
  /* does not work */
}
{% endset %}
{% set preview = "" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}
 
## Cloning the slot
 
Our next solution was to clone the slotted content directly into our component. And for a while, it worked!
 
Yet we soon learned that cloning introduced a new set of problems:
 
- Once we cloned the user's content, we were no longer working with the user's original DOM. This meant users could not reliably override the styling we were applying to their content for very specific scenarios.
- Events attached to the original slotted elements could be lost because our component contained clones rather than the originals.
- Dynamically added content became a problem. If the user changed the slotted content after the initial render, our cloned version did not necessarily stay in sync.
So, while cloning solved some styling problems, it created arguably worse problems _(+ bonus points for keeping me up at night)_.
 
## Back to the light DOM
 
We ultimately removed slot cloning altogether and went back to the drawing board with two solutions:
 
1. One stylesheet for the `nys-` component itself inside the shadow DOM.
2. A `.light.scss` stylesheet for styling content that users place into our slots in the light DOM. This is only used for specific components that allow users to slot their own elements rather than using an `nys-` component, such as `nys-verticalnav`.
With this solution in place, the user's actual elements stay where they put them. Their event listeners continue to work. Dynamically added content can behave normally. We are styling the user's content without taking ownership of it.
 
But there was one problem _(oh joy! The fun never seems to end)_.

<br/> 
<figure>
    <img
        src="/assets/i/2026/shadow-dom-article/xkcd.png"
        alt="Fixing Problems">
    <figcaption>Image by <a href="https://xkcd.com/1739/">xkcd</a></figcaption>
</figure>
We had brought back the very thing shadow DOM had been protecting us from: style leakage.
 
Our light DOM styles are no longer protected by the shadow DOM boundary. That means our styles can interact with styles from the application using the NYS Design System.
 
For example, if our light DOM stylesheet says:
 
{% set code %}
/*** Inside our nys-table.light.scss ***/
table {
  /* NYSDS styling */
}
{% endset %}
{% set preview = "" %}
{% set codeExpanded = true %}
{% set codeLanguage = "scss" %}
{% include "partials/code-preview.njk" %}
 
a user's application could also have:
 
{% set code %}
table {
  /* application styling */
}
{% endset %}
{% set preview = "" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}
 
Now we have to deal with the normal CSS cascade and specificity.
 
## Making our styles intentional
 
We needed a way to make our component styles strong enough to reliably apply without making them impossible for users to override when they genuinely need to.
 
That's where we landed on selectors such as:
 
{% set code %}
/*** Inside our nys-table.light.scss ***/
nys-table:not(#_) :is(table, tr, td) {
  /* NYSDS styling */
}
{% endset %}
{% set preview = "" %}
{% set codeExpanded = true %}
{% set codeLanguage = "scss" %}
{% include "partials/code-preview.njk" %}
 
The `:not(#_)` gives the selector a high level of specificity without requiring us to add an ID to the actual component. This means our light DOM styles have high enough specificity to avoid being unintentionally overridden by ordinary application styles.
 
But there is an important tradeoff. If users must override one of these styles, they need to use `!important`:
 
{% set code %}
.my-table td {
  color: red !important;
}
{% endset %}
{% set preview = "" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}
 
We don't recommend reaching for `!important` as the default approach, but it is there for cases where a user genuinely needs to override the styling provided by the component.
 
The goal is not to prevent users from styling their own content. The goal is to make our component styles predictable and standardized while still giving users a way out when they need one.
 
## Not everything follows this approach
 
There are exceptions to this approach, particularly for components where the styling needs to be standardized across the state. For example, universal navigation components (i.e., `nys-unavheader` and `nys-unavfooter`) need to maintain a consistent appearance and behavior. Those components have different requirements than components where users are expected to provide and style their own slotted content.
 
## A brave new frontier
 
In the end, it feels like we're pioneers in uncharted territory, gathering resources from all over the place, and going through plenty of trial and error along the way.
 
Web components aren't brand new, but there are still plenty of interesting problems to solve when building a design system around them. They still have their limitations, but the benefits are still worth it, and we're glad we chose this path. Though there's still plenty to figure out, we're looking forward to continuing the journey through the twisted landscape of shadow DOMs.
 
Looking back at my initial doubts about why we decided to adopt web components, especially at a time when most design systems hadn't migrated to them or were still experimenting with them, I think I can finally say: I want something just like this.

<br/> 
<figure>
    <img
        src="/assets/i/2026/shadow-dom-article/something_just_like_this2.jpg"
        alt="music poster">
    <figcaption><a href="https://en.wikipedia.org/wiki/Something_Just_Like_This">Single</a> by <a href="https://www.youtube.com/watch?v=FM7MFYoylVs&themeRefresh=1"><a href="https://en.wikipedia.org/wiki/The_Chainsmokers">The Chainsmokers</a> and <a href="https://en.wikipedia.org/wiki/Coldplay">Coldplay</a></figcaption>
</figure>