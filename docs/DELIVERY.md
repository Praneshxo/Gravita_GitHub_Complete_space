# Gravita release record
Framework: Universal Software Delivery and Content Creation Standard, edition 26 October 2026; latest supplied copy dated 27 October.

## Outcome and scope
Audience: developers, main contractors, consultants, procurement and project teams.
Commercial outcome: qualified ground-engineering enquiries to +91 96266 54485.
Scope: 67 prerendered pages, 50 educational articles, five services, three MEMI project records, leadership/partners, fleet, original profile and direct WhatsApp enquiry preparation.
Assumption: WhatsApp is the initial lead channel. No email address, CRM integration, analytics account or custom domain was supplied. No guaranteed lead volume or search ranking is claimed.

## Architecture decision
React 19 + TypeScript + Vite progressive interaction layer; Python deterministic prerendering; CSS token design system; Lucide icons; version-controlled structured content; static edge deployment. Full article HTML is available without JavaScript. No database, API secret or server PII store is needed for current scope. Global search is local after one JSON fetch. Mobile menu and enquiry preparation use a small independent script. Production build replaces React environment constants.

## Sources and governance
Company truth: unchanged Gravita Profile V4.pdf, 17 pages. All original pages available as visual archive and original downloadable bytes. Company, MEMI and partner project attribution remains explicit. Partner projects with no named scope are not embellished. No fabricated testimonials, performance results, client logos, certifications or IIT endorsements.
Blog content: editorial educational drafts with primary-source links. Qualified engineering review is pending before a broad public launch; articles do not substitute for project-specific design. Supplied project status is historical profile status, not live telemetry.
Content ownership: Gravita commercial and engineering owners to nominate. User authorized creation and controlled private deployment. No claim of completed commercial interviews, specialist sign-off or live performance validation.

## UX and data
Navy/teal/coral source palette; responsive grid; typography/spacing tokens; semantic headings; labelled fields; reduced-motion support; focus states; keyboard search dialog; no dark patterns. Enquiry data is encoded into an explicit WhatsApp review link only after local validation. Visitor sends the message in WhatsApp. No uploaded documents, mailing lists or browser data persistence. Third-party WhatsApp terms apply.

## Release and operations
Run npm run typecheck, npm run build, npm run check. Browser review: home, journal search, global search, enquiry preparation. Internal links, image alternatives, JSON-LD, unique titles, one H1 per page, canonical tags and source PDF equality are checked. CSS breakpoints cover mobile/tablet/desktop; full device-lab testing is not claimed.

Rollback: redeploy a previous saved Sites version. Rebuild from pinned package lock and source commit. Review project status, leadership and phone quarterly; review educational content with the technical owner before public release and after material standard changes.

Public activation: preserve the initially private Sites audience. Indexing requires public access and final domain alignment. Then submit sitemap through the owner's Search Console and review qualified enquiries weekly. Analytics integration, uptime alerts and independently measured Core Web Vitals remain future operational work, not implemented claims.

## 15-stage evidence map
1 problem/2 audience/3 commercial hypothesis: above; customer validation pending.
4 requirements: supplied user brief and inventory.
5 information architecture: page-inventory.json.
6 architecture: above.
7 design: src/styles/tokens.css, dist/style.css, responsive components.
8 data: local-only enquiry model above.
9 delivery: source repo, pinned dependencies, reproducible build.
10 engineering: src/, build.py, scripts/.
11 content: articles.json, original profile, explicit attribution.
12 verification: scripts/check.py, TypeScript and browser observations.
13 release: saved Sites version and deployed source commit.
14 acquisition: searchable articles and qualified enquiry journey; real conversion data pending.
15 operations: review/rollback cadence above.
