"use strict";
var mSharedInstance;
function init(token) {
    mSharedInstance = LELog.sharedInstance();
    if (mSharedInstance) {
        var token = NSString.alloc().initWithString(token);
        mSharedInstance.token = token;
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
//# sourceMappingURL=logEntries.ios.js.map
