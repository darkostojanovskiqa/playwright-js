const {test, expect}=require('@playwright/test')
//import {test, expect} from ('@playwright/test')

test('Locators',async ({page})=>{

   await page.goto('https://demoblaze.com/index.html')
   await page.click("//div//a[text()='Log in']")

   const modalLoginTitle= await page.locator("//div//h5[text()='Log in']")
   await expect(modalLoginTitle).toBeVisible();
   await expect(modalLoginTitle).toHaveText('Log in')
   await expect(modalLoginTitle).toHaveScreenshot

   const usenameLoginInput= await page.locator("//div//h5[text()='Log in']//parent::div//parent::div//div[2]//input[@id='loginusername']")
   await expect(usenameLoginInput).toBeEnabled
   await usenameLoginInput.click();
   await usenameLoginInput.fill("password");


   const passwordLoginInput= await page.locator("//div//h5[text()='Log in']//parent::div//parent::div//div[2]//input[@id='loginpassword']")
   await expect(passwordLoginInput).toBeEnabled
   await passwordLoginInput.click();
   await passwordLoginInput.fill("password");


   const loginButton= await page.locator("//div//h5[text()='Log in']//parent::div//parent::div//div[3]//button[text()='Log in']")
   await expect(loginButton).toBeVisible();
   await expect(loginButton).toHaveText('Log in')
   await expect(loginButton).toBeEnabled
   await loginButton.click();
   await page.close

})