const LoginPage =  require("./../po/pages/login.page");
const InventoryPage = require('./../po/pages/inventory.page');

const dataProvider = require("./../dataProvider.js");
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
describe("Swag Labs", () => {
    before(async () => {
        await loginPage.open();
    });
    it("Unit case 3 correct values", async () => {
        let userName = dataProvider.getGoodUsername();
        await loginPage.formLogin.userField.setValue(userName);
        await loginPage.formLogin.passwordField.setValue(dataProvider.goodPassword);
        
        await browser.pause(2000);
        
        await loginPage.formLogin.loginBtn.click();

        if(userName === "locked_out_user"){
            console.log("unluclky we have locked User");
            await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.");
        } else {
     
            await expect(inventoryPage.headerInventory.titleName).toBeDisplayed();
    
            await expect(inventoryPage.headerInventory.titleName).toHaveText("Swag Labs");
        }        // await browser.pause(15000);
    });
});