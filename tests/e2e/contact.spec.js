import { test } from "@playwright/test"
import { ContactPage } from "../support/pages/ContactPage"

test.describe("Contact Page", () => {
  test("Displays contact form", async ({ page }) => {
    const contact = new ContactPage(page)

    await contact.goto()

    await contact.expectVisible(contact.title)

    // WhatsApp
    await contact.expectVisible(contact.whatsappSection)
    await contact.expectVisible(contact.whatsappTitle)
    await contact.expectVisible(contact.whatsappText)
    await contact.expectVisible(contact.whatsappLink)

    // Email
    await contact.expectVisible(contact.emailSection)
    await contact.expectVisible(contact.emailTitle)
    await contact.expectVisible(contact.emailText)
    await contact.expectVisible(contact.emailLink)

    // LinkedIn
    await contact.expectVisible(contact.linkedinSection)
    await contact.expectVisible(contact.linkedinTitle)
    await contact.expectVisible(contact.linkedinText)
    await contact.expectVisible(contact.linkedinLink)
  })
})
