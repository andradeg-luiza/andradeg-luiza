import { BasePage } from "./BasePage"

export class ContactPage extends BasePage {
  constructor(page) {
    super(page)

    // Full page
    this.pageRoot = page.getByTestId("contact-page")

    // Header
    this.header = page.getByTestId("contact-header")
    this.title = page.getByTestId("contact-title")

    // WhatsApp section
    this.whatsappSection = page.getByTestId("contact-section-whatsapp")
    this.whatsappTitle = page.getByTestId("contact-whatsapp-title")
    this.whatsappText = page.getByTestId("contact-whatsapp-text")
    this.whatsappLink = page.getByTestId("contact-whatsapp-link")

    // Email section
    this.emailSection = page.getByTestId("contact-section-email")
    this.emailTitle = page.getByTestId("contact-email-title")
    this.emailText = page.getByTestId("contact-email-text")
    this.emailLink = page.getByTestId("contact-email-link")

    // LinkedIn section
    this.linkedinSection = page.getByTestId("contact-section-linkedin")
    this.linkedinTitle = page.getByTestId("contact-linkedin-title")
    this.linkedinText = page.getByTestId("contact-linkedin-text")
    this.linkedinLink = page.getByTestId("contact-linkedin-link")
  }

  async goto() {
    await super.goto("/contact")
  }
}
