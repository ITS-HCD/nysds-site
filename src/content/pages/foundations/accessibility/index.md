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

<img class="a11y-hero" src="/assets/img/accessibility_image.svg" alt="" role="presentation">
<p class="a11y-hero__tagline">usable by all</p>

<section id="what-is-accessibility">

<h2>What is accessibility?</h2>

<p>Accessibility is a subset of inclusivity. It asks a specific question: can people with disabilities access, understand, interact with, and benefit from this product?</p>

<p>When New York State builds a digital service, it reaches 20 million residents. Some navigate by keyboard. Some use screen readers. Some process information differently. Accessibility means designing so none of those differences become barriers.</p>

<nys-alert type="info" heading="Everyone will need accessibility support at some point in their life" text="Accessibility is not only about permanent disabilities. It also covers temporary conditions, like a broken arm, and situational ones, like using a phone in direct sunlight. Designing for accessibility benefits everyone."></nys-alert>

<p>The Web Content Accessibility Guidelines (WCAG) organize accessibility around four principles:</p>

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

<section id="how-the-design-system-helps">

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
</div>

</section>

<section id="resources-by-role">

<h2>Resources by role</h2>

<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12">
    <a class="card card--horizontal" href="/foundations/accessibility/developers/">
      <div class="card__inner">
        <div class="card__media card__media--thin">
          <img src="/assets/img/accessibility-eye-card.svg" alt="" role="presentation" />
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
          <img src="/assets/img/accessibility-card.svg" alt="" role="presentation" />
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
          <img src="/assets/img/accessibility-card.svg" alt="" role="presentation" />
        </div>
        <div class="card__content">
          <div class="card__title">For Leadership</div>
          <div class="card__desc">Compliance requirements, policy details, and procurement language for accessibility.</div>
        </div>
      </div>
    </a>
  </div>
</div>

<p>Looking to build your accessibility knowledge? See our <a href="/foundations/accessibility/learn/">Learning Resources</a> for courses, references, and checklists.</p>

</section>

<section id="compliance-deadlines">

<h2>Compliance deadlines</h2>

<nys-alert type="warning" heading="Upcoming compliance deadlines">
  <p>Two regulatory deadlines affect every New York State digital service:</p>
  <ul>
    <li><strong>April 2026</strong> — DOJ Rule requires all web content and mobile applications conform to <strong>WCAG 2.1 Level AA</strong>.</li>
    <li><strong>January 2027</strong> — NYS Technology Law (STL Section 103-d) requires all State Entity websites conform to <strong>WCAG 2.2 Level AA</strong>.</li>
  </ul>
  <p>For full policy details, compliance requirements, and planning guidance, see <a href="/foundations/accessibility/leadership/">Accessibility for Leadership</a>.</p>
</nys-alert>

</section>

<section id="nys-internal-resources">

<h2>NYS internal resources</h2>

<p>The following guidance, tools, and courses are available to New York State staff:</p>

<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12">
    <div class="card card--horizontal">
      <div class="card__inner">
        <div class="card__media card__media--thin">
          <img src="/assets/img/teams-channel.svg" alt="" role="presentation" />
        </div>
        <div class="card__content">
          <div class="card__title">Accessibility Microsoft Teams channel</div>
          <div class="card__desc">Ask questions, share findings, and get help from the accessibility community across NYS agencies. Contact the Design System team for an invite.</div>
          <div class="card__category"><nys-badge label="For NYS staff" prefixIcon="lock_filled"></nys-badge></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="nys-grid-row nys-grid-gap-300" style="margin-top: var(--nys-space-200);">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <div class="card nys-flex-fill">
      <div class="card__inner">
        <div class="card__category"><nys-badge label="For NYS Staff" intent="neutral" size="sm" prefixIcon="lock_filled"></nys-badge></div>
        <div class="card__title">Get started, by role</div>
        <div class="card__desc">Get up to speed by focusing on priorities for your job duties.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <div class="card nys-flex-fill">
      <div class="card__inner">
        <div class="card__category"><nys-badge label="For NYS Staff" intent="neutral" size="sm" prefixIcon="lock_filled"></nys-badge></div>
        <div class="card__title">NYS accessibility 101</div>
        <div class="card__desc">Find the basics on accessibility, including those pertaining to NYS.</div>
      </div>
    </div>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-4 nys-display-flex">
    <div class="card nys-flex-fill">
      <div class="card__inner">
        <div class="card__category"><nys-badge label="For NYS Staff" intent="neutral" size="sm" prefixIcon="lock_filled"></nys-badge></div>
        <div class="card__title">Understand WCAG</div>
        <div class="card__desc">Use the "POUR" principle to learn and apply a11y standards.</div>
      </div>
    </div>
  </div>
</div>

</section>

{% endblock %}

{% block styles %}
<style>
  .a11y-hero {
    width: 100%;
    display: block;
    margin-block-end: var(--nys-space-100);
  }

  .a11y-hero__tagline {
    margin: 0;
    margin-block-end: var(--nys-space-400);
    font-style: italic;
    color: var(--nys-color-neutral-400);
    text-align: center;
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
    color: var(--nys-color-neutral-400);
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

  #nys-internal-resources .card__category {
    margin-bottom: var(--nys-space-200);
  }

</style>
{% endblock %}

{% block scripts %}
{% endblock %}
