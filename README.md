# nativescript-logEntries
This plugin provide a way to use LogEntries service on a NativeScript project.   
The plugin is a wrap of the android and ios official sdks   
https://github.com/logentries/le_android   
https://github.com/logentries/le_ios
## Installation
```
tns plugin add nativescript-logEntries
```
## Usage
First create a new Log for android and/or iOS and store the tokens that logEntries will provide to you   


```ts
//Somewhere on your app.

var logEntries = require("nativescript-logEntries");

 logEntries.init("YourToken");
 logEntries.log("this is the message");
```

If you want to use it to send crash reports, store the crash on devie and send it next time the device is opened.

```ts
//on app.ts

var setString = applicationSettingModule.setString;

application.on(application.uncaughtErrorEvent, function(args) {

	if (args.ios) {
        console.log("NativeScriptError: " + args.ios);
        console.log("Stacktrace: " + args.ios.stack);
        setString("crash", args.ios + args.ios.stack);
   }
	else if (args.android) {
    console.log("NativeScriptError: " + args.android);
		console.log("NativeScriptError: " + args.android.nativeException);
		console.log("NativeScriptError: " + args.android.nativeException.getMessage());
		setString("crash", args.android +
		                   args.android.nativeException +
		                   args.android.nativeException.getMessage());
	}
});
```
