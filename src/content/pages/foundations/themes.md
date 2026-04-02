---
permalink: /foundations/themes/
title: "Agency Themes"
navTitle: "Theming"
description: "How to apply agency-specific color themes to NYSDS components using the data-theme attribute and theme tokens."
navOrder: 50
---

{% block content %}

# Agency Themes

New York State has more than 45 agencies, each with its own identity. The NYS Design System supports this through **agency themes** — a set of color overrides that let you build with shared components while maintaining each agency's visual identity.

Think of it like a magic paintbrush: you build your interface once using NYSDS components and semantic tokens, then switch the agency theme and everything updates automatically — buttons, headers, tables, form controls, and every other component that uses theme colors.

<section id="how-themes-work">

## How Themes Work

NYSDS themes work through the [design token](/foundations/tokens/) system. Here is the key idea:

Every component that needs a brand color references a **theme token** like `--nys-color-theme` instead of a specific color value. When you activate a theme, the system remaps those theme tokens to a different color palette. The component code does not change — only the token values do.

### Theme token scale

Each theme provides seven color values at different intensities:

<nys-table striped>
  <table>
    <thead>
      <tr>
        <th>Token</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--nys-color-theme-faint</code></td>
        <td>Very subtle backgrounds, barely visible tints</td>
      </tr>
      <tr>
        <td><code>--nys-color-theme-weaker</code></td>
        <td>Light backgrounds for hover states, selected rows</td>
      </tr>
      <tr>
        <td><code>--nys-color-theme-weak</code></td>
        <td>Soft accent backgrounds, active states</td>
      </tr>
      <tr>
        <td><code>--nys-color-theme-mid</code></td>
        <td>Medium-emphasis elements, secondary indicators</td>
      </tr>
      <tr>
        <td><code>--nys-color-theme</code></td>
        <td>Primary brand color — buttons, links, headers</td>
      </tr>
      <tr>
        <td><code>--nys-color-theme-strong</code></td>
        <td>Hover states on primary elements</td>
      </tr>
      <tr>
        <td><code>--nys-color-theme-stronger</code></td>
        <td>Active/pressed states, high-contrast text on light backgrounds</td>
      </tr>
    </tbody>
  </table>
</nys-table>

For a deeper explanation of token layers and naming conventions, see [Design Tokens](/foundations/tokens/).

### Theme color intensity scale

Select a theme below to see all seven intensity levels in action. Notice how the full palette shifts when you change themes, while the hierarchy (faint to stronger) stays consistent:

