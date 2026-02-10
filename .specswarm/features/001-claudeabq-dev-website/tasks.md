# Tasks: claudeabq.dev Website

## T001: Scaffold React Router v7 Project
- **Type:** setup
- **Dependencies:** none
- **Description:** Scaffold a new React Router v7 framework mode project with TypeScript. Install dependencies: tailwindcss v4, @tailwindcss/vite, @tailwindcss/typography, lucide-react. Configure react-router.config.ts for pre-rendering.

## T002: Configure Styling Foundation
- **Type:** frontend
- **Dependencies:** T001
- **Description:** Set up app/styles/app.css with Tailwind v4 imports and Anthropic color palette as CSS custom properties. Configure system font stacks. Extend Tailwind theme with custom colors.

## T003: Create Data Layer
- **Type:** utility
- **Dependencies:** T001
- **Description:** Create typed data files: app/data/meetups.ts (Meetup interface + Feb 12 meetup data with real Lu.ma URL https://luma.com/fvxse8v8), app/data/resources.ts (6 resource links), app/data/recordings.ts (empty array with Recording type).

## T004: Build Nav Component
- **Type:** frontend
- **Dependencies:** T002
- **Description:** Create app/components/Nav.tsx — sticky navigation with anchor links to all sections. Mobile-responsive hamburger menu. Brand name on left, section links on right.

## T005: Build Hero Section
- **Type:** frontend
- **Dependencies:** T002, T003
- **Description:** Create app/components/Hero.tsx — large heading "Claude Code ABQ", tagline, subtext, primary CTA button linking to Lu.ma, secondary "Learn more" smooth-scroll link. Faint gradient background from --color-light to --color-offwhite.

## T006: Build NextMeetup Section
- **Type:** frontend
- **Dependencies:** T002, T003
- **Description:** Create app/components/NextMeetup.tsx — prominent card showing next meetup details (date, time, location, description) from meetups data. Register button + calendar links. Fallback "TBA" state when no upcoming meetup.

## T007: Build About Section
- **Type:** frontend
- **Dependencies:** T002
- **Description:** Create app/components/About.tsx — "What is Claude Code ABQ?" heading with 2-3 conversational paragraphs about the group. Practitioner tone.

## T008: Build WhatToExpect Section
- **Type:** frontend
- **Dependencies:** T002
- **Description:** Create app/components/WhatToExpect.tsx — 4 feature cards (Show & Tell, Hands-On Time, Honest Comparisons, All Levels Welcome) with Lucide icons, titles, and descriptions.

## T009: Build CodeOfConduct Section
- **Type:** frontend
- **Dependencies:** T002
- **Description:** Create app/components/CodeOfConduct.tsx — 5 rules displayed as clean list items with bold titles and descriptions.

## T010: Build Recordings Section
- **Type:** frontend
- **Dependencies:** T002, T003
- **Description:** Create app/components/Recordings.tsx — placeholder "Recordings coming soon" with YouTube subscribe button. Design structure to accept video cards from recordings data file.

## T011: Build Resources Section
- **Type:** frontend
- **Dependencies:** T002, T003
- **Description:** Create app/components/Resources.tsx — grid of 6 resource cards from resources data file. Each card has title, description, external link with icon indicator.

## T012: Build Footer Component
- **Type:** frontend
- **Dependencies:** T002
- **Description:** Create app/components/Footer.tsx — brand name, tagline, hosted-by credit, organized-by credit, social links (GitHub, YouTube, Lu.ma, Slack placeholders), Anthropic disclaimer, copyright year.

## T013: Assemble Layout and Index Route
- **Type:** frontend
- **Dependencies:** T004-T012
- **Description:** Update app/root.tsx with skip-to-content link, Nav, Outlet, and SEO meta tags (title, description, OG, canonical). Create app/routes/home.tsx composing all section components in scroll order.

## T014: Build Verification
- **Type:** validation
- **Dependencies:** T013
- **Description:** Run TypeScript type check and production build. Verify no errors, pre-rendering works, and bundle is within budget.
