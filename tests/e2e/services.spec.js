import { test } from "@playwright/test"
import { ServicesPage } from "../support/pages/ServicesPage"

test.describe("Services Page", () => {
  test("exibe cards de serviços", async ({ page }) => {
    const services = new ServicesPage(page)

    await services.goto()

    await services.expectVisible(services.title)
    await services.expectVisible(services.serviceCards.first())
  })
})