<div id="theme-swatch-demo" style="padding: 1.5rem; border: 1px solid var(--nys-color-border); border-radius: var(--nys-radius-400);">
  <div style="margin-bottom: 1.5rem;">
    <nys-select id="theme-switcher" label="Select a theme" name="theme">
      <option value="default" selected>NY.gov (Default)</option>
      <option value="admin">Admin</option>
      <option value="business">Business</option>
      <option value="environment">Environment</option>
      <option value="health">Health</option>
      <option value="local">Local Government</option>
      <option value="safety">Public Safety</option>
      <option value="transportation">Transportation</option>
    </nys-select>
  </div>

  <div class="theme-swatches" style="display: flex; gap: 0; border-radius: var(--nys-radius-400); overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="flex: 1; padding: 1.5rem 1rem; background: var(--nys-color-theme-faint); text-align: center;">
      <div style="font-size: 0.75rem; font-weight: 600; color: var(--nys-color-ink); margin-bottom: 0.5rem;">Faint</div>
      <div style="font-size: 0.65rem; color: var(--nys-color-ink); opacity: 0.7;">--nys-color-theme-faint</div>
    </div>
    <div style="flex: 1; padding: 1.5rem 1rem; background: var(--nys-color-theme-weaker); text-align: center;">
      <div style="font-size: 0.75rem; font-weight: 600; color: var(--nys-color-ink); margin-bottom: 0.5rem;">Weaker</div>
      <div style="font-size: 0.65rem; color: var(--nys-color-ink); opacity: 0.7;">--nys-color-theme-weaker</div>
    </div>
    <div style="flex: 1; padding: 1.5rem 1rem; background: var(--nys-color-theme-weak); text-align: center;">
      <div style="font-size: 0.75rem; font-weight: 600; color: var(--nys-color-ink); margin-bottom: 0.5rem;">Weak</div>
      <div style="font-size: 0.65rem; color: var(--nys-color-ink); opacity: 0.7;">--nys-color-theme-weak</div>
    </div>
    <div style="flex: 1; padding: 1.5rem 1rem; background: var(--nys-color-theme-mid); text-align: center;">
      <div style="font-size: 0.75rem; font-weight: 600; color: var(--nys-color-ink-reverse); margin-bottom: 0.5rem;">Mid</div>
      <div style="font-size: 0.65rem; color: var(--nys-color-ink-reverse); opacity: 0.8;">--nys-color-theme-mid</div>
    </div>
    <div style="flex: 1; padding: 1.5rem 1rem; background: var(--nys-color-theme); text-align: center;">
      <div style="font-size: 0.75rem; font-weight: 600; color: var(--nys-color-ink-reverse); margin-bottom: 0.5rem;">Primary</div>
      <div style="font-size: 0.65rem; color: var(--nys-color-ink-reverse); opacity: 0.8;">--nys-color-theme</div>
    </div>
    <div style="flex: 1; padding: 1.5rem 1rem; background: var(--nys-color-theme-strong); text-align: center;">
      <div style="font-size: 0.75rem; font-weight: 600; color: white; margin-bottom: 0.5rem;">Strong</div>
      <div style="font-size: 0.65rem; color: white; opacity: 0.8;">--nys-color-theme-strong</div>
    </div>
    <div style="flex: 1; padding: 1.5rem 1rem; background: var(--nys-color-theme-stronger); text-align: center;">
      <div style="font-size: 0.75rem; font-weight: 600; color: white; margin-bottom: 0.5rem;">Stronger</div>
      <div style="font-size: 0.65rem; color: white; opacity: 0.8;">--nys-color-theme-stronger</div>
    </div>
  </div>
</div>

<script>
(function() {
  const switcher = document.getElementById('theme-switcher');
  const demo = document.getElementById('theme-swatch-demo');

  if (switcher) {
    switcher.addEventListener('nys-change', function(e) {
      const theme = e.detail.value;
      if (theme === 'default') {
        demo.removeAttribute('data-theme');
      } else {
        demo.setAttribute('data-theme', theme);
      }
    });
  }
})();
</script>

### The token resolution chain

NYSDS tokens are organized in layers. Themes rely on how those layers connect:

1. **Primitive tokens** define raw color values. For example, `--nys-color-state-blue-700` is `#154973` and `--nys-color-environment-green-700` is `#233f2b`.
2. **Theme tokens** point to a primitive color based on the active theme. By default, `--nys-color-theme` points to `--nys-color-state-blue-700`. Under the Environment theme, it points to `--nys-color-environment-green-700` instead.
3. **Components** reference theme tokens. A button's background color uses `--nys-color-theme`. A checked checkbox uses `--nys-color-theme`. A table header uses `--nys-color-theme`. When the underlying token changes, they all update.

This means you never need to restyle individual components when switching agencies. You change the theme once and the system handles the rest.

</section>

<section id="available-themes">

## Available Themes

NYSDS includes eight themes that map to groups of New York State agencies:

<nys-table striped>
  <table>
    <thead>
      <tr>
        <th>Theme ID</th>
        <th>Group Name</th>
        <th>Primary Color</th>
        <th>Example Agencies</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>default</code></td>
        <td>NY.gov (Default)</td>
        <td><span style="display:inline-block;width:1rem;height:1rem;background:#154973;border-radius:2px;vertical-align:middle;margin-right:0.5rem;"></span> <code>#154973</code></td>
        <td>General state sites, NY.gov</td>
      </tr>
      <tr>
        <td><code>admin</code></td>
        <td>Administration</td>
        <td><span style="display:inline-block;width:1rem;height:1rem;background:#a2350a;border-radius:2px;vertical-align:middle;margin-right:0.5rem;"></span> <code>#a2350a</code></td>
        <td>Budget, Civil Service, General Services</td>
      </tr>
      <tr>
        <td><code>business</code></td>
        <td>Business</td>
        <td><span style="display:inline-block;width:1rem;height:1rem;background:#084b52;border-radius:2px;vertical-align:middle;margin-right:0.5rem;"></span> <code>#084b52</code></td>
        <td>Empire State Development, Dept. of Labor, Dept. of Taxation and Finance</td>
      </tr>
      <tr>
        <td><code>environment</code></td>
        <td>Environment</td>
        <td><span style="display:inline-block;width:1rem;height:1rem;background:#233f2b;border-radius:2px;vertical-align:middle;margin-right:0.5rem;"></span> <code>#233f2b</code></td>
        <td>DEC, Parks Recreation and Historic Preservation, Agriculture and Markets</td>
      </tr>
      <tr>
        <td><code>health</code></td>
        <td>Health</td>
        <td><span style="display:inline-block;width:1rem;height:1rem;background:#43285d;border-radius:2px;vertical-align:middle;margin-right:0.5rem;"></span> <code>#43285d</code></td>
        <td>Dept. of Health, Office of Mental Health, OASAS</td>
      </tr>
      <tr>
        <td><code>local</code></td>
        <td>Local Government</td>
        <td><span style="display:inline-block;width:1rem;height:1rem;background:#402217;border-radius:2px;vertical-align:middle;margin-right:0.5rem;"></span> <code>#402217</code></td>
        <td>Local government entities across New York State</td>
      </tr>
      <tr>
        <td><code>safety</code></td>
        <td>Public Safety</td>
        <td><span style="display:inline-block;width:1rem;height:1rem;background:#435d6e;border-radius:2px;vertical-align:middle;margin-right:0.5rem;"></span> <code>#435d6e</code></td>
        <td>DHSES, State Police, Division of Criminal Justice Services</td>
      </tr>
      <tr>
        <td><code>transportation</code></td>
        <td>Transportation</td>
        <td><span style="display:inline-block;width:1rem;height:1rem;background:#0b5583;border-radius:2px;vertical-align:middle;margin-right:0.5rem;"></span> <code>#0b5583</code></td>
        <td>DOT, DMV, MTA</td>
      </tr>
    </tbody>
  </table>
</nys-table>

Not sure which group your agency falls under? Contact the NYSDS team through [office hours or the Teams channel](/about/contribute/).

</section>

<section id="applying-a-theme">

## Applying a Theme

To apply an agency theme, add the `data-theme` attribute to the `<body>` element of your page. Every NYSDS component on the page will update automatically.

{% set code %}
<!DOCTYPE html>
<html lang="en">
<head>
  <title>NYS Department of Environmental Conservation</title>
  <link rel="stylesheet" href="path/to/nysds.min.css">
</head>
<body data-theme="environment">
  <nys-globalheader></nys-globalheader>
  <main>
    <h1>Hunting and Fishing Licenses</h1>
    <nys-button label="Apply for a license"></nys-button>
    <nys-button label="Renew existing license" variant="outline"></nys-button>
  </main>
  <nys-globalfooter></nys-globalfooter>
  <script src="path/to/nysds.min.js"></script>
