import { BasePage } from "./BasePage"

export class ServicesPage extends BasePage {
  constructor(page) {
    super(page)

    this.title = page.getByRole("heading", { name: /services/i })

    this.serviceCards = page.locator("[data-testid='service-card']")

    this.cardHeadings = page.getByRole("heading", { level: 3 })

    this.learnMoreLinks = page.getByRole("link", { name: /learn more|details|saiba mais/i })
  }

  async goto() {
    await super.goto("/services")
  }

  async openFirstServiceDetails() {
    await this.learnMoreLinks.first().click()
  }
}
