# NexusFab (IndustrialFab)

A corporate website for **NexusFab**, a Ukrainian contract metal manufacturing company. Full-cycle metal fabrication services for OEM clients across Europe. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.


## Tech Stack

**Framework** — Next.js 16 (App Router, static export). **Language** — TypeScript 5. **Styling** — Tailwind CSS v4 via PostCSS. **Font** — Geist by Vercel. **Email** — Resend. **Linting** — ESLint 9 with `eslint-config-next`. **Package manager** — pnpm.

## Key Sections

**Hero** — full-screen background, animated headline, 4 stat counters (210,000 m², 125,000 t/yr, 65 countries, 30+ years).
**Services** — 6 services with equipment specs (laser cutting: Trumpf/Durma/Aramis, plasma up to 60mm; bending: Durma/Baykal, 160t CNC; milling: DMG/Haas/SMEC, 3/4 axis; turning: Hanwha/Haas/Gildemeister/UNION; welding: 22 Fronius units, 6 Fanuc robots; surface treatment: shot blasting, plating, powder coating, heat treatment).
**Industries** — machine building, agriculture, energy, infrastructure, transport, defence.
**Advantages** — closed production cycle, ISO/CE, in-house engineering, lean/ERP, 210k m² / 12 plants, QC lab.
**Cases** — masonry photo grid of 21+ projects.
**Clients** — Mercedes-Benz, BMW, Porsche, Leroy Merlin, Caterpillar, John Deere, Siemens.
**About** — company story, 7 certification badges (ISO 9001, 14001, 45001, EN 1090, ISO 3834, WPS/WPQR, IWE).
**Quality** — 6 pillars: testing lab, traceability, lean/kaizen, ERP/CRM, engineering bureau, welding school.
**NexusBrand** — brand story and positioning.
**QuoteForm** — lead-gen form with name, company, email, phone, material, quantity, deadline, message, file upload (STEP/STP/DXF/DWG/PDF/ZIP/STL), NDA checkbox, email via Resend.

## Architecture

**Static export** — `next.config.ts` sets `output: 'export'`. `next/image` with `unoptimized: true`.
**Internationalisation** — custom React Context system (`LangContext.tsx`), Ukrainian and English, single translation object (`translations.ts`, 689 lines), `useT()` hook. **Components** — all interactive sections are `'use client'`. Server components: root layout and page shell.
**Icons** — 20 custom inline SVG components, no external icon library. **State** — React built-ins only (useState, useEffect, useRef, Context). **SEO** — extensive meta keywords (60+ per language), JSON-LD `ManufacturingBusiness` schema, OpenGraph/Twitter cards, `robots: index, follow`.
**Animations** — `FadeIn` component using IntersectionObserver, CSS variable stagger delays.
**Styling** — Tailwind CSS v4 with CSS custom properties for design tokens.

## Directory Structure

```
app/
├── layout.tsx              Root layout, Geist font, LangProvider, SEO
├── page.tsx                Homepage, assembles all sections, JSON-LD
├── globals.css             Tailwind import, custom properties, animations
├── favicon.ico
├── api/contact/route.ts    POST endpoint, sends email via Resend
├── components/
│   ├── Navbar.tsx          Sticky nav, language switcher, mobile menu
│   ├── Hero.tsx            Hero with stats, CTAs, fade-in animation
│   ├── Industries.tsx      Industry sectors grid
│   ├── NexusBrand.tsx      Brand story
│   ├── Services.tsx        6 service cards with equipment
│   ├── Advantages.tsx      Advantage cards with SVG icons
│   ├── Cases.tsx           Masonry project photo grid
│   ├── Clients.tsx         Client logo grid
│   ├── About.tsx           Company story, certifications, image cards
│   ├── Quality.tsx         Quality management section
│   ├── QuoteForm.tsx       Contact form with file upload
│   ├── Footer.tsx          Footer with nav, contact, copyright
│   ├── FadeIn.tsx          Reusable scroll animation wrapper
│   └── icons/              20 inline SVG icon components
└── i18n/
    ├── translations.ts     UK/EN translation data
    └── LangContext.tsx     Language state context + hooks

public/images/              Photos (about, cases, hero, industries, quality, services)
public/logos/               Client and company logos
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Requires `RESEND_API_KEY` in `.env` for the contact form. Open `http://localhost:3000`.

```bash
pnpm build       Static export to `out/`
pnpm lint        ESLint
```

## Design Decisions

Static export (no SSR). Custom `i18n` over libraries. No state management library. Zero external icon library (all inline SVGs). Tailwind v4 with CSS custom properties for theming. Resend for transactional email. All interactive components client-side rendered.
