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

<nys-alert type="warning" heading="Upcoming Compliance Deadlines" text="DOJ requires WCAG 2.1 by April 2026 and NYSTL requires WCAG 2.2 by January 2027." primaryLabel="Learn More" primaryAction="/foundations/accessibility/legal/#deadlines"></nys-alert>


<section id="what-is-web-accessibility">

<h2>What Is Web Accessibility</h2>

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
<blockquote>
  "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”
</blockquote>
<cite>– Sir Tim Berners-Lee</cite>
</section>
<section id="accessibility-policy">
<h2>Accessibility Policy</h2>
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
</section>
<section id="learning-resources">
<h2>Learning Resources</h2>
<h3>Getting Started</h3>
<ul>
  <li><a href="https://www.w3.org/WAI/people-use-web/">How People with Disabilities Use the Web </a></li>
<li><a href="https://www.linkedin.com/learning/ux-foundations-accessibility">LinkedIn's Foundations of Accessibility Online Course </a></li>
<li><a href="https://web.dev/learn/accessibility">Google's Web Accessibility Online Course (for technical audiences) </a></li>
<li><a href="https://www.a11yproject.com/">The Accessibility Project </a></li>
<li><a href="https://on.ny.gov/4d3yuKB">Deque: Accessibility Awareness for Editors and Content Contributors (SLMS login) </a></li>
<li><a href="https://on.ny.gov/4eksOwH">Deque: Accessibility Awareness for Front-End Developers (SLMS login) </a></li>
<li><a href="https://on.ny.gov/4elshdX">Deque: Accessibility Awareness for Quality Assurance Professionals (SLMS login) </a></li>
</ul>
<h3>Advanced Learning</h3>
<ul>
<li><a href="https://webaim.org/articles/">WebAim Accessibility Guide </a></li>
<li><a href="https://www.w3.org/WAI/WCAG22/quickref/">WCAG 2.2 Quick Reference </a></li>
<li><a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2 Full Guidelines </a></li>
</ul>
<h3>Assessing Compliance</h3>
<h4>Checklists</h4>
<ul>
  <li><a href="https://www.wuhcag.com/wcag-checklist/">WUHCAG WCAG Checklists </a></li>
  <li><a href="https://a11yproject.com/checklist">A11Y Project Checklist </a></li>
</ul>

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