---
permalink: /about/updates/2026-03-05-nysds-mcp-article/
title: AI-Assisted Development with the NYS Design System
author: Jesse Gardner
description: |
  The NYSDS MCP server is structured documentation that AI coding assistants can read to understand our components, tokens, and usage guidance. Here's what we've built, how it works, and a look at where agentic development is headed for NYS.
ogimage: /assets/i/2026/nysds-mcp-server.png
thumbnailimage: /assets/i/2026/nysds-mcp-server-thumbnail.png
tags: updates, ai, mcp, web components
date: 2026-03-05
draft: true
---

# AI-Assisted Development with the NYS Design System

We've been doing a lot of work to make the NYS Design System easier to use with AI coding assistants. This article explains what we've built, how it works, and how you can start using it today.

> **A quick note before you dive in:** The NYSDS MCP server is not an AI. It's a structured documentation format — a way of packaging everything the design system knows about its components, tokens, and usage guidance into a form that AI tools can read and reason about. Think of it as a briefing document for an AI assistant: we wrote it, the AI consults it.
>
> We're sharing this as part of ITS's ongoing exploration of agentic coding tools and their potential for NYS digital products. The use of AI-assisted development in state government is still being evaluated — questions of privacy, security, and policy are actively being worked through. This article is a look at where things are heading, not an announcement that any specific AI tool has been approved for use.

## What Is MCP?

Late in 2024, Anthropic released an open-source protocol called **MCP (Model Context Protocol)**. It standardizes how external services pass context, documentation, and tool actions to large language models (LLMs). The protocol took off quickly because it solves a real problem: AI coding assistants don't know anything about your specific codebase or design system unless you tell them.

What makes MCP different from just pasting documentation into a prompt is that MCP is **dynamically discoverable**. When you connect an AI tool to an MCP server, it automatically queries what's available and pulls in exactly what it needs for a given task — no manual copy-pasting, no stale context.

A number of popular services now offer MCP servers, including Figma, GitHub, and Notion. We've built one for the NYS Design System as well.

## Two MCP Servers, Two Workflows

There are two MCP servers relevant to NYSDS development. They solve different problems and can be used independently or together.

> **[Image: Architecture diagram]** — *Place Image 1 here.*
> **Alt text:** "Diagram showing two workflows: on the left, an engineer generates code from Figma screens with the Figma MCP assisting; on the right, an engineer generates code without a specific design with the NYSDS MCP assisting. Both connect through Claude Code and an IDE to an AI LLM model in the center. At the bottom, the NYSDS Design System Team maintains parity between the Figma component library and the code component library."

### Figma MCP Server

**Use this when:** You're starting from a Figma design file and want to generate code from it.

Figma's MCP server exposes tools that let an AI coding assistant query a Figma file directly — not just as an image, but as structured data with component properties, variable values, and most importantly, **Code Connect snippets**.

Code Connect is what makes this genuinely useful. Every component in the NYSDS Figma library is linked to its corresponding web component via a Code Connect mapping file. When you select a frame in Figma and ask an AI agent to generate code, the agent doesn't have to guess what markup to produce — Figma returns working NYSDS component code, with the correct attributes already populated based on how the designer configured the component.

> **[Image: Code Connect mapping]** — *Place Image 3 here.*
> **Alt text:** "Side-by-side comparison showing Figma component options for the NYS Button (Size, Variant, State, Inverted, Disabled, Label, Label Text) on the left, and the corresponding dynamic code snippet on the right. Arrows connect each Figma property to its matching attribute in the nys-button web component code."

> **[Image: Dev Mode + Code Connect]** — *Place Image 4 here.*
> **Alt text:** "Figma Dev Mode panel showing an nys-alert component configured with intent 'Info', heading 'You can opt out any time'. Below the component properties, a Code Connect panel labeled 'Web Components' displays the corresponding nys-alert markup with type and heading attributes populated. A yellow arrow points to the Code Connect snippet. A 'Connected' badge is visible."

The Figma MCP server exposes several tools an AI agent can call:

- **`get_code`** — returns the Code Connect snippet for a selected node, with actual component markup and attribute values
- **`get_image`** — sends a screenshot of the node, helping the AI understand layout and visual structure
- **`get_code_connect_mapping`** — tells the AI which Figma component maps to which code component
- **`get_variables`** — returns the design token values applied to a given node

