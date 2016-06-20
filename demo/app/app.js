"use strict";
var application = require('application');
var applicationSettingModule = require("application-settings");
var setString = applicationSettingModule.setString;
application.on(application.uncaughtErrorEvent, function (args) {
    var e = args.ios;
    var stack = args.ios.stack;
    setString("myCrash", e + " " + stack);
});
application.start({ moduleName: 'main-page' });
//# sourceMappingURL=app.js.map