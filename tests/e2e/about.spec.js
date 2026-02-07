import { test } from "@playwright/test"
import { AboutPage } from "../support/pages/AboutPage"

test.describe("About Page", () => {
  test("carrega conteúdo principal", async ({ page }) => {
    const about = new AboutPage(page)

    await about.goto()

    await about.expectVisible(about.title)
    await about.expectVisible(about.intro)
    await about.expectVisible(about.experienceSection)
  })
})
