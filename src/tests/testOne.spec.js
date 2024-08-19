// Load all necesery files
const LoginPage =  require("./../po/pages/login.page");
const dataProvider = require("./../dataProvider.js");

//initialize the LoginPage
const loginPage = new LoginPage();

describe("Unit case 1", () => {
    //open LoginPage before test
    before(async () => {
        await loginPage.open();
    });

    it("Verifying if the 'username' has been provided", async() => {
        //fill field "username" and "password" with data
        await loginPage.formLogin.userField.setValue(dataProvider.badUsername);
        await loginPage.formLogin.passwordField.setValue(dataProvider.badPassword);

        //clear field "username" and "password"
        await loginPage.formLogin.userField.setValue("");
        await loginPage.formLogin.passwordField.clearValue();
        
        //click on field "username" and then press "space" and "backspace"
        await loginPage.formLogin.userField.click();
        await loginPage.pressSpace();
        await loginPage.pressBackSpace();
        
        //click on button for login
        await loginPage.formLogin.loginBtn.click();
       
        //Check the error messages
        await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Username is required");
        // await browser.pause(10000);
    });
});