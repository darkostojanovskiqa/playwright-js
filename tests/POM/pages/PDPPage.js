const BasePage = require('../pages/BasePage');
const PDPPageLocators = require('../locators/PDPPageLocators');

class PDPPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new PDPPageLocators();
  }

  async getLaptopTitle() {
    return await this.page.locator(this.locators.laptopTitle).textContent();
  }

  async getPhoneTitle() {
    return await this.page.locator(this.locators.phoneTitle).textContent();
  }

  async clickAddToCart() {
    await this.page.click(this.locators.addToCartButton);
  }

  async getTotalPrice() {
    return await this.page.locator(this.locators.totalPrice).textContent();
  }
}

module.exports = PDPPage;