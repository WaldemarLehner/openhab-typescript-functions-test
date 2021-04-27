var ctx = this;
(function () {
    'use strict';

    var LoggerFactory = /** @class */ (function () {
        function LoggerFactory() {
        }
        LoggerFactory.getByRuleId = function (ruleId) {
            // TypeScript does not know about Java. It does not know that this script will be run in Nashorn. 
            // As such, it will complain about Java being undefined. 
            // To fix this, references to "unknown" variables that are available in the script must be 
            // annotated with a @ts-ignore.
            //@ts-ignore 
            return Java.type("org.slf4j.LoggerFactory").getLogger("org.openhab.rule." + ruleId);
        };
        return LoggerFactory;
    }());

    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.setCallback = function (func) {
            this.callback = func;
        };
        Main.prototype.invoke = function (someString) {
            this.callback(someString);
        };
        return Main;
    }());
    var main = new Main();
    //@ts-ignore
    //const loggerFunction = (LoggerFactory.getByRuleId(ruleUID) as Logger).info;  // < does not work! ClassCastException
    var loggerFunction = function (str) { LoggerFactory.getByRuleId(ruleUID).info(str); };
    main.setCallback(loggerFunction);
    main.invoke("Hello World!");

}());
