import { test } from "@playwright/test"
import { ProjectsPage } from "../support/pages/ProjectsPage"

test.describe("Projects Page", () => {
  test("Displays project cards", async ({ page }) => {
    const projects = new ProjectsPage(page)

    await projects.goto()

    await projects.expectVisible(projects.title)

    // Verifica pelo menos o primeiro card (seção 1)
    await projects.expectVisible(projects.project1)

    // Valida todos os projetos
    await projects.expectVisible(projects.project2)
    await projects.expectVisible(projects.project3)
    await projects.expectVisible(projects.project4)
    await projects.expectVisible(projects.project5)
  })
})