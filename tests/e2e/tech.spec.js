import { test } from "@playwright/test"
import { TechPage } from "../support/pages/TechPage"

test.describe("Tech Page", () => {
  test("exibe tecnologias", async ({ page }) => {
    const tech = new TechPage(page)

    await tech.goto()

    await tech.expectVisible(tech.title)
    await tech.expectVisible(tech.techCards.first())
  })
})
