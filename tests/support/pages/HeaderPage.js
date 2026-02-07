import { BasePage } from "./BasePage"

export class HeaderPage extends BasePage {
  constructor(page) {
    super(page)

    this.header = page.locator("header")

    this.homeLink = page.getByRole("link", { name: "Home" })
    this.aboutLink = page.getByRole("link", { name: "About" })
    this.servicesLink = page.getByRole("link", { name: "Services" })
    this.projectsLink = page.getByRole("link", { name: "Projects" })
    this.techLink = page.getByRole("link", { name: "Tech" })
    this.timelineLink = page.getByRole("link", { name: "Timeline" })
    this.contactLink = page.getByRole("link", { name: "Contact" })
  }

  async goto() {
    await super.goto("/")
  }

  async clickHome() {
    await this.homeLink.click()
  }

  async clickAbout() {
    await this.aboutLink.click()
  }

  async clickServices() {
    await this.servicesLink.click()
  }

  async clickProjects() {
    await this.projectsLink.click()
  }

  async clickTech() {
    await this.techLink.click()
  }

  async clickTimeline() {
    await this.timelineLink.click()
  }

  async clickContact() {
    await this.contactLink.click()
  }
}
