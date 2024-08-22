const BaseComponent = require('./../common/base.component');

class FormLogin extends BaseComponent {
    constructor() {
        super(".login_wrapper-inner")
    }
    get userField() {
        return this.rootEl.$("#user-name");
    }
    get passwordField() {
        return this.rootEl.$("#password");
    }
    get loginBtn() {
        return this.rootEl.$("#login-button");
    }
    get errorMessage() {
        return this.rootEl.$(".error-message-container h3");
    }
}
module.exports = FormLogin;