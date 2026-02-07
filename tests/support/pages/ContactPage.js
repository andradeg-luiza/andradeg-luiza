import { BasePage } from "./BasePage"

export class ContactPage extends BasePage {
  constructor(page) {
    super(page)

    this.title = page.getByRole("heading", { name: /contact/i })

    this.nameInput = page.getByRole("textbox", { name: /name/i })
    this.emailInput = page.getByRole("textbox", { name: /email/i })
    this.messageInput = page.getByRole("textbox", { name: /message/i })

    this.submitButton = page.getByRole("button", { name: /send|submit/i })

    this.emailLink = page.getByRole("link", { name: /email/i })
    this.linkedinLink = page.getByRole("link", { name: /linkedin/i })
    this.githubLink = page.getByRole("link", { name: /github/i })
  }

  async goto() {
    await super.goto("/contact")
  }

  async fillForm({ name, email, message }) {
    if (name) await this.nameInput.fill(name)
    if (email) await this.emailInput.fill(email)
    if (message) await this.messageInput.fill(message)
  }

  async submit() {
    await this.submitButton.click()
  }
}
