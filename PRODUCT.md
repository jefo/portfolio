# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 + Tailwind CSS 4. Static output. One page, content collections for project cards. Deployed from `docs/` on GitHub Pages at `https://jefo.github.io/portfolio/`.

## Users

Potential clients and hiring managers who open the link from GitHub, Telegram or a CV. They read on desktop and mobile, decide within a minute whether this person can build a working bot, and look for evidence: projects, tests, source code, limits.

## Product Purpose

A short, honest portfolio for independent development work: who I am, what I do, and eleven public projects. Success means a reader understands the scope of work, finds a relevant project, and knows how to start a conversation without reading a sales pitch.

## Positioning

An independent developer's work index, not an agency landing page. It shows the range — Telegram bots, two engines, a domain core — and links each card to working code and a technical case study. Design is editorial and typographic, with facts in place of claims.

## Operating Context

- The site lives in `jefo/portfolio` and publishes to `https://jefo.github.io/portfolio/`.
- Project case studies live in their own repositories at `https://jefo.github.io/<repo>/`.
- Content is Russian; project names and stack tags stay in Latin.
- Project cards are generated from Markdown frontmatter in `src/content/projects/` so new entries can be authored with AI.
- No backend, no analytics, no tracking, no forms.

## Capabilities and Constraints

- One page: hero, about, services, project grid with filters, process, contact.
- Eleven project cards, each with a real case-study link and source repository.
- Filters: all, bots, engines, domain.
- Responsive at 390px and 1440px without horizontal overflow.
- Static assets only; screenshots are real UI captures from the projects.
- No invented metrics, clients, revenue, testimonials or production claims.
- No dark mode in v1; the page is a single warm-paper surface.

## Brand Commitments

- Minimal, but not generic: editorial layout, strong type, one signal colour.
- Warm paper, near-black ink, vermilion accent, no gradients, no glass, no rounded cards.
- Literata for display, Inter Tight for body, JetBrains Mono for data and labels.
- Normal body size, high contrast, readable measure.
- Facts only: tests, stacks, statuses, explicit limits.

## Evidence on Hand

- Eleven public repositories with source code, README and a generated case study.
- Bot Machine: 108 tests, 185 assertions, documentation site.
- PersonaForge: 52 tests.
- JTBD Lead Qualifier: 7 tests.
- VPN City: 7 tests.
- TG Lead AI: 10 tests.
- Booking Domain: 8 tests.
- Total: 192 tests across the published projects.
- No production users, revenue or performance benchmarks exist.

## Product Principles

1. A reader should understand the offer in one viewport.
2. Every project claim is traceable to a repository or a test count.
3. The page is an index: scan, filter, open the evidence.
4. Typography and rules carry the design; no decorative containers.
5. If a project is a prototype, the card says so.

## Accessibility and Inclusion

- Body text at least 16px with a 1.45–1.5 line height.
- Contrast target: 7:1 for body, 4.5:1 minimum for secondary text.
- Visible keyboard focus, skip link, semantic landmarks.
- Filters are real buttons with `aria-pressed` and a live count.
- Reduced-motion preference respected; content visible without JavaScript.
- No text baked into images; screenshots are decorative evidence.
