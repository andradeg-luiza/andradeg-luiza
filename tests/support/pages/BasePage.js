import { expect } from "@playwright/test"

export class BasePage {
  constructor(page) {
    this.page = page
  }

  async goto(path = "/") {
    await this.page.goto(path)
  }

  root(testId) {
    return this.page.getByTestId(testId)
  }

  html() {
    return this.page.locator("html")
  }

  async expectVisible(locator) {
    await expect(locator).toBeVisible()
  }

  async expectHidden(locator) {
    await expect(locator).toBeHidden()
  }

  async expectHasClass(locator, className) {
    await expect(locator).toHaveClass(new RegExp(className))
  }

  async expectNotHasClass(locator, className) {
    await expect(locator).not.toHaveClass(new RegExp(className))
  }
}
