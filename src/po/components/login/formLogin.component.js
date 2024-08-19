// load BaseComponent
const BaseComponent = require('./../common/base.component');

//create formLogin component for login page
class FormLogin extends BaseComponent {
    //set selector for login form
    constructor (){
        super(".login_wrapper-inner")
    }
    //get username field from login form on Login page
    get userField (){
        return this.rootEl.$("#user-name");
    }
    //get passwod field from login form on Login page
    get passwordField(){
        return this.rootEl.$("#password");
    }
    //get button  from login form on Login page
    get loginBtn (){
        return this.rootEl.$("#login-button");
    }
    //get error message from login form on Login page
    get errorMessage(){
        return this.rootEl.$(".error-message-container h3");
    }
}
// export 
module.exports = FormLogin;