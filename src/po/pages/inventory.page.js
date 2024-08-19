//Load all necessery files for this page
const HeaderInventory = require("./../components/inventory/headerInventory.component.js")
const BasePage = require("./base.page");

//create class for inventory page
class InventoryPage extends BasePage {
    constructor() {
        super("https://www.saucedemo.com/inventory.html");
        this.headerInventory = new HeaderInventory();
    }
}
//export 
module.exports = InventoryPage;