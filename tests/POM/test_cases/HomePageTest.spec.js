const { test, expect } = require('@playwright/test');
const HomePage = require('../methods/HomePageMethods');
const PDPPage = require('../methods/PDPPageMethods');
//const { aboutusModal, loginModal, signupLink } = require('../locators/HomePageLocators');

test.describe('HomePage Tests', () => {
  test('Verify Home Page content/responsiveness', async ({ page }) => {
    const homePage = new HomePage(page);
    const pdpPage = new PDPPage(page);

    // Navigate to the homepage
    await homePage.navigate('https://demoblaze.com/');

    // Capture and log the page title and URL
    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);

    const pageUrl = await page.url();
    console.log('Page url is:', pageUrl);

    // Capture a full-page screenshot upon landing on the page
    await page.screenshot({ path: 'screenshots/homepage-full.png', fullPage: true });
    test.info().attachments.push({
      name: 'Homepage Full Screenshot',
      path: 'screenshots/homepage-full.png',
      type: 'image/png'
    });

    await homePage.clickCartLink();
    // Capture a full-page screenshot upon landing on the cart page
    await page.screenshot({ path: 'screenshots/cart-full.png', fullPage: true });
    test.info().attachments.push({
      name: 'Cartpage Full Screenshot',
      path: 'screenshots/cart-full.png',
      type: 'image/png'
    });

    await homePage.clickAboutUsLink();

    // Wait for the modal to appear (use appropriate selector for the modal)
    const aboutmodalpage = await page.waitForSelector(aboutusModal);

    // Capture a screenshot of the modal
    await aboutmodalpage.screenshot({ path: 'screenshots/aboutus-modal-screenshot.png' });
    test.info().attachments.push({
      name: 'AboutUs Page Modal Screenshot',
      path: 'screenshots/aboutus-modal-screenshot.png',
      type: 'image/png'
    });
    //await homePage.clickAboutUsCloseButton();

    //await homePage.clickLogInLink();

    //const modalloginTitle = await homePage.waitForSelector(loginmodalTitle);
    //expect(modalloginTitle).toBe('Log in');

    //const loginmodalpage = await page.waitForSelector(loginModal);

    // Capture a screenshot of the login modal
    //await loginmodalpage.screenshot({ path: 'screenshots/login-modal-screenshot.png' });
    //test.info().attachments.push({
     // name: 'Login Modal Screenshot',
      //path: 'screenshots/login-modal-screenshot.png',
      //type: 'image/png'
   //});

    //await homePage.clickCloseButton();

    //await page.waitForSelector(signupLink);
    //await homePage.clickSignUpLink();

    // Capture a full-page screenshot upon landing on the signup modal
    //await page.screenshot({ path: 'screenshots/signupmodal-full.png', fullPage: true });
    //test.info().attachments.push({
    //name: 'Signup Modal Screenshot',
    //path: 'screenshots/signupmodal-full.png',
    //type: 'image/png'


    // Further interactions and assertions can be added here
    // await homePage.clickSignupCloseButton();

    // Further interactions and assertions can be added here

    // Further interactions and assertions can be added here

    //await homePage.clickContactLink();
    //await homePage.clickHomeLink();


    // Click on Laptops category
    //await homePage.hoverLaptopsCategory();
    //await homePage.clickLaptopsCategory();

    // Click on Phones category
    //await homePage.hoverPhonesCategory();
    //await homePage.clickPhonesCategory();

    // Click on Samsung Galaxy S6
    //await homePage.clickSamsungGalaxyS6();

    // Verify the product and total price in Product List Page
    //const productTitle = await pdpPage.getPhoneTitle();
    //expect(productTitle).toBe('Samsung galaxy s6');
  });
});
