---
permalink: /foundations/accessibility/
title: "Accessibility"
description: "The New York State Design System makes it easier to build accessible, usable websites for New York State."
section: "Foundations"
navOrder: 20
---

{% block content %}

<h1>Accessiblilty</h1>

<img src="/assets/img/Accessibility Illustration.svg" style="width: 100%; display: block; margin-bottom: 32px;">

<section id="what-is-web-accessibility">

<h2>What Is Web Accessibility</h2>

<nys-alert type="info" heading="Everyone will need accessibility support at some point in their life" text=""></nys-alert>


<p>Web accessibility is about making websites, digital services, and online content usable by
everyone, including people with disabilities. Building with accessibility in mind is about removing
barriers to access. It helps ensure that people who rely on assistive technologies, like screen
readers, voice commands, or keyboard navigation, have equal access to services and
information.</p>

<p>The Web Content Accessibility Guidelines (WCAG) are organized by four key principles:
Perceivable, Operable, Understandable, and Robust. These principles provide a framework for
determining if web content is accessible to all users, no matter the disability or device:</p>

<ul>
  <li><strong>Perceivable</strong>: Is content presented 
in ways that all users can perceive?</li>
  <li><strong>Operable</strong>: Are interface elements navigable and usable by all users?</li>
  <li><strong>Understandable</strong>: Is information clear and behavior predictable?</li>
  <li><strong>Robust</strong>: Is the content compatible with assistive technology?</li>
</ul>
<div style="border-left: 4px solid var(--nys-color-neutral-100); padding: 16px 32px; margin-top: 16px;">
  <blockquote>
    "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”
  </blockquote>
  <cite>– Sir Tim Berners-Lee</cite>
</div>
</section>
<section id="accessibility-policy">
<h2>Accessibility Policy</h2>

<nys-alert type="warning" heading="Upcoming Compliance Deadlines" text="DOJ requires WCAG 2.1 by April 2026 and NYSTL requires WCAG 2.2 by January 2027." primaryLabel="Learn More" primaryAction="/foundations/accessibility/legal/#deadlines"></nys-alert>

<h3>Current ITS Policy</h3>
<p>This policy recognizes the importance of universal accessibility and establishes minimum accessibility requirements to ensure that Information and Communication Technology (“ICT”), including applications, websites, and other digital interfaces, developed, procured, maintained, or used by State Entities (“SE”) are accessible to all users, including those with disabilities.</p>
<p><a href="/foundations/accessibility/legal/#current-its-policy">Learn More</a></p>


<h3>Recommendations</h3>
<ul>
  <li><strong>WCAG Compliance</strong>: Target WCAG 2.1 Level AA compliance for all web applications, content, and mobile applications by June 25, 2026, as required by the DOJ Rule. Upgrade web applications to WCAG 2.2 Level AA compliance by January 1, 2027, in accordance with New York State Technology Law (STL) Section 103-d.</li>
  <li><strong>Accessibility Training</strong>: Make sure all user interface designers and developers receive basic accessibility training. (See learning resource links below.) Key team members should have a comprehensive understanding of accessibility and WCAG 2.2 AA compliance.</li>
  <li><strong>Accessibility Testing</strong>: Conduct manual accessibility testing of ICT before production use and prior to any significant changes. Incorporate this testing into a standard development and QA process with key milestones.</li>
  <li><strong>Documentation and Records</strong>: Keep documented testing reports for each ICT and maintain an updated list of all ICTs along with their current compliance status. Clearly display a link labeled “Accessibility” in the footer of the SE's website home page, providing contact information for accessibility inquiries. </li>
</ul>

<h4>Recommendations</h4>
<p>This policy recognizes the importance of universal accessibility and establishes minimum accessibility requirements to ensure that Information and Communication Technology (“ICT”), including applications, websites, and other digital interfaces, developed, procured, maintained, or used by State Entities (“SE”) are accessible to all users, including those with disabilities.</p>

<h5>Recommendations</h5>
<p>Prioritizing accessibility in our design system allows all users, regardless of ability, navigate and interact with our products effectively. By following these best practices, we create a more inclusive experience for everyone. Accessibility is not just a feature; it’s a fundamental part of good design that benefits all users</p>

<h6>Recommendations</h6>
<p>"Screen reader testing" means checking how well a website or app works for visually impaired users who rely on screen reader software. It ensures that text, images, and interactive elements are properly read aloud and usable with keyboard commands.</p>


</section>

## Our Approach

**How does our team make sure our design system is accessible to all?**

While there are numerous ways to check for accessibility, here are just a few: 

**Color Contrast:** Ensure sufficient contrast between text and background colors using a dedicated checker.

[WebAim](http://webaim.org/resources/contrastchecker/) is recommended.

**Element Sizing:** Larger interactive elements (minimum 44x44 pixels as recommended by WCAG) make it easier for users with limited dexterity or those using assistive technologies to tap or click accurately.

**Focus States:** Ensures interactive elements like buttons and links clearly indicate focus when navigated with a keyboard.

**Keyboard Navigation:** Designing a website or application so users can navigate and interact with it using only a keyboard, without needing a mouse. This is essential for accessibility, especially for people with disabilities.

*It typically includes:*
- Tab key to move between links, buttons, and form fields.
- Enter/Spacebar to activate buttons and links.
- Arrow keys to scroll or navigate within menus.
- Escape key to close pop-ups or dialogs.

**Screen Reader Testing:**  "Screen reader testing" means checking how well a website or app works for visually impaired users who rely on screen reader software. It ensures that text, images, and interactive elements are properly read aloud and usable with keyboard commands.

Prioritizing accessibility in our design system allows all users, regardless of ability, navigate and interact with our products effectively. By following these best practices, we create a more inclusive experience for everyone. Accessibility is not just a feature; it’s a fundamental part of good design that benefits all users.

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