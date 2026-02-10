# Project Constitution

## Project Identity

- **Name:** claudeabq.dev
- **Purpose:** Community meetup website for Claude Code ABQ — Albuquerque's AI-assisted development group
- **Created:** 2026-02-10

## Governing Principles

### 1. Type Safety First
All code must be written in TypeScript with strict mode enabled. No `any` types without explicit justification. Leverage TypeScript's type system to catch errors at compile time.

### 2. Functional and Declarative
Use functional components exclusively. Prefer pure functions, immutable data patterns, and declarative JSX. No class components, no imperative DOM manipulation.

### 3. Data Separated from Presentation
Content lives in typed data files (`app/data/`), not hardcoded in components. Components receive data as props. This enables content updates without touching component logic.

### 4. Accessibility Is Non-Negotiable
WCAG 2.1 Level AA compliance required. Semantic HTML, proper heading hierarchy, keyboard navigation, focus management, and color contrast verification on every component.

### 5. Keep It Light
No heavy dependencies. System font stacks, minimal JavaScript, pre-rendered pages. Every dependency must justify its bundle cost. The site should load fast on any connection.

## Decision Framework

When making implementation decisions:
1. Does it maintain type safety? If not, find another way.
2. Does it keep the bundle small? If not, find a lighter approach.
3. Is the content in a data file? If not, extract it.
4. Is it accessible by default? If not, fix it before shipping.

## Branch Strategy

- `main` — production, deployed automatically
- Feature branches from `main`, merged via PR
- Pre-render/SSG the index route for static deployment
