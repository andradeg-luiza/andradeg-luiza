import { BasePage } from "./BasePage"

export class AboutPage extends BasePage {
  constructor(page) {
    super(page)

    this.title = page.getByRole("heading", { name: /about/i })

    this.intro = page.locator("p")

    this.experienceSection = page.getByRole("heading", { name: /experience/i })
    this.skillsSection = page.getByRole("heading", { name: /skills|technologies/i })
    this.educationSection = page.getByRole("heading", { name: /education/i })
  }

  async goto() {
    await super.goto("/about")
  }
}
