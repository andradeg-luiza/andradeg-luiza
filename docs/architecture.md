# Architecture Overview

This document describes the structural and architectural decisions behind the project.  
The goal is to maintain a clean, scalable, and predictable codebase that supports both the current static version and future dynamic expansions.

---

## Project Philosophy

The architecture prioritizes:

- clarity  
- maintainability  
- consistency  
- testability  
- separation of concerns  
- minimal JavaScript footprint  

The website is fully static in version 1.x, with a clear path to dynamic expansion in version 2.x.

---

## High-Level Structure

```
src/
  components/
  layouts/
  pages/
  styles/
  lib/
  server/
public/
tests/
docs/
```

### Components (`src/components`)
Reusable UI blocks such as:

- Card  
- SectionTitle  
- ResponsiveGrid  
- Header  
- Footer  
- Avatar  
- Button  

These components follow the design system and are used across multiple pages.

### Layouts (`src/layouts`)
Global wrappers such as:

- BaseLayout.astro  

They define the structure shared across all pages.

### Pages (`src/pages`)
Astro pages mapped directly to routes.  
Each page is responsible only for layout composition and content.

### Styles (`src/styles`)
Global CSS and design system tokens, including:

- `global.css`  
- Tailwind configuration  

### Lib (`src/lib`)
Utility functions, helpers, and shared logic.

### Server (`src/server`)
Reserved for future dynamic features (API routes, server logic).

### Public (`public/`)
Static assets such as:

- icons  
- scripts  
- images  

### Tests (`tests/`)
Contains the Playwright E2E suite:

```
tests/
  e2e/
    support/
      pages/
```

### Docs (`docs/`)
Documentation for architecture, components, testing, and design system.

---

## Rendering Model

The project uses **Astro’s Static Site Generation (SSG)**:

- Pages are rendered at build time.
- No client-side hydration unless explicitly required.
- Minimal JavaScript footprint for performance and accessibility.

---

## Theming Architecture

The theme system includes:

- a no‑flash script executed before page render  
- persistent theme state via `localStorage`  
- Tailwind’s `dark:` variants for styling  

Dark mode affects:

- backgrounds  
- text  
- borders  
- component surfaces  

---

## Component Architecture

Components follow these principles:

- semantic HTML  
- Tailwind utility classes  
- attribute forwarding (`...rest`)  
- dark/light mode compatibility  
- stable `data-testid` for E2E tests  

---

## Routing

Astro’s file‑based routing is used:

```
src/pages/about.astro      → /about
src/pages/projects.astro   → /projects
src/pages/services.astro   → /services
```

Each page imports:

- BaseLayout  
- SectionTitle  
- Components as needed  

---

## Testing Architecture

The project uses **Playwright** for E2E testing only.

- Page Object Model structure  
- Stable selectors via `data-testid`  
- Regression artifacts (traces, screenshots, videos)  
- CI integration for automated validation  

---

## CI/CD Architecture (Planned)

Version 1.2 introduces:

- Build pipeline  
- Linting  
- Playwright tests  
- Deployment to GitHub Pages  

Deployment only occurs if all tests pass.

---

## Future Architecture (2.x)

Planned dynamic features:

- API routes  
- Database integration  
- Admin utilities  
- Dynamic content rendering  
- Authentication (optional)  

---

## Summary

The architecture is intentionally simple, predictable, and scalable.  
It supports:

- a clean static site today  
- a dynamic, API‑driven version in the future  
- a robust testing and CI/CD pipeline  
- a consistent design system across all pages and components  
