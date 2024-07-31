const BasePage = require('../pages/BasePage');
const CategoryPageLocators = require('../locators/CartPageLocators');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new CartPageLocators();
  }

  async clickLaptopsCategory() {
    await this.page.click(this.locators.laptopsCategory);
  }

  async clickSonyVaio5() {
    await this.page.click(this.locators.sonyVaio5);
  }
}

module.exports = CartPage;