import { BasePage } from "./BasePage"

export class ServicesPage extends BasePage {
  constructor(page) {
    super(page)

    // Full page
    this.pageRoot = page.getByTestId("services-page")

    // Header
    this.header = page.getByTestId("services-header")
    this.title = page.getByTestId("services-title")

    // Service sections (1 to 4)
    this.service1 = page.getByTestId("services-section-1")
    this.service2 = page.getByTestId("services-section-2")
    this.service3 = page.getByTestId("services-section-3")
    this.service4 = page.getByTestId("services-section-4")

    // Contact links (WhatsApp)
    this.service1Link = page.getByTestId("services-section-1-link")
    this.service2Link = page.getByTestId("services-section-2-link")
    this.service3Link = page.getByTestId("services-section-3-link")
    this.service4Link = page.getByTestId("services-section-4-link")
  }

  async goto() {
    await super.goto("/services/")
  }

  async openService1() {
    await this.service1Link.click()
  }

  async openService2() {
    await this.service2Link.click()
  }

  async openService3() {
    await this.service3Link.click()
  }

  async openService4() {
    await this.service4Link.click()
  }
}
