import { test } from "@playwright/test"
import { IndexPage } from "../support/pages/IndexPage"

test.describe("Home Page", () => {
  test("It loads and switches themes correctly", async ({ page }) => {
    const home = new IndexPage(page)

    await home.goto()

    await home.expectVisible(home.title)
    await home.expectVisible(home.avatar)
    await home.expectVisible(home.intro)

    await home.enableDark()
    await home.expectHasClass(home.html(), "dark")

    await home.enableLight()
    await home.expectNotHasClass(home.html(), "dark")
  })
})
