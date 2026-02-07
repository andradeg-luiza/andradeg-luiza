import { BasePage } from "./BasePage"

export class ProjectsPage extends BasePage {
  constructor(page) {
    super(page)

    this.title = page.getByRole("heading", { name: /projects/i })

    this.projectCards = page.locator("[data-testid='project-card']")

    this.repoLinks = page.getByRole("link", { name: /github|repo|source/i })
    this.demoLinks = page.getByRole("link", { name: /demo|live/i })
  }

  async goto() {
    await super.goto("/projects")
  }

  async openFirstProjectRepo() {
    await this.repoLinks.first().click()
  }

  async openFirstProjectDemo() {
    await this.demoLinks.first().click()
  }
}
