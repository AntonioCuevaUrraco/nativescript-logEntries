import {Observable} from 'data/observable';
import applicationSettingModule = require("application-settings");
var logEntries = require("nativescript-logEntries");

var getString = applicationSettingModule.getString;
var setString = applicationSettingModule.setString;

export class HelloWorldModel extends Observable {

  constructor() {
    super();

    logEntries.init("YourToken");
    //You can see app.ts to see how to catch NativeScript crash
	logEntries.log(getString("YourMessage"));
  }
}
