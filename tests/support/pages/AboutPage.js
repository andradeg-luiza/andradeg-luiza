import { BasePage } from "./BasePage"

export class AboutPage extends BasePage {
  constructor(page) {
    super(page)

    // Full page
    this.pageRoot = page.getByTestId("about-page")

    // Key elements
    this.avatar = page.getByTestId("about-avatar")
    this.title = page.getByTestId("about-title")
    this.intro = page.getByTestId("about-intro")

    // Sections
    this.storySection = page.getByTestId("about-section-story")
    this.valuesSection = page.getByTestId("about-section-values")
    this.missionSection = page.getByTestId("about-section-mission")
    this.visionSection = page.getByTestId("about-section-vision")

    // Section titles
    this.storyTitle = page.getByTestId("about-section-story-title")
    this.valuesTitle = page.getByTestId("about-section-values-title")
    this.missionTitle = page.getByTestId("about-section-mission-title")
    this.visionTitle = page.getByTestId("about-section-vision-title")

    // Section texts
    this.storyText = page.getByTestId("about-section-story-text")
    this.valuesText = page.getByTestId("about-section-values-text")
    this.missionText = page.getByTestId("about-section-mission-text")
    this.visionText = page.getByTestId("about-section-vision-text")
  }

  async goto() {
    await super.goto("/about")
  }
}
