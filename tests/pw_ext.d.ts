//add a new feature into the page interface
//page.fill ,page.click -->page.delayedFill() -->apply a pause while doing the retry
import {Page} from '@playwright/test'

declare module '@playwright/test'{
    interface Page{
        delayedFill:(selector:string,value:string)=>Promise<void>
        clickAnddelay:(selector:string)=>Promise<void>
    }
}