# Contributing Guidelines

Thank you for your interest in contributing to this project.  
This document outlines the standards, workflows, and expectations for contributions.

---

## Code Style

### General
- Follow the existing architecture and naming conventions.
- Keep components small, focused, and reusable.
- Prefer clarity over cleverness.
- Avoid unnecessary abstractions.

### Astro Components
- Use `data-testid` only when required for automated E2E tests.
- Forward attributes using `...rest` when appropriate.
- Keep markup semantic and accessible.
- Maintain consistency with the design system and Tailwind utility classes.

### CSS & Tailwind
- Use the design system tokens already defined.
- Prefer utility classes over custom CSS.
- Maintain consistent spacing, typography, and color usage.

---

## Commit Messages

Use conventional commits:

```
feat:      new feature
fix:       bug fix
refactor:  code restructuring without behavior change
docs:      documentation updates
test:      test-related changes
chore:     maintenance tasks
```

Examples:

```
refactor(tech): unify section layout and improve readability
test(e2e): stabilize theme toggle selectors
docs: update README with documentation links
```

---

## Branching Strategy

- `main` contains stable, production-ready code.
- Feature branches follow the pattern:

```
feature/<name>
fix/<name>
refactor/<name>
docs/<name>
```

---

## Pull Requests

- Keep PRs focused and small.
- Include a clear description of the change.
- Reference related issues or tasks.
- Ensure all E2E tests pass before submitting.
- Avoid mixing refactors with feature changes.

---

## Testing Requirements

This project uses **Playwright** for end‑to‑end testing.

### E2E Tests
- Required for new pages or major UI flows.
- Use the Page Object Model structure.
- Interact through `data-testid` selectors.
- Tests must be deterministic and stable.

### Running Tests

```
npm run test:e2e
```

---

## Documentation

Any significant architectural or structural change must be reflected in:

- `README.md`
- `docs/architecture.md`
- `docs/components.md` (if applicable)
- `docs/design-system.md` (if applicable)

---

## Code Review Expectations

- Be constructive and objective.
- Focus on clarity, maintainability, and correctness.
- Avoid personal preferences unless they improve consistency.
- Suggest improvements when appropriate.

---

Thank you for helping maintain a clean, scalable, and professional codebase.
