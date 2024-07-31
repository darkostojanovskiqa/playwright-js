const BasePage = require('../pages/BasePage');
const PDPPageLocators = require('../locators/PDPPageLocators');

class PDPPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = PDPPageLocators;
  }

  async clickAddToCart() {
    await this.page.locator(this.locators.addToCartButton).click();
  }

  async getPhoneTitle() {
    return this.page.locator(this.locators.phoneTitle).textContent();
  }

  async getTotalPrice() {
    return this.page.locator(this.locators.totalPrice).textContent();
  }
}

module.exports = PDPPage;