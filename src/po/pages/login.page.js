const FormLogin = require("../components/login/formLogin.component");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
    constructor() {
        super();
        this.formLogin = new FormLogin();
    }
}
module.exports = LoginPage;