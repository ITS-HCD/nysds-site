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

<section id="pdf-accessibility">

### PDF Accessibility

Starting April 24, 2026, all documents created after that date must meet federal accessibility standards under the ADA. This includes documents stored on state websites and shared internally. For details and exceptions, see [ADA Title II Guidance on Document Accessibility](https://www.ada.gov/resources/web-guidance/).

<nys-alert type="warning" heading="Compliance Is a Business Decision">
Compliance management and document remediation is a business and communications activity, not just a technical task. ITS can provide technical guidance and tools, but agencies make final decisions about which documents are core services vs. archives, editorial policies, and compliance timelines. Work with your leadership to prioritize remediation.
</nys-alert>

#### Three Buckets: How to Organize Your Documents

Not all documents require the same treatment. The ADA allows for exceptions on certain preexisting documents. Use this framework to determine what needs remediation and when.

**1. Core Service Documents**
These are documents your agency actively uses to deliver services to the public. Examples: benefit application forms, benefit notices, agency phone directories, tax guides, parking regulations, agency fact sheets. These require accessibility remediation.

To identify core service documents:
- Check your website analytics (Google Analytics) to see which PDFs and documents are most accessed by the public.
- Ask front-line staff which documents citizens request most often.
- Look for documents linked from your home page or main navigation.

All core service documents created before April 24, 2026 must be made accessible by that deadline.

**2. Archive Documents**
Preexisting documents first posted before April 24, 2026 that are not required for core services may qualify for exceptions under the ADA rule. These documents can remain as-is if they are clearly marked as "Archived" on your website and users can access the same information through an accessible alternative (a web form, updated guidance page, or accessible version).

Important: Mark the document clearly as "Archived" on the web page itself—do NOT modify the actual PDF file. This transparency helps users understand why an inaccessible document exists.

For full exception criteria, see the [ADA Title II Guidance on Document Accessibility](https://www.ada.gov/resources/web-guidance/).

**3. System-Generated Documents**
PDFs generated by web services or applications do not have a manual remediation path. Examples: receipt PDFs, confirmation pages, dynamically generated reports, permit documents printed from a database.

If your agency publishes system-generated PDFs, flag this immediately with ITS or your vendor. These require development work to add accessibility features to the code that generates the PDF. The timeline to remediate is often measured in months, not weeks.

#### Remediation Approach: Three Options (in Priority Order)

When you have identified a core service document that needs accessibility, choose your approach:

**1. Replace — The Best Long-Term Solution**
Convert the document to a web page, web form, or interactive tool. This is the most accessible approach and is often easier to maintain than managing multiple PDF versions.

Examples:
- A 20-page benefits guide becomes a structured web page with headings, lists, and FAQs.
- A form PDF becomes an online form with built-in validation and error messaging.
- A regulatory checklist becomes an interactive tool with filtering and summary export.

Ask: "Could this information be served better as a web page or form?" If yes, this is your best option.

**2. Recreate — Go Back to Source**
Find the original Word document, PowerPoint presentation, Adobe InDesign file, or other source. Use the built-in accessibility tools in that application to create an accessible version from scratch. Then export to PDF.

This approach works well for:
- Documents created in Word or PowerPoint with poor formatting
- Scanned documents that need to be re-created anyway
- Documents with complex layouts that need to be simplified

Tools available:
- **Microsoft Office (Word, PowerPoint, Excel)** — Built-in Accessibility Checker in the Review tab.
- **Adobe InDesign** — Native accessibility export options.

**3. Remediate — Fix the PDF Directly**
As a last resort, fix the existing PDF by adding structure, tags, alt text, and reading order. This is the most time-intensive approach, but it is sometimes necessary for legal documents, scanned records, or historical materials that cannot be recreated.

Tools available to NYS staff:
- **Adobe Acrobat Pro** — Available now. Provides tag editing, reading order tools, and built-in accessibility checker. You can manually tag documents, add alt text, and verify reading order.
- **CommonLook PDF** — A specialized PDF remediation tool optimized for bulk remediation. ITS is pursuing procurement to make this available to all agencies.

#### Critical Understanding: No One-Click Fix

**There is no automated tool that makes a PDF accessible with a single button click.** Automated tools can identify issues — missing alt text, incorrect reading order, untagged form fields — but a human must review and fix each one. The time required per document depends on complexity:

- A simple 5-page memo: 2–4 hours
- A detailed 20-page guide with tables and images: 8–20 hours
- A scanned legal document: 16–40+ hours

When budgeting for remediation, plan for human effort, not tool efficiency.

#### Key Points for Remediation Planning

- **Start with high-traffic documents.** Use your analytics to prioritize the documents most people access.
- **Involve your subject matter experts.** When recreating a document, involve the person who originally created it — they know what information matters and what can be simplified.
- **Plan for review cycles.** Remediation is not a one-time task. Budget time for testing with accessibility tools and feedback.
- **Budget adequately.** Professional remediation or recreation of a complex document can take days. Plan timelines and staffing accordingly.

#### Additional Resources

- [What Makes a PDF Accessible? (WebAIM)](https://webaim.org/techniques/acrobat/)
- [Create and Verify PDF Accessibility (Adobe)](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html)
- [PDF Accessibility Features (Adobe)](https://helpx.adobe.com/acrobat/using/accessibility-features-pdfs.html)
- [PDF Accessibility Techniques (W3C)](https://www.w3.org/WAI/WCAG21/Techniques/#pdf)

</section>

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
