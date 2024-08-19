class BasePage {
    constructor(url){
        this.url = url;
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
}

module.exports = BasePage;