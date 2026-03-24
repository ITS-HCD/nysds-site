---
permalink: /components/video/
title: Video Player
description: Video player for embedding YouTube videos with thumbnail preview and on-demand playback.
image: /assets/img/components/video.svg
image_alt: An illustration of a video player.
image_header: /assets/img/components/video-header-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=20897-9539
navOrder: 29
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-video>` component embeds a YouTube video with a clickable thumbnail, responsive sizing, and accessible playback. The YouTube iframe only loads after the user clicks play, improving page performance.

**Note:** Only valid YouTube URLs are supported in v1.

{% endblock %}

{% block example %}
  {% set preview %}<nys-video
  videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  titleText="Rick Astley - Never Gonna Give You Up"
></nys-video>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block usage %}

### When to use this component
- Use video player when motion or audio communicates something better than text or images alone.

### When to consider something else
- Don't use video if the same message can be delivered clearly with text or a static image.
- Avoid using video as the only source of key information — always provide a text alternative.


{% endblock %}

{% block usagedo %}

  - Keep `titleText` to 50–60 characters.
  - Use a clear, high-quality thumbnail so users recognize it as a video.
  - Maintain the default `lazy` loading for better page performance.
  - Let users choose to start the video; avoid `autoplay` unless necessary.
  - Reserve space for the 16:9 ratio box to prevent layout shift.

{% endblock %}

{% block usagedont %}

- Don't set `autoplay` without understanding that the video will be **muted** (`nys-video` enforces this automatically to protect users from unexpected noise).
- Don't rely on video alone to convey critical information.

{% endblock %}

{% block accessibility %}

The `<nys-video>` component includes the following accessibility-focused features:

  - The play button is keyboard focusable and labeled with the video title via `aria-label="Play [titleText]"`.
  - A visually hidden `aria-live` region announces "Video is playing" or "Advertisement is playing" to screen reader users.
  - `titleText` is used as both the visible caption and the iframe's `title` and `aria-label` — always provide it.

{% endblock %}

{% block options %}

### Custom Thumbnail

Provide your own thumbnail via the `thumbnail` property. If not set, the component fetches YouTube's auto-generated thumbnail at: `https://img.youtube.com/vi/{video-id}/maxresdefault.jpg`

{% set preview %}<nys-video
videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
titleText="Rick Astley - Never Gonna Give You Up"
thumbnail="https://wallpapers.com/images/hd/rick-astley-th6vqytajjixfuqj.jpg"
></nys-video>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Autoplay

<nys-alert type="warning" heading="Using autoplay">
<p>It is not recommend to use <code>autoplay</code> unless <strong>absolutely necessary</strong> in specific cases. Please use cautiously.</p>
</nys-alert>
<br/>

The iframe loads immediately and plays muted. Sound is always off when `autoplay` is set — this is intentional and cannot be overridden.

{% set preview %}<nys-video
videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
titleText="Rick Astley - Never Gonna Give You Up"
autoplay
></nys-video>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Disabled

Prevents playback. The thumbnail and play button are visible but non-interactive.

{% set preview %}<nys-video
videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
titleText="Rick Astley - Never Gonna Give You Up"
disabled
></nys-video>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Start Time

Use `starttime` (in seconds) to begin playback at a specific point.

{% set preview %}<nys-video
videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
titleText="Rick Astley - Never Gonna Give You Up"
starttime="43"
></nys-video>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Sizes

Use explicit sizes to lock a specific layout. If `size` is not set, the component defaults to `size="md"`.

{% set preview %}
<nys-video videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" titleText="Full (width: 100% with Aspect-ratio: 16 / 9)" size="full"></nys-video>
<br/>
<nys-video videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" titleText="Medium (width: 440-675px)" size="md"></nys-video>
<br/>
<nys-video videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" titleText="Small (width: 320-439px)" size="sm"></nys-video>
{% endset %}
{% set code %}
<nys-video size="full" videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" titleText="Full (width: 100%)"></nys-video>
<nys-video size="md" videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" titleText="Medium (width: 440-675px)"></nys-video>
<nys-video size="sm" videourl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" titleText="Small (width: 320-439px)"></nys-video>
{% endset %}
{% include "partials/code-preview.njk" %}
  
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
      <td><code>videourl</code></td>
      <td>String</td>
      <td>—</td>
      <td>Required. A valid YouTube URL.</td>
    </tr>
    <tr>
      <td><code>titleText</code></td>
      <td>String</td>
      <td>—</td>
      <td>Caption displayed below (or overlaid on) the video. Also used as the iframe accessible label.</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td><code>"full" | "md" | "sm"</code></td>
      <td>auto</td>
      <td>Locks the player to a specific size. If unset, size responds to viewport width.</td>
    </tr>
    <tr>
      <td><code>thumbnail</code></td>
      <td>String</td>
      <td>auto</td>
      <td>Custom thumbnail URL. Defaults to YouTube's <code>maxresdefault.jpg</code>.</td>
    </tr>
    <tr>
      <td><code>autoplay</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td>Loads and plays the video immediately, muted.</td>
    </tr>
    <tr>
      <td><code>starttime</code></td>
      <td>Number</td>
      <td><code>0</code></td>
      <td>Time in seconds where playback begins.</td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td><code>"lazy" | "eager"</code></td>
      <td><code>"lazy"</code></td>
      <td>Controls iframe loading behavior after play is triggered.</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td>Disables playback interaction.</td>
    </tr>
  </table>
</nys-table>
{% endblock %}

{% block cssvariables %}

The `nys-video` does not have any css variables because this component must remain consistent across applications and sites.

{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
