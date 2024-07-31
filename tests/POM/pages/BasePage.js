class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }
  
    async waitForSelector(selector) {
      await this.page.waitForSelector(selector);
    }
  }
  
  module.exports = BasePage;