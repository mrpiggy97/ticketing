import { Command, SubCommand, Log, addCommand, Execute } from "./Command";

describe("check the correct functionality of Command and SubCommand", () => {
    test("correct string manipulation of SubCommand.getFlags method", () => {
        const executor = (flags : Map<string,string>,optF : Map<string,string>) : Log | Error => {
            return "simple use case"
        }
        let subCmd : SubCommand = new SubCommand("test",["message","name"],[],executor)
        let result : string[][] | Error = subCmd.getFlags("--message this is the message --name my name")
        let expectedResult : string[][] = [["--message","this is the message"],["--name", "my name"]]
        expect(result).toStrictEqual(expectedResult)
    })
    test("check that Command and SubCommand work as expected", () => {
        const testExecutor = (flags : Map<string,string>, optFlags : Map<string,string>) : Log | Error =>{
            let testMessage : string | undefined = flags.get("--message")
            if(testMessage){
                console.log(`${testMessage}`)
                return "success at reading message"
            }else{
                return new Error("you need to provide message")
            }
        }
        let subCmd : SubCommand = new SubCommand("test", ["message"],[],testExecutor)
        let cmd : Command = new Command("cmd")
        cmd.addSubCommand(subCmd)
        addCommand(cmd)
        let response : Log | Error = Execute("cmd test --message this will be the message")
        expect(response).toBe("success at reading message")

        // now check that command returns an error when no flag is provided
        response = Execute("cmd test")
        expect(response).toBeInstanceOf(Error)
    })
})