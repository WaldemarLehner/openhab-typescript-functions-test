
import LoggerFactory, { Logger } from "./logger";

class Main
{
    private callback: (str: string) => void | undefined;

    constructor()
    {
    }

    public setCallback( func : (someString:string)=>void) : void
    {
        this.callback = func;
    } 

    public invoke( someString: string)
    {
        this.callback(someString);
    }

}

const main = new Main();

/** For Java Methods */

//@ts-ignore
//const loggerFunction = (LoggerFactory.getByRuleId(ruleUID) as Logger).info;  // < does not work! ClassCastException
const loggerFunction = (str: string) => { LoggerFactory.getByRuleId(ruleUID).info(str)}  


main.setCallback(loggerFunction);

main.invoke("Hello World!");

/** For JS Functions */
let someString : string = "";
main.setCallback( (str: string) => {someString = str})

main.invoke("Works with JS lambdas!");
loggerFunction(someString);

const someFunction = (str : string) => {someString = str};
main.setCallback(someFunction);
main.invoke("Works with JS Lambdas stored in a variable too!")
loggerFunction(someString);
