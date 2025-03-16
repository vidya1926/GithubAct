import test from '@playwright/test'


test.describe.configure({retries:1})
test(`Retrying test`,async({page})=>{

 await page.goto("https://login.salesforce.com/?locale=in")
 await page.fill("#username","vidyar@testleaf.com")
 await page.delayedFill("#passwor","Sales@123")
 await page.click("#Login")
 await page.clickAnddelay(".slds-icon-waffl")
 
})