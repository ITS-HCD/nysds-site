---
permalink: /components/card/
title: Card
description: A self-contained container that groups related content and actions about a single subject.
image: /assets/img/components/card.svg
image_alt: An illustration of a card.
image_header: /assets/img/components/card-header.svg
stable: true
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-card>` component is a flexible container that groups related content and actions about a single subject, such as a program, an event, or a news item.

Text content is supplied through the `preheading`, `heading`, `subheading`, and `description` properties. For richer content, use the `preheading`, default, and `footer` slots to project custom markup such as badges, lists, buttons, or links. Images go in the `media` slot.

A card fills the width of its container, so place it inside a grid column to control its size.

{% endblock %}

{% block example %}
{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    description="A short description of the card's subject."
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block options %}

### Preheading

Use `preheading` to add a short label above the heading, such as a category or content type.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    preheading="Preheading"
    heading="Heading"
    description="A short description of the card's subject."
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% set showTip = false %}
{% include "partials/code-preview.njk" %}

### Subheading

Use `subheading` to add supporting text directly below the heading.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    subheading="Subheading"
    description="A short description of the card's subject."
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Heading Level

The card heading renders as a real heading element. It defaults to `h2`. Use `headingLevel` to set it to `h1` through `h6` so the card fits the page's heading hierarchy.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    headingLevel="h3"
    description="Set the heading level to fit the page's heading hierarchy."
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Description

Use `description` for the card's body text. It takes plain text only. When the body needs rich text or more content, use the default slot instead.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    description="A short description of the card's subject."
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Media Slot

Use the `media` slot to add an image to the top of the card. Pass a standard `<img>` element, so you control the source, loading behavior, and alternative text.

Card media is presentational, so mark it with `role="presentation"` and keep any information the user needs in the card's text.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    description="A card with a media image."
  >
    <img
      slot="media"
      src="/assets/img/components/card-media/minnewaska-card-media.jpg"
      role="presentation"
    />
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Inset Media

Set `inset` to add padding around the media so it sits visually inside the card rather than running to its edges.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    description="Inset adds padding around the media to visually contain it."
    inset
  >
    <img
      slot="media"
      src="/assets/img/components/card-media/minnewaska-card-media.jpg"
      role="presentation"
    />
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Media Accent Slot

Use the `media-accent` slot to display a badge over the media, typically a date. Pass a wrapper holding two elements: the first renders as the month line, the second as the day line. The accent only renders when the `media` slot has content.

Because the accent sits in the image area, repeat the full date in the card's text for anyone who needs it in context.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    description="A card with a media image and a date accent."
  >
    <img
      slot="media"
      src="/assets/img/components/card-media/minnewaska-card-media.jpg"
      role="presentation"
    />
    <div slot="media-accent">
      <span>Oct</span>
      <span>16</span>
    </div>
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

The `media-accent` slot can be combined with `inset`.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    description="A card with a media image and a date accent."
    inset
  >
    <img
      slot="media"
      src="/assets/img/components/card-media/minnewaska-card-media.jpg"
      role="presentation"
    />
    <div slot="media-accent">
      <span>Oct</span>
      <span>16</span>
    </div>
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Elevated

Set `elevated` to add a drop shadow, giving the card a raised appearance. Use it to lift a card off a tinted background, not to rank cards against one another.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    description="Elevated adds a drop shadow to give the card a raised appearance."
    elevated
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Link Card

Set `href` to make the whole card a single link. The card renders as one `<a>`, so the entire surface is the target. Use `target` to control where the link opens.

Signal that the card is interactive by putting an icon in the `footer` slot.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    href="https://www.ny.gov/"
    target="_blank"
    heading="Visit NY.gov"
  >
    <p>The whole card is one link. To visually indicate this you should add the <code>open_in_new</code> icon to the footer slot</p>
    <nys-icon slot="footer" name="open_in_new" size="5xl" style="justify-content: end;"></nys-icon>
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Clickable Card

Give the card a click handler to make the whole card a single `<button>`. Use the `onClick` property (or an inline `onclick`) rather than binding `@click` yourself, so the card stays keyboard accessible.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    onclick="alert('you clicked me')"
    heading="Heading"
  >
    <p>The whole card is one button. To visually indicate this you should add the <code>arrow_forward</code> icon to the footer slot.</p>
    <nys-icon slot="footer" name="arrow_forward" size="5xl"></nys-icon>
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

An interactive card is one control, so keep its slots free of buttons, links, and other interactive elements. Nesting them inside the card control is invalid HTML and leaves them unreachable for keyboard and screen reader users.

### Preheading Slot

Use the `preheading` slot for content above the heading block, such as a badge or status label.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Heading"
    description="A card with content in the preheading slot."
  >
    <nys-badge slot="preheading" label="New" intent="success"></nys-badge>
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Default Slot

Use the default slot for the card's main body when `description` is not enough, such as rich text or another component.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card heading="What's included">
    <nys-iconlist divider>
      <nys-iconlistitem icon="check">First item</nys-iconlistitem>
      <nys-iconlistitem icon="check">Second item</nys-iconlistitem>
      <nys-iconlistitem icon="check">Third item</nys-iconlistitem>
    </nys-iconlist>
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Footer Slot

Use the `footer` slot for actions at the bottom of the card, such as a button or link.

{% set preview %}

<div class="nys-tablet:nys-grid-col-6">
  <nys-card heading="Heading" description="A card with actions in the footer slot.">
    <nys-button slot="footer" label="Learn more" href="https://www.ny.gov"></nys-button>
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Card Grid

A card fills the width of its container. To lay out several cards, place each one in a grid column.

By default a card is only as tall as its content, so cards in the same row can end up uneven. Set `--nys-card-height: 100%` to stretch each card to the height of its column. The extra height is absorbed by the main content area, which keeps the `footer` slot pinned to the bottom of every card. The column also has to give the card a height to fill, so add `nys-display-flex` to it.

{% set preview %}

<div class="nys-grid-row nys-grid-gap" style="--nys-card-height: 100%">
  <div class="nys-mobile-lg:nys-grid-col-6 nys-tablet:nys-grid-col-4 nys-display-flex">
    <nys-card
      heading="Roosevelt Island Four Freedoms State Park"
      description="A memorial park on Roosevelt Island dedicated to Franklin D. Roosevelt, featuring sweeping lawns, formal gardens, and panoramic views of the Manhattan and Queens waterfronts on all sides."
    >
      <img slot="media" src="/assets/img/components/card-media/manhattan-card-media.png" role="presentation" />
      <nys-button slot="footer" label="Visit Manhattan" fullWidth></nys-button>
    </nys-card>
  </div>
  <div class="nys-mobile-lg:nys-grid-col-6 nys-tablet:nys-grid-col-4 nys-display-flex">
    <nys-card heading="Astoria Park" description="A waterfront park.">
      <img slot="media" src="/assets/img/components/card-media/astoria-card-media.jpg" role="presentation" />
      <nys-button slot="footer" label="Visit Queens" fullWidth></nys-button>
    </nys-card>
  </div>
  <div class="nys-mobile-lg:nys-grid-col-6 nys-tablet:nys-grid-col-4 nys-display-flex">
    <nys-card heading="Brooklyn Bridge Park" description="A park.">
      <img slot="media" src="/assets/img/components/card-media/brooklyn-card-media.png" role="presentation" />
      <nys-button slot="footer" label="Visit Brooklyn" fullWidth></nys-button>
    </nys-card>
  </div>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block usagedo %}

- Use a card to group content and actions about a single subject, such as one program, event, or news item.
- Set `headingLevel` so the card heading fits the surrounding page hierarchy.
- Keep headings short and specific, so a card is understandable on its own.
- Put actions in the `footer` slot as real buttons or links.
- Use `href` or `onClick` when the whole card leads to one destination or performs one action, and add an icon to the `footer` slot so the interaction is visible.
- Keep cards in the same group consistent in structure, so they are easy to scan and compare.
- Repeat any information shown in the media or the `media-accent` slot in the card's text.
- Place each card in a grid column to control its width, and set `--nys-card-height: 100%` when a row of cards should share one height.

{% endblock %}

{% block usagedont %}

- Use a card as a substitute for a page section heading or for content that belongs in the page flow.
- Put buttons, links, or other interactive elements in the slots of a card that has `href` or a click handler. That card is already a single control.
- Set both `href` and a click handler on the same card.
- Put more than one primary action in a card.
- Rely on the media image or the `media-accent` slot to convey information that appears nowhere else.
- Mix `elevated` and non-elevated cards within the same group.
- Skip heading levels to get a particular text size. Use `headingLevel` for structure, not for styling.
- Use cards for long-form content that a user needs to read in order.

{% endblock %}

{% block accessibility %}

The `<nys-card>` component includes the following accessibility-focused features:

- The `heading` renders as a real heading element, so the card appears in the page's heading outline and can be reached with screen reader heading navigation.
- `headingLevel` sets that element to `h1` through `h6`, so cards fit the surrounding hierarchy rather than forcing a fixed level. It defaults to `h2`.
- A card with `href` renders as a real `<a>`, and a card with a click handler renders as a real `<button>`, so it is focusable, activates from the keyboard, and is announced with the correct role.
- Using `onClick` instead of binding your own `@click` keeps keyboard activation working. A click listener on a plain container is mouse-only.
- An interactive card takes its accessible name from its text content, so give it a `heading` that describes where it goes or what it does.
- A card without `href` or a click handler is a container, not a control. Anything interactive is a real button or link placed in a slot, and each stays individually focusable and keeps its position in the tab order.
- Slotted content stays in the light DOM, so its own semantics and accessible names are preserved.
- Text uses design system typography tokens and scales with browser zoom and user font-size settings.

Keep the following in mind when using card media:

- You supply the `<img>` in the `media` slot, so you control its alternative text. Card media is decorative in this pattern: mark it `role="presentation"` and never place information only in the image.
- The `media-accent` slot renders its content visually over the media. Repeat the full date in the `heading`, `subheading`, or `description` so it is available to everyone.

{% endblock %}

{% block properties %}

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td>Unique identifier. Auto-generated if not provided.</td>
    </tr>
    <tr>
      <td><code>preheading</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td>Appears above the heading text.</td>
    </tr>
    <tr>
      <td><code>heading</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td>Heading text in the card.</td>
    </tr>
    <tr>
      <td><code>headingLevel</code></td>
      <td><code>"h1"</code>–<code>"h6"</code></td>
      <td><code>"h2"</code></td>
      <td>Heading level used for the card heading.</td>
    </tr>
    <tr>
      <td><code>subheading</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td>Appears below the heading text.</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td>Appears below the subheading. Plain text only. Use the default slot for rich content.</td>
    </tr>
    <tr>
      <td><code>inset</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>Adds padding around the media to visually contain it.</td>
    </tr>
    <tr>
      <td><code>elevated</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>Adds a drop shadow, giving the card a raised appearance.</td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td>URL to navigate to. Makes the whole card a single <code>&lt;a&gt;</code>. Keep the card's slots free of other interactive elements when using this.</td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td><code>"_self"</code>, <code>"_blank"</code>, <code>"_parent"</code>, <code>"_top"</code>, or a frame name</td>
      <td><code>"_self"</code></td>
      <td>Where the link opens. Only used with <code>href</code>.</td>
    </tr>
    <tr>
      <td><code>onClick</code></td>
      <td>Function</td>
      <td><code>null</code></td>
      <td>Click handler. Makes the whole card a single <code>&lt;button&gt;</code>. Use instead of <code>@click</code> to ensure keyboard accessibility.</td>
    </tr>
  </table>
</nys-table>

**Slots:**

<nys-table striped>
  <table>
    <tr>
      <th>Slot</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>preheading</code></td>
      <td>Content rendered above the heading block, such as a badge or label.</td>
    </tr>
    <tr>
      <td>(default)</td>
      <td>The card's main body. Use for rich content when the <code>description</code> property is not enough.</td>
    </tr>
    <tr>
      <td><code>footer</code></td>
      <td>Content rendered at the bottom of the card, typically actions like buttons or links.</td>
    </tr>
    <tr>
      <td><code>media</code></td>
      <td>Visual content displayed at the top of the card, typically an <code>&lt;img&gt;</code>.</td>
    </tr>
    <tr>
      <td><code>media-accent</code></td>
      <td>Accent badge displayed over the media, typically a date. Pass a wrapper holding two elements: the first renders as the month line, the second as the day line. Only renders when the <code>media</code> slot has content.</td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}

{% set variables = [
  { name: "--nys-card-height", description: "Height of the card. Defaults to fit-content. Set to 100% to stretch the card to its container's height, so a row of cards renders at an equal height. The extra height is absorbed by the main content area, which keeps the footer slot pinned to the bottom of the card. The container must give the card a height to fill, for example a grid column with nys-display-flex."}
]%}
{% include "partials/css-vars.njk" %}

{% endblock %}

{% block events %}

An interactive card, one with `href` or a click handler, emits **three** custom Javascript events:

1.  **`nys-click`** – Fired when the card is activated with the mouse or the keyboard.
2.  **`nys-focus`** – Fired when the card gains focus.
3.  **`nys-blur`** – Fired when the card loses focus.

You can listen to these events using JavaScript:
{% set code %}
// Select the card component
const card = document.querySelector('nys-card');
// Listen for the 'nys-click' event
card.addEventListener("nys-click", () => {
console.log("Card clicked");
});
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
