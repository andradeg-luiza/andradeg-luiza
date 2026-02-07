import { BasePage } from "./BasePage"

export class HeaderPage extends BasePage {
  constructor(page) {
    super(page)

    // Header root
    this.header = page.getByTestId("header")

    // Main navigation
    this.homeLink = page.getByTestId("nav-home")
    this.aboutLink = page.getByTestId("nav-about")
    this.servicesLink = page.getByTestId("nav-services")
    this.projectsLink = page.getByTestId("nav-projects")
    this.techLink = page.getByTestId("nav-tech")
    this.timelineLink = page.getByTestId("nav-timeline")
    this.contactLink = page.getByTestId("nav-contact")
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
