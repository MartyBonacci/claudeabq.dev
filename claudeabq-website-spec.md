# Claude Code ABQ — Website Specification

## Project Overview

Build the website for **Claude Code ABQ** at `claudeabq.dev` — a community meetup group in Albuquerque, NM focused on AI-assisted development with Claude Code. The site serves as the public-facing home for the group: announcing upcoming meetups, linking to registration, sharing past recordings, and providing resources.

**Stack:** React Router v7 (framework mode), Tailwind CSS v4, TypeScript, deployed to Cloudflare Pages (or Vercel — deployer's choice).

**Design philosophy:** Warm, minimal, professional. Inspired by Anthropic's brand — earthy tones, generous whitespace, clean typography. The site should feel like it belongs in the Anthropic ecosystem without pretending to be an official Anthropic property.

**Group ethos:** We're practitioners, not evangelists. We experiment with AI coding tools, share honest results, and show each other what's actually working. If something better comes along, we'll say so. The vibe is developers sharing shop talk, not a sales pitch.

---

## Color Palette (Anthropic Brand)

Use these as CSS custom properties and Tailwind theme extensions:

```
--color-dark: #141413;        /* Primary text, dark backgrounds */
--color-light: #faf9f5;       /* Page background */
--color-offwhite: #f0efea;    /* Card backgrounds, subtle sections */
--color-light-gray: #e8e6dc;  /* Borders, dividers */
--color-mid-gray: #b0aea5;    /* Secondary text, muted elements */
--color-orange: #d97757;      /* Primary accent — CTAs, links, highlights */
--color-blue: #6a9bcc;        /* Secondary accent — info, tags */
--color-green: #788c5d;       /* Tertiary accent — success states, badges */
```

### Usage Guidelines
- **Background:** `--color-light` (#faf9f5) for the main page body
- **Cards/sections:** `--color-offwhite` (#f0efea) for alternating sections or card backgrounds
- **Primary text:** `--color-dark` (#141413)
- **Secondary/muted text:** `--color-mid-gray` (#b0aea5)
- **CTAs and links:** `--color-orange` (#d97757) — register buttons, nav links on hover
- **Borders and dividers:** `--color-light-gray` (#e8e6dc)
- **Code blocks / terminal references:** Dark background (#141413) with light text
- **Tags/badges:** `--color-blue` for tech tags, `--color-green` for status indicators

---

## Typography

- **Headings:** System serif stack: `Georgia, 'Times New Roman', serif` — echoing Anthropic's Tiempos/Copernicus serif feel without requiring custom font loading
- **Body:** System sans-serif stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Code/monospace:** `'SF Mono', 'Fira Code', 'JetBrains Mono', Consolas, monospace`
- Keep font sizes generous. Body at 18px minimum. Headings should breathe.

---

## Site Structure

Single-page scrolling site with a sticky nav that has anchor links to each section. React Router v7 is used in framework mode so we can add routes later (e.g., `/recordings`, `/blog`) but v1 is a single `index` route.

### Sections (in scroll order)

#### 1. Hero
- **Claude Code ABQ** — large heading
- Tagline: "Albuquerque's AI-assisted development community"
- Subtext: "Monthly meetups exploring AI-assisted development workflows. Bring your laptop, bring your curiosity, bring your honest opinions."
- **Primary CTA button:** "Register for Next Meetup →" (links to Lu.ma event page, opens in new tab)
- **Secondary link:** "Join our Slack" or "Learn more ↓" (smooth scroll to About)
- Subtle background — could use a very faint gradient from `--color-light` to `--color-offwhite`, or a subtle grid/dot pattern

#### 2. Next Meetup
- Prominent card/section with:
  - **Date:** Thursday, February 12, 2026
  - **Time:** 6:00 PM – 8:00 PM MST
  - **Location:** Deep Dive Coding Classrooms, CNM STEMulus Center, Downtown Albuquerque
  - **Description:** "First meetup! Live demo of Claude Code in action — see AI-assisted development workflows, hands-on exploration, and Q&A. Bring your laptop."
  - **Register button** → Lu.ma link (placeholder: `https://lu.ma/claudecodeabq` — replace with actual URL once event is created)
  - **"Add to Calendar"** — Lu.ma handles this via registration, but consider a small iCal/Google Calendar link as well
- This section should be the most visually prominent after the hero
- When no upcoming meetup is scheduled, this section should show "Next meetup TBA — follow us to get notified" with a link to the Lu.ma calendar

#### 3. About
- **What is Claude Code ABQ?**
- 2-3 paragraphs covering:
  - We're a community of developers who build with AI coding tools — and we're honest about what works and what doesn't
  - Claude Code is our primary tool, but we're not married to anything. We experiment, we compare, and we share what we find. If something else starts outperforming, we'll be the first to say so.
  - Monthly meetups where people show each other what they're building, what's working, and what isn't. Live demos, hands-on exploration, real talk.
  - Open to all skill levels — from bootcamp students to senior engineers
  - Based at the CNM STEMulus Center in downtown Albuquerque, hosted by Deep Dive Coding
- Tone: conversational, welcoming, practitioner-first. We're builders sharing notes, not evangelists. Think "shop talk" not "sales pitch."

#### 4. What to Expect
- 3-4 cards or items describing what happens at meetups:
  - **Show & Tell** — People demo what they've been building with AI coding tools. Real projects, real workflows, honest results.
  - **Hands-On Time** — Bring your laptop and try it yourself with guidance
  - **Honest Comparisons** — We experiment with different AI coding tools and share what we find. No tool loyalty — just honest results.
  - **All Levels Welcome** — Whether you're learning to code or shipping production apps
- Use icons or simple illustrations (emoji or Lucide icons are fine for v1)

#### 5. Code of Conduct / Rules
- Brief, visible, non-negotiable. Displayed as a clean list or short paragraphs:
  - **Be respectful.** Treat everyone with kindness regardless of skill level, background, or experience.
  - **No recruiting spam.** This is a learning community, not a hiring event. Casual networking is great; aggressive recruiting is not.
  - **Come to learn and share.** Ask questions, show your work, help others.
  - **Keep it legal and ethical.** Don't share proprietary code or use AI tools in ways that violate terms of service.
  - **Harassment-free zone.** We follow a zero-tolerance policy. If someone makes you uncomfortable, reach out to the organizer.
- Link to a more detailed CoC page if needed later (can use the Contributor Covenant as a base)

#### 6. Past Meetups / Recordings
- For v1: placeholder section with "Recordings coming soon" message
- Design the section to eventually hold a grid of video cards with:
  - Thumbnail
  - Title
  - Date
  - YouTube link
- Include a "Subscribe on YouTube" link/button (placeholder: `https://youtube.com/@claudecodeabq` — replace with actual channel URL)
- Data structure should be a simple array of objects in a data file so it's easy to add new recordings

#### 7. Resources
- Grid or list of resource cards with title, short description, and link:
  - **Claude Code** — "Anthropic's AI coding agent that lives in your terminal" → https://docs.anthropic.com/en/docs/claude-code
  - **Install Claude Code** — "Get started in 5 minutes" → https://docs.anthropic.com/en/docs/claude-code/getting-started
  - **Anthropic** — "The company behind Claude" → https://anthropic.com
  - **SpecSwarm** — "Specification-driven development plugin for Claude Code" → https://specswarm.com
  - **Deep Dive Coding** — "Full-stack web development bootcamp at CNM Ingenuity" → https://deepdivecoding.com
  - **Claude.ai** — "Try Claude in your browser" → https://claude.ai
- Each card should have a subtle external link icon indicator

#### 8. Footer
- "Claude Code ABQ" with tagline
- "Hosted by Deep Dive Coding at CNM Ingenuity STEMulus Center"
- "Organized by Marty Bonacci"
- Links: GitHub (placeholder), YouTube (placeholder), Lu.ma calendar, Slack (placeholder if applicable)
- Small disclaimer: "Claude Code ABQ is a community group. Not affiliated with or endorsed by Anthropic."
- Current year for copyright

---

## Technical Requirements

### React Router v7
- Use framework mode with `react-router.config.ts`
- Single route for v1: `app/routes/home.tsx` (or `_index.tsx`)
- Layout in `app/root.tsx` with nav and footer
- Pre-render the index route for static output (SSG) if deploying to Cloudflare Pages

### Tailwind CSS v4
- Configure the Anthropic color palette in `tailwind.config.ts` as theme extensions
- Use Tailwind's typography plugin (`@tailwindcss/typography`) for any prose content
- Dark mode: not required for v1 but structure the colors so it's easy to add later

### Data
- Meetup data (upcoming + past) should be in a simple TypeScript data file (`app/data/meetups.ts`) so it's easy to update without touching components
- Resources should be in a similar data file (`app/data/resources.ts`)
- Recording/video data in `app/data/recordings.ts` (empty array for v1)

### Performance
- No heavy dependencies. Keep the bundle small.
- Lazy-load the recordings section if it grows
- Use semantic HTML throughout
- All images should have alt text
- Links opening in new tabs should have `rel="noopener noreferrer"`

### SEO & Meta
- Page title: "Claude Code ABQ — Albuquerque's AI-Assisted Development Community"
- Meta description: "Monthly meetups for developers exploring AI-assisted development. We build with Claude Code, we experiment with everything else, and we share honest results. Hosted at CNM STEMulus Center in downtown Albuquerque."
- Open Graph tags for social sharing (title, description, image — create a simple OG image or use a placeholder)
- Canonical URL: `https://claudeabq.dev`
- Favicon: use the Anthropic slash `/` or a simple `</>` code symbol in the brand orange

### Accessibility
- Proper heading hierarchy (single h1, logical h2/h3 structure)
- Skip-to-content link
- Focus styles on all interactive elements
- Color contrast must pass WCAG AA (the Anthropic palette is designed for this — verify orange on light backgrounds)
- Keyboard navigable

---

## Component Breakdown

```
app/
├── root.tsx                    # Layout: nav + footer + Outlet
├── routes/
│   └── home.tsx               # Index route — all sections
├── components/
│   ├── Nav.tsx                 # Sticky nav with anchor links
│   ├── Hero.tsx                # Hero section with CTA
│   ├── NextMeetup.tsx          # Upcoming meetup card
│   ├── About.tsx               # About the group
│   ├── WhatToExpect.tsx        # Feature cards
│   ├── CodeOfConduct.tsx       # Rules section
│   ├── Recordings.tsx          # Past meetup videos (placeholder for v1)
│   ├── Resources.tsx           # Resource links grid
│   └── Footer.tsx              # Footer with links and disclaimer
├── data/
│   ├── meetups.ts              # Upcoming and past meetup data
│   ├── resources.ts            # Resource links
│   └── recordings.ts           # Video recordings (empty for v1)
└── styles/
    └── app.css                 # Tailwind imports + custom properties
```

---

## Content That Needs Real URLs Before Deploy

These are placeholders that need to be replaced with actual URLs:

- [ ] Lu.ma event registration link for Feb 12 meetup
- [ ] YouTube channel URL
- [ ] GitHub org/repo URL (if creating one)
- [ ] Slack invite link (if using Slack for the community)
- [ ] OG image for social sharing

---

## What This Is NOT

- Not a blog platform (yet)
- Not a member login system
- Not a CMS — content is in code files, updated via PRs
- Not an official Anthropic property — make this clear in the footer disclaimer

---

## Deployment Notes

- Register `claudeabq.dev` domain (if not already done)
- Deploy to Cloudflare Pages or Vercel — both support React Router v7 out of the box
- Set up DNS to point `claudeabq.dev` to the deployment
- Enable HTTPS (automatic with both Cloudflare and Vercel)

---

## Priority for v1 (Ship Today)

1. Hero with CTA → Lu.ma registration
2. Next Meetup section with all details
3. About section
4. Code of Conduct
5. Resources section
6. Footer with disclaimer
7. Recordings placeholder (can be minimal)
8. SEO meta tags and OG

The site should be shippable in a single session. Keep it clean, keep it fast, keep it warm.
