//Load BaseComponent
const BaseComponent = require("../common/base.component");

//create header component for Inventory page
class HeaderInventory extends BaseComponent {
    //set selector for HeaderInventory
    constructor() {
        super(".header_label");
    }

    // get title name from Header on Inventory page
    get titleName() {
        return this.rootEl.$(".app_logo");
    }
}
//export 
module.exports = HeaderInventory;