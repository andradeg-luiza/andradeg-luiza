# Testing Guidelines

This document describes the testing strategy used in this project.

The current version of the website uses **end‑to‑end testing only**, powered by Playwright.  
There are no unit tests in this version.

---

## Overview

The goal of the testing strategy is to ensure:

- UI stability  
- navigation correctness  
- accessibility of core flows  
- cross‑browser consistency  
- regression protection through traces and snapshots  

All tests are written using the **Page Object Model (POM)** to keep the test suite clean, maintainable, and scalable.

---

## Tools

- **Playwright**  
- **Page Object Model (POM)** structure  
- **data-testid** attributes for stable selectors  

---

## Directory Structure

```
tests/
  e2e/
    support/
      pages/
```

### `pages/`
Contains Page Object classes, one per page or feature.

### `support/`
Contains helpers, fixtures, and shared utilities.

---

## Page Object Model

Each page has a corresponding class that:

- encapsulates selectors  
- exposes actions  
- hides implementation details from the test files  
- improves readability and reduces duplication  

Example:

```js
export class HomePage {
  constructor(page) {
    this.page = page
    this.title = page.getByTestId("home-title")
  }

  async goto() {
    await this.page.goto("/")
  }
}
```

---

## Writing Tests

### Guidelines

- Use only `data-testid` selectors.
- Avoid relying on text or CSS selectors.
- Keep tests short and focused.
- Prefer actions through Page Objects instead of direct page interactions.
- Ensure tests are deterministic and do not depend on timing.

---

## Running Tests

To execute the full E2E suite:

```
npm run test:e2e
```

To run with UI mode:

```
npx playwright test --ui
```

---

## Regression Artifacts

Playwright automatically generates:

- traces  
- videos  
- screenshots  

These artifacts help diagnose failures and are especially useful in CI.

---

## CI Integration

E2E tests run automatically in the CI pipeline before deployment.  
Deployment only occurs if all tests pass.

---

## Requirements for New Features

Any new page or significant UI flow must include:

- a corresponding Page Object  
- at least one E2E test validating navigation or behavior  
- stable `data-testid` attributes  

---

## Future Improvements

Planned enhancements for the testing suite:

- accessibility checks  
- visual regression testing  
- API testing (once the project becomes dynamic)  
