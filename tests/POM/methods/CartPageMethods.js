const BasePage = require('../pages/BasePage');
const CartPageLocators = require('../locators/CartPageLocators');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = CartPageLocators;
  }
  async getLaptopTitle() {
    return this.page.locator(this.locators.laptopTitle).textContent();
  }


  async getProductTitle() {
    // Use a more specific selector
    return await this.page.locator('h2[class="name"]').textContent(); // Adjust selector as needed
  }

  async getTotalPrice() {
    return await this.page.locator("//div//h2[text()='Total']//parent::div//div[1]//div//h3").textContent(); // Adjust if necessary
  }
}

module.exports = CartPage;