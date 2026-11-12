---
permalink: /about/updates/nysds-mcp-server/
title: "Assembling, Not Guessing: The NYS Design System MCP Server"
author: Jesse Gardner
description: The NYSDS MCP server connects AI coding assistants to our components, design tokens, and usage guidance, so they assemble from tested parts instead of guessing.
ogimage: /assets/i/2026/mcp-article/mcp-header.png
image: /assets/i/2026/mcp-article/mcp-header.png
image_alt: A slider from assembling to guessing. Above the assembling end, nys components like nys-button and nys-textinput sit in a neat grid. Above the guessing end, dashed placeholders like div.btn-blue and question marks float at odd angles.
thumbnailimage: /assets/i/2026/mcp-article/mcp-thumbnail.png
updatethumbnail: /assets/i/2026/mcp-article/mcp-thumbnail.png
date: 2026-11-11
tags: article, ai, mcp, web components, design tokens
---

Ask an AI coding assistant for a benefits application and you'll have a working form in seconds. You'll also probably get React styled with Tailwind, a few invented class names, and accessibility nobody has tested. Without context, the assistant guesses.

That's why we built the NYS Design System MCP server. It connects AI assistants directly to our components, design tokens, and usage guidance, so they build with the same tested parts your team does. Think of it like this reference site, written for machines.

## What's an MCP?

