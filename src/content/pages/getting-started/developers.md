---
permalink: /getting-started/developers/
title: "Getting Started: Developers"
description: "Integrate Excelsior into your project with web components, design tokens, and styles. Learn how to install, customize, and use Excelsior in Angular, .NET, React, and more."
section: Getting Started
---

# Developers

## Install the libraries

To start using Excelsior in your project, you need to install the core libraries:

```html
npm install @nys-excelsior/components @nys-excelsior/styles
```

## Reference the files in your application

```html
<script type="module" src="[path-to-dir]/excelsior.js"></script>
<link rel="stylesheet" href="[path-to-dir]/excelsior-full.min.css" />
```

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