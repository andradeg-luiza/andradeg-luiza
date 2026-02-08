import { BasePage } from "./BasePage"

export class IndexPage extends BasePage {
  constructor(page) {
    super(page)

    // Full page
    this.pageRoot = page.getByTestId("home-page")

    // Key elements
    this.avatar = page.getByTestId("home-avatar")
    this.title = page.getByTestId("home-title")
    this.intro = page.getByTestId("home-intro")

    // Theme buttons
    this.darkButton = page.getByTestId("home-btn-dark")
    this.lightButton = page.getByTestId("home-btn-light")

    // Bottom section (SectionTitle)
    this.sectionTitle = page.getByTestId("home-section-title")
  }

  async goto() {
    // Usa a rota estável gerada pelo Astro
    await super.goto("/index.html")
  }

  async enableDark() {
    await this.darkButton.click()
  }

  async enableLight() {
    await this.lightButton.click()
  }
}
