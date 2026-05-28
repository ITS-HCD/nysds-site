---
permalink: /foundations/accessibility/
redirect_from: /a11y/
title: "Accessibility"
description: "The New York State Design System makes it easier to build accessible, usable websites for New York State."
section: "Foundations"
navOrder: 2
---

{% block content %}

<h1 class="nys-display-sr-only">Accessibility</h1>

<div class="a11y-hero">
  <div class="a11y-hero__text">
    <div class="a11y-hero__stripe" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
    </div>
    <p class="a11y-hero__heading">Be an <strong>a11y.</strong></p>
    <p class="a11y-hero__subheading">a11y is short for accessibility.</p>
    <p class="a11y-hero__caption">There are 11 letters between the a and y.</p>
  </div>
  <div class="a11y-hero__media">
    <img src="/assets/i/2026/gaad-2026/a11y-banner.png" alt="A collage of four photos showing people with diverse abilities using technology and engaging with the world.">
  </div>
</div>

<section id="what-is-accessibility">

<h2>What is accessibility?</h2>

<p>Accessibility is a subset of inclusivity. It asks a specific question: can people with disabilities access, understand, interact with, and benefit from this product?</p>

<p>When New York State builds a digital service, it reaches 20 million residents. Some navigate by keyboard. Some use screen readers. Some process information differently. Accessibility means designing so none of those differences become barriers.</p>

<nys-alert type="info" heading="Everyone will need accessibility support at some point in their life" text="Accessibility is not only about permanent disabilities. It also covers temporary conditions, like a broken arm, and situational ones, like using a phone in direct sunlight. Designing for accessibility benefits everyone."></nys-alert>

<h2>What is WCAG?</h2>

<p class="nys-margin-b-400">The Web Content Accessibility Guidelines (WCAG) is a set of technical standards for making web content accessible to people with disabilities. WCAG is organized around four core principles, often remembered by the acronym POUR:</p>

<div class="pour-list">
  <div class="pour-item">
    <div class="pour-icon">
      <img src="/assets/img/pour-perceivable.svg" alt="" role="presentation">
    </div>
    <div>
      <strong>Perceivable</strong>
      <p>Can all users perceive the content?</p>
      <p class="pour-test">Test for: text alternatives, captions, sufficient contrast.</p>
    </div>
  </div>
  <div class="pour-item">
    <div class="pour-icon">
      <img src="/assets/img/pour-operable.svg" alt="" role="presentation">
    </div>
    <div>
      <strong>Operable</strong>
      <p>Can all users operate the interface?</p>
      <p class="pour-test">Test for: keyboard access, enough time, no seizure triggers.</p>
    </div>
  </div>
  <div class="pour-item">
    <div class="pour-icon">
      <img src="/assets/img/pour-understandable.svg" alt="" role="presentation">
    </div>
    <div>
      <strong>Understandable</strong>
      <p>Can all users understand the content and interface behavior?</p>
      <p class="pour-test">Test for: readable text, predictable navigation, input assistance.</p>
    </div>
  </div>
  <div class="pour-item">
    <div class="pour-icon">
      <img src="/assets/img/pour-robust.svg" alt="" role="presentation">
    </div>
    <div>
      <strong>Robust</strong>
      <p>Does the content work with current and future assistive technologies?</p>
      <p class="pour-test">Test for: valid markup, proper ARIA usage.</p>
    </div>
  </div>
</div>

</section>

<section id="how-the-design-system-helps" class="nys-margin-t-800 nys-margin-b-400">

<h2>How the design system helps</h2>

<p>The NYSDS team embeds accessibility into every component. When you build with the design system, you start with a foundation that has already been tested for common accessibility requirements.</p>

<p><b>Here's what is already handled for you:</b></p>

<div class="nys-grid-row nys-grid-gap-300 a11y-features">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <div class="a11y-feature-card nys-flex-fill">
      <div class="a11y-feature-card__header">
        <nys-icon name="check_circle" size="24" color="var(--nys-color-theme-strong)"></nys-icon>
        <strong>Keyboard Navigation</strong>
      </div>
      <p>All components are fully operable without a mouse. Tab, Enter, Space all work.</p>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <div class="a11y-feature-card nys-flex-fill">
      <div class="a11y-feature-card__header">
        <nys-icon name="check_circle" size="24" color="var(--nys-color-theme-strong)"></nys-icon>
        <strong>Focus management</strong>
      </div>
      <p>Every interactive element has a visible focus indicator where users expect it.</p>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <div class="a11y-feature-card nys-flex-fill">
      <div class="a11y-feature-card__header">
        <nys-icon name="check_circle" size="24" color="var(--nys-color-theme-strong)"></nys-icon>
        <strong>Zoom magnification</strong>
      </div>
      <p>Works correctly at 200% browser zoom with no loss of content.</p>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <div class="a11y-feature-card nys-flex-fill">
      <div class="a11y-feature-card__header">
        <nys-icon name="check_circle" size="24" color="var(--nys-color-theme-strong)"></nys-icon>
        <strong>Screen reader support</strong>
      </div>
      <p>Tested with NVDA, JAWS, and VoiceOver across desktop and mobile devices.</p>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <div class="a11y-feature-card nys-flex-fill">
      <div class="a11y-feature-card__header">
        <nys-icon name="check_circle" size="24" color="var(--nys-color-theme-strong)"></nys-icon>
        <strong>Voice control</strong>
      </div>
      <p>Supports Voice Access on Windows and Voice Control on macOS out of the box.</p>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <div class="a11y-feature-card nys-flex-fill">
      <div class="a11y-feature-card__header">
        <nys-icon name="check_circle" size="24" color="var(--nys-color-theme-strong)"></nys-icon>
        <strong>WCAG 2.2 AA compliant</strong>
      </div>
      <p>Every component meets New York State's digital accessibility standards.</p>
    </div>
  </div>
