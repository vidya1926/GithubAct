import test, { BrowserContext, Page } from "@playwright/test"


export abstract class PlaywrightWrapper {
    page: Page
    context: BrowserContext

    constructor(page: Page, context: BrowserContext) {
        this.page = page
        this.context = context
    }
    async clearAndType(selector: string, data: string) {
        try {
            await test.step(`Username Textbox is filled with ${data}`, async () => {
                await this.page.locator(selector).clear()
                await this.page.delayedFill(selector, data)
            })
        } catch (Error) {
            console.log(Error)
            //throw new Error()
        }
    }


    async switchToWindow() {

        //context.waitForEvent('page')
        //click()
        //await newPromise


    }






}