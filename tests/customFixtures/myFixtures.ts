
import {test as beseTest, Page} from '@playwright/test'
import { LoginPage } from '../pages/basePage/loginPage'
import { WelcomePage } from '../pages/basePage/welcomePage'
import { HomePage } from '../pages/basePage/homePage'
import { LeadsPage } from '../pages/leads/leadsPage'
import { AccountsPage } from '../pages/accounts/accounts'
import { CreateLeadPage } from '../pages/leads/createLeadpage'
import { CreateAccountPage } from '../pages/accounts/createAccountpage'
import { logDefectissue } from '../jira/logDefect'

type lfFixtures={

    //adding changes
    page:Page
    lp:LoginPage
    wp:WelcomePage
    hp:HomePage
    leadsPage:LeadsPage
    ap:AccountsPage
    cl:CreateLeadPage
    ca:CreateAccountPage
}


export const test =beseTest.extend<lfFixtures>(
{
page: async({page},use,testinfo)=>{
    page.delayedFill=async(selector:string,value:string) =>{
        if(testinfo.retry){
            await page.waitForTimeout(4000)
        }
        await page.fill(selector,value)

    }
    await use(page)
},
lp:async({page,context},use)=>{
    const lp=new LoginPage(page,context)
    await use(lp)
},

wp:async({page,context},use)=>{
    const wp=new WelcomePage(page,context)
    await use(wp)
},
hp:async({page,context},use)=>{
    const hp=new HomePage(page,context)
    await use(hp)
}
,leadsPage:async({page,context},use)=>{
    const leadsPage=new LeadsPage(page,context)
    await use(leadsPage)
},
cl:async({page,context},use)=>{
    const cl=new CreateLeadPage(page,context)
    await use(cl)
},
ca:async({page,context},use)=>{
    const ca=new CreateAccountPage(page,context)
    await use(ca)
}
})

let key:any

test.afterEach(`Log in jira`,async({},testinfo)=>{
  key=  await logDefectissue(testinfo)
})

test.afterAll(``,()=>{
   console.log("upload the attachments")
})