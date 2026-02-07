import { BasePage } from "./BasePage"

export class TechPage extends BasePage {
  constructor(page) {
    super(page)

    // Full page
    this.pageRoot = page.getByTestId("tech-page")

    // Header
    this.header = page.getByTestId("tech-header")
    this.title = page.getByTestId("tech-title")

    // QA Section
    this.qaSection = page.getByTestId("tech-qa-section")
    this.qaTitle = page.getByTestId("tech-qa-title")
    this.qaCard1 = page.getByTestId("tech-qa-card-1")
    this.qaCard2 = page.getByTestId("tech-qa-card-2")
    this.qaCard3 = page.getByTestId("tech-qa-card-3")

    // DevTools Section
    this.devtoolsSection = page.getByTestId("tech-devtools-section")
    this.devtoolsTitle = page.getByTestId("tech-devtools-title")
    this.devtoolsCard1 = page.getByTestId("tech-devtools-card-1")
    this.devtoolsCard2 = page.getByTestId("tech-devtools-card-2")
    this.devtoolsCard3 = page.getByTestId("tech-devtools-card-3")

    // Front-end Section
    this.frontendSection = page.getByTestId("tech-frontend-section")
    this.frontendTitle = page.getByTestId("tech-frontend-title")
    this.frontendCard1 = page.getByTestId("tech-frontend-card-1")
    this.frontendCard2 = page.getByTestId("tech-frontend-card-2")
    this.frontendCard3 = page.getByTestId("tech-frontend-card-3")

    // Back-end Section
    this.backendSection = page.getByTestId("tech-backend-section")
    this.backendTitle = page.getByTestId("tech-backend-title")
    this.backendCard1 = page.getByTestId("tech-backend-card-1")
    this.backendCard2 = page.getByTestId("tech-backend-card-2")
    this.backendCard3 = page.getByTestId("tech-backend-card-3")

    // CI/CD Section
    this.cicdSection = page.getByTestId("tech-cicd-section")
    this.cicdTitle = page.getByTestId("tech-cicd-title")
    this.cicdCard1 = page.getByTestId("tech-cicd-card-1")
    this.cicdCard2 = page.getByTestId("tech-cicd-card-2")
    this.cicdCard3 = page.getByTestId("tech-cicd-card-3")
  }

  async goto() {
    await super.goto("/tech")
  }
}
