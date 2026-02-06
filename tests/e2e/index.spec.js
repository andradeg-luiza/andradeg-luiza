import { test, expect } from "@playwright/test"

test("Index: valida todos os componentes da página", async ({ page }) => {
  await page.goto("/")

  // 1. Avatar
  const avatar = page.locator('img[alt="Luiza Gusmão"]')
  await expect(avatar).toBeVisible()

  // 2. Headline principal
  const headline = page.locator("h1")
  await expect(headline).toBeVisible()

  // 3. Subheadline
  const subheadline = page.locator("p")
  await expect(subheadline.first()).toBeVisible()

  // 4. Botões Light e Dark (versão estável)
  const buttons = page.locator("main div.flex.gap-4 > *")
  await expect(buttons).toHaveCount(2)

  const lightButton = buttons.nth(0)
  const darkButton = buttons.nth(1)

  await expect(lightButton).toBeVisible()
  await expect(darkButton).toBeVisible()

  await lightButton.click()
  await darkButton.click()

  // 5. SectionTitle
  const sectionTitle = page.getByRole("heading", { name: "A Clear and Structured Presentation" })
  await expect(sectionTitle).toBeVisible()

  const sectionSubtitle = page.locator("p", { hasText: "Explore my experience" })
  await expect(sectionSubtitle).toBeVisible()

  // 6. Links
  const links = page.locator("a")
  const totalLinks = await links.count()

  for (let i = 0; i < totalLinks; i++) {
    const href = await links.nth(i).getAttribute("href")
    if (!href || href.startsWith("#")) continue

    const newPage = await page.context().newPage()
    const response = await newPage.goto(href)
    expect(response.status()).toBeLessThan(400)
    await newPage.close()
  }
})