</body>
</html>
{% endset %}
{% set accordionLabel = "Applying a theme to a page" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

In this example, the buttons, global header, and global footer will all render using the Environment theme's green palette instead of the default State Blue.

### Theming a section of a page

You can scope a theme to a specific section rather than the entire page. Place `data-theme` on any ancestor element to theme its descendants:

{% set code %}
<body>
  <!-- Default theme applies here -->
  <section data-theme="health">
    <!-- Health theme applies to everything in this section -->
    <nys-button label="Schedule an appointment"></nys-button>
  </section>
  <!-- Back to default theme here -->
  <nys-button label="Contact us"></nys-button>
</body>{% endset %}
{% set accordionLabel = "Scoping a theme to a section" %}
{% include "partials/code-preview.njk" %}

This is useful when a page needs to feature content from multiple agencies, or when embedding an agency-branded widget in a shared portal.

</section>

<section id="what-themes-change">

## What Themes Change

Themes override the `--nys-color-theme-*` family of CSS custom properties. Any component or custom element that references these tokens will respond to theme changes.

The following NYSDS components use theme tokens and will update when you switch themes:

- **[Button](/components/button/)** — Background, border, and text colors for filled, outline, and ghost variants
- **[Global Header](/components/globalheader/)** — Header bar background and accent colors
- **[Global Footer](/components/globalfooter/)** — Footer background and link colors
- **[Table](/components/table/)** — Header row background and striped row accents
- **[Checkbox](/components/checkbox/)** — Checked state background and border
- **[Radio Button](/components/radiobutton/)** — Selected state indicator
- **[Toggle](/components/toggle/)** — Active toggle background
- **[Stepper](/components/stepper/)** — Active and completed step indicators
- **[Avatar](/components/avatar/)** — Avatar background and text colors
- **[File Input](/components/fileinput/)** — Upload button accent

Themes do **not** change semantic colors like `--nys-color-danger`, `--nys-color-success`, or `--nys-color-info`. These remain consistent across all agencies to preserve the meaning of error states, success messages, and informational alerts.

</section>

<section id="using-theme-tokens-in-custom-styles">

## Using Theme Tokens in Custom Styles

If you are building custom components or page layouts alongside NYSDS components, use theme tokens so your styles respond to agency themes automatically.

Use `--nys-color-theme` and related theme tokens in your CSS. The correct primary color is applied automatically when you set a theme. You never need to look up or specify individual color values.

{% set code %}
<style>
  .agency-hero {
    background-color: var(--nys-color-theme-faint);
    border-left: 4px solid var(--nys-color-theme);
    padding: var(--nys-space-400);
  }
  .agency-hero h2 {
    color: var(--nys-color-theme-stronger);
  }
  .agency-hero a {
    color: var(--nys-color-theme);
  }
  .agency-hero a:hover {
    color: var(--nys-color-theme-strong);
  }
</style>
<div class="agency-hero">
  <h2>Welcome to the Department of Health</h2>
  <p>Find resources for Medicaid enrollment, immunization records,
  and vital records requests.</p>
  <a href="/services">View all services</a>
</div>
{% endset %}
{% set accordionLabel = "Using theme tokens in custom CSS" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

When this page runs under the Health theme, the hero section picks up the purple palette. Under the Transportation theme, it picks up the blue palette. You write the CSS once.

**Do not hardcode agency-specific colors.** If you write `background-color: #43285d` instead of `var(--nys-color-theme)`, your component will not respond to theme changes and will break if the agency's palette is updated.

</section>

<section id="how-theme-files-work">

## How Theme Files Work

When you install `@nysds/components` or include the NYSDS token stylesheet, all theme overrides are included in the main `tokens.css` file. Each theme is defined as a CSS rule block that targets its `[data-theme]` selector:

{% set code %}
/* Excerpt from tokens.css — generated automatically, do not edit */
[data-theme="environment"],
.nys-theme-environment {
  --nys-color-theme: var(--nys-color-environment-green-700);
  --nys-color-theme-faint: var(--nys-color-environment-green-10);
  --nys-color-theme-mid: var(--nys-color-environment-green-500);
  --nys-color-theme-strong: var(--nys-color-environment-green-800);
  --nys-color-theme-stronger: var(--nys-color-environment-green-900);
  --nys-color-theme-weak: var(--nys-color-environment-green-100);
  --nys-color-theme-weaker: var(--nys-color-environment-green-50);
}
{% endset %}
{% set accordionLabel = "Theme override block in tokens.css" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}

You do not need to load a separate file for each theme. The token file handles all themes and selects the right overrides based on the `data-theme` attribute on the page.

</section>

<section id="creating-a-custom-theme">

## Creating a Custom Theme

If your agency is not covered by one of the existing theme groups, you can create a custom theme by overriding the theme tokens in your own stylesheet.

### Step 1: Define your theme tokens

Create a CSS rule that targets your custom theme selector and overrides all seven theme token values:

{% set code %}
/* custom-agency-theme.css */
[data-theme="my-agency"],
.nys-theme-my-agency {
  --nys-color-theme-faint: #f5f0f8;
  --nys-color-theme-weaker: #e8ddf0;
  --nys-color-theme-weak: #c9b3d9;
  --nys-color-theme-mid: #7a4fa0;
  --nys-color-theme: #5c2d82;
  --nys-color-theme-strong: #3d1d57;
  --nys-color-theme-stronger: #1f0f2c;
}
{% endset %}
{% set accordionLabel = "Defining custom theme tokens" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}

### Step 2: Ensure your colors meet accessibility standards

Every theme color must work in the contexts where it is used. At a minimum:

- `--nys-color-theme` on a white background must meet **WCAG 2.2 AA contrast** (4.5:1 for text, 3:1 for large text and UI elements).
- `--nys-color-theme-strong` and `--nys-color-theme-stronger` must also meet contrast requirements — these are used for hover and active states.
- White text on `--nys-color-theme` must be readable — this is how filled buttons render.

Use [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/) to verify.

### Step 3: Load your theme stylesheet after the NYSDS tokens

Your custom theme CSS must load **after** the NYSDS token stylesheet so your overrides take precedence:

{% set code %}
<link rel="stylesheet" href="path/to/nysds.min.css">
<link rel="stylesheet" href="path/to/custom-agency-theme.css">
{% endset %}
{% set accordionLabel = "Loading a custom theme" %}
{% include "partials/code-preview.njk" %}

### Step 4: Test across components

After defining your theme, test it across several components to make sure the full range of token intensities works well together. Check these at a minimum:

- **nys-button** in filled, outline, and ghost variants
- **nys-globalheader** and **nys-globalfooter** with navigation links
- **nys-checkbox** and **nys-radiobutton** in checked and unchecked states
- **nys-table** with striped rows and a sortable header

If a component looks wrong under your theme, the issue is almost always a contrast problem in one of the weaker or stronger token values. Adjust the scale until all seven values work together.

</section>

<section id="best-practices">

## Best Practices

- **Set the theme once on `<body>`.** Avoid setting `data-theme` on individual components. Apply it at the page level and let CSS inheritance handle the rest.
- **Use theme tokens, not primitive colors.** Write `var(--nys-color-theme)` in your custom styles, not `var(--nys-color-state-blue-700)`. Primitives do not respond to theme changes.
- **Do not override semantic status colors.** `--nys-color-danger`, `--nys-color-success`, `--nys-color-warning`, and `--nys-color-info` are intentionally consistent across themes. Changing them breaks the meaning of error and status states for users.
- **Test with real content.** Theme colors look different surrounding white space than they do in a dense form or data table. Test your theme on actual pages, not just isolated swatches.

</section>

{% endblock %}

{% block styles %}
<style>
@media (max-width: 768px) {
  .theme-swatches {
    flex-wrap: wrap !important;
  }
  .theme-swatches > div {
    flex: 1 1 calc(50% - 0px) !important;
    min-width: 0 !important;
  }
}
</style>
{% endblock %}

{% block scripts %}
{% endblock %}