MCP stands for [Model Context Protocol](https://modelcontextprotocol.io/). It's an open standard, released by Anthropic in late 2024, that gives AI assistants a common way to ask outside systems for information while they work.

On its own, an assistant knows only what it learned in training and whatever you paste into the chat. MCP lets it look things up. Let's say it needs to know which components we offer for forms, or which attributes `nys-button` accepts. It asks our server, and a structured answer comes back from the design system itself.

One thing to understand... the MCP server isn't an AI, and it doesn't generate anything. It's a reference the AI consults, written by the people who build the design system.

## Try it out

You need [Node.js](https://nodejs.org/) 18 or later. There's nothing else to install, because your assistant starts the server on demand with `npx`.

Most assistants take the same configuration block:

{% set code %}
{
  "mcpServers": {
    "nysds": {
      "command": "npx",
      "args": ["-y", "@nysds/mcp-server"]
    }
  }
}
{% endset %}
{% set accordionLabel = "MCP configuration" %}
{% set codeExpanded = true %}
{% set codeLanguage = "json" %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeExpanded = false %}{% set codeLanguage = "" %}

Where that block lives depends on your tool:

- **Claude Code:** `.mcp.json` in your project root
- **Cursor:** `.cursor/mcp.json`
- **Gemini CLI:** `.gemini/settings.json` in your project, or `~/.gemini/settings.json`
- **GitHub Copilot in VS Code:** `.vscode/mcp.json`, with `servers` in place of `mcpServers`
- **Claude Desktop:** `claude_desktop_config.json`

MCP is an open standard, so the server works with almost any AI tool that supports it, no matter which model runs behind it. You'll find the details for each tool in the [MCP server README](https://github.com/ITS-HCD/nysds/tree/main/packages/mcp-server#readme).

After the server is connected, give one of these prompts a try:

{% set code %}What NYSDS components should I use for a mailing address form?{% endset %}
{% set accordionLabel = "Prompt" %}
{% set codeExpanded = true %}
{% set codeLanguage = "text" %}
{% include "partials/code-preview.njk" %}

{% set code %}Build a fishing license renewal form with fields for name, date of birth, and license number. Use NYSDS components only.{% endset %}
{% include "partials/code-preview.njk" %}

{% set code %}Review this page and replace any hand-built form controls with NYSDS components.{% endset %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeExpanded = false %}{% set codeLanguage = "" %}

Before you connect an AI tool to agency work, check with your supervisor and read your agency's policy on approved AI tools.

## Guessing vs. assembling

Why do assistants guess? A large language model predicts the most probable next word from patterns in its training data. If it doesn't have your context, the output drifts toward the statistical center of everything the model has seen. That isn't wrong, exactly. It's generic (the most likely answer across every context, which makes it nobody's specific answer).

I learned this while writing a talk summary with an AI. It got my last name wrong, and it wasn't a near miss... it invented one.

A made-up last name is funny, but a made-up form control on a state service isn't. Different teams have solved the same problem with different skills, budgets, and priorities, and New York already has dozens of versions of the same button. AI doesn't fix that problem. It speeds it up.

<figure class="diagram">
<figcaption>Guessing vs. assembling</figcaption>
<div class="diagram__duo">
<p class="diagram__box diagram__box--accent"><span class="diagram__label">Prompt + NYSDS MCP</span><span class="diagram__detail">Assembles tested <code>nys-*</code> components using NYSDS guidance<span class="sr-only">, so the output lands near the assembling end</span></span></p>
<p class="diagram__box diagram__box--deep"><span class="diagram__label">Prompt alone</span><span class="diagram__detail">Fills the gaps with whatever is statistically likely<span class="sr-only">, so the output lands near the guessing end</span></span></p>
</div>
<div class="diagram__scale" aria-hidden="true"><span class="diagram__pin diagram__pin--start"><nys-icon name="location_on" size="50"></nys-icon></span><span class="diagram__pin diagram__pin--end"><nys-icon name="location_on" size="50"></nys-icon></span></div>
<p class="diagram__scale-ends"><span><strong>Assembling</strong> Deterministic</span><span><strong>Guessing</strong> Stochastic</span></p>
</figure>

The MCP server moves AI output from the guessing end of that slider to the assembling end. The assistant no longer has to predict what a button probably looks like. It looks up `nys-button`, reads our guidance, and assembles from parts we've already built and tested.

## How it works

<figure class="diagram">
<figcaption>How the NYSDS MCP server works</figcaption>
<div class="diagram__how">
<p class="diagram__box diagram__box--deep diagram__how-prompt"><span class="diagram__label">Your prompt</span><span class="diagram__detail">“Build a fishing license renewal form”</span></p>
<span class="diagram__arrow diagram__how-down1" aria-hidden="true"><nys-icon name="arrow_downward" size="32"></nys-icon></span>
<p class="diagram__box diagram__box--center diagram__how-asst"><span class="diagram__label">Your AI assistant</span><span class="diagram__detail">Claude Code, Copilot, Cursor, Gemini CLI, and more<span class="sr-only">. It trades context with the language model and the NYSDS MCP server.</span></span></p>
<span class="diagram__arrow diagram__arrow--both diagram__how-x1" aria-hidden="true"><nys-icon name="arrow_forward" size="32"></nys-icon><nys-icon name="arrow_forward" flip="horizontal" size="32"></nys-icon></span>
<p class="diagram__box diagram__how-model"><span class="diagram__label">Language model</span><span class="diagram__detail">Claude, GPT, Gemini, and others</span></p>
<span class="diagram__arrow diagram__arrow--both diagram__how-x2" aria-hidden="true"><nys-icon name="arrow_forward" size="32"></nys-icon><nys-icon name="arrow_forward" flip="horizontal" size="32"></nys-icon></span>
<p class="diagram__box diagram__box--accent diagram__how-mcp"><span class="diagram__label">NYSDS MCP server</span><span class="diagram__detail">Answers tool calls like <code>get_component</code> with attributes, slots, events, usage guidance, and tokens</span></p>
<span class="diagram__arrow diagram__how-down2" aria-hidden="true"><nys-icon name="arrow_downward" size="32"></nys-icon></span>
<p class="diagram__box diagram__box--paper diagram__how-output"><span class="diagram__label">Code built from <code>nys-*</code> components</span></p>
</div>
</figure>

You give your assistant a prompt. The assistant sends it to the model, along with a list of our MCP tools, and the model decides which of those tools it needs. Then the assistant calls them and hands the results back, so the model writes code with our components, attributes, and rules in front of it and doesn't have to guess at them.

## The tools, and why they save context

When we built an early form demo, the AI fetched our raw `custom-elements.json` (the machine-readable manifest of every component we ship) from unpkg. That worked... but it's like handing someone the phone book when they asked for one number.

Context windows are finite, and the more you put in one, the less attention each piece gets. Our manifest runs about 150,000 tokens today, which is more than some models can hold at once. So the MCP server breaks it into small, targeted tools:

<nys-table striped class="nys-margin-b-300">
  <table>
    <thead>
      <tr>
        <th>Tool</th>
        <th>What it gives the AI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>find_<wbr>components</code></td>
        <td>A list of components with one-line summaries, or the matches for a search</td>
      </tr>
      <tr>
        <td><code>get_<wbr>component</code></td>
        <td>Full docs for one component: attributes, slots, events, CSS variables, usage guidance, and optional code examples</td>
      </tr>
      <tr>
        <td><code>validate_<wbr>component_<wbr>api</code></td>
        <td>A check that every attribute in the AI's code exists on the component</td>
      </tr>
      <tr>
        <td><code>find_<wbr>tokens</code></td>
        <td>Design tokens that match a name, value, or description</td>
      </tr>
      <tr>
        <td><code>get_<wbr>token</code></td>
        <td>One token's value, usage description, and related alternatives</td>
      </tr>
      <tr>
        <td><code>get_<wbr>token_<wbr>graph</code></td>
        <td>How tokens reference each other, from primitive values up to applied tokens</td>
      </tr>
      <tr>
        <td><code>get_<wbr>utility_<wbr>classes</code></td>
        <td>Grid, flex, spacing, display, and typography utility classes</td>
      </tr>
      <tr>
        <td><code>get_<wbr>guide</code></td>
        <td>Guides for installation, forms, styles, fonts, page structure, themes, and framework setup</td>
      </tr>
    </tbody>
  </table>
</nys-table>

A typical flow goes find, get, validate. The assistant calls `find_components` to see what's available, then `get_component` for only the components it needs, and finally `validate_component_api` to check its work.

<figure class="diagram">
<figcaption>Context an AI reads to build with NYSDS<span class="diagram__note">Approximate tokens per task, NYSDS 1.23.1</span></figcaption>
<dl class="diagram__bars">
<div><dt><span class="diagram__label">Raw <code>custom-elements.json</code></span><span class="diagram__note">Everything, including noise</span></dt><dd><span class="diagram__bar diagram__bar--muted" style="--bar: 100%"></span><span class="diagram__value"><strong>About 150,000</strong></span></dd></div>
<div><dt><span class="diagram__label">MCP: six-component form</span><span class="diagram__note">Find, get six components, validate</span></dt><dd><span class="diagram__bar" style="--bar: 23.3%"></span><span class="diagram__value"><strong>About 35,000</strong> (77% less)</span></dd></div>
<div><dt><span class="diagram__label">MCP: one component</span><span class="diagram__note">Find, get one component, validate</span></dt><dd><span class="diagram__bar" style="--bar: 6.7%"></span><span class="diagram__value"><strong>About 10,000</strong> (93% less)</span></dd></div>
</dl>
<p class="diagram__eyebrow">Per MCP call</p>
<ul class="diagram__calls">
<li class="diagram__box diagram__box--deep"><code>find_components</code><span class="diagram__label">About 2,500 tokens</span></li>
<li class="diagram__box diagram__box--deep"><code>get_component</code><span class="diagram__label">4,000–7,000 tokens each</span></li>
<li class="diagram__box diagram__box--deep"><code>validate_component_api</code><span class="diagram__label">About 300 tokens</span></li>
</ul>
<p class="diagram__note diagram__note--center">Estimated at about four characters per token. Exact counts vary by model.</p>
</figure>

For a single component, that adds up to about 10,000 tokens instead of 150,000, a savings of more than 90%. A six-component form lands around 35,000, which is still about three-quarters less. And with less noise in the context window, the model pays more attention to the guidance that matters.

If you'd like to watch this happen, open the [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector), a free tool for testing MCP servers. Here's `get_component` returning `nys-button`:

<figure>
  <video controls muted playsinline preload="metadata" width="450" height="511" poster="/assets/i/2026/mcp-article/mcp-inspector-poster.jpg">
    <source src="/assets/i/2026/mcp-article/mcp-inspector.mp4" type="video/mp4">
  </video>
  <figcaption>In the MCP Inspector, we enter nys-button and run get_component. The result is structured JSON: the button's description and usage guidance, followed by its CSS variables, slots, events, and attributes.</figcaption>
</figure>

## How it stays fresh

The server stays current because its content comes straight from our source files. We keep every component's documentation in its source code, as JSDoc comments. Here's the top of `nys-button`:

{% set code %}
/**
 * A button for actions like saving, submitting, or navigating.
 * Form-associated with full keyboard support.
 *
 * Use `filled` for primary actions (one per section), `outline` for
 * secondary, `ghost` for tertiary, `text` for inline. Set `href` to
 * render as a navigation link.
 *
 * @summary Button for actions and CTAs with variants, sizes, and icon support.
 * @element nys-button
 *
 * @slot prefix-icon - Icon before label. Not shown for `text` variant.
 * @slot suffix-icon - Icon after label. Not shown for `text` variant.
 */
{% endset %}
{% set accordionLabel = "nys-button.ts" %}
{% set codeExpanded = true %}
{% set codeLanguage = "typescript" %}
{% include "partials/code-preview.njk" %}

{% set code = "" %}{% set accordionLabel = "" %}{% set codeExpanded = false %}{% set codeLanguage = "" %}

The second paragraph of that comment is design guidance, not API information. Our designers decided when each variant belongs, and our engineers wrote it down where machines can read it. (We're following Benny Powers's guide, [Effective Writing for AI](https://bennypowers.dev/cem/docs/mcp/writing-descriptions/), as we add more of it.)

When we build a release, the [Custom Elements Manifest analyzer](https://custom-elements-manifest.open-wc.org/) reads those comments and generates `custom-elements.json`. That one file feeds both the MCP server and the usage guidance on this site. Design tokens work the same way, since every token carries a description. Here's the one for `--nys-color-success`: "Success state indicator. USE for confirmations and positive feedback. MUST pair with success icon."

<figure class="diagram">
<figcaption>One source, every release</figcaption>
<div class="diagram__pipeline">
<p class="diagram__eyebrow">Written by the team</p><span class="diagram__spacer"></span><p class="diagram__eyebrow">Built each release</p><span class="diagram__spacer"></span><p class="diagram__eyebrow">Read by</p>
<pre class="diagram__code"><span class="diagram__code-file">nys-button.ts</span>/**
 * Use `filled` for primary
 *   actions (one per section)…
 * <span class="diagram__code-tag">@summary</span> Button for …
 * <span class="diagram__code-tag">@slot</span> prefix-icon …</pre>
<span class="diagram__arrow diagram__arrow--flow" aria-hidden="true"><nys-icon name="arrow_forward" size="32"></nys-icon></span>
<p class="diagram__box diagram__box--center"><span class="diagram__label"><code>custom-elements.json</code></span><span class="diagram__detail">Custom Elements Manifest</span></p>
<span class="diagram__arrow diagram__arrow--flow" aria-hidden="true"><nys-icon name="arrow_forward" size="32"></nys-icon></span>
<p class="diagram__box diagram__box--paper diagram__box--center"><span class="diagram__label">Reference site</span><span class="diagram__detail">Reads <code>custom-elements.json</code> for component usage guidance</span></p>
<pre class="diagram__code diagram__chain-start"><span class="diagram__code-file">tokens.json</span><span class="diagram__code-key">"success": {
  "default": {
    "$value":</span> "{…green.600}",
    <span class="diagram__code-key">"$description":</span>
      "Success state indicator…"</pre>
<span class="diagram__arrow diagram__arrow--flow" aria-hidden="true"><nys-icon name="arrow_forward" size="32"></nys-icon></span>
<p class="diagram__box diagram__box--center"><span class="diagram__label">Token files</span><span class="diagram__detail"><code>tokens.json</code>, <code>tokens.css</code></span></p>
<span class="diagram__arrow diagram__arrow--flow" aria-hidden="true"><nys-icon name="arrow_forward" size="32"></nys-icon></span>
<p class="diagram__box diagram__box--accent diagram__box--center"><span class="diagram__label">NYSDS MCP server</span><span class="diagram__detail">Reads the manifest and the token files. Same version number as the components.</span></p>
<span class="diagram__arrow diagram__pipeline-end" aria-hidden="true"><nys-icon name="arrow_downward" size="32"></nys-icon></span>
<p class="diagram__box diagram__box--deep diagram__box--center diagram__pipeline-end"><span class="diagram__label">Your AI assistant</span></p>
</div>
<p class="diagram__note diagram__note--center">No separate “AI docs” to drift out of date.</p>
</figure>

The MCP server ships with each NYSDS release, under the same version number as the components. So when we sharpen a description, the change reaches this site and every connected AI assistant in the same release, and there's no separate copy of "AI docs" to drift out of date. Guidance written for people turns out to work for AI, too.

## Cheap to write, expensive to own

Agents have lowered the cost of authoring code, but they haven't lowered the cost of owning it.

An AI-generated form still needs the same accessibility audit, the same security review, and the same maintenance as one somebody wrote by hand, and we still have to coordinate engineering work across more than 45 agencies. Generated code is cheap. Verifying it is expensive, and you pay that cost every time.

Shared components change that math, because we pay the verification cost for `nys-*` components once. We test them with people who use screen readers every day, we review them, and we fix them in one place. Every team (and every model) that assembles from them collects the dividend.

<figure class="diagram">
<figcaption>Generated code is cheap. Verification isn’t.</figcaption>
<div class="diagram__duo">
<div class="diagram__panel">
<p class="diagram__panel-title">Generated per project</p>
<ul class="diagram__apps">
<li><span class="diagram__box">Licensing</span><span class="diagram__chips"><nys-badge size="sm" label="Accessibility"></nys-badge><nys-badge size="sm" label="Security"></nys-badge><nys-badge size="sm" label="Maintenance"></nys-badge></span></li>
<li><span class="diagram__box">Benefits</span><span class="diagram__chips"><nys-badge size="sm" label="Accessibility"></nys-badge><nys-badge size="sm" label="Security"></nys-badge><nys-badge size="sm" label="Maintenance"></nys-badge></span></li>
<li><span class="diagram__box">Parks</span><span class="diagram__chips"><nys-badge size="sm" label="Accessibility"></nys-badge><nys-badge size="sm" label="Security"></nys-badge><nys-badge size="sm" label="Maintenance"></nys-badge></span></li>
</ul>
<p class="diagram__note diagram__note--center">Verified again for every project</p>
</div>
<div class="diagram__panel">
<p class="diagram__panel-title">Assembled from <code>nys-*</code></p>
<p class="diagram__box diagram__box--accent diagram__box--center"><span class="diagram__label"><code>nys-*</code> components</span><span class="diagram__detail">Accessibility, security, and maintenance, verified once</span></p>
<span class="diagram__arrow" aria-hidden="true"><nys-icon name="arrow_downward" size="32"></nys-icon></span>
<ul class="diagram__apps">
<li><span class="diagram__box diagram__box--paper">Licensing</span><span class="diagram__note"><nys-icon name="check" size="16"></nys-icon> Inherits it</span></li>
<li><span class="diagram__box diagram__box--paper">Benefits</span><span class="diagram__note"><nys-icon name="check" size="16"></nys-icon> Inherits it</span></li>
<li><span class="diagram__box diagram__box--paper">Parks</span><span class="diagram__note"><nys-icon name="check" size="16"></nys-icon> Inherits it</span></li>
</ul>
<p class="diagram__note diagram__note--center">Verified once, inherited everywhere</p>
</div>
</div>
</figure>

Think of it like handing a contractor a pile of lumber versus connecting them to a supply chain. The lumber starts aging the day it's delivered, while the supply chain improves. When we fix an accessibility bug in `nys-button`, every product built with it gets the fix when it updates. Code generated from scratch is frozen the day it ships.

## Two ways in

The NYSDS MCP server is only half the picture. When designers hand off screens built with our Figma library, Figma's MCP server returns code snippets for the same `nys-*` components, configured the way the designer set them up. Engineers who are building from requirements, with no mockup, use ours. On both routes the AI assembles from the same parts, and our team keeps design and code in sync.

<figure class="diagram">
<figcaption>Two ways in</figcaption>
<div class="diagram__paths">
<div class="diagram__panel">
<p class="diagram__panel-title">Design</p>
<p class="diagram__box diagram__box--center"><span class="diagram__label">Figma MCP</span><span class="diagram__detail">Code Connect snippets</span></p>
<span class="diagram__arrow" aria-hidden="true"><nys-icon name="arrow_upward" size="24"></nys-icon></span>
<p class="diagram__box diagram__box--paper diagram__box--center"><span class="diagram__label">NYSDS Figma library</span></p>
<p class="diagram__pill">Starts from Figma screens</p>
</div>
<span class="diagram__arrow diagram__arrow--both diagram__arrow--flow" aria-hidden="true"><nys-icon name="arrow_forward" size="32"></nys-icon><nys-icon name="arrow_forward" flip="horizontal" size="32"></nys-icon></span>
<div class="diagram__paths-center">
<p class="diagram__box diagram__box--center"><span class="diagram__label">Your AI assistant</span><span class="diagram__detail">Any MCP-capable tool</span></p>
<span class="diagram__arrow" aria-hidden="true"><nys-icon name="arrow_downward" size="32"></nys-icon></span>
<p class="diagram__box diagram__box--paper diagram__box--center"><span class="diagram__label">Same <code>nys-*</code> components</span><span class="diagram__detail">In your code</span></p>
</div>
<span class="diagram__arrow diagram__arrow--both diagram__arrow--flow" aria-hidden="true"><nys-icon name="arrow_forward" size="32"></nys-icon><nys-icon name="arrow_forward" flip="horizontal" size="32"></nys-icon></span>
<div class="diagram__panel">
<p class="diagram__panel-title">Engineering</p>
<p class="diagram__box diagram__box--accent diagram__box--center"><span class="diagram__label">NYSDS MCP</span><span class="diagram__detail">Component and token docs</span></p>
<span class="diagram__arrow" aria-hidden="true"><nys-icon name="arrow_upward" size="24"></nys-icon></span>
<p class="diagram__box diagram__box--paper diagram__box--center"><span class="diagram__label"><code>nys-*</code> code library</span></p>
<p class="diagram__pill">Starts from requirements</p>
</div>
<p class="diagram__box diagram__box--accent diagram__paths-team"><span class="diagram__label">NYSDS team</span><span class="diagram__detail">Keeps design and code in sync</span></p>
</div>
</figure>

## The pattern engine

A server like this is only as good as what we put into it. That's the part I'm most excited about.

<figure class="diagram">
<figcaption>The pattern engine</figcaption>
<ol class="diagram__cycle">
<li class="diagram__box"><span class="diagram__label">Design guidance</span><span class="diagram__detail">From designers, engineers, and accessibility specialists</span><span class="diagram__cycle-arrow" aria-hidden="true"><span class="diagram__arrow diagram__arrow--flow"><nys-icon name="arrow_forward" size="32"></nys-icon></span></span></li>
<li class="diagram__box diagram__box--accent"><span class="diagram__label">NYSDS MCP server</span><span class="diagram__detail">Structured, versioned, and queryable</span><span class="diagram__cycle-arrow" aria-hidden="true"><span class="diagram__arrow"><nys-icon name="arrow_downward" size="32"></nys-icon></span></span></li>
<li class="diagram__box diagram__box--paper"><span class="diagram__label">AI-generated output</span><span class="diagram__detail">Assembled from <code>nys-*</code> components</span><span class="diagram__cycle-arrow" aria-hidden="true"><span class="diagram__arrow diagram__arrow--flow"><nys-icon name="arrow_forward" size="32"></nys-icon></span></span></li>
<li class="diagram__box diagram__box--deep"><span class="diagram__label">Review and refine</span><span class="diagram__detail">People catch gaps and sharpen the guidance</span><span class="diagram__cycle-arrow" aria-hidden="true"><span class="diagram__arrow"><nys-icon name="arrow_downward" size="32"></nys-icon></span></span></li>
</ol>
<p class="diagram__note diagram__note--center">Then the cycle starts again, with every release.</p>
</figure>

It starts with designers, engineers, and accessibility specialists defining how components should work. Their guidance goes into the source, flows through the manifest, and reaches the MCP server, where AI assembles with it. Then people review what the AI built, catch the gaps, and sharpen the guidance, and the cycle runs again.

If you're a designer, none of this replaces you. Your work moves into the layer AI builds on, and all three disciplines can now shape the material AI builds with.

## Tell us what you find

The MCP server is a work in progress. How good the output is depends on our documentation, and we improve that with each release. If your assistant gets something wrong, we want to hear about it! Email [designsystem@its.ny.gov](mailto:designsystem@its.ny.gov) or [open an issue on GitHub](https://github.com/ITS-HCD/nysds/issues).

AI doesn't know what's right, only what's likely. Our job is to encode what's right into something it can follow.
