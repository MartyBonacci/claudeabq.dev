# Tech Stack

## Project: claudeabq.dev
- **Created:** 2026-02-10
- **Auto-Generated:** No (greenfield project, stack from specification)

---

## Core Technologies

### Framework
- **React Router v7** (framework mode)
  - Configuration: `react-router.config.ts`
  - Single route for v1, layout in `app/root.tsx`
  - Pre-rendered index route (SSG) for static deployment
  - Notes: Use framework mode conventions — loaders, actions, meta exports

### Language
- **TypeScript** (strict mode)
  - Target: ES2022+
  - Notes: No `any` types without justification

### Build Tool
- **Vite** (bundled with React Router v7)

### Styling
- **Tailwind CSS v4**
  - Plugin: `@tailwindcss/typography` for prose content
  - Custom properties defined in `app/styles/app.css`
  - Theme extensions for Anthropic color palette
  - Notes: Utility-first, no custom CSS unless Tailwind can't express it

### Deployment
- **Cloudflare Pages** (primary) or **Vercel** (alternative)
  - Static pre-rendered output
  - HTTPS automatic

---

## Project Structure

```
app/
├── root.tsx                    # Layout: nav + footer + Outlet
├── routes/
│   └── home.tsx               # Index route — all sections
├── components/
│   ├── Nav.tsx                 # Sticky nav with anchor links
│   ├── Hero.tsx
│   ├── NextMeetup.tsx
│   ├── About.tsx
│   ├── WhatToExpect.tsx
│   ├── CodeOfConduct.tsx
│   ├── Recordings.tsx
│   ├── Resources.tsx
│   └── Footer.tsx
├── data/
│   ├── meetups.ts              # Upcoming and past meetup data
│   ├── resources.ts            # Resource links
│   └── recordings.ts           # Video recordings
└── styles/
    └── app.css                 # Tailwind imports + custom properties
```

---

## Color Palette (Anthropic-Inspired)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-dark` | `#141413` | Primary text, dark backgrounds |
| `--color-light` | `#faf9f5` | Page background |
| `--color-offwhite` | `#f0efea` | Card backgrounds, sections |
| `--color-light-gray` | `#e8e6dc` | Borders, dividers |
| `--color-mid-gray` | `#b0aea5` | Secondary text, muted |
| `--color-orange` | `#d97757` | Primary accent — CTAs, links |
| `--color-blue` | `#6a9bcc` | Secondary accent — info, tags |
| `--color-green` | `#788c5d` | Tertiary accent — success, badges |

---

## Typography

System font stacks only — no custom font loading:
- **Headings:** `Georgia, 'Times New Roman', serif`
- **Body:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Code:** `'SF Mono', 'Fira Code', 'JetBrains Mono', Consolas, monospace`
- **Body minimum:** 18px

---

## Approved Libraries

### Icons
- Lucide React (tree-shakeable SVG icons)

### Utilities
- Only what React Router v7 and Tailwind CSS v4 provide out of the box

### Testing (when added)
- Vitest (unit)
- Playwright (e2e)
- Testing Library (component)

---

## Prohibited Patterns

- Class components
- `any` types without justification
- Custom font loading (system stacks only)
- Heavy dependencies (jQuery, Moment.js, Lodash full bundle)
- CSS-in-JS (use Tailwind utilities)
- Client-side routing for v1 (single pre-rendered page)
- Redux or complex state management (unnecessary for static site)

---

## Notes

- Stack defined from `claudeabq-website-spec.md` specification
- No `package.json` yet — scaffold with React Router v7 template
- Update this file when adding new technologies or patterns
