"use strict";
var applicationModule = require("application");
var mSharedInstance;
var AndroidLogger = com.logentries.logger.AndroidLogger;
function init(token) {
    var _AndroidApplication = applicationModule.android;
    try {
        mSharedInstance = AndroidLogger.createInstance(_AndroidApplication.context.getApplicationContext(), true, false, false, null, 0, token, true);
    }
    catch (e) {
        console.log("LogEntries: Error getting the sharedInstance on init method");
        return false;
    }
    if (mSharedInstance) {
        return true;
    }
    else {
        console.log("LogEntries: Error getting the sharedInstance on init method");
        return false;
    }
}
exports.init = init;
function log(message) {
    if (checkIfRunning()) {
        mSharedInstance.log(message);
    }
}
exports.log = log;
function checkIfRunning() {
    if (mSharedInstance == null) {
        console.log("LogEntries: You must call init first");
        return false;
    }
    else {
        return true;
    }
}
//# sourceMappingURL=logEntries.android.js.map
