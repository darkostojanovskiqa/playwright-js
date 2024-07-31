const BasePage = require('../pages/BasePage');
const HomePageLocators = require('../locators/HomePageLocators');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new HomePageLocators();
  }

  async clickSamsungGalaxyS6() {
    await this.page.click(this.locators.samsungGalaxyS6Link);
  }

  async clickCartLink() {
    await this.page.click(this.locators.cartLink);
  }
}

module.exports = HomePage;