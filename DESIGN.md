# Design System: jefo / portfolio

## Overview

**Creative North Star: "The Work Index"**

The page is an independent developer's index, printed on warm paper. It is closer to a catalog or a technical pamphlet than to a startup landing page: a statement, a trace of a real bot flow, a short list of services, and eleven project entries with numbers, evidence and links.

The first viewport does not use a generic hero card. The headline is the argument; a live FSM trace sits beside it as proof that the work is about states, transitions and data. The rest of the page is a sequence of hairline-separated sections with generous space and a single dark contact block.

## Colors

Warm paper, near-black ink, one signal colour. Colour is semantic and sparse.

- **Paper** (`oklch(0.965 0.012 86)`): page ground.
- **Paper 2** (`oklch(0.936 0.014 84)`): hover ground, cards.
- **Ink** (`oklch(0.19 0.012 70)`): body text, rules, contact block.
- **Ink 2** (`oklch(0.31 0.014 72)`): secondary text.
- **Muted** (`oklch(0.43 0.015 74)`): descriptions, captions.
- **Faint** (`oklch(0.5 0.014 78)`): metadata and mono labels; still ≥4.5:1 on paper.
- **Signal** (`oklch(0.58 0.2 32)`): status dot, active state, small marks.
- **Signal text** (`oklch(0.47 0.19 30)`): links and interactive accents on paper.
- **Tints** (`signal`, `blue`, `green`): category-coded cover fields, never full-page.
- **Dark signal** (`oklch(0.72 0.18 35)`): accents on the ink contact block.

No gradients, no glass, no coloured shadows. The dark contact section is the only large inversion.

## Typography

- **Display:** Literata Variable 500–520, tight tracking (`-0.035em` to `-0.05em`), line height 0.93–1.0. Used for the hero, section headings, project titles, big numbers.
- **Body:** Inter Tight Variable 420, 16–20px, line height 1.42–1.52, measure ≤65ch.
- **Data:** JetBrains Mono Variable 500, 11px minimum for functional text, uppercase, tracked. Used for labels, states, counts, stack, links.

The hero is roman, not italic: the italic serif hero is a recognisable AI-landing-page default. Italic survives only in the about lead and the contact heading, where it is an editorial accent rather than the main voice.

## Layout

- Shell: 1340px maximum, fluid side padding `clamp(20px, 4vw, 56px)`.
- Hero: 3.15fr / 0.85fr, headline left, proof trace and status right.
- Index: five equal columns, 1px rules, numbers as navigation.
- Sections: hairline top rule, `clamp(64px, 9vw, 124px)` vertical rhythm.
- About: 12-column split, lead 1–7, copy 9–12, facts full-width.
- Services: four-column row list, hover inverts the row to ink.
- Projects: two-column catalog with a featured horizontal entry; filtered state becomes one full-width row per result.
- Contact: ink field, two columns, oversized email.

## Components

- **Flow trace:** mono state list with dots, connector line, completed/active/future states, `nextState` footer. It is a real appointment scenario, not decoration.
- **Index nav:** numbered section links with arrows and a hover ground.
- **Service row:** number, serif title, description, mono tags. Hover: ink ground, paper text, light signal number.
- **Project card:** tinted cover, giant outlined number, year, category mark, a real UI screenshot as a small grayscale print; title, summary, stack; foot with status/tests and code/case links. Hover colorizes the screenshot and lifts it 6px.
- **Featured card:** horizontal, larger title, real screenshot.
- **Contact:** ink block, paper heading, large email link, short "what helps to start" list.

## Motion

- Hero lines rise in four staggered steps on load.
- Sections reveal once on intersection, 700ms exponential ease-out.
- Service rows invert on hover.
- Card screenshots go from grayscale to colour and lift on hover.
- All motion is removed under `prefers-reduced-motion: reduce`; content is visible without JavaScript.

## Do / Don't

- Do keep the page mostly paper and ink; signal is a pointer, not a field.
- Do use rules, spacing and type to structure; no cards around cards.
- Do show real screenshots, test counts and limitations.
- Do write short, concrete Russian.
- Don't add gradients, rounded corners, soft shadows or glass.
- Don't use an italic serif hero or an eyebrow kicker above a heading.
- Don't put functional text below 11px.
- Don't invent clients, metrics, revenue or production claims.
