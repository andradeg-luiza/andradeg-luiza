import { BasePage } from "./BasePage"

export class FooterPage extends BasePage {
  constructor(page) {
    super(page)

    // Footer root
    this.footer = page.getByTestId("footer")

    // Footer text
    this.text = page.getByTestId("footer-text")

    // Social links
    this.githubLink = page.getByTestId("footer-github")
    this.linkedinLink = page.getByTestId("footer-linkedin")
    this.whatsappLink = page.getByTestId("footer-whatsapp")

    // Home link (left icon)
    this.homeLink = page.getByTestId("footer-home")
  }

  async goto() {
    await super.goto("/")
  }

  async clickGithub() {
    await this.githubLink.click()
  }

  async clickLinkedIn() {
    await this.linkedinLink.click()
  }

  async clickWhatsapp() {
    await this.whatsappLink.click()
  }

  async clickHome() {
    await this.homeLink.click()
  }
}
