import { BasePage } from "./BasePage"

export class ProjectsPage extends BasePage {
  constructor(page) {
    super(page)

    // Full page
    this.pageRoot = page.getByTestId("projects-page")

    // Header
    this.header = page.getByTestId("projects-header")
    this.title = page.getByTestId("projects-title")

    // Project sections (1 to 5)
    this.project1 = page.getByTestId("projects-section-1")
    this.project2 = page.getByTestId("projects-section-2")
    this.project3 = page.getByTestId("projects-section-3")
    this.project4 = page.getByTestId("projects-section-4")
    this.project5 = page.getByTestId("projects-section-5")

    // Project links
    this.project1Link = page.getByTestId("projects-section-1-link")
    this.project2Link = page.getByTestId("projects-section-2-link")
    this.project3Link = page.getByTestId("projects-section-3-link")
    this.project4Link = page.getByTestId("projects-section-4-link")
    this.project5Link = page.getByTestId("projects-section-5-link")
  }

  async goto() {
    await super.goto("/projects/")
  }

  async openProject1() {
    await this.project1Link.click()
  }

  async openProject2() {
    await this.project2Link.click()
  }

  async openProject3() {
    await this.project3Link.click()
  }

  async openProject4() {
    await this.project4Link.click()
  }

  async openProject5() {
    await this.project5Link.click()
  }
}
