const LoginPage =  require("../po/pages/login.page.js");
const InventoryPage = require('../po/pages/inventory.page.js');
const DataProvider = require("../dataProvider.js");

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

// here we create dataProvider with random username from array  and with password 'secret_sauce'
const dataProvider = new DataProvider(["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"][Math.floor(Math.random() * 6)], "secret_sauce")
describe("Unit case 3", () => {

    before(async () => {
        await loginPage.open();
    });

    it("Unit case 3 correct values", async () => {
 
        await loginPage.formLogin.userField.setValue(dataProvider.username);
        await loginPage.formLogin.passwordField.setValue(dataProvider.password);
        
        await loginPage.formLogin.loginBtn.click();
        try {
            await expect(inventoryPage).toHaveUrl("https://www.saucedemo.com/inventory.html", {message : "Expected that url change to https://www.saucedemo.com/inventory.html but it did not "});
            await expect(inventoryPage.headerInventory.titleName).toBeDisplayed({message : "Expected that title name is Displeyed"});
            await expect(inventoryPage.headerInventory.titleName).toHaveText("Swag Labs", {message : "Expected that title name is 'Swag Labs', but it something else"});

        } catch {
            console.log("unlucky we have locked_out_user");
            await expect(loginPage).toHaveUrl("https://www.saucedemo.com/", {message : "Expected that url don't change, but it did"});
            await expect(loginPage.formLogin.errorMessage).toBeDisplayed({message : "Expected messeg is displayed"})
            await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.",
                {
                    message : "Expected error message 'Epic sadface: Sorry, this user has been locked out.', but is something else"
                });
        }
        // await browser.pause(10000);
    });
});