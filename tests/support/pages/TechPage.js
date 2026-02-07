// tests/support/pages/tech.js
import { BasePage } from "./BasePage"

export class TechPage extends BasePage {
  constructor(page) {
    super(page)

    this.title = page.getByRole("heading", { name: /tech|technologies/i })

    this.techCards = page.locator("[data-testid='tech-card']")

    this.frontendSection = page.getByRole("heading", { name: /frontend/i })
    this.backendSection = page.getByRole("heading", { name: /backend/i })
    this.qaSection = page.getByRole("heading", { name: /qa|quality/i })
    this.automationSection = page.getByRole("heading", { name: /automation/i })

    this.techLabels = page.locator("[data-testid='tech-label']")
  }

  async goto() {
    await super.goto("/tech")
  }
}
