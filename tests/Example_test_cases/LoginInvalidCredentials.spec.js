const {test, expect}=require('@playwright/test')
//import {test, expect} from ('@playwright/test')

test('Locators',async ({page})=>{

   await page.goto('https://demoblaze.com/index.html')
   await page.click("//div//a[text()='Log in']")

   const modalLoginTitle= await page.locator("//div//h5[text()='Log in']")
   await expect(modalLoginTitle).toBeVisible();
   await expect(modalLoginTitle).toHaveText('Log in')

   await page.click("//div//h5[text()='Log in']//parent::div//parent::div//div[2]//input[@id='loginusername']")
   await page.fill("//div//h5[text()='Log in']//parent::div//parent::div//div[2]//input[@id='loginusername']", "invalidusername")
   await page.click("//div//h5[text()='Log in']//parent::div//parent::div//div[2]//input[@id='loginpassword']")
   await page.fill("//div//h5[text()='Log in']//parent::div//parent::div//div[2]//input[@id='loginpassword']", "password")

   const loginButton= await page.locator("//div//h5[text()='Log in']//parent::div//parent::div//div[3]//button[text()='Log in']")
   await expect(loginButton).toBeVisible();
   await expect(loginButton).toHaveText('Log in')

   await page.click("//div//h5[text()='Log in']//parent::div//parent::div//div[3]//button[text()='Log in']")
   await page.close

})