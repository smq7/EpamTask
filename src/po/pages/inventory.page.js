const HeaderInventory = require("./../components/inventory/headerInventory.component.js")
const BasePage = require("./base.page");

class InventoryPage extends BasePage {
    constructor() {
        super();
        this.url += "/inventory.html";
        this.headerInventory = new HeaderInventory();
    }
}
module.exports = InventoryPage;