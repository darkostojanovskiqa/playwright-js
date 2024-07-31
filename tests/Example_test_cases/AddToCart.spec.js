const {test, expect}=require('@playwright/test')
//import {test, expect} from ('@playwright/test')

test('Locators',async ({page})=>{

   await page.goto('https://demoblaze.com/index.html')

   const cartlinkHomepage= await page.locator("//div//a[text()='Cart']")
   await cartlinkHomepage.click()

   const productsLabel= await page.locator("//div//h2[text()='Products']")
   await expect(productsLabel).toBeEmpty

   const productsTotal= await page.locator("//div//h2[text()='Total']")
   await expect(productsLabel).toBeEmpty

   await page.goto('https://demoblaze.com/index.html')

   const productCategoriesTitle= await page.locator("//div[@class='list-group']//a[text()='CATEGORIES']")
   await expect(productCategoriesTitle).toBeVisible();

   const mobilephoneProduct = page.locator("//div//a[text()='Samsung galaxy s6']")
   await expect(mobilephoneProduct).toHaveScreenshot
   await mobilephoneProduct.click()

   const addtocartButtonLabel= await page.locator("//div//a[text()='Add to cart']")
   await expect(addtocartButtonLabel).toBeVisible();

   const productLabel= await page.locator("//h2[text()='Samsung galaxy s6']")
   await expect(productLabel).toBeVisible();
   await expect(productLabel).toHaveText('Samsung galaxy s6')

   const addtocartButton= await page.locator("//div//a[text()='Add to cart']")
   await expect(addtocartButton).toBeVisible();
   await addtocartButton.click()

   page.on('dialog', dialog => dialog.accept());
   await page.getByRole('button').click();

   
   await cartlinkHomepage.click()

   await expect(productsLabel).toHaveText('Samsung galaxy s6')

   await expect(productsLabel).toHaveText('360')



   await page.close

})