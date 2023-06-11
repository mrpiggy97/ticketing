import { Command, SubCommand, addCommand, Log } from "./Command";
import { App, setApps, apps } from "../store/app";

function createApp(flags : Map<string,string>, optionalFlags : Map<string,string>) : Log | Error{
    let name : string | undefined = flags.get("--name")
    let description : string | undefined = flags.get("--description")
    if(name === undefined || description === undefined){
        return new Error("you need to provide both a name and a description")
    }
    let newApp : App = {
        Name: name,
        Description : description,
        Id: `${name}13123`
    }
    setApps((prev) => [...prev,newApp])
    return "app created sucessfully"
}

function removeApp(args : Map<string,string>) : Log | Error{
    let appId : string | undefined = args.get("--id")
    if(appId === undefined){
        return new Error("you need to provide --id")
    }
    let newApps : App[] = apps.filter((val,index) => {
        if(val.Id !== appId){
            return val
        }
    })
    setApps(newApps)
    return "app deleted"
}

let create : SubCommand = new SubCommand("create",["name","description"],[],createApp)
let remove : SubCommand = new SubCommand("remove",["id"],[],removeApp)

let app : Command = new Command("app")
app.addSubCommand(create)
app.addSubCommand(remove)
addCommand(app)