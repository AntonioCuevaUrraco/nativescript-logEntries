import * as application from 'application';
import applicationSettingModule = require("application-settings");
var setString = applicationSettingModule.setString;

application.on(application.uncaughtErrorEvent, function(args) {

	if (args.ios) {
        console.log("NativeScriptError: " + args.ios);
        console.log("Stacktrace: " + args.ios.stack);
    }
	 else if (args.android) {
        console.log("NativeScriptError: " + args.android);
		console.log("NativeScriptError: " + args.android.nativeException);
		console.log("NativeScriptError: " + args.android.nativeException.getMessage());
	}
});

application.start({ moduleName: 'main-page' });
