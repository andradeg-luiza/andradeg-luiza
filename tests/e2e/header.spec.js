import { test, expect } from "@playwright/test"
import { HeaderPage } from "../support/pages/HeaderPage"

test.describe("Header", () => {
  test("Navigation links work", async ({ page }) => {
    const header = new HeaderPage(page)

    await header.goto()

    await header.clickAbout()
    await expect(page).toHaveURL(/about/)

    await header.clickServices()
    await expect(page).toHaveURL(/services/)

    await header.clickProjects()
    await expect(page).toHaveURL(/projects/)

    await header.clickTech()
    await expect(page).toHaveURL(/tech/)

    await header.clickTimeline()
    await expect(page).toHaveURL(/timeline/)

    await header.clickContact()
    await expect(page).toHaveURL(/contact/)
  })
})
