import {test} from "../customFixtures/myFixtures"
import fs from 'fs'
import { URL } from "../DataFiles/urlConstants"


let loginData:any
test.beforeEach(`readJsondata`,async()=>{

    loginData=JSON.parse(fs.readFileSync('DataFiles/loginCredentials.json','utf-8'))
})

test(`Leads Module`,async({cl})=>{
    test.info().annotations.push({
        type:"Bug",description:"Creating issue in jira"
    })
    await cl.launchApp(URL.baseUrl)
    await cl.enterCredentials(loginData[0].username,loginData[0].password)
    await cl.clickLogin()
    await cl.clickCRM()
    await cl.clickLeads()
    await cl.clickCreateLead()
    await cl.enterMandatoryforCLfields()
    await cl.clickSubmit()
   // createIssue()
})

