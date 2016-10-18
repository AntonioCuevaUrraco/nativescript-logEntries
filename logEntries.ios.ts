var mSharedInstance;

export function init(token: string): boolean {
	mSharedInstance = LELog.sharedInstance();
    if (mSharedInstance){
		var token = NSString.alloc().initWithString(token);
		mSharedInstance.token = token;
		return true;
    }
	else{
		console.log("LogEntries: Error getting the sharedInstance on init method");
		return false;
	}
}

export function log(message: string): void {
	if(checkIfRunning()){
		mSharedInstance.log(message);
	}
}

function checkIfRunning(): boolean{
	if(mSharedInstance == null){
		console.log("LogEntries: You must call init first");
		return false;
	}
	else{
		return true;
	}
}
