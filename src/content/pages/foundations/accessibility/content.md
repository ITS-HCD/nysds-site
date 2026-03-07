---
permalink: /foundations/accessibility/content/
title: Accessibility for Content Creators
navTitle: Content Creators
description: Guidance and tools for creating accessible documents, web content, and multimedia for New York State.
parent: Accessibility
layout: layouts/3-col.njk
navOrder: 2
---

{% block content %}

# Accessibility for Content Creators

Accessible content is content that everyone can read, understand, and use — including people who rely on screen readers, magnification, captions, or simplified language. If you write, edit, or publish content for a New York State website or document, these guidelines apply to you.

## Plain Language

Plain language is an accessibility requirement, not a style preference. Content that is clear and direct benefits everyone, and it is essential for people with cognitive and learning disabilities.

- **Use short sentences.** One idea per sentence. Break long paragraphs into shorter ones.
- **Use common words.** "Start" instead of "commence." "Use" instead of "utilize." "Help" instead of "facilitate."
- **Define technical terms.** If you must use a specialized term, define it in context the first time it appears.
- **Use active voice.** "Submit your application by March 15" instead of "Applications must be submitted by March 15."
- **Put the most important information first.** Readers may not finish the page. Lead with what they came for.
- **Use headings to organize content.** Headings help all readers scan, and they let screen reader users jump between sections.

For in-depth guidance, see [Writing for Web Accessibility (W3C)](https://www.w3.org/WAI/tips/writing/).

## Web Content

When writing or editing content on a website:

- **Write meaningful link text.** "Apply for SNAP benefits" is useful. "Click here" is not. Screen reader users often navigate by links alone — every link should make sense out of context.
- **Use real headings, not bold text.** Screen readers rely on heading markup (`h2`, `h3`) to build a navigable outline of the page. Bold text that looks like a heading but is not marked up as one creates a barrier.
- **Include alt text for images.** Describe what the image communicates, not just what it shows. "Chart showing a 15% increase in online benefit applications from 2023 to 2024" is better than "Chart." Decorative images need empty alt text.
- **Do not rely on color alone.** If a status indicator uses green for approved and red for denied, also include the words "Approved" and "Denied."
- **Use lists and tables for structured content.** Do not use tabs or spaces to simulate columns. Use actual HTML tables for tabular data and lists for sequential or grouped items.

## Documents

PDF and Office documents must also be accessible. An inaccessible PDF posted on an accessible website still creates a barrier.

### PDFs

- **Tag your PDFs.** Tags define the reading order, headings, lists, and table structure for assistive technology. Without tags, a screen reader reads the text in whatever order the file happens to store it.
- **Add alt text to images.** Every informational image in a PDF needs a text description.
- **Check reading order.** Use Acrobat's accessibility checker to verify that content is read in the correct sequence.
- **Ensure text is selectable.** Scanned documents must be OCR-processed so the text is machine-readable, not just a flat image.

Resources:
- [What Makes a PDF Accessible? (WebAIM)](https://webaim.org/techniques/acrobat/)
- [Create and Verify PDF Accessibility (Adobe)](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html)
- [PDF Accessibility Features (Adobe)](https://helpx.adobe.com/acrobat/using/accessibility-features-pdfs.html)

### Word Documents

- **Use built-in heading styles.** Do not manually format headings by changing font size and weight — use Word's Heading 1, Heading 2, etc. styles.
- **Add alt text to images.** Right-click the image and select "Edit Alt Text."
- **Use Word's Accessibility Checker.** It is built into the Review tab and catches common issues before you export.
- **If you export to PDF, check the PDF too.** Word's export can lose accessibility features. Verify the resulting PDF.

Resource: [Make Your Word Documents Accessible (Microsoft)](https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d)

## Multimedia

### Video

- **Add captions to all pre-recorded video.** Auto-generated captions are a starting point, not a final product — always review and correct them.
- **Provide transcripts.** A transcript benefits people who cannot watch video, prefer to read, or need to search the content.
- **Include audio descriptions** when important visual content is not described in the existing audio track.

### Audio

- **Provide a transcript** for all audio-only content (podcasts, recorded meetings, voice messages).

### Complex Images

Charts, infographics, and maps need more than a short alt text attribute. Provide:
- A brief alt text summary (what the image is)
- A longer text description nearby or linked (what the image communicates in detail)

Resource: [Complex Images (W3C)](https://www.w3.org/WAI/tutorials/images/complex/)

For a full reference on audio and video accessibility, see [Making Audio and Video Accessible (W3C)](https://www.w3.org/WAI/media/av/).

## NYS Internal Resources

- **Deque: Accessibility Awareness for Editors and Content Contributors** — [Available via SLMS](https://on.ny.gov/4d3yuKB) (NYS login required).
- Contact the NYSDS team for access to internal accessibility review templates and content checklists.

## Further Reading

- [Writing for Web Accessibility (W3C)](https://www.w3.org/WAI/tips/writing/)
- [The Accessibility Project](https://www.a11yproject.com/)
- See our [Learning Resources](/foundations/accessibility/learn/) for additional courses and references.

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
