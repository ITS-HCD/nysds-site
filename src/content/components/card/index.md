---
permalink: /components/card/
title: Card
description: A self-contained container that groups related content and actions about a single subject.
stable: true
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-card>` component is a flexible container that groups related content and actions about a single subject, such as a program, an event, or a news item.

Text content is supplied through the `preheading`, `heading`, `subheading`, and `description` properties. For richer content, use the `top`, default, and `footer` slots to project custom markup such as badges, lists, buttons, or links.

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
    preheading="Program"
    heading="Home Energy Assistance"
    description="Help paying heating and cooling bills for income-eligible households."
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
    heading="Home Energy Assistance"
    subheading="Applications open through March 31"
    description="Help paying heating and cooling bills for income-eligible households."
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
    heading="Home Energy Assistance"
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
    heading="Home Energy Assistance"
    description="Help paying heating and cooling bills for income-eligible households. Most applicants receive a decision within 30 days."
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Media

Use `media` to add an image to the top of the card. The image is cropped to a 16:9 ratio. Supported formats are standard web images such as `png` and `jpg`.

Card media is presentational, so keep any information the user needs in the card's text.

{% set preview %}
<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    media="/assets/i/2026/adk-card-media.jpg"
    heading="Explore state parks"
    description="Find trails, campgrounds, and day-use areas across New York."
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Inset Media

Set `inset` to add padding around the media so it sits visually inside the card rather than running to its edges.

{% set preview %}
<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    media="/assets/i/2026/adk-card-media.jpg"
    heading="Explore state parks"
    description="Inset adds padding around the media to visually contain it."
    inset
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Media Accent

Use `mediaAccent` to display a date over the media, written in `M/D` format. The month renders as a three-letter abbreviation and the day as a number. The accent only appears when `media` is set and the value is a valid date.

Because the accent is part of the image area, repeat the full date in the card's text for anyone who needs it in context.

{% set preview %}
<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    media="/assets/i/2026/jbt-card-media.jpg"
    mediaAccent="10/16"
    heading="Fall foliage walk"
    description="October 16, 2026 at John Boyd Thacher State Park."
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

`mediaAccent` can be combined with `inset`.

{% set preview %}
<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    media="/assets/i/2026/jbt-card-media.jpg"
    mediaAccent="10/16"
    heading="Fall foliage walk"
    description="October 16, 2026 at John Boyd Thacher State Park."
    inset
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Elevated

Set `elevated` to add a drop shadow, giving the card a raised appearance. Use it to lift a card off a tinted background, not to rank cards against one another.

{% set preview %}
<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Home Energy Assistance"
    description="Elevated adds a drop shadow to give the card a raised appearance."
    elevated
  ></nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Top Slot

Use the `top` slot for content above the heading block, such as a badge or status label.

{% set preview %}
<div class="nys-tablet:nys-grid-col-6">
  <nys-card
    heading="Child Care Assistance"
    description="Help paying for child care while you work or attend school."
  >
    <nys-badge slot="top" label="New" intent="success"></nys-badge>
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Default Slot

Use the default slot for the card's main body when `description` is not enough, such as rich text or another component.

{% set preview %}
<div class="nys-tablet:nys-grid-col-6">
  <nys-card heading="What you'll need">
    <nys-iconlist divider>
      <nys-iconlistitem icon="check_circle">Recent pay stubs</nys-iconlistitem>
      <nys-iconlistitem icon="check_circle">Current rent or mortgage statement</nys-iconlistitem>
      <nys-iconlistitem icon="check_circle">Photo identification</nys-iconlistitem>
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
  <nys-card
    heading="Home Energy Assistance"
    description="Help paying heating and cooling bills for income-eligible households."
  >
    <nys-button slot="footer" label="Check your eligibility" href="https://www.ny.gov"></nys-button>
  </nys-card>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Card Grid

A card fills the width of its container. To lay out several cards, place each one in a grid column. Cards in the same row **DO NOT** stretch to match the tallest card so make sure content is similar in length for consistent visual alignment.

{% set preview %}
<div class="nys-grid-row nys-grid-gap">
  <div class="nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      preheading="Program"
      heading="Home Energy Assistance"
      description="Help paying heating and cooling bills."
    >
      <nys-button slot="footer" label="Learn more" variant="outline" href="https://www.ny.gov"></nys-button>
    </nys-card>
  </div>
  <div class="nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      preheading="Program"
      heading="Child Care Assistance"
      description="Help paying for child care while you work or attend school."
    >
      <nys-button slot="footer" label="Learn more" variant="outline" href="https://www.ny.gov"></nys-button>
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
- Keep cards in the same group consistent in structure, so they are easy to scan and compare.
- Repeat any information shown in the media or `mediaAccent` in the card's text.
- Place each card in a grid column to control its width.

{% endblock %}

{% block usagedont %}

- Use a card as a substitute for a page section heading or for content that belongs in the page flow.
- Make the whole card clickable. Use a link or button in the `footer` slot instead.
- Put more than one primary action in a card.
- Rely on the media image or `mediaAccent` date to convey information that appears nowhere else.
- Mix `elevated` and non-elevated cards within the same group.
- Skip heading levels to get a particular text size. Use `headingLevel` for structure, not for styling.
- Use cards for long-form content that a user needs to read in order.

{% endblock %}

{% block accessibility %}

The `<nys-card>` component includes the following accessibility-focused features:

- The `heading` renders as a real heading element, so the card appears in the page's heading outline and can be reached with screen reader heading navigation.
- `headingLevel` sets that element to `h1` through `h6`, so cards fit the surrounding hierarchy rather than forcing a fixed level. It defaults to `h2`.
- The card is a container, not a control, so anything interactive is a real button or link placed in a slot. Each stays individually focusable and keeps its position in the tab order.
- Slotted content stays in the light DOM, so its own semantics and accessible names are preserved.
- Text uses design system typography tokens and scales with browser zoom and user font-size settings.

Keep the following in mind when using card media:

- The media image is rendered without alternative text, so screen readers do not describe it. Treat `media` as decorative and never place information only in the image.
- `mediaAccent` renders the date visually over the media. Repeat the full date in the `heading`, `subheading`, or `description` so it is available to everyone.

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
      <td><code>media</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td>Image URL for the card media. Cropped to a 16:9 ratio.</td>
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
      <td><code>mediaAccent</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td>Date accent displayed over the media, in <code>M/D</code> format (e.g. <code>"10/16"</code>). Only renders when <code>media</code> is set and the value is a valid date.</td>
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
      <td><code>top</code></td>
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
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}
