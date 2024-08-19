const LoginPage =  require("./../po/pages/login.page");
const InventoryPage = require('./../po/pages/inventory.page');
const dataProvider = require("./../dataProvider.js");

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("Swag Labs", () => {
    beforeEach(async () => {
        await loginPage.open();
    });
    // before(async () => {
    //     await loginPage.open();
    // });

    it.only("test 1 Check page", async() => {
        console.log(dataProvider.getGoodUsername());
        await loginPage.formLogin.userField.setValue(dataProvider.badUsername);
        await loginPage.formLogin.passwordField.setValue(dataProvider.badPassword);

        await loginPage.formLogin.userField.setValue("");
        await loginPage.formLogin.passwordField.clearValue();

        await loginPage.formLogin.userField.click();
        
        await loginPage.pressSpace();
        
        await loginPage.pressBackSpace();
        

        await loginPage.formLogin.loginBtn.click();
       
        await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Username is required");
        // await browser.pause(10000);

        // await $(".login_wrapper-inner #user-name").setValue("Vadym");
        // await $("#password").setValue("Password");

        // await $("#user-name").setValue("");
        // await $("#password").clearValue();

        // await $("#user-name").click();
         
        // await $("#password").clearValue();
        // await $("#password").setValue("");
        
        // await browser.keys(' ');
        // await browser.keys(['Backspace']);

        // await $("#login-button").click();

        // await expect($(".error-message-container h3")).toBeDisplayed();
        // await expect($(".error-message-container h3")).toHaveText("Epic sadface: Username is required");

        // AAA = await browser.getCookies();
        // console.log(AAA);
        // // await browser.execute(() => {
        // //     document.querySelector('#user-name').setAttribute('value',"s");
        // //     document.querySelector('#password').setAttribute('value',"s");
        // // });
        // await browser.execute(() => {
        //     const input = document.querySelector('#user-name'); // Замість #user-name використайте ваш селектор
        //     input.value = 'Your Text Here'; // Задайте значення
        //     input.dispatchEvent(new Event('input', { bubbles: true })); // Відправте подію 'input', щоб оновити значення
        // });
        // await $("#login-button").click();
        // await browser.execute(() => {
        //     console.log("COOKIEs");
        //     console.log(cookies.get('session-username')); // Має вивести `undefined`
        // });
        
        // await browser.execute(() => {
        //     const userField = document.querySelector('#user-name');
        //     const passField = document.querySelector('#password');
        //     userField.value = ''; // Очищує видиме значення
        //     userField.removeAttribute('value'); // Видаляє атрибут 'value'
        //     passField.value = ''; // Очищує видиме значення
        //     passField.removeAttribute('value'); // Видаляє атрибут 'value'
        // });
   
        // await(browser.execute("document.getElementById('user-name').setAttribute('value',' ')"));
        // await $("#login-button").click();
        
        // console.log("Username before click:", await $("#user-name").getValue());
        // console.log("Password before click:", await $("#password").getValue());
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
        // await $("#user-name").setValue("Vadym");
        // await $("#password").setValue("Password");

        // await $("#password").clearValue();
        // await $("#password").click();
        // await browser.keys(' '); 

        // await browser.keys(['Backspace']); 

        // await $("#login-button").click();
        // await expect($(".error-message-container h3")).toHaveText("Epic sadface: Password is required");
        // await browser.pause(2000);
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
        }
        
        
        // await $("#user-name").setValue("standard_user");
        // await $("#password").setValue("secret_sauce");

        // // await expect($(".app_logo h3")).not.toBeExisting();

        // await $("#login-button").click();
        // await expect($(".app_logo")).toBeDisplayed();

        // await expect($(".app_logo")).toHaveText("Swag Labs");
        // await browser.pause(2000);
    });
});