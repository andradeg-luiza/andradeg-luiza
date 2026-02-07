import { test } from "@playwright/test"
import { TechPage } from "../support/pages/TechPage"

test.describe("Tech Page", () => {
  test("Displays tecnologies", async ({ page }) => {
    const tech = new TechPage(page)

    await tech.goto()

    await tech.expectVisible(tech.title)

    // Verifica pelo menos o primeiro card da primeira seção (QA)
    await tech.expectVisible(tech.qaCard1)

    // Valida todos os cards
    await tech.expectVisible(tech.qaCard2)
    await tech.expectVisible(tech.qaCard3)

    await tech.expectVisible(tech.devtoolsCard1)
    await tech.expectVisible(tech.devtoolsCard2)
    await tech.expectVisible(tech.devtoolsCard3)

    await tech.expectVisible(tech.frontendCard1)
    await tech.expectVisible(tech.frontendCard2)
    await tech.expectVisible(tech.frontendCard3)

    await tech.expectVisible(tech.backendCard1)
    await tech.expectVisible(tech.backendCard2)
    await tech.expectVisible(tech.backendCard3)

    await tech.expectVisible(tech.cicdCard1)
    await tech.expectVisible(tech.cicdCard2)
    await tech.expectVisible(tech.cicdCard3)
  })
})
