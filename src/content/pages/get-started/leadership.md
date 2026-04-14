---
permalink: /get-started/leadership/
title: "Get Started as a Leader"
navTitle: "Leadership"
description: "A guide for agency leaders and product teams to understand what the NYS Design System is, why it matters, and how to get your team started."
section: Get Started
---

{% block content %}

# Get Started as an Agency Leader

Your agency's websites and applications are how New Yorkers access services. When those digital experiences are inconsistent, inaccessible, or slow to build, residents pay the price. The NYS Design System gives your team a shared foundation so they can deliver better digital services, faster.

This page explains what the design system is, what your agency gains by adopting it, and how to get your team started.

## What Is a Design System?

A design system is shared infrastructure for building digital interfaces. It is a library of solved problems: researched, tested, and ready to use. Instead of every team building buttons, forms, navigation, and alerts from scratch, they use a common set of building blocks that already meet accessibility and usability standards.

The NYS Design System has two main parts:

- **Design tokens** are the building blocks of visual style. They store decisions like color, spacing, and typography as simple name-value pairs. When a brand color changes, you update the token once and it flows everywhere. Tokens are portable across platforms and technologies.
- **UI components** are pre-built interface elements: buttons, alerts, text inputs, navigation headers, and more. Each one is ready to drop into a page. They handle accessibility, keyboard navigation, and mobile responsiveness out of the box.

The design system works with any back-end technology. Whether your team uses .NET, Java, React, Angular, or something else, the front-end components and styles integrate without requiring a rewrite.

## Why Adopt the NYS Design System

### Accessibility compliance is built in

Every component is tested against WCAG 2.2 standards. The U.S. Department of Justice requires state and local government websites to meet WCAG 2.1 AA by **April 2026**. New York State's Technology Law sets a **January 2027** deadline for WCAG 2.2 compliance. Agencies using the NYS Design System get a significant head start on meeting both deadlines.

For more on accessibility policy and compliance strategy, see [Accessibility for Leadership](/foundations/accessibility/leadership/).

### A dedicated team maintains it

The NYS Design System is not a side project. A dedicated team of designers and engineers at ITS builds, tests, and improves the system full-time. That means your team is not inheriting abandoned code or unsupported libraries.

### Consistent, predictable releases

The system follows a regular release schedule with a detailed changelog. Your team can plan around upcoming features and updates instead of being surprised by breaking changes. See [release notes](/about/updates/) for the full history.

### Support is available when you need it

Your team is never on their own. The NYSDS team provides:

- **Bi-weekly office hours** for live troubleshooting and Q&A
- **A Microsoft Teams channel** for day-to-day questions and peer support
- **Email support** at [designsystem@its.ny.gov](mailto:designsystem@its.ny.gov)

### A clear roadmap

The NYSDS team publishes what is coming next, so your team can plan around it. New components, enhancements, and design resources are prioritized based on agency needs and resident impact.

### Your developers spend time on what matters

Without a design system, teams spend significant time re-solving the same front-end problems: building accessible forms, ensuring consistent navigation, fixing mobile layouts. The NYS Design System eliminates that redundant work. Your developers focus on the logic and services unique to your agency instead of reinventing common interface patterns.

## Get Your Team Started

Adopting the design system does not require a full rewrite. Teams can start with styles and tokens in an existing application, then add components incrementally.

**Point your designers here:**
[Get Started for Designers](/get-started/designers/) covers how to access the design libraries and start prototyping with system components.

**Point your developers here:**
[Get Started for Developers](/get-started/developers/) covers installation, integration, and building with the component library.

**Want to learn more about the system?**
The [Learn the NYS Design System](/learn/) video series gives a guided tour of how the system works and what it offers.

**Have questions or want to talk to the team?**
Reach out at [designsystem@its.ny.gov](mailto:designsystem@its.ny.gov) or join the [Teams channel](https://teams.microsoft.com/l/team/19%3Al5Zo00jgzpzTb5ACeXQQVatofIuRI-C0ThuQXbndb9U1%40thread.tacv2/conversations?groupId=40dc9e8f-13b9-4301-8cb7-db5c2b21c9fa&tenantId=f46cb8ea-7900-4d10-8ceb-80e8c1c81ee7) to connect directly.

{% endblock %}
