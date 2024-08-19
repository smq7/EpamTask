// Load all necesery files
const LoginPage =  require("./../po/pages/login.page");
const InventoryPage = require('./../po/pages/inventory.page');
const dataProvider = require("./../dataProvider.js");

//initialize the pages
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("Unit case 3", () => {
    // open LoginPage before test
    before(async () => {
        await loginPage.open();
    });

    it("Unit case 3 correct values", async () => {
        //choose random Accepted username from "dataProvider"
        let userName = dataProvider.getGoodUsername();
        
        //fill field "username" and "password" with  Accepted data 
        await loginPage.formLogin.userField.setValue(userName);
        await loginPage.formLogin.passwordField.setValue(dataProvider.goodPassword);
        
        //click on button for login
        await loginPage.formLogin.loginBtn.click();

        // if we have username locked_out_user then we get a error check this error
        if(userName === "locked_out_user") {
            console.log("unluclky we have locked User");
            await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.");
        }
        // if we have any other username from dataProvider
        // then we go to inventory page and validate it Title
        else {
            await expect(inventoryPage.headerInventory.titleName).toBeDisplayed();
            await expect(inventoryPage.headerInventory.titleName).toHaveText("Swag Labs");
        }        
        // await browser.pause(15000);
    });
});