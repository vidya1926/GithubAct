import { WelcomePage } from "./welcomePage"

export class HomePage extends WelcomePage{

   async clickLeads(){
        await this.page.locator(this.locators.leadsLink).click()
    }

    async clickAccounts(){
        await this.page.locator("//a[text()='Accounts']").click()
    }

    async clickContacts(){
        await this.page.locator("//a[text()='Contacts']").click()
    }
         

  async clickSubmit(){
    await this.page.click(".smalSubmit")
}
}