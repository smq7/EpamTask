//The base page that all other components will  extends
class BasePage {
    //set url for  page
    constructor(url) {
        this.url = url;
    }
    //open Page
    open() {
        return browser.url(this.url);
    }
    //press space on page
    pressSpace() {
        return browser.keys(' ');
    }
    //press backspace on page
    pressBackSpace() {
        return browser.keys(['Backspace']);
    }
}
//export
module.exports = BasePage;