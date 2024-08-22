const LoginPage =  require("../po/pages/login.page.js");
const DataProvider = require("../dataProvider.js");

const loginPage = new LoginPage();
const dataProvider = new DataProvider("NextGen", "HiddenPass");

describe("Unic case 2", () => {
    before(async () => {
        await loginPage.open();
    });

    it("Verifying if the 'password' has been provided", async () => {
        await loginPage.formLogin.userField.setValue(dataProvider.username);
        await loginPage.formLogin.passwordField.setValue(dataProvider.password);
        
        await loginPage.formLogin.passwordField.clearValue();

        await loginPage.formLogin.passwordField.click();
        await loginPage.pressSpace();
        await loginPage.pressBackSpace();

        await loginPage.formLogin.loginBtn.click();
        
        await expect(loginPage.formLogin.passwordField).toBeEnabled({message:"Expected that password field is Enabled, but it don't"})
        await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Password is required",
            {
                message: 'Expected the error message to be "Epic sadface: Password is required", but the text was different.'
            }
        );
        // await browser.pause(10000);
    });
});