import applicationModule = require("application");

var mSharedInstance;
var AndroidLogger = com.logentries.logger.AndroidLogger;

export function init(token: string): boolean {
	var _AndroidApplication = applicationModule.android;

	try {
		// createInstance(Context context, boolean useHttpPost, boolean useSsl, boolean isUsingDataHub, String dataHubAddr, int dataHubPort, String token, boolean logHostName); 
		mSharedInstance = AndroidLogger.createInstance(_AndroidApplication.context.getApplicationContext(),
														true, 
														false,
														false,
														null, 
														0,
														token, 
														true);
	}
	catch(e){
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

export function log(message: string): void {
	if (checkIfRunning()) {
		mSharedInstance.log(message);
	}
}

function checkIfRunning(): boolean {
	if (mSharedInstance == null) {
		console.log("LogEntries: You must call init first");
		return false;
	}
	else {
		return true;
	}
}
