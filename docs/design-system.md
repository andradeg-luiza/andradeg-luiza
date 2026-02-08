# Design System

This document defines the visual and structural design rules used throughout the project.  
It ensures consistency, clarity, and maintainability across all pages and components.

---

## Principles

The design system is guided by the following principles:

- Clarity  
- Consistency  
- Accessibility  
- Minimalism  
- Responsiveness  
- Predictable behavior in light and dark themes  

---

## Color System

Colors are defined in the Tailwind configuration under two main namespaces:

### Brand Colors
Used for identity, highlights, and key UI elements.

- brand-wine  
- brand-beige  
- brand-surface  

### Neutral Colors (neutralTech)
Used for text, borders, backgrounds, and subtle UI elements.

- neutralTech-50 → neutralTech-900  

### Dark Mode

Dark mode is handled via Tailwind’s `dark:` variants.  
The theme is toggled using:

- a persistent `localStorage` value  
- a no‑flash script in `BaseLayout.astro`  

---

## Typography

Typography is defined through Tailwind utility classes and custom text tokens.

### Headings
- `text-h1`  
- `text-h2`  
- `text-h3`  
- `text-h4`  

Used consistently across pages and components.

### Body Text
- `text-body` for paragraphs and general content  
- `text-small` for metadata and secondary information  

### Font
- Sans‑serif, applied globally via `global.css`  

---

## Spacing & Layout

Spacing tokens ensure consistent vertical rhythm across the website.

### Global Spacing
- `py-section`  
- `py-paddingPage`  
- `gap-6`  
- `gap-12`  

### Container
All pages use:

```
max-w-container
mx-auto
px-4
```

This ensures consistent alignment and readable line lengths.

---

## Components

The design system includes a set of reusable components:

- **SectionTitle**  
- **Card**  
- **ResponsiveGrid**  
- **Header**  
- **Footer**  
- **Avatar**  
- **Button**  

### Component Rules

- Use semantic HTML.  
- Use Tailwind utility classes.  
- Support dark mode.  
- Forward attributes when appropriate (`...rest`).  
- Expose `data-testid` only when needed for E2E tests.  
- Avoid inline styles.  

---

## Icons

Icons are inline SVGs to ensure:

- consistent styling  
- color inheritance via `currentColor`  
- no external dependencies  

Used primarily in:

- Header  
- Footer  
- Cards (optional)  

---

## Theme System

The theme system includes:

- a no‑flash script to apply dark mode before rendering  
- a toggle script (`/scripts/theme.js`)  
- Tailwind’s `dark:` classes for styling  

Dark mode affects:

- backgrounds  
- text colors  
- borders  
- component surfaces  

---

## Accessibility

The design system enforces:

- semantic structure  
- accessible color contrast  
- focus states via `shadow-focus`  
- `aria-label` for interactive elements without visible text  
- keyboard‑friendly navigation  

---

## Future Enhancements

Planned improvements for the design system:

- token documentation in JSON/YAML format  
- expanded spacing scale  
- additional component patterns (tabs, alerts, badges)  
- accessibility audit and refinements  
