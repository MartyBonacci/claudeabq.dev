# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Claude Code ABQ (`claudeabq.dev`) — a community meetup website for an Albuquerque developer group focused on AI-assisted development. Single-page scrolling site with sticky nav and anchor links.

## Stack

- **React Router v7.12** (framework mode) with `react-router.config.ts`
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **TypeScript** (strict mode)
- **Lucide React** (icons)
- **Deployment target:** Cloudflare Pages or Vercel (pre-rendered SSG)

## Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Production build (client + server + pre-render)
npm run start        # Serve production build via react-router-serve
npm run typecheck    # react-router typegen + tsc
```

## Architecture

Single route (`app/routes/home.tsx`) with layout in `app/root.tsx` (skip-to-content link, Nav, main with Outlet, Footer). All 8 page sections are separate components composed in the index route.

### Data files

Content lives in TypeScript data files, not in components:
- `app/data/meetups.ts` — typed `Meetup` objects with `getUpcomingMeetup()` / `getPastMeetups()` helpers
- `app/data/resources.ts` — typed `Resource` link objects
- `app/data/recordings.ts` — typed `Recording` objects (empty array for v1)

Update these files to change site content — don't hardcode content in components.

### Color palette

Anthropic-inspired custom properties defined in `app/app.css` `@theme` block, available as Tailwind utilities (e.g., `bg-dark`, `text-orange`, `border-light-gray`):
- `--color-dark: #141413` / `--color-light: #faf9f5` / `--color-offwhite: #f0efea`
- `--color-light-gray: #e8e6dc` / `--color-mid-gray: #b0aea5`
- `--color-orange: #d97757` / `--color-blue: #6a9bcc` / `--color-green: #788c5d`

### Typography

System font stacks defined in `@theme` — no custom font loading:
- `--font-serif`: Georgia (headings)
- `--font-sans`: system sans-serif stack (body)
- `--font-mono`: SF Mono / Fira Code / JetBrains Mono (code)

## Key URLs

- **Lu.ma registration (REAL):** `https://luma.com/fvxse8v8`
- YouTube, GitHub, Slack links are **placeholders** — update in data files and Footer.tsx when ready

## Design Principles

- Warm, minimal, professional — Anthropic-inspired but explicitly not an official Anthropic property (footer disclaimer required)
- Practitioner tone: honest, conversational, "shop talk not sales pitch"
- Body text 18px, generous whitespace
- Semantic HTML, single h1, logical h2/h3 hierarchy
- All external links: `target="_blank" rel="noopener noreferrer"`

## Key Constraints

- Keep bundle small — no heavy dependencies (current total: ~420KB client, ~109KB gzipped JS)
- WCAG AA color contrast, skip-to-content link, full keyboard navigation
- Pre-rendering enabled via `react-router.config.ts` `prerender()` returning `["/"]`
- License: GPL v3
