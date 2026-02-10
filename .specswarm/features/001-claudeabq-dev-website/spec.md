# Feature Specification: claudeabq.dev Complete Website

## Overview
Build the complete claudeabq.dev website — a single-page scrolling community meetup site for Claude Code ABQ, an Albuquerque developer group focused on AI-assisted development.

## Source
Full specification in `claudeabq-website-spec.md` at project root.

## Stack
- React Router v7 (framework mode) with `react-router.config.ts`
- Tailwind CSS v4 with `@tailwindcss/typography`
- TypeScript (strict mode)
- Lucide React (icons)
- Deployment: Cloudflare Pages / Vercel (pre-rendered SSG)

## Sections (8 total)
1. **Hero** — heading, tagline, CTA to Lu.ma registration, secondary scroll link
2. **Next Meetup** — date/time/location card, register button, "Add to Calendar" link
3. **About** — 2-3 paragraphs about the group, conversational tone
4. **What to Expect** — 4 feature cards with Lucide icons
5. **Code of Conduct** — 5 rules as a clean list
6. **Recordings** — placeholder "coming soon" with YouTube subscribe link
7. **Resources** — 6 resource cards with external link indicators
8. **Footer** — credits, social links, Anthropic disclaimer, copyright

## Key URLs
- Lu.ma registration: `https://luma.com/fvxse8v8` (REAL — use this)
- YouTube: `https://youtube.com/@claudecodeabq` (placeholder)
- GitHub: `https://github.com/claudecodeabq` (placeholder)
- Slack: `#` (placeholder)

## Data Files
- `app/data/meetups.ts` — typed meetup objects (upcoming + past)
- `app/data/resources.ts` — resource link objects
- `app/data/recordings.ts` — video recording objects (empty array for v1)

## Design Requirements
- Anthropic-inspired color palette (8 custom properties)
- System font stacks (serif headings, sans body, mono code)
- 18px minimum body text, generous whitespace
- Sticky nav with anchor links, smooth scrolling
- WCAG AA accessibility, skip-to-content, keyboard nav
- SEO meta tags, Open Graph, canonical URL

## Acceptance Criteria
- [ ] All 8 sections render correctly
- [ ] Sticky nav with smooth-scroll anchor links
- [ ] Real Lu.ma URL on all registration buttons
- [ ] Data files separated from component logic
- [ ] Anthropic color palette applied via CSS custom properties + Tailwind
- [ ] System font stacks, no custom font loading
- [ ] Semantic HTML with proper heading hierarchy
- [ ] Skip-to-content link
- [ ] All external links have `target="_blank" rel="noopener noreferrer"`
- [ ] SEO meta tags and Open Graph in root
- [ ] TypeScript strict mode, no `any` types
- [ ] Build succeeds, pre-renderable
