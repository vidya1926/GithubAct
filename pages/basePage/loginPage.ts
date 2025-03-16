import { BrowserContext, chromium, Page } from '@playwright/test'
import { PlaywrightWrapper } from '../../utility/pw_wrapperClass'

export class LoginPage extends PlaywrightWrapper{

    page: Page  
    context:BrowserContext

    constructor(page: Page,context:BrowserContext) { 
      super(page,context)
      this.page=page
      this.context=context
    }

   public locators={      
      username:"#usernam",
      password:"#password",
      login_logout:".decorativeSubmit",
      crmLink:"text=CRM/SFA",
     // Links(locator:string)=>{},
     leadsLink:`//a[text()='Leads']`,
      leads:{
        createLead:`//a[text()='Create Lead']`
      },
      accounts:{
      },
      contacts:{
      }

   }

    async launchApp(url:string) {
      await this.page.goto(url)
    }

    async enterCredentials(user:string,pwd:string){
      await this.clearAndType(this.locators.username, user)
      await this.page.fill(this.locators.password, pwd)
      await this.switchToWindow()
    }

    async clickLogin(){
      await this.page.click(this.locators.login_logout)
    }


  async   verifyTitle() {
        console.log(await this.page.title())
    }

  

}
