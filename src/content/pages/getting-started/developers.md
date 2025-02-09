---
permalink: /getting-started/developers/
title: "Getting Started: Developers"
description: "Integrate Excelsior into your project with web components, design tokens, and styles. Learn how to install, customize, and use Excelsior in Angular, .NET, React, and more."
section: Getting Started
---

{% block content %}
<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-desktop:nys-grid-col-3">
    <div class="navigator">
      <div class="navigator__inner">
        <div id="navigator-title" class="navigator__title">On this page</div>
        <div id="on-page-nav"></div>
      </div>
    </div>
  </div>
  <div class="nys-desktop:nys-grid-col-9">

# Developers

## Install the libraries
To start using Excelsior in your project, you need to install the core libraries:

```html
npm install @nys-excelsior/components @nys-excelsior/styles
```

## Reference the files in your application {#reference}

```html
<script type="module" src="[path-to-dir]/excelsior.js"></script>
<link rel="stylesheet" href="[path-to-dir]/excelsior-full.min.css" />
```

**If you are not using a package manager**, you can download the files directly from the [Excelsior Components NPM](https://www.npmjs.com/package/@nys-excelsior/components) and [Excelsior Style NPM](https://www.npmjs.com/package/@nys-excelsior/styles). Keep in mind, you will need to manually update the files when new versions are released.

## Start Using Excelsior

All that's left is to start using Excelsior components in your application.

```html
<nys-alert 
  dismissible
  type="success" 
  heading="Application Submitted" 
  text="Your application has been submitted. You will receive a confirmation email shortly."> 
</nys-alert>
```

### Demo
<nys-alert 
  dismissible
  type="success" 
  heading="Application Submitted" 
  text="Your application has been submitted. You will receive a confirmation email shortly."> 
</nys-alert>

## Component documentation

Explore the **[Components]({{ site.url | url }}/components/)** page to find documentation, usage guidance, and interactive previews for each of the components in the Excelsior Design System.

## Applying Agency-Specific Themes
Excelsior's default theme uses the default New York State blue, but theme stylesheets for NYS agency groups are included with specific agency branding. Components that use themed design tokens like `--nys-color-theme` will be styled according to the selected theme.

To use a theme in an application, include a reference to the theme stylesheet after the global stylesheet:

```html
<link rel="stylesheet" href="[path-to-dir]/excelsior-full.min.css">
<link rel="stylesheet" href="[path-to-dir]/excelsior-theme-health.min.css">
```

Every Excelsior component or element using one of the themed design tokens will now reflect that agency grouping's branding.

### Available Themes
  - Administration: `excelsior-theme-admin.min.css`
  - Business: `excelsior-theme-business.min.css`
  - Recreation and Environment: `excelsior-theme-environment.min.css`
  - Health and Human Services: `excelsior-theme-health.min.css`
  - Local and Regional Authorities: `excelsior-theme-local.min.css`
  - Public Safety: `excelsior-theme-safety.min.css`
  - Transportation and Utilities: `excelsior-theme-transportation.min.css`

{% endblock %}

{% block scripts %}
<script>
document.addEventListener("DOMContentLoaded", function() {
  const navContainer = document.createElement('nav');
    navContainer.classList.add('navigator__nav'); // Assign a class to the nav element

  const navList = document.createElement('ul');
  navList.classList.add('navigator__list');
  navContainer.appendChild(navList);

  document.querySelectorAll('h2').forEach((heading) => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    const headingId = heading.textContent.toLowerCase().replace(/\s+/g, '-');
    
    // const section = document.createElement('section');
    // section.id = `${headingId}`;
    // heading.parentNode.insertBefore(section, heading);
    // section.appendChild(heading);

    heading.id = headingId;
    navLink.href = `#${headingId}`;
    navLink.textContent = heading.textContent;
    navLink.classList.add('navigator__link');
    navItem.classList.add('navigator__item', `navigator__item--${headingId}`);
   
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });

  const onPageNav = document.getElementById('on-page-nav');
  if (onPageNav) {
    onPageNav.appendChild(navContainer);
  }});
</script>
{% endblock %}