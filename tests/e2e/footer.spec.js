import { test } from "@playwright/test"
import { FooterPage } from "../support/pages/FooterPage"

test.describe("Footer", () => {
  test("exibe footer e links sociais", async ({ page }) => {
    const footer = new FooterPage(page)

    await footer.goto()

    await footer.expectVisible(footer.footer)
    await footer.expectVisible(footer.githubLink)
    await footer.expectVisible(footer.linkedinLink)
    await footer.expectVisible(footer.emailLink)
  })
})