> **[Image: Figma MCP flow diagram]** — *Place Image 5 here.*
> **Alt text:** "Flow diagram titled 'Figma MCP + Code Connect'. A prompt enters an IDE, which sends a request to Claude Code. Claude Code queries Figma MCP using get_code (and also get_screenshot, get_variables, etc.). Figma returns structured context including code snippets for components like nys-textinput, nys-textarea, and nys-button with attributes already populated. That structured context is passed to an AI LLM model, which returns a response. A caption reads: 'Figma passes full working code blocks to AI, which reduces the code it needs to generate.'"

Because NYSDS maintains full parity between Figma components and web components, the code the AI generates is grounded in real, working markup — not hallucinated component names or invented attributes.

#### Getting Started with Figma MCP

**Requirements:** Figma desktop app (not the browser version).

1. In Figma desktop, open the menu next to the Figma logo (top left) → **Settings** → enable **Dev Mode MCP server**. Figma starts a local MCP server using the active file as its context.
2. In your AI coding tool, point it to the local Figma MCP server. The exact setup varies by tool — check your tool's MCP configuration docs for the correct format. You'll need the port number Figma is using, which Figma's documentation provides.
3. Make sure your project includes the NYSDS JavaScript and CSS — see [Getting Started for Developers](/get-started/developers/) for setup.
4. Switch your AI tool to agent mode, enable the Figma MCP tools (`get_code`, `get_image`, `get_code_connect_mapping`), select a frame in Figma, and copy its link.

A minimal starting prompt:

```
Using the Figma MCP tools, generate HTML for this frame: [paste Figma frame link]

Requirements:
- Use NYSDS web components only (no React, no Tailwind)
- Use NYSDS layout utility classes for structure
- Use the Code Connect snippets from the Figma file as your primary source for component markup
```

You'll get a browser-ready HTML file using NYSDS components, with attributes populated directly from the Figma design.

### 2. The NYSDS MCP Server

**Use this when:** You're building without a Figma design, or you want deeper, component-level guidance about NYSDS tokens, props, and usage rules.

> **[Image: NYSDS MCP flow diagram]** — *Place Image 6 here.*
> **Alt text:** "Flow diagram titled 'NYS Design System MCP'. A prompt enters an IDE, which sends a request to Claude Code. Claude Code queries the NYS DS MCP using get_components or get_tokens (and also validating format, installation guidance, etc.). The MCP returns structural context for design system components and tokens — shown as component documentation including descriptions, CSS properties, slots, members, events, and attributes, alongside token data including CSS variable names, values, and usage descriptions. That context is passed to an AI LLM model. A caption reads: 'Design and engineering standards are passed as context to AI, which increases the likelihood the output will be in alignment.'"

The NYSDS MCP server is structured documentation about our components, tokens, and utilities — packaged in a format that an AI coding assistant can read and reason about. It is not an AI itself; it's a knowledge source. Where the Figma MCP helps an AI understand *what you're trying to build*, the NYSDS MCP helps it understand *how our system works*.

When an AI agent queries the NYSDS MCP, it gets back rich context: component descriptions, all supported attributes and their valid values, slot definitions, CSS custom property hooks, events, and opinionated usage guidance — when to use a component, when not to, and what accessibility considerations apply.

> **[Image: "Secret Weapon" slide]** — *Place Image 2 here, or use as a pull quote / callout block.*
> **Alt text:** "Dark blue slide with a yellow pill-shaped label reading 'Secret Weapon'. Large white text reads: 'Design components carefully mapped to code gives AI the context it needs to generate consistent, accurate code output.'"

This matters because LLMs generate code based on probability. Without explicit context, a model asked to build a form for renewing a fishing license might produce arbitrary HTML and invent component names. With the NYSDS MCP loaded, the same prompt produces components from our actual library, using our actual attributes, following our actual guidance.

#### Available Tools

