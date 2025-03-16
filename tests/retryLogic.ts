
import {test as baseTest} from '@playwright/test'

export const test=baseTest.extend<{page:any}>({
  
    page:async({page},use,testinfo)=>{

        page.delayedFill=async(selector:string,value:string) =>{
            if(testinfo.retry){
                await page.waitForTimeout(4000)
            }
            await page.fill(selector,value)
        }

        page.clickAnddelay=async(selector:string)=>{
            await page.click(selector)
            if(testinfo.retry){
                await page.waitForTimeout(4000)
            }
        }
        
        await use(page)


    }



})
