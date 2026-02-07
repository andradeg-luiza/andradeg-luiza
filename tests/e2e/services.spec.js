import { test } from "@playwright/test"
import { ServicesPage } from "../support/pages/ServicesPage"

test.describe("Services Page", () => {
  test("Displays service cards", async ({ page }) => {
    const services = new ServicesPage(page)

    await services.goto()

    await services.expectVisible(services.title)

    // Verifica pelo menos a primeira seção
    await services.expectVisible(services.service1)

    // Valida todas as seções
    await services.expectVisible(services.service2)
    await services.expectVisible(services.service3)
    await services.expectVisible(services.service4)
  })
})
