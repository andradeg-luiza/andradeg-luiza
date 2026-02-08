# Component Guidelines

This document defines the standards for creating and maintaining components in this project.  
The goal is to ensure consistency, clarity, and maintainability across the entire codebase.

---

## Principles

- Components must be reusable and self-contained.
- Avoid business logic inside UI components.
- Use attribute forwarding (`...rest`) when appropriate.
- Keep markup semantic and accessible.
- Maintain consistency with the design system and Tailwind utility classes.
- Expose `data-testid` only when required for E2E testing.

---

## Naming Conventions

- Use **PascalCase** for component filenames (e.g., `Card.astro`, `SectionTitle.astro`).
- Keep names descriptive and aligned with the component’s purpose.
- Avoid abbreviations unless they are widely understood.

---

## Component Structure

A typical component follows this pattern:

```astro
---
const { propA, propB, ...rest } = Astro.props
---
<div {...rest}>
  ...
</div>
```

### Rules

- Always destructure props at the top.
- Forward remaining attributes using `...rest` when appropriate.
- Keep the component’s public API minimal and intentional.

---

## Styling

- Use TailwindCSS utility classes.
- Follow the design system tokens for:
  - colors  
  - spacing  
  - typography  
  - borders  
  - shadows  
- Avoid inline styles unless strictly necessary.
- Ensure dark mode compatibility using `dark:` variants.

---

## Accessibility

- Use semantic HTML elements.
- Provide `aria-label` for interactive elements without visible text.
- Ensure focus states are visible and consistent (`shadow-focus`).
- Avoid removing outlines unless replaced with an accessible alternative.

---

## Component Categories

### Layout Components
- `BaseLayout.astro`
- `Header.astro`
- `Footer.astro`

These define the global structure and must remain stable.

### UI Components
- `Card.astro`
- `SectionTitle.astro`
- `ResponsiveGrid.astro`
- `Button.astro`
- `Avatar.astro`

These follow the design system and are used across multiple pages.

### Page‑Specific Components
Used only within a specific page or feature.  
Should not be placed in the global components folder unless reused.

---

## Testing Requirements

This project uses **Playwright** for E2E testing.

### Component Testing Rules

- Components used in E2E flows must expose stable `data-testid` attributes.
- Avoid dynamic selectors.
- Interactions should be tested through Page Objects, not directly.

---

## When to Create a New Component

Create a new component when:

- the same UI pattern appears in more than one place  
- a piece of UI has a clear, reusable purpose  
- a layout or structure becomes too large or repetitive  

Avoid creating components when:

- the UI is used only once  
- abstraction reduces clarity  
- the component becomes too generic or difficult to maintain  

---

## Future Improvements

Planned enhancements for the component system:

- additional base components (tabs, alerts, badges)
- expanded accessibility guidelines
- component-level documentation with examples
