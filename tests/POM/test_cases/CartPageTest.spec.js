const { test, expect } = require('@playwright/test');
const HomePage = require('../methods/HomePageMethods');
const CartPage = require('../methods/CartPageMethods');
const PDPPage = require('../methods/PDPPageMethods');

test.describe('CategoryPage Tests', () => {
  test('Add Laptop product to Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const pdpPage = new PDPPage(page);

    // Navigate to the homepage
    await homePage.navigate('https://demoblaze.com/');

    // Click on Laptops category
    await homePage.clickLaptopsCategory();

    // Click on Sony Vaio i5
    await homePage.clickSonyVaio5();

    // Wait for the product page to load and add to cart
    await pdpPage.waitForSelector(pdpPage.locators.addToCartButton);
    await pdpPage.clickAddToCart();

    // Handle the alert dialog
    page.on('dialog', dialog => dialog.accept());
    await page.waitForTimeout(5000);
    // Click on Cart link
    await homePage.clickCartLink();
    await page.waitForTimeout(5000);

    // Capture a full-page screenshot upon landing on the Cart Page
    await page.screenshot({ path: 'screenshots/homepage-full.png', fullPage: true });
    test.info().attachments.push({
      name: 'Cartpage Full Screenshot',
      path: 'screenshots/cartpage-full.png',
      type: 'image/png'
    });

    // Verify the product title in the cart
    const productTitle = await cartPage.getLaptopTitle();
    await page.waitForTimeout(3000);
    expect(productTitle).toBe('Sony vaio i5');

    // Verify the product price in the cart
    await page.waitForTimeout(5000);
    const totalPrice = await cartPage.getTotalPrice();
    await page.waitForTimeout(3000);
    expect(totalPrice).toBe("790"); // Update this to the actual price if different


    // Capture screenshot of the Place Order button
    const placeorderButton = page.locator(cartPage.locators.placeorderButton);
    await expect(placeorderButton).toBeVisible();

    await placeorderButton.screenshot({ path: 'screenshots/place-order-button.png' });
    test.info().attachments.push({
      name: 'Place Order Button Screenshot',
      path: 'screenshots/place-order-button.png',
      type: 'image/png'
    });
  });
});