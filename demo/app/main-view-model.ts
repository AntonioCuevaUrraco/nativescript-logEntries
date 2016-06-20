import {Observable} from 'data/observable';
var logEntries = require("nativescript-logEntries");

export class HelloWorldModel extends Observable {

  constructor() {
    super();

    logEntries.init("YourToken");
    //You can see app.ts to see how to catch NativeScript crash
	logEntries.log("YourMessage");
  }
}
