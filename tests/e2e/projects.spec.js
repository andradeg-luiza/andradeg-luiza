import { test } from "@playwright/test"
import { ProjectsPage } from "../support/pages/ProjectsPage"

test.describe("Projects Page", () => {
  test("exibe cards de projetos", async ({ page }) => {
    const projects = new ProjectsPage(page)

    await projects.goto()

    await projects.expectVisible(projects.title)
    await projects.expectVisible(projects.projectCards.first())
  })
})
