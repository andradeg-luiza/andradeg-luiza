import { test } from "@playwright/test"
import { FooterPage } from "../support/pages/FooterPage"

test.describe("Footer", () => {
  test("Displays footer and social media links", async ({ page }) => {
    const footer = new FooterPage(page)

    await footer.goto()

    await footer.expectVisible(footer.footer)
    await footer.expectVisible(footer.homeLink)
    await footer.expectVisible(footer.linkedinLink)
    await footer.expectVisible(footer.githubLink)
    await footer.expectVisible(footer.whatsappLink)
    await footer.expectVisible(footer.text)
  })
})

