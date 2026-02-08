# Changelog

All notable changes to this project will be documented in this file.  
This project follows a clear versioning and release structure to ensure traceability and transparency.

---

## [1.0.0] — Initial Release

### Added
- Full static website built with Astro.
- Pages: Home, About, Technologies, Projects, Timeline, Services, Contact.
- Custom design system using TailwindCSS.
- Global layout with BaseLayout, Header, and Footer.
- Core components: Card, SectionTitle, ResponsiveGrid, Avatar, Button.
- Dark/light theme system with anti‑flash script.
- Global styling architecture.
- Initial documentation structure.

---

## [1.1.0] — Automated E2E Testing

### Added
- End‑to‑end tests using Playwright.
- Page Object Model structure for all pages.
- Stable `data-testid` attributes across components and pages.
- Test utilities and navigation helpers.

### Improved
- Component attribute forwarding (Button, Avatar, Card).
- Consistency across all pages (Home, About, Projects, Timeline, Tech, Services, Contact).
- Refactored layout and components for maintainability.

---

## [1.2.0] — CI/CD (Upcoming)

### Planned
- GitHub Actions pipeline for build, lint, and Playwright tests.
- Deployment pipeline to GitHub Pages.
- Automatic regression artifacts (trace, video, snapshots).