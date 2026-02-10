# Quality Standards

## Project: claudeabq.dev
- **Created:** 2026-02-10
- **Quality Level:** Standard

---

## Quality Gates

| Gate | Threshold | Enforced |
|------|-----------|----------|
| Minimum Quality Score | 80/100 | Yes |
| Minimum Test Coverage | 80% | Yes |
| TypeScript Strict Mode | Required | Yes |
| Zero `any` Types | Required (exceptions documented) | Yes |
| Build Passes | Required | Yes |
| No Lint Errors | Required | Yes |

---

## Performance Budgets

| Metric | Budget | Enforced |
|--------|--------|----------|
| Total Bundle Size | < 500 KB | Yes |
| Initial Load (JS) | < 100 KB | Yes |
| Max Chunk Size | < 200 KB | Yes |
| Largest Contentful Paint | < 2.5s | Yes |
| First Input Delay | < 100ms | Yes |
| Cumulative Layout Shift | < 0.1 | Yes |
| Time to Interactive | < 3.0s | Yes |

Note: As a pre-rendered static site, these budgets should be easily achievable. The site should load near-instantly on most connections.

---

## Code Quality

| Metric | Threshold |
|--------|-----------|
| Cyclomatic Complexity | Max 10 per function |
| Max File Length | 300 lines |
| Max Function Length | 50 lines |
| Max Function Parameters | 5 |

---

## Accessibility Standards

| Requirement | Standard |
|-------------|----------|
| WCAG Compliance | 2.1 Level AA |
| Heading Hierarchy | Single h1, logical h2/h3 |
| Skip Navigation | Skip-to-content link required |
| Focus Styles | Visible on all interactive elements |
| Color Contrast | AA ratio on all text |
| Keyboard Navigation | Full site navigable via keyboard |
| Alt Text | Required on all images |
| External Links | `rel="noopener noreferrer"` on all `target="_blank"` |

---

## SEO Requirements

| Requirement | Value |
|-------------|-------|
| Page Title | "Claude Code ABQ — Albuquerque's AI-Assisted Development Community" |
| Meta Description | Required |
| Open Graph Tags | title, description, image |
| Canonical URL | `https://claudeabq.dev` |
| Semantic HTML | Required |

---

## Testing Requirements

| Type | Required | Framework |
|------|----------|-----------|
| Unit Tests | Yes | Vitest |
| Component Tests | Yes | Testing Library |
| E2E Tests | Recommended | Playwright |
| Accessibility Tests | Yes | axe-core |

### Test Requirements
- All data utility functions must have unit tests
- All components must render without errors
- Accessibility audit must pass on every page

---

## Code Review

| Requirement | Value |
|-------------|-------|
| Required Before Merge | Yes |
| Minimum Reviewers | 1 |

---

## CI/CD

| Requirement | Value |
|-------------|-------|
| Block Merge on Failure | Yes |
| Required Checks | Build, Lint, Type Check, Tests |

---

## Exemptions

*No exemptions currently granted.*

---

## Notes

- Quality level: Standard (80/80)
- Created by `/specswarm:init`
- Enforced by `/specswarm:ship` before merge
- Review and adjust these standards as the project evolves
