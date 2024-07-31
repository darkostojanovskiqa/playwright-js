const { test, expect } = require('@playwright/test');

test.skip('skip this test', async ({ page }) => {
    // This test is not run
  });

test('Locators', async ({ page }) => {

  await page.goto('https://demoblaze.com/index.html');

  const cartLinkHomepage = page.locator("//div//a[text()='Cart']");
  await cartLinkHomepage.click();

  const productsLabel = page.locator("//div//h2[text()='Products']");
  await expect(productsLabel).toBeVisible();

  const productsTotalLabel = page.locator("//div//h2[text()='Total']");
  await expect(productsTotalLabel).toBeVisible()
  const productsTotalValue = page.locator("//div//h2[text()='Total']//parent::div//div[1]//div//h3")
  await expect(productsTotalValue).toHaveText('')

  await page.goto('https://demoblaze.com/index.html');

  const productCategoriesTitle = page.locator("//div[@class='list-group']//a[text()='CATEGORIES']");
  await expect(productCategoriesTitle).toBeVisible();

  const mobilePhoneProduct = page.locator("//div//a[text()='Samsung galaxy s6']");
  await expect(mobilePhoneProduct).toHaveScreenshot();
  await mobilePhoneProduct.click();

  const addToCartButtonLabel = page.locator("//div//a[text()='Add to cart']");
  await expect(addToCartButtonLabel).toBeVisible();

  const productLabel = page.locator("//h2[text()='Samsung galaxy s6']");
  await expect(productLabel).toBeVisible();
  await expect(productLabel).toHaveText('Samsung galaxy s6');

  const addToCartButton = page.locator("//div//a[text()='Add to cart']");
  await expect(addToCartButton).toBeVisible();
 

  // Add the dialog handler before clicking the button that triggers the dialog
  page.on('dialog', dialog => dialog.accept());

  await page.waitForTimeout(5000);
  await page.waitForSelector("//div//a[text()='Add to cart']")
  //await addToCartButton.click();
  await addToCartButton.click();
  await page.waitForTimeout(5000);
  await cartLinkHomepage.click();
  await page.waitForTimeout(7000);

  await page.waitForSelector("//div//td[text()='Samsung galaxy s6']");
  const cartProductLabel = page.locator("//div//td[text()='Samsung galaxy s6']");
  await expect(cartProductLabel).toHaveText('Samsung galaxy s6');
  await expect(productsTotalValue).toHaveText('360')
  
});
