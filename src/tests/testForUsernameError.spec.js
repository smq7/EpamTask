const LoginPage =  require("../po/pages/login.page.js");
const DataProvider = require("../dataProvider.js");

const loginPage = new LoginPage();
const dataProvider = new DataProvider("Vadym","Password");

describe("Unit case 1", () => {
    before(async () => {
        await loginPage.open();
    });

    // 1.Inventory and Login page objects have full url hardcoded and do not use url relative to baseUrl
    // 2.use built-in functions to clear the input field, 
    // 3.test data provider is used as a container of static data rather than for test parametrisation (which means passing the parameters to test), 
    // 4.test logic is full of if and hardcoded strings .
    // 5.chrome and edge. While browsers are configured, I cannot launch tests from my macbook after running npm i because of error Error: Could not find Microsoft Edge binary, please make sure the browser is installed on your system. This is a potential issue for non-Windows VMs.
    // 6.no assertion messages
    // 7.two same scripts in config "test": "wdio run src/config/wdio.conf.js", "wdio": "wdio run src/config/wdio.conf.js", class, variables and methods names should be self-explanatory. Framework contain many redundant comments. Comments should be added only to add extra info in non-obvious cases. Spec and describe blocks are better to be renamed to something more meaningful than one two three (imagine you have hundreds of tests on real project). Remove commented pieces of code.
    // 8.[optional] add logging and use design patterns other than page object
    
    /*
        1. now they get base url from basePage;
        2. I try differet way to try clear element with build-in function like : clearValue(), browser.elementClear, browser.execute("code that clear elem");
        but nothing from this work. It clear element but when I press button "Login" it automatically fill input with previous value. 
        I think maybe it pulls up value from Cookies or LocalStorage but they are don't storage value from input.
        example that don't work:
            let elem = await loginPage.formLogin.userField;
            await browser.elementClear(elem.elementId);
        3.I rewrite dataProvider
        4. Do I understand correctly that this is what you mean by hardcoded string? 
        in this example hardcode string is "Epic sadface: Username is required"? if yes it means that I must add this strings in constants variables and put them into code?
            await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Username is required", {
                message: 'Expected the error message to be "Epic sadface: Username is required", but the text was different.'
            });
        
        5. now for windows in run test in Chrome and Edge, for Mac it only run test in chrome;
        6. I add more assertion and messages to them
        7. I clear comments and rename test files
        8. I add Logger
    */
    it("Verifying if the 'username' has been provided", async () => {
        
        
        await loginPage.formLogin.userField.setValue(dataProvider.username);
        await loginPage.formLogin.passwordField.setValue(dataProvider.password);
        
        
        await loginPage.formLogin.userField.setValue("");
        await loginPage.formLogin.passwordField.clearValue();
        
        await loginPage.formLogin.userField.click();
        await loginPage.pressSpace();
        await loginPage.pressBackSpace();

        await loginPage.formLogin.loginBtn.click();

        await expect(loginPage).toHaveTitle("Swag Labs", {message:"Expected that title don't change but it did"});
        await expect(loginPage.formLogin.loginBtn).toBeClickable({
            message:'Expected the login button to be clickable, but it was not.'
        });
        await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Username is required", {
            message: 'Expected the error message to be "Epic sadface: Username is required", but the text was different.'
        });
        // await browser.pause();
    });
});