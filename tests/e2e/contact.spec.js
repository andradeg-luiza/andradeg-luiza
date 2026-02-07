import { test } from "@playwright/test"
import { ContactPage } from "../support/pages/ContactPage"

test.describe("Contact Page", () => {
  test("exibe formulário de contato", async ({ page }) => {
    const contact = new ContactPage(page)

    await contact.goto()

    await contact.expectVisible(contact.title)
    await contact.expectVisible(contact.nameInput)
    await contact.expectVisible(contact.emailInput)
    await contact.expectVisible(contact.messageInput)
    await contact.expectVisible(contact.submitButton)
  })
})
