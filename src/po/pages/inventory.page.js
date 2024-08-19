const HeaderInventory =require("./../components/inventory/headerInventory.component.js")
const BasePage = require("./base.page");

class InventoryPage extends BasePage {
    constructor(){
        super("https://www.saucedemo.com/inventory.html");
        this.headerInventory = new HeaderInventory();
    }
}

module.exports = InventoryPage;