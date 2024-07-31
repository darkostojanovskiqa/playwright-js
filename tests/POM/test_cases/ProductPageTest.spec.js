const { test, expect } = require('@playwright/test');
const HomePage = require('../methods/HomePageMethods');
const PDPPage = require('../methods/PDPPageMethods');

test.describe('ProductPage Tests', () => {
  test('Verify Samsung Galaxy S6 Product Details', async ({ page }) => {
    const homePage = new HomePage(page);
    const pdpPage = new PDPPage(page);

    // Navigate to the Home Page
    await homePage.navigate('https://demoblaze.com/');

    // Capture a full-page screenshot upon landing on the page
    await page.screenshot({ path: 'screenshots/homepage-full.png', fullPage: true });
    test.info().attachments.push({
      name: 'Homepage Full Screenshot',
      path: 'screenshots/homepage-full.png',
      type: 'image/png'
    });

    // Click on Samsung Galaxy S6 to open the Product Details Page
    await homePage.clickSamsungGalaxyS6();

    // Verify the product title on the Product Details Page
    await page.waitForSelector("//div//h2[text()='Samsung galaxy s6']");
    await page.waitForTimeout(5000);
    const phoneTitle = await pdpPage.getPhoneTitle();
    expect(phoneTitle).toBe('Samsung galaxy s6');

    // Capture screenshot of the product title
    const productTitleLocator = page.locator(pdpPage.locators.phoneTitle);
    await productTitleLocator.screenshot({ path: 'screenshots/product-title.png' });
    test.info().attachments.push({
      name: 'Product Title Screenshot',
      path: 'screenshots/product-title.png',
      type: 'image/png'
    });

    // Verify the oroduct price on the Product Details Page
    const totalPrice = await pdpPage.getTotalPrice();

    // Trim any extra whitespace and normalize the text of the product price value
    const totalPricenormalizedText = totalPrice.replace(/\s+/g, ' ').trim();

    // Perform the assertion for the product price
    expect(totalPricenormalizedText).toBe('$360 *includes tax');

    // Verify the add to cart button is visible
    const addToCartVisible = await pdpPage.page.isVisible(pdpPage.locators.addToCartButton);
    expect(addToCartVisible).toBe(true);

    
    // Capture screenshot of the add to cart button
    const addToCartButtonLocator = page.locator(pdpPage.locators.addToCartButton);
    await addToCartButtonLocator.screenshot({ path: 'screenshots/add-to-cart-button.png' });
    test.info().attachments.push({
      name: 'Add to Cart Button Screenshot',
      path: 'screenshots/add-to-cart-button.png',
      type: 'image/png'
    });
  });

});