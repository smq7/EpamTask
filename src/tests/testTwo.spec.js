const LoginPage =  require("./../po/pages/login.page");
const loginPage = new LoginPage();

const dataProvider = require("./../dataProvider.js");
describe("Swag Labs", () => {
    before(async () => {
        await loginPage.open();
    });
    it("Unic case 2 check password is required", async () => {
        await loginPage.formLogin.userField.setValue(dataProvider.badUsername);
        await loginPage.formLogin.passwordField.setValue(dataProvider.badPassword);

        await loginPage.formLogin.passwordField.clearValue();
        
        await loginPage.formLogin.passwordField.click();
        
        await loginPage.pressSpace();
        await loginPage.pressBackSpace();

        await loginPage.formLogin.loginBtn.click();

        
        await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Password is required");
        // await browser.pause(10000);
    });

});