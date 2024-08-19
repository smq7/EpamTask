const FormLogin = require("../components/login/formLogin.component");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
    constructor(){
        super("https://www.saucedemo.com/");
        this.formLogin = new FormLogin();
    }
}

module.exports = LoginPage;