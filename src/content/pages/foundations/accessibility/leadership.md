---
permalink: /foundations/accessibility/leadership/
title: Accessibility for Leadership
navTitle: Leadership
description: Compliance requirements, policy details, and procurement guidance for accessibility in New York State digital services.
parent: Accessibility
layout: layouts/3-col.njk
navOrder: 3
---

{% block content %}

# Accessibility for Leadership

Accessibility compliance is a legal requirement for every New York State digital service. Whether you manage a development team, oversee agency IT, handle procurement, or lead a program, this page covers what you need to know to plan, budget, and procure accessible technology.

<section id="compliance-deadlines">

## Compliance Deadlines

Two federal and state mandates set concrete deadlines:

<nys-alert type="warning" heading="April 24, 2026 — DOJ Rule (28 CFR Part 35)">
  All state and local government web content and mobile apps must meet <strong>WCAG 2.1 Level AA</strong>. This applies to entities serving populations of 50,000 or more.
</nys-alert>

<nys-alert type="warning" heading="January 2027 — NYS Technology Law (STL §103-d)">
  All New York State entity websites must meet <strong>WCAG 2.2 Level AA</strong>. This is a higher standard than the federal rule and applies to all state agencies, including third-party vendor-managed sites.
</nys-alert>

</section>

<section id="its-policy">

## Current ITS Policy

ITS Policy NYS-P08-005 establishes minimum accessibility requirements for all Information and Communication Technology (ICT) developed, procured, maintained, or used by State Entities. The policy requires:

- **WCAG 2.1 Level AA conformance** for all web content and mobile applications by April 2026 (DOJ Rule).
- **WCAG 2.2 Level AA conformance** for all SE websites, including those provided by third parties, by January 2027 (STL Section 103-d).
- **Manual testing** of ICT before production use, prior to any fundamental alterations, and biennially thereafter.
- **Documented testing reports** maintained for each ICT until the next testing cycle.
- **An inventory** of all ICTs and their current compliance status.
- **A visible "Accessibility" link** in the footer of every SE website home page, directing users to contact information for accessibility inquiries.

[Read the full ITS Accessibility Policy](https://its.ny.gov/document/accessibility-web-based-information-and-applications-compliance-reporting)

</section>

<section id="wcag-compliance">

## What WCAG Compliance Means

WCAG (Web Content Accessibility Guidelines) is the internationally recognized standard for web accessibility. It is maintained by the World Wide Web Consortium (W3C).

- **Level A** — Minimum. Addresses the most severe barriers.
- **Level AA** — The target for government. Covers the majority of accessibility barriers for the majority of users. This is what both the DOJ Rule and NYS Technology Law require.
- **Level AAA** — Aspirational. Useful for specific services but not practical as a blanket requirement.

WCAG 2.2 builds on WCAG 2.1 — meeting 2.2 AA also satisfies the DOJ's 2.1 AA requirement. Targeting WCAG 2.2 now means you meet both deadlines with a single effort.

</section>

<section id="recommendations">

## Recommendations for Your Agency

1. **Inventory your digital properties.** List every website, web application, mobile application, and third-party service under your agency's control. Include vendor-managed sites.
2. **Assess current compliance.** Conduct automated and manual accessibility testing on priority properties. Start with public-facing, high-traffic services.
3. **Set a remediation timeline.** Prioritize critical barriers (completely inaccessible content) over minor issues. Allocate budget for remediation work.
4. **Train your teams.** Ensure that designers, developers, content authors, and QA staff have baseline accessibility knowledge. See our [Learning Resources](/foundations/accessibility/learn/).
5. **Build accessibility into procurement.** Require WCAG 2.2 AA conformance in every technology RFP and vendor contract (see RFP language below).
6. **Adopt the NYS Design System.** NYSDS components are tested for accessibility compliance. Using the design system reduces the accessibility burden on individual teams. See [Getting Started](/get-started/developers/) for installation.
7. **Establish ongoing testing.** Accessibility is not a one-time fix. Build testing into your QA process and conduct biennial reviews as the policy requires.

</section>

<section id="procurement">

## RFP and Procurement Language

When procuring technology, include explicit accessibility requirements. Suggested language:

> All deliverables must conform to the Level AA success criteria and conformance requirements of the Web Content Accessibility Guidelines (WCAG) version 2.2, as published by the World Wide Web Consortium (W3C). The vendor must provide a completed Voluntary Product Accessibility Template (VPAT) or Accessibility Conformance Report (ACR) based on the VPAT 2.5 template for all delivered products. The vendor must remediate any accessibility deficiencies identified during acceptance testing at no additional cost.

Key points to include in RFPs:

- Require WCAG 2.2 Level AA, not just "accessibility" or "Section 508 compliance."
- Require a VPAT/ACR before contract award or during evaluation.
- Include accessibility in acceptance criteria — deliverables that fail accessibility testing are not complete.
- Require remediation of accessibility defects at no additional cost during the warranty period.
- Specify that accessibility testing will include both automated tools and manual testing with assistive technologies.

</section>

<section id="standards">

## Measurable Standards

### Section 508

Section 508 of the Rehabilitation Act established federal accessibility standards for government ICT. In 2018, the guidance was revised to reference WCAG and WAI-ARIA rather than prescribing specific technical approaches. Federal and state agencies now use WCAG as the measurable standard. [Section 508 Refresh Toolkit](https://www.section508.gov/refresh-toolkit)

### W3C and WCAG

The World Wide Web Consortium (W3C) develops and maintains open web standards, including WCAG. These guidelines are developed through international collaboration and represent the consensus standard for web accessibility.

- [WCAG 2.2 Full Guidelines](https://www.w3.org/TR/WCAG22/)
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [About W3C](https://www.w3.org)

### ARIA

Accessible Rich Internet Applications (ARIA) defines attributes that make dynamic web content and complex interface controls accessible to assistive technologies. ARIA is especially important for custom widgets, single-page applications, and web components.

- [WAI-ARIA 1.1 Specification](https://www.w3.org/TR/wai-aria-1.1/#usage)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

</section>

<section id="further-reading">

## Further Reading

- [How People with Disabilities Use the Web (W3C)](https://www.w3.org/WAI/people-use-web/) — Foundational context for understanding who accessibility serves.
- See our [Learning Resources](/foundations/accessibility/learn/) for training courses and checklists.

</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
