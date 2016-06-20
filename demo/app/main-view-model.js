"use strict";
var observable_1 = require('data/observable');
var logEntries = require("nativescript-logEntries");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        logEntries.init("YourToken");
        //You can see app.ts to see how to catch NativeScript crash
        logEntries.log("YourMessage");
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=main-view-model.js.map