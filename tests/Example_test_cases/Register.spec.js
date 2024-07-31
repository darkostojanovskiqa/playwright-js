const {test, expect}=require('@playwright/test')
//import {test, expect} from ('@playwright/test')

test('Locators',async ({page})=>{

   await page.goto('https://demoblaze.com/')

   await page.click("//div//a[text()='Sign up']")

   const modalRegisterTitle= await page.locator("//div//h5[text()='Sign up']")
   await expect(modalRegisterTitle).toBeVisible();

   await page.fill("//div//h5[text()='Sign up']//parent::div//parent::div//div[2]//input[@id='sign-username']", "valid-signin-username")
   await page.fill("//div//h5[text()='Sign up']//parent::div//parent::div//div[2]//input[@id='sign-password']", "valid-signin-password")

   const signinButton= await page.locator("//div//h5[text()='Sign up']//parent::div//parent::div//div[3]//button[text()='Sign up']")
   await expect(signinButton).toBeVisible();

   await page.click("//div//h5[text()='Sign up']//parent::div//parent::div//div[3]//button[text()='Sign up']")
   await page.close

})