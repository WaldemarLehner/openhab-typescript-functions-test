
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

//@ts-ignore
//const loggerFunction = (LoggerFactory.getByRuleId(ruleUID) as Logger).info;  // < does not work! ClassCastException
const loggerFunction = (str) => { LoggerFactory.getByRuleId(ruleUID).info(str)}  


main.setCallback(loggerFunction);

main.invoke("Hello World!");

