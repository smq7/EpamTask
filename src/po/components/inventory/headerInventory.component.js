const BaseComponent = require("../common/base.component");

class HeaderInventory extends BaseComponent {
    constructor() {
        super(".header_label");
    }

    get titleName() {
        return this.rootEl.$(".app_logo");
    }
}
module.exports = HeaderInventory;