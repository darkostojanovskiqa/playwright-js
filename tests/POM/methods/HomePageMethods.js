const BasePage = require('../pages/BasePage');
const HomePageLocators = require('../locators/HomePageLocators');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = HomePageLocators;

}
  async clickLaptopsCategory() {
    await this.page.locator(this.locators.laptopsCategory).click();
}
  
async hoverLaptopsCategory() {
  await this.page.locator(this.locators.laptopsCategory).hover();

}
  async clickPhonesCategory() {
  await this.page.locator(this.locators.phonesCategory).click();
}

  
async hoverPhonesCategory() {
  await this.page.locator(this.locators.phonesCategory).hover();

}

  async clickSonyVaio5() {
  await this.page.locator(this.locators.sonyVaio5).click();

}
  async clickCartLink() {
  await this.page.locator(this.locators.cartLink).click();

}
async clickCartLink() {
await this.page.locator(this.locators.cartLink).click();

}
async clickHomeLink() {
await this.page.locator(this.locators.homeLink).click();

}
async clickContactLink() {
await this.page.locator(this.locators.contacttLink).click();

}
async clickAboutUsLink() {
await this.page.locator(this.locators.aboutusLink).click();
}
async clickAboutUsCloseButton() {
await this.page.locator(this.locators.aboutusCloseButton).click();

}
async clickLogInLink() {
await this.page.locator(this.locators.loginLink).click();
}

async getLoginModalTitle() {
  return this.page.locator(this.locators.loginTitle).textContent();
}

async clickCloseButton() {
await this.page.locator(this.locators.closeButton).click();

}
async clickLogInButton() {
await this.page.locator(this.locators.closeButton).click();

}
async clickSignUpLink() {
await this.page.locator(this.locators.signupLink).click();

}

async getSignupModalTitle() {
  return this.page.locator(this.locators.signupTitle).textContent();
}

async clickSignupCloseButton() {
await this.page.locator(this.locators.signupCloseButton).click();

}
async clickSignupButton() {
await this.page.locator(this.locators.signupButton).click();


}
  async clickSamsungGalaxyS6() {
  await this.page.locator(this.locators.samsungGalaxyS6).click();
}
}

module.exports = HomePage;