import { BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "./loginPage";

export class WelcomePage extends LoginPage {
   
  constructor(page: Page, context: BrowserContext) {
    super(page, context)
    this.page = page
    this.context=context
  }

  async verifyUrl() {
    console.log(this.page.url())
  }

  async clickCRM() {
    await this.page.click(this.locators.crmLink)
  }

  async clickLogout() {
    await this.page.click(this.locators.login_logout)
  }

}