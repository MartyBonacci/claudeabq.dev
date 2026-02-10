# Implementation Plan: claudeabq.dev Website

## Phase 1: Project Scaffold
Scaffold React Router v7 framework mode project with TypeScript. Use Node adapter (compatible with both Cloudflare Pages and Vercel). Install Tailwind CSS v4, @tailwindcss/typography, and lucide-react.

## Phase 2: Foundation Layer
- Configure Tailwind with Anthropic color palette as CSS custom properties and theme extensions
- Set up typography system font stacks
- Create app.css with custom properties and Tailwind imports
- Configure react-router.config.ts for pre-rendering

## Phase 3: Data Layer
- Create `app/data/meetups.ts` with typed Meetup interface and data
- Create `app/data/resources.ts` with typed Resource interface and data
- Create `app/data/recordings.ts` with typed Recording interface (empty array)

## Phase 4: Layout (root.tsx)
- Skip-to-content link
- Nav component (sticky, anchor links)
- Outlet for route content
- Footer component
- SEO meta tags, Open Graph, canonical URL

## Phase 5: Section Components
Build all 8 sections as individual components:
1. Hero — heading, tagline, CTA button, secondary scroll link, faint gradient bg
2. NextMeetup — prominent card with date/time/location/description, register + calendar links
3. About — conversational paragraphs about the group
4. WhatToExpect — 4 feature cards with Lucide icons
5. CodeOfConduct — 5 rules as clean list
6. Recordings — placeholder with "coming soon" and YouTube subscribe
7. Resources — 6 resource cards with external link icons
8. Footer — credits, social links, disclaimer, copyright

## Phase 6: Index Route
Compose all section components in `app/routes/home.tsx` (or `_index.tsx`).

## Phase 7: Polish
- Verify accessibility (heading hierarchy, focus styles, keyboard nav)
- Verify all external links have correct attributes
- Verify build succeeds
- Verify pre-rendering works

## Deployment Flexibility
Use Node adapter as base. Both Cloudflare Pages and Vercel can deploy React Router v7 apps with Node adapter. Switch to platform-specific adapter later if needed.

## Dependencies
- react-router (v7, framework mode)
- tailwindcss (v4)
- @tailwindcss/typography
- @tailwindcss/vite
- lucide-react
