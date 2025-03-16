import test from "@playwright/test"
import { CreateAccountPage } from "../pages/accounts/createAccountpage"


test(`Accounts Module`,async({page})=>{

    const ca=new CreateAccountPage(page)
     await ca.launchApp()
     await ca.enterCredentials()
     await ca.clickLogin()
     await ca.clickCRM()
     await ca.clickAccounts()
     await ca.clickCreateAccount()
     await ca.mandatoryFieldsforCA()
     await ca.clickSubmit()
  })