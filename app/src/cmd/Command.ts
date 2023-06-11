export type ExecutorFunc = (flags : Map<string,string>, optionalFlags : Map<string,string>) => Log | Error
export type Log = string

export class SubCommand{
    Name : string
    Flags : Map<string,string>
    OptionalFlags : Map<string,string>
    Executor : ExecutorFunc
    constructor(name : string, flags : string[], optFlags : string[] ,callback : ExecutorFunc){
        this.Name = name
        this.Executor = callback
        this.Flags = new Map<string,string>()
        this.OptionalFlags = new Map<string,string>()
        flags.forEach((val,index) => {
            this.Flags.set(`--${val}`,"")
        })
        optFlags.forEach((val,index) => {
            this.OptionalFlags.set(`--${val}`,"")
        })
    }

    public getFlags(args : string) : string[][] | Error{
        let flagsWithValues : string[][] = []
        // separate values by -- so --name app --description this is a descrption
        // becomes an array twof strings like this ['app name', 'description this is a description']
        let keyValues : string[] = args.split("--")
        for(let i=0; i < keyValues.length; i++){
            // get current string let's say the second one 'description this is a description'
            let currentPair : string = keyValues[i]
            if(currentPair.length > 0){
                // split that string by space so we end up with
                // ['description', 'this', 'is', 'a', 'description']
                let separatedPair : string[] = currentPair.split(" ")
                if(separatedPair.length < 2){
                    return new Error("you need to provide a flag with a value")
                }
                // flag will be the first element in separatedPair array
                // with -- before it so --description
                let flag : string = `--${separatedPair[0]}`
                // separatedPair will be sliced so as to cute the first element
                separatedPair = separatedPair.slice(1)
                // now we join all remaining elements in separated Pair
                // so ['this', 'is', 'a', 'description'] becomes a single string
                // like this 'this is a description'
                let values : string = separatedPair.join(" ")
                values = values.trimEnd()
                flagsWithValues.push([flag,values])
            }
        }
        return flagsWithValues
    }

    public Execute(args : string) : Log | Error{
        let flags : string[][] | Error = this.getFlags(args)
        // set the flags for the executor function
        if(flags instanceof Array){
            for(let i=0; i < flags.length; i++){
                let pair : string[] = flags[i]
                let flag : string = pair[0]
                let value : string = pair[1]
                let flagExists : boolean = this.Flags.has(flag)
                if(flagExists){
                    this.Flags.set(flag,value)
                }
                if(!flagExists){
                    let flagExistsAsOptional : boolean = this.OptionalFlags.has(flag)
                    if(flagExistsAsOptional){
                        this.OptionalFlags.set(flag,value)
                    }
                }
            }
            return this.Executor(this.Flags,this.OptionalFlags)
        }
        return flags
    }
}

export class Command{
    Name : string
    SubCommands : Map<string,SubCommand>
    constructor(name : string){
        this.Name = name
        this.SubCommands = new Map<string,SubCommand>()
    }

    public addSubCommand(cmd : SubCommand){
        this.SubCommands.set(cmd.Name,cmd)
    }

    public Execute(args : string) : Log | Error{
        // get sub command and execute it
        let str : string[] = args.split(" ")
        let subCommand : SubCommand | undefined = this.SubCommands.get(str[0])
        if(subCommand){
            // delete first item from str and use that modified string
            // to execute subcommand
            str = str.splice(1)
            return subCommand.Execute(str.join(" "))
        }else{
            return new Error("no subcommand with that name exists")
        }
    }
}

let MainCommand = new Map<string,Command>()

export function addCommand(cmd : Command){
    MainCommand.set(cmd.Name,cmd)
}

export function Execute(args : string) : Log | Error {
    // at this stage we split string by "" and get the first command
    let str : string[] = args.split(" ")
    if(str.length < 3){
        return new Error("not enough commands and arguments were provided")
    }
    let commandName : string = str[0]
    let command : Command | undefined = MainCommand.get(commandName)
    // first check if command exists, if it exists than proceed to next step
    // otherwise return an error
    if(command){
        // delete first memeber of str
        str = str.slice(1)
        return command.Execute(str.join(" "))
    }else{
        return new Error("no command with that name was found")
    }
}

