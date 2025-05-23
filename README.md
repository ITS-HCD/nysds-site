# NYSDS Reference Website

This repository contains the source code and documentation for the **NYS Design System (NYSDS) Reference Website**. The NYSDS helps teams across New York State build fast, accessible, mobile-friendly applications and websites. It provides consistent design language, implementation guidance, and shared web components.

> [!WARNING]
> **This repository is under active development.** Expect changes.

## Overview

The NYSDS Reference Website serves three key purposes:

- **Documentation** – Clear, versioned guidance for using NYSDS components, tokens, and utilities.
- **Reference Implementation** – A working example of how components and styles can be applied in real-world use cases.
- **Community Hub** – A place for contributors to propose changes, log issues, and access the latest updates.

The site is built using [11ty (Eleventy)](https://www.11ty.dev/) and integrates with our shared component and style packages published under the [`@nysds`](https://www.npmjs.com/org/nysds) namespace on npm.

## Getting Started

To run the reference site locally:

```bash
npm install
npm run start
```

This spins up a local 11ty dev server at `http://localhost:8080` (default).

## Project Structure

```plaintext
.
├── .eleventy.js          # 11ty configuration
├── package.json
├── src/
│   ├── _data/            # Global data (e.g., tokens, site meta)
│   ├── _includes/        # Layouts, components, partials
│   ├── styles/           # CSS and utility imports
│   └── pages/            # Site content and templates
├── public/               # Static assets
└── nysds.config.json     # NYSDS-specific configuration options
```

## Dependencies

This site depends on:

- `@nysds/components` – Web components built with Lit
- `@nysds/styles` – Global design tokens and responsive utility classes

Ensure these packages are installed and up to date via npm or a workspace symlink if developing locally.

## Contributing

We welcome contributions from NYS teams and the public. Here's how to get involved:

- File an [issue](https://github.com/its-hcd/nysds/issues) to suggest edits, report bugs, or request new components
- Fork this repo and submit a pull request with clear documentation and rationale
- Join NYSDS open design reviews and working group sessions (details on the [main site](https://designsystem.ny.gov) soon)

## Design Tokens

The reference site pulls in design tokens directly from `@nysds/styles`. Tokens are applied globally via CSS variables in the `:root` scope. You can explore them interactively in the site’s Design Tokens section.

## Future Work

We are working toward broader support for content-rich websites, more layout utilities, and additional accessibility patterns.