<nys-table striped>
  <table>
    <thead>
      <tr>
        <th>Tool</th>
        <th>What it does</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>list_components</code></td>
        <td>Lists all NYSDS components with brief summaries</td>
      </tr>
      <tr>
        <td><code>get_component_docs</code></td>
        <td>Returns full documentation for a specific component</td>
      </tr>
      <tr>
        <td><code>find_components</code></td>
        <td>Searches components by name or description</td>
      </tr>
      <tr>
        <td><code>get_design_tokens</code></td>
        <td>Returns token values by category</td>
      </tr>
      <tr>
        <td><code>get_usage_guide</code></td>
        <td>Returns installation and usage patterns</td>
      </tr>
      <tr>
        <td><code>validate_component_api</code></td>
        <td>Validates that you're using correct props and attributes</td>
      </tr>
      <tr>
        <td><code>setup_framework</code></td>
        <td>Returns framework-specific setup guides</td>
      </tr>
      <tr>
        <td><code>find_tokens</code></td>
        <td>Searches tokens by name or value</td>
      </tr>
    </tbody>
  </table>
</nys-table>

#### Getting Started with the NYSDS MCP Server

The server is published to npm as [`@nysds/mcp-server`](https://www.npmjs.com/package/@nysds/mcp-server) and runs via `npx` — no install step required. You'll add a short configuration block to your AI tool pointing at the package. The exact file location varies by tool:

**Claude Code** (`.mcp.json` in your project root):
```json
{
  "mcpServers": {
    "nysds": {
      "command": "npx",
      "args": ["-y", "@nysds/mcp-server"]
    }
  }
}
```

**VS Code / GitHub Copilot** (`.vscode/mcp.json`):
```json
{
  "servers": {
    "nysds": {
      "command": "npx",
      "args": ["-y", "@nysds/mcp-server"]
    }
  }
}
```

**Cursor** (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "nysds": {
      "command": "npx",
      "args": ["-y", "@nysds/mcp-server"]
    }
  }
}
```

Once connected, the server is discoverable automatically — your AI assistant will know what tools are available and call them as needed.

**Example prompts once connected:**

```
What NYSDS components are available for building a contact form?
```

```
Show me the full documentation for nys-button, including all supported attributes.
```

```
Build a benefits eligibility form with fields for name, date of birth,
and case number. Use NYSDS components only.
```

```
I'm using nys-select — is this the correct attribute syntax?
<nys-select name="agency" required label="Agency"></nys-select>
```

## Using Both Together

The two MCP servers complement each other. A common workflow for a developer handed a Figma screen:

1. Use the **Figma MCP** to generate an initial HTML scaffold from the design — getting component structure and attribute values directly from Code Connect mappings
2. Use the **NYSDS MCP** to answer follow-up questions about specific components, validate usage, or look up the right tokens for custom styling

Neither requires the other, and both work alongside your existing IDE tooling.

## A Note on AI Tools

Both MCP servers work with any AI coding assistant that supports the MCP protocol. ITS has not yet made a formal recommendation or policy announcement on AI-assisted development tools — that work is underway, and decisions will account for security, privacy, and compliance requirements. The NYSDS team is actively participating in official ITS proof-of-concept work to help move agentic coding forward responsibly.

Until that guidance is available, we're sharing this as a preview of what's coming. Agentic coding is a real and near-term direction for software development — this infrastructure is NYS's way of getting ahead of it, so that when AI tooling is approved for broader use, it's already prepared to produce output that meets our standards.

---

## Why This Matters

Our web components handle a lot by default: accessibility is baked into the markup, spacing follows our token system, and visual styling conforms to NYS brand standards. But that investment only pays off when the components are actually used — and as AI-assisted development becomes more common, more code will be written with an AI assistant in the loop.

Without MCP context, an AI asked to build a state web form will produce its best guess at generic HTML. It won't know about `nys-textinput`, won't use our color tokens, and won't carry forward the accessibility work we've already built in. The MCP servers close that gap — they give AI tools the context they need to produce output that's consistent, accessible, and aligned to NYS standards, not just once, but repeatably. The MCP server is how we make sure our standards travel with our components, wherever AI-assisted development takes them.

## What's Next

The NYSDS MCP server is still evolving. We've completed our migration to the [DTCG token format](https://tr.designtokens.org/format/) and have significantly updated component documentation to improve AI output quality — but this is ongoing work, and there's no official policy on AI-assisted engineering at NYS yet. Consider this a foundation that will keep getting better as both the tooling and the policy landscape mature.

If you try either MCP server and run into issues, have feedback, or want to share what's working — reach out to the NYSDS team. This is new territory, and we'd rather hear what's not working than have you quietly give up on it.
