import { test, expect } from "@playwright/test"

test("Index: valida todos os componentes da página", async ({ page }) => {
  await page.goto("/")

  // 1. Avatar
  const avatar = page.locator('img[alt="Luiza Gusmão"]')
  await expect(avatar).toBeVisible()

  // 2. Headline principal (h1)
  const headline = page.locator("h1")
  await expect(headline).toBeVisible()
  await expect(headline).toContainText("A Professional Overview")

  // 3. Subheadline
  const subheadline = page.locator("p")
  await expect(subheadline.first()).toBeVisible()

  // 4. Botões Light e Dark (corrigido)
  const lightButton = page.locator("text=Light")
  const darkButton = page.locator("text=Dark")

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