</div>

<p>Using NYSDS components does not guarantee your site is accessible — it gives you a strong starting point. You are still responsible for proper heading structure, meaningful content, correct page-level landmarks, and testing your assembled pages.</p>

<!-- 
<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <div class="card nys-flex-fill">
      <div class="card__inner">
        <div class="card__title">Accessibility test checklists</div>
        <div class="card__desc">Component-by-component accessibility testing checklists and compliance documentation to verify conformance.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <div class="card nys-flex-fill">
      <div class="card__inner">
        <div class="card__title">Build accessible guides</div>
        <div class="card__desc">Step-by-step guidance for building accessible interfaces, with or without NYSDS web components.</div>
      </div>
    </div>
  </div>
</div> -->

</section>

<section id="resources-by-role">

<h2>Resources by role</h2>

<p>Below is a list of responsibilities of resources for each person in the accessibility ecosystem. For even more resources to expand your accessibility knowledge, see our <a href="/foundations/accessibility/learn/">Learning Resources</a> for courses, references, and checklists.</p>

<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12">
    <a class="card card--horizontal" href="/foundations/accessibility/developers/">
      <div class="card__inner">
        <div class="card__media card__media--thin">
          <img src="/assets/img/icon-code.svg" alt="" role="presentation" />
        </div>
        <div class="card__content">
          <div class="card__title">For Developers</div>
          <div class="card__desc">Tools, testing techniques, and resources for building accessible websites and applications.</div>
        </div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12">
    <a class="card card--horizontal" href="/foundations/accessibility/content/">
      <div class="card__inner">
        <div class="card__media card__media--thin">
          <img src="/assets/img/icon-people.svg" alt="" role="presentation" />
        </div>
        <div class="card__content">
          <div class="card__title">For Content Creators</div>
          <div class="card__desc">Guidance on accessible documents, plain language, and multimedia.</div>
        </div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12">
    <a class="card card--horizontal" href="/foundations/accessibility/leadership/">
      <div class="card__inner">
        <div class="card__media card__media--thin">
          <img src="/assets/img/icon-edit.svg" alt="" role="presentation" />
        </div>
        <div class="card__content">
          <div class="card__title">For Leadership</div>
          <div class="card__desc">Compliance requirements, policy details, and procurement language for accessibility.</div>
        </div>
      </div>
    </a>
  </div>
</div>


</section>

<section id="compliance-dates">

<h2>Compliance dates</h2>

<nys-alert type="warning" heading="Upcoming compliance dates">
  <p>Don't get lost in the deadline math. Our standard is <b>WCAG 2.2 AA</b>. That's what New York requires, that's our accessibility team tests against, and that's what teams should be building to. For full policy details, compliance requirements, and planning guidance, see our <a href="/foundations/accessibility/leadership/">Leadership Guidance</a>.</p>
  <ul>
    <li><b>January 2027</b> — NYS Technology Law (STL Section 103-d) requires all State Entity websites conform to WCAG 2.2 Level AA.</li>
    <li><b>April 2027</b> — DOJ Rule requires all web content and mobile applications conform to WCAG 2.1 Level AA.</li>
  </ul>
</nys-alert>

</section>

<section id="nys-internal-resources">

<h2>NYS internal resources</h2>

<p>The following guidance, tools, and courses are available to New York State staff:</p>

