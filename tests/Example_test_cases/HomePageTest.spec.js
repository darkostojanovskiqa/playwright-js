const {test, expect}=require('@playwright/test')
//import {test, expect} from ('@playwright/test')

test('Home Page',async ({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    const pageTitle=page.title()
    const pageURL=page.url()
    console.log('Page title is:', pageTitle)
    console.log('Page url is:', pageURL)
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
    page.close
})