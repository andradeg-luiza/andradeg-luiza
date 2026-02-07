import { BasePage } from "./BasePage"

export class FooterPage extends BasePage {
  constructor(page) {
    super(page)

    this.footer = page.locator("footer")

    this.copyright =
      page.getByText(/©|202|Luiza|Gusmão|All rights reserved/i)

    this.githubLink = page.getByRole("link", { name: /github/i })
    this.linkedinLink = page.getByRole("link", { name: /linkedin/i })
    this.emailLink = page.getByRole("link", { name: /email|contact/i })
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