<div class="nys-grid-row">
  <div class="nys-grid-col-12">
    <a class="card card--horizontal" href="https://on.ny.gov/a11yteam" target="_blank" rel="noopener">
      <div class="card__inner">
        <div class="card__media card__media--thin">
          <img src="/assets/img/teams-channel.svg" alt="" role="presentation" />
        </div>
        <div class="card__content">
          <div class="card__category"><nys-badge label="For NYS staff" prefixIcon="lock_filled"></nys-badge></div>
          <div class="card__title">Join ITS Accessibility Community</div>
          <div class="card__desc">Ask questions, share findings, get alerted about internal office hours, and get help from the accessibility community across NYS agencies.</div>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="https://nysemail.sharepoint.com/:u:/r/teams/its.365.DigitalAccessibility/SitePages/Get-started.aspx?csf=1&web=1&share=IQB9OPiWlWK1QKiLwKnt_SlnAVxD3SO_eebbKlc69RlRYqc&e=vC8jYt">
      <div class="card__inner">
        <div class="card__category"><nys-badge label="For NYS Staff" intent="neutral" size="sm" prefixIcon="lock_filled"></nys-badge></div>
        <div class="card__title">Get started, by role</div>
        <div class="card__desc">Target the accessibility priorities and resources for your individual job role.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="https://nysemail.sharepoint.com/:u:/t/its.365.DigitalAccessibility/IQBIx-MmHr1GQ4uxf38xsCJ6AeLh-P7wopABIBERADnNM6o?e=hmbMw1">
      <div class="card__inner">
        <div class="card__category"><nys-badge label="For NYS Staff" intent="neutral" size="sm" prefixIcon="lock_filled"></nys-badge></div>
        <div class="card__title">Tools & Guides</div>
        <div class="card__desc">Get up to speed on the basics on accessibility and accessibility tools, including NYS-specific guidance.</div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="https://nysemail.sharepoint.com/:u:/r/teams/its.365.DigitalAccessibility/SitePages/POUR%20-%202%20-%20Perceivable.aspx?csf=1&web=1&share=IQAB9ZZ94vMPRoUR8ylezZ-mAYgCg3vubPaZJHvFk_f2KfM&e=c0pJHD">
      <div class="card__inner">
        <div class="card__category"><nys-badge label="For NYS Staff" intent="neutral" size="sm" prefixIcon="lock_filled"></nys-badge></div>
        <div class="card__title">Understand WCAG</div>
        <div class="card__desc">Use the "POUR" principle to learn accessibility standards in plain language.</div>
      </div>
    </a>
    </a>
  </div>
</div>

</section>

{% endblock %}

{% block styles %}
<style>
  .a11y-hero {
    display: flex;
    align-items: center;
    gap: var(--nys-space-400);
    background: var(--nys-color-theme-faint);
    border-radius: var(--nys-radius-lg);
    padding: var(--nys-space-400);
    margin-block-end: var(--nys-space-400);
    overflow: hidden;
  }

  .a11y-hero__text {
    flex: 1 1 50%;
    min-width: 0;
  }

  .a11y-hero__stripe {
    display: flex;
    margin-block-end: var(--nys-space-200);
  }

  .a11y-hero__stripe span {
    display: block;
    width: 36px;
    height: 8px;
  }

  .a11y-hero__stripe span:nth-child(1) { background: #B1420C; }
  .a11y-hero__stripe span:nth-child(2) { background: #1660AA; }
  .a11y-hero__stripe span:nth-child(3) { background: #FFC508; }
  .a11y-hero__stripe span:nth-child(4) { background: #1B3B5A; }

  .a11y-hero__heading {
    margin: 0;
    font-family: var(--nys-font-family-display);
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    line-height: 1.1;
    font-weight: 400;
    color: var(--nys-color-ink);
    margin-block-end: var(--nys-space-100);
  }

  .a11y-hero__heading strong {
    font-weight: 700;
  }

  .a11y-hero__subheading {
    margin: 0;
    font-weight: 700;
    font-size: clamp(1.125rem, 2vw, 1.375rem);
    color: var(--nys-color-ink);
    margin-block-end: var(--nys-space-050);
  }

  .a11y-hero__caption {
    margin: 0;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    color: var(--nys-color-neutral-500);
  }

  .a11y-hero__media {
    flex: 1 1 45%;
    min-width: 0;
  }

  .a11y-hero__media img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 767px) {
    .a11y-hero {
      flex-direction: column-reverse;
      padding: var(--nys-space-300);
    }

    .a11y-hero__text,
    .a11y-hero__media {
      flex: 1 1 100%;
    }
  }

  .pour-list {
    display: flex;
    flex-direction: column;
    gap: var(--nys-space-300);
    margin: var(--nys-space-200) 0;
  }

  .pour-item {
    display: flex;
    align-items: flex-start;
    gap: var(--nys-space-200);
  }

  .pour-item strong {
    font-size: var(--nys-font-size-ui-xl);
  }

  .pour-item p {
    margin: 0;
  }

  .pour-icon {
    flex: 0 0 80px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--nys-color-neutral-10);
    border-radius: var(--nys-radius-round);
  }

  .pour-icon img {
    width: 36px;
    height: 36px;
  }

  .pour-test {
    color: var(--nys-color-neutral-600);
  }

  .a11y-features {
    margin-bottom: var(--nys-space-300);
    row-gap: var(--nys-space-250);
  }

  .a11y-feature-card {
    background: var(--nys-color-theme-faint);
    border-radius: var(--nys-radius-lg);
    padding: var(--nys-space-150);
    display: flex;
    flex-direction: column;
    gap: var(--nys-space-100);
  }

  .a11y-feature-card__header {
    display: flex;
    align-items: center;
    gap: var(--nys-space-100);
  }

  .a11y-feature-card p {
    margin: 0;
    font-size: var(--nys-font-size-ui-sm, 14px);
    line-height: var(--nys-font-lineheight-ui-sm, 24px);
  }

</style>
{% endblock %}

{% block scripts %}
{% endblock %}
