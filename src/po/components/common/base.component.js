//The base component that all other components will  extends
class BaseComponent {

    //set value for rootSelector
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    // get root element from CSS selector
    get rootEl() {
        return $(this.rootSelector);
    }
}
//export 
module.exports = BaseComponent;