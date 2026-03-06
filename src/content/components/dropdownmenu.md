---
permalink: /components/dropdownmenu/
title: Dropdown Menu
<<<<<<< HEAD
description:
image: /assets/img/components/dropdownmenu.svg
image_alt: An illustration of a dropdown menu.
=======
description: 
image: /assets/img/components/dropdownmenu.svg
image_alt: An illustration of a dropdownmenu.
>>>>>>> 6b9fb11db (begin 1.15.0 release notes)
image_header: /assets/img/components/dropdownmenu-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=18397-10545
navOrder: 11
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-dropdownmenu>` and `<dropdownmenuitem>` components are a list of actions or options that appears when a user interacts with a trigger, and disappears after a selection or clicking away.

{% endblock %}

{% block example %}
{% set preview %}
<nys-button id="my-trigger-id" label="Dropdown Trigger"></nys-button>
<nys-dropdownmenu id="my-dropdownmenu" for="my-trigger-id">
    <nys-dropdownmenuitem label="Profile" href="/profile"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Repositories & Github Pages" href="/repos"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Organizations" href="/organizations"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Sign out" href="/logout"></nys-dropdownmenuitem>
</nys-dropdownmenu>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

- To display a list of actions or links under a single trigger.
- To provide the user with a way to easily switch context or perform actions within the application. They’re used for navigation or commands, where an action is initiated based on the selection.
- User profile access, giving users the option to log in, an icon or username in the header can act as a dropdown trigger.
- Dropdown menus are typically used when you have 5-15 items to choose from.

### When to consider something else

- When you need users to select a value from a list for form input. Consider the `<nys-select>` component instead.
- When users need to filter or search through many options for form input. Consider the `<nys-combobox>` component instead.
- When the menu is not intended for navigation links or action menus.
- When the action is always visible and frequently used. Consider a standalone button or `<nys-button>` instead.

{% endblock %}

{% block usagedo %}

- Keep to 3-7 actions when possible
- Order actions by frequency or importance
- Separate destructive actions with a divider
- Use clear labels (e.g., “Profile”, “Account Settings”, “Sign out”)
- Avoid vague labels like “Manage” or “Options”

{% endblock %}

{% block usagedont %}

- Don't use for form inputs or selectable values — use `<nys-select>` instead
- Don't use without a label or accessible description on the trigger
- Don't nest dropdown menus inside other dropdown menus

{% endblock %}

{% block accessibility %}

The `<nys-dropdownmenu>` component includes the following accessibility-focused features:

- The trigger element automatically receives aria-haspopup="menu" and aria-expanded attributes
- The menu uses role="menu" and each item uses role="menuitem" for proper screen reader support
- Supports full keyboard interaction: `Enter/Space` to open, `Escape` to close, `ArrowUp/ArrowDown` to navigate items, and `Tab` to close when leaving the last item
- Focus is automatically moved to the first menu item when the dropdown opens, and returned to the trigger on close

{% endblock %}

{% block options %}

### Position

Use the `position` prop to control where the dropdown menu appears relative to its trigger.
Supported positions are:

- `bottom-start`
- `bottom-end` (default auto position)
- `top-start`
- `top-end`

**Note:** If the preferred position does not fit within the viewport, the component will automatically find the best alternative.

{% set preview %}

<div style="display: flex; gap: 16px; justify-content: center; margin: 80px;">
    <nys-button id="trigger-bottom-start" label='"bottom-start"'></nys-button>
    <nys-dropdownmenu for="trigger-bottom-start" position="bottom-start">
      <nys-dropdownmenuitem label="Profile" href="/profile"></nys-dropdownmenuitem>
      <nys-dropdownmenuitem label="Settings" href="/settings"></nys-dropdownmenuitem>
      <nys-dropdownmenuitem label="Sign out" href="/logout"></nys-dropdownmenuitem>
    </nys-dropdownmenu>
    <nys-button id="trigger-bottom-end" label='"top-end"'></nys-button>
    <nys-dropdownmenu for="trigger-bottom-end" position="top-end">
    <nys-dropdownmenuitem label="Profile" href="/profile"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Settings" href="/settings"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Sign out" href="/logout"></nys-dropdownmenuitem>
    </nys-dropdownmenu>
</div>
{% endset %}
{% set codeLanguage = "html" %}
{% set codeExpanded = false %}
{% set backgroundSolid = true %}
{% set code %}
<nys-button id="trigger-bottom-start" label="trigger"></nys-button>
<nys-dropdownmenu for="trigger-bottom-start" position="bottom-start">
    <nys-dropdownmenuitem label="Profile" href="/profile"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Settings" href="/settings"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Sign out" href="/logout"></nys-dropdownmenuitem>
</nys-dropdownmenu>
<nys-dropdownmenu for="trigger-bottom-end" position="top-end">
    <nys-dropdownmenuitem label="Profile" href="/profile"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Settings" href="/settings"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Sign out" href="/logout"></nys-dropdownmenuitem>
</nys-dropdownmenu>
{% endset %}
{% include "partials/code-preview.njk" %}

### In Global Header

A common use case is pairing `<nys-dropdownmenu>` with `<nys-globalheader>` for user profile navigation.

{% set preview %}
<nys-globalheader appName="User Registration Form" agencyName="Office of Information Technology Services">
    <nys-button id="trigger-id1" slot="user-actions" label="Log out" prefixIcon="slotted">
        <nys-avatar slot="prefix-icon" ariaLabel="User avatar" initials="NY"></nys-avatar>
    </nys-button>
</nys-globalheader>
<nys-dropdownmenu id="dropdownmenu1" for="trigger-id1" position="bottom-end">
    <nys-dropdownmenuitem label="Profile" href="/profile"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Repositories & Github Pages" href="/repos"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Organizations" href="/organizations" disabled></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Sign out" href="/logout"></nys-dropdownmenuitem>
</nys-dropdownmenu>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

#### With Icons

Use the `prefixIcon` property on `<nys-dropdownmenuitem>` to add an icon before the label.

{% set preview %}

<div style="display: flex; justify-content: center; margin: 80px;">
  <nys-button id="trigger-icons" label="Open Menu"></nys-button>
  <nys-dropdownmenu for="trigger-icons">
    <nys-dropdownmenuitem label="Action 1" prefixIcon="lock_filled"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 2" prefixIcon="social_youtube"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 3" prefixIcon="visibility" disabled></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 4" prefixIcon="sms"></nys-dropdownmenuitem>
  </nys-dropdownmenu>
</div>
{% endset %}
{% set backgroundSolid = true %}
{% set code %}
<nys-button id="trigger-icons" label="Open Menu"></nys-button>
<nys-dropdownmenu for="trigger-icons">
    <nys-dropdownmenuitem label="Action 1" prefixIcon="lock_filled"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 2" prefixIcon="social_youtube"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 3" prefixIcon="visibility" disabled></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 4" prefixIcon="sms"></nys-dropdownmenuitem>
</nys-dropdownmenu>
{% endset%}
{% include "partials/code-preview.njk" %}

### Disabled Items

Use the `disabled` attribute on individual `<nys-dropdownmenuitem>` elements to prevent interaction.
{% set preview %}

<div style="display: flex; justify-content: center; margin: 80px;">
  <nys-button id="trigger-disabled" label="Open Menu"></nys-button>
  <nys-dropdownmenu for="trigger-disabled">
    <nys-dropdownmenuitem label="Profile" href="/profile"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Organizations" href="/organizations" disabled></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Sign out" href="/logout"></nys-dropdownmenuitem>
  </nys-dropdownmenu>
</div>
{% endset %}
{% set backgroundSolid = true %}
{% set code %}
<nys-button id="trigger-disabled" label="Open Menu"></nys-button>
<nys-dropdownmenu for="trigger-disabled">
    <nys-dropdownmenuitem label="Profile" href="/profile"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Organizations" href="/organizations" disabled></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Sign out" href="/logout"></nys-dropdownmenuitem>
</nys-dropdownmenu>
{% endset %}
{% include "partials/code-preview.njk" %}

### Actions (no href)

Omit the `href` property to render items as `<button>` elements for action-based menus instead of navigation links.
Use the `nys-click` dispatch event to call for specific functions to execute actions

{% set preview %}

<div style="display: flex; justify-content: center; margin: 80px;">
  <nys-button id="trigger-actions" label="Open Menu"></nys-button>
  <nys-dropdownmenu for="trigger-actions">
    <nys-dropdownmenuitem label="Action 1"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 2"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 3" disabled></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 4"></nys-dropdownmenuitem>
  </nys-dropdownmenu>
</div>
{% endset %}
{% set backgroundSolid = true %}
{% set code %}
<nys-button id="trigger-actions" label="Open Menu"></nys-button>
<nys-dropdownmenu for="trigger-actions">
    <nys-dropdownmenuitem label="Action 1"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 2"></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 3" disabled></nys-dropdownmenuitem>
    <nys-dropdownmenuitem label="Action 4"></nys-dropdownmenuitem>
</nys-dropdownmenu>
{% endset %}
{% include "partials/code-preview.njk" %}

{% block properties %}

`<nys-dropdownmenu>`
<nys-table striped>

  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>for</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>showDropdown</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>position</code></td>
      <td><code>"bottom-start"</code> , <code>"bottom-end"</code> , <code>"top-start"</code> , <code>"top-end"</code></td>
    </tr>
  </table>
</nys-table>

</br>

`<nys-dropdownmenuitem>`
<nys-table striped>

  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>String (default <code>"_self"</code>)</td>
    </tr>
    <tr>
      <td><code>prefixIcon</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>divider</code></td>
      <td>String</td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-dropdownmenuitem>` component emits **one** custom Javascript events:

1.  **`nys-click`** – Emitted when a dropdown menu item is clicked.

### Event details

The `nys-click` event includes a detail object with the following properties:

  - `id` (string): The id of the clicked item.
  - `label` (string): The label of the clicked item.
  - `href` (string): The href of the clicked item. **Only present if `href` was provided.**

You can listen to these events using JavaScript:
{% set code %}// Select the dropdownmenu component
const dropdownmenu = document.querySelector("nys-dropdownmenu");
// Listen for the 'nys-click' event
dropdownmenu.addEventListener('nys-click', (event) => {
    const { id, label, href } = event.detail;
    if (href) {
        console.log(`Link item clicked (${id}): ${label} with href = ${href}`);
    } else {
        console.log(`Action item clicked (${id}): ${label}`);
    }
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block updates %}{% endblock %}
