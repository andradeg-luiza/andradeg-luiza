import { BasePage } from "./BasePage"

export class IndexPage extends BasePage {
  constructor(page) {
    super(page)

    this.avatar = page.locator("img[alt='Luiza Gusmão']")
    this.title = page.getByRole("heading", { level: 1 })
    this.paragraph = page.locator("p")

    this.darkButton = page.getByRole("button", { name: "Dark" })
    this.lightButton = page.getByRole("button", { name: "Light" })

    this.sectionTitle = page.getByRole("heading", { name: "A Clear and Structured Presentation" })
    this.sectionSubtitle = page.getByText(
      "Explore my experience, technologies, projects, products, and the evolution of my career"
    )
  }

  async goto() {
    await super.goto("/")
  }

  async enableDark() {
    await this.darkButton.click()
  }

  async enableLight() {
    await this.lightButton.click()
  }
}
