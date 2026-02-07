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
    this.emailLink = page.getByTestId("footer-email")
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

  async clickEmail() {
    await this.emailLink.click()
  }
}
