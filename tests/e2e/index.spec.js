import { test } from "@playwright/test"
import { IndexPage } from "../support/pages/IndexPage"

test.describe("Home Page", () => {
  test("carrega e alterna tema corretamente", async ({ page }) => {
    const home = new IndexPage(page)

    await home.goto()

    await home.expectVisible(home.title)
    await home.expectVisible(home.avatar)
    await home.expectVisible(home.paragraph)

    await home.enableDark()
    await home.expectHasClass(home.html(), "dark")

    await home.enableLight()
    await home.expectNotHasClass(home.html(), "dark")
  })
})
