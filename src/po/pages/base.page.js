//The base page that all other components will  extends
class BasePage {
    constructor(url) {
        this.url = "https://www.saucedemo.com";
    }
    open() {
        return browser.url(this.url);
    }

    pressSpace() {
        return browser.keys(' ');
    }

    pressBackSpace() {
        return browser.keys(['Backspace']);
    }
    getTitle() {
        return browser.getTitle();
    }
    getUrl() {
        return browser.getUrl();
    }
}
module.exports = BasePage;