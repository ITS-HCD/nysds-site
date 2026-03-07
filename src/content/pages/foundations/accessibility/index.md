---
permalink: /foundations/accessibility/
redirect_from: /a11y/
title: "Accessibility"
description: "The New York State Design System makes it easier to build accessible, usable websites for New York State."
section: "Foundations"
navOrder: 2
---

{% block content %}

<h1>Accessibility</h1>

<img src="/assets/img/accessibility_image.svg" style="width: 100%; display: block; margin-bottom: 32px;" alt="Illustration showing categories of accessibility needs: visual, hearing, mobility, and cognitive" role="presentation">

<section id="what-is-accessibility">

<h2>What Is Accessibility</h2>

<p>Accessibility is a subset of inclusivity. It asks a specific question: can people with disabilities access, understand, interact with, and benefit from this product?</p>

<p>When New York State builds a digital service, it reaches 20 million residents. Some of those residents navigate by keyboard. Some use screen readers. Some process information differently. Accessibility means designing so that none of those differences become barriers.</p>

<nys-alert type="info" heading="Everyone will need accessibility support at some point in their life" text="Accessibility is not only about permanent disabilities. It also covers temporary conditions, like a broken arm, and situational ones, like using a phone in direct sunlight. Designing for accessibility benefits everyone."></nys-alert>

<p>The Web Content Accessibility Guidelines (WCAG) organize accessibility around four principles:</p>

<ul>
  <li><strong>Perceivable</strong> — Can all users perceive the content? (text alternatives, captions, sufficient contrast)</li>
  <li><strong>Operable</strong> — Can all users operate the interface? (keyboard access, enough time, no seizure triggers)</li>
  <li><strong>Understandable</strong> — Can all users understand the content and interface behavior? (readable text, predictable navigation, input assistance)</li>
  <li><strong>Robust</strong> — Does the content work with current and future assistive technologies? (valid markup, proper ARIA usage)</li>
</ul>

<div style="border-left: 4px solid var(--nys-color-neutral-100); padding: var(--nys-space-100) var(--nys-space-200); margin-top: var(--nys-space-100);">
  <blockquote>
    "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."
  </blockquote>
  <cite>— Sir Tim Berners-Lee</cite>
</div>

</section>

<section id="compliance-deadlines">

<h2>Compliance Deadlines</h2>

<nys-alert type="warning" heading="Upcoming compliance deadlines">
  <p>Two deadlines are approaching that affect every New York State digital service:</p>
  <ul>
    <li><strong>April 2026</strong> — DOJ Rule requires all web content and mobile applications conform to <strong>WCAG 2.1 Level AA</strong>.</li>
    <li><strong>January 2027</strong> — NYS Technology Law (STL Section 103-d) requires all State Entity websites conform to <strong>WCAG 2.2 Level AA</strong>.</li>
  </ul>
  <p>For full policy details, compliance requirements, and planning guidance, see <a href="/foundations/accessibility/leadership/">Accessibility for Leadership</a>.</p>
</nys-alert>

</section>

<section id="how-the-design-system-helps">

<h2>How the Design System Helps</h2>

<p>The NYSDS team embeds accessibility into every component. When you build with the design system, you start with a foundation that has already been tested for common accessibility requirements:</p>

<ul>
  <li><strong>Color contrast</strong> — All component color pairings meet WCAG AA contrast ratios. We verify with tools like WebAIM's contrast checker.</li>
  <li><strong>Element sizing</strong> — Interactive targets meet minimum size requirements so users can activate them reliably on any device.</li>
  <li><strong>Focus states</strong> — Every interactive element has a visible focus indicator. Users navigating by keyboard always know where they are.</li>
  <li><strong>Screen reader testing</strong> — Components are tested with NVDA and VoiceOver to confirm they convey the right information to assistive technology.</li>
  <li><strong>Keyboard navigation</strong> — All components are fully operable without a mouse, using standard keyboard patterns (Tab, Enter, Space, Escape, arrow keys).</li>
</ul>

<p>Using NYSDS components does not guarantee your site is accessible — it gives you a strong starting point. You are still responsible for proper heading structure, meaningful content, correct page-level landmarks, and testing your assembled pages.</p>

</section>

<section id="categories-of-need">

<h2>Categories of Accessible User Needs</h2>

<p>Accessible design addresses a range of human needs. These categories overlap — a single person may have needs in multiple areas.</p>

<h3>Visual</h3>
<p>Includes blindness, low vision, and color vision deficiency. Users may rely on screen readers, screen magnifiers, high contrast modes, or customized text sizes.</p>

<h3>Hearing</h3>
<p>Includes deafness and hard of hearing. Users need captions for video, transcripts for audio, and visual alternatives to sound-based alerts.</p>

<h3>Mobility</h3>
<p>Includes limited fine motor control, paralysis, and missing limbs. Users may navigate with keyboards, switches, voice commands, or eye tracking. Interactive targets must be large enough and spaced far enough apart.</p>

<h3>Cognitive and Learning</h3>
<p>Includes attention differences, memory difficulties, learning disabilities, and processing differences. Users benefit from clear language, consistent navigation, minimal distraction, and generous time limits.</p>

</section>

<section id="common-concerns">

<h2>Common Accessibility Concerns</h2>

<p>These are the issues that come up most often in state web applications. Every team building for New York State should be aware of them:</p>

<ul>
  <li><strong>Keyboard operability</strong> — Every function available by mouse must also be available by keyboard.</li>
  <li><strong>Focus indicators</strong> — Interactive elements must show a visible outline when they receive keyboard focus.</li>
  <li><strong>Form labels</strong> — Every form field needs a visible, programmatically associated label. Placeholder text is not a label.</li>
  <li><strong>Alternative text</strong> — Images that convey information need descriptive alt text. Decorative images need empty alt attributes.</li>
  <li><strong>Heading hierarchy</strong> — Headings must follow a logical order (h1, h2, h3) without skipping levels. They define the document outline for screen reader users.</li>
  <li><strong>Video captions</strong> — All pre-recorded video with audio must have synchronized captions. Live video should have captions when feasible.</li>
  <li><strong>Color contrast</strong> — Text and interactive elements must meet minimum contrast ratios against their backgrounds (4.5:1 for normal text, 3:1 for large text).</li>
  <li><strong>Motion controls</strong> — Animations and auto-playing content must be pausable. Respect the <code>prefers-reduced-motion</code> media query.</li>
  <li><strong>Tagged PDFs</strong> — PDF documents must be tagged with a logical reading order, headings, and alt text so screen readers can parse them.</li>
</ul>

</section>

<section id="audience-resources">

<h2>Resources by Role</h2>

<p>Accessibility is a team responsibility. We provide focused guidance for three key audiences:</p>

<ul>
  <li><strong><a href="/foundations/accessibility/developers/">For Developers</a></strong> — Tools, testing techniques, and resources for building accessible websites and applications.</li>
  <li><strong><a href="/foundations/accessibility/content/">For Content Creators</a></strong> — Guidance on accessible documents, plain language, and multimedia.</li>
  <li><strong><a href="/foundations/accessibility/leadership/">For Leadership</a></strong> — Compliance requirements, policy details, and procurement language for accessibility.</li>
</ul>

<p>Looking to build your accessibility knowledge? See our <a href="/foundations/accessibility/learn/">Learning Resources</a> for courses, references, and checklists.</p>

</section>

{% endblock %}
