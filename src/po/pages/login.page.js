//Load all necessery files for this page
const FormLogin = require("../components/login/formLogin.component");
const BasePage = require("./base.page");

//create class for login page 
class LoginPage extends BasePage {
    constructor(){
        super("https://www.saucedemo.com/");
        this.formLogin = new FormLogin();
    }
}
//export 
module.exports = LoginPage;