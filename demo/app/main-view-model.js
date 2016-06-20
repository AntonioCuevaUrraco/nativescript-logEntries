"use strict";
var observable_1 = require('data/observable');
var applicationSettingModule = require("application-settings");
var logEntries = require("nativescript-logEntries");
var getString = applicationSettingModule.getString;
var setString = applicationSettingModule.setString;
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        logEntries.init("token");
        logEntries.log(getString("myCrash"));
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=main-view-model.js.map