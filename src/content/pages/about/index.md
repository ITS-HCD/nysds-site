---
title: About the New York State Design System
description: Learn about the vision, mission, and values behind the New York State Design System.
layout: layouts/3-col.njk
permalink: /about/
section: About
navTitle: "About the NYSDS"
navOrder: 1
---

{% block content %}

# About the New York State Design System

The New York State Design System is a shared library of components, tokens, and guidance that helps teams across 45+ state agencies build accessible, consistent digital experiences for New York State's 20 million residents.

But the design system is more than code and components. It is a set of shared decisions, shared values, and a shared commitment to make digital services better.

<section id="vision">

## Our Vision

We envision digital experiences that are consistent, accessible, and intuitive for every resident who interacts with New York State services.

When a New Yorker renews a driver's license, files for benefits, checks election information, or accesses any state service online, they should encounter familiar patterns, clear language, and an experience designed with them in mind. Consistency builds trust. Trust makes government more effective.

</section>

<section id="mission">

## Our Mission

The New York State Design System team builds and maintains the infrastructure that makes consistency possible. We create and document reusable components, design tokens, and patterns. We test them against accessibility standards. We help teams adopt them. And we listen to the 45+ agencies using them to understand what works and what needs to improve.

We design for the entire state, not for any single agency.

</section>

<section id="values">

## Our Values

**Accessibility first.** Every component is built and tested for WCAG 2.2 compliance from the start. Accessibility is not an afterthought or a remediation task. It is built in. This helps agencies meet legal deadlines — the U.S. Department of Justice requires WCAG 2.1 AA compliance by April 2026, and New York State's Technology Law sets a January 2027 deadline for WCAG 2.2 — without expensive rework.

**Real-world tested.** We don't design in a vacuum. The design system is built on patterns used across 45+ agencies, tested with real teams, and refined based on feedback from developers, designers, and residents using state services.

**Framework agnostic.** The design system works with any technology. Whether your team uses .NET, Java, React, Angular, or something else, you can adopt the design system without a rewrite. Components are web standards–based. Tokens are portable. Guidance applies everywhere.

**Open by default.** The design system is shared infrastructure. We publish code and design libraries openly. We hold regular office hours. We respond to questions and bugs. We publish roadmaps and release notes. We document the system thoroughly so teams can understand how it works and why it was built this way.

**Connected design and code.** Design and code go together. Our Figma libraries and code libraries are synchronized. What designers prototype is based in what developers can build. This parity eliminates the gap between design vision and shipped experience.

</section>

<section id="what-it-solves">

## What It Solves

State agencies face common challenges: inconsistent digital experiences, duplicated development effort, and the cost of making every application accessible. The design system provides shared solutions to all three.

[Learn more about what the design system solves](/about/what-it-solves/)

</section>

<section id="how-it-works">

## How It Works

The design system is built on **connectedness**. That is what makes it a system.

Our design libraries use variables. Our code library is built on the same variables. The two have parity with each other. Our reference site is built using the same components, variables, and guiding principles. This interconnectedness is what transforms a collection of components into a cohesive system.

**Design tokens** are the building blocks. They store design decisions — color, spacing, typography, shadows — as reusable values. When a brand color changes, you update it once, and it flows everywhere: Figma, code, documentation.

**Web components** are pre-built interface elements: buttons, alerts, text inputs, navigation headers, modals. Each one is production-ready, accessible, and mobile-responsive. Teams drop them into pages and move forward.

**Guidance** explains how to use the system effectively — when to use a filled button vs. an outline button, how to build accessible forms, how to handle validation errors, when to reach for components vs. building custom interfaces.

The system is designed to bridge design and development. Our Figma libraries and code libraries are synchronized so that design elements and code components match 1:1. What designers prototype in Figma is based in what developers can build in code. This parity eliminates the gap between design vision and shipped experience.

This connectedness brings efficiency, consistency, and accessibility to New York State's digital experiences.

</section>

<section id="history">

## History

The New York State Design System grew out of a practical need. State agencies were building digital services independently. Each agency had its own design patterns, accessibility approach, and development workflow. This independence created duplicate effort, inconsistent experiences for residents, and challenges meeting accessibility standards.

In 2020, the New York State Information Technology Services (ITS) made a commitment to shared digital infrastructure. The design system team started small: researching existing patterns, interviewing designers and developers across agencies, documenting what worked.

Early work focused on foundational components — buttons, text inputs, alerts, navigation. The team tested them across agencies, refined them based on feedback, and documented them thoroughly. Each new component brought lessons. Each release brought new insights from the field.

Today, the design system includes 26+ components, a complete token system, comprehensive guidance, and active adoption across 45+ agencies. The system continues to evolve based on feedback from teams using it and residents interacting with services built on it.

</section>

<section id="what-comes-next">

## What Comes Next

We are expanding the system in three directions:

**More components.** We listen to agencies about what components they need. A date range picker. An address lookup. Patterns for complex data tables. We prioritize based on impact — components that unblock the most agencies or serve the most residents.

**Better tooling.** We are improving the experience of using the design system. Better Figma features. Better code documentation. Better integration with development workflows.

**Broader adoption.** We are making it easier for new agencies to adopt the system. Clearer getting-started guides. More training and office hours. Better frameworks for incremental adoption — teams can start with tokens and styles, then add components.

The design system succeeds when it serves all 45+ agencies and, ultimately, when it makes digital services better for 20 million New Yorkers.

</section>

<section id="get-involved">

## Get Involved

**If you work at a New York State agency:** Learn how to adopt the design system for your team.

- [Get Started for Designers](/get-started/designers/) — access the design libraries and start prototyping
- [Get Started for Developers](/get-started/developers/) — install the component library and integrate it into your application
- [Get Started for Leadership](/get-started/leadership/) — understand what the design system is and what your team gains by adopting it

**If you are already using the design system:** Help shape what comes next.

- Join bi-weekly office hours for live troubleshooting and Q&A
- Ask questions in the Microsoft Teams channel
- Report bugs and propose new components
- Share what is working (and what is not) in your implementation
- [Contribute to the design system](/about/contribute/) — propose new components, improve documentation, help with research and testing

**Have questions or want to talk to the team?**

Email [designsystem@its.ny.gov](mailto:designsystem@its.ny.gov) or join the [Teams channel](https://teams.microsoft.com/l/team/19%3Al5Zo00jgzpzTb5ACeXQQVatofIuRI-C0ThuQXbndb9U1%40thread.tacv2/conversations?groupId=40dc9e8f-13b9-4301-8cb7-db5c2b21c9fa&tenantId=f46cb8ea-7900-4d10-8ceb-80e8c1c81ee7) to connect with the NYSDS team and peer agencies.

</section>

{% endblock %}
