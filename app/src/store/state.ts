import {createStore} from "solid-js/store"

class Service{
    Name : string
    Id : number
    AppId : number
    Description : string
    Github : string
    constructor(name : string, id : number, appId : number, description : string, github : string){
        this.Name = name
        this.Id = id
        this.AppId = appId
        this.Description = description
        this.Github = github
    }
}

class App{
    Name : string
    Description : string
    Id : number
    constructor(name : string, desc : string ,id : number){
        this.Name = name
        this.Id = id
        this.Description = desc
    }
}

type AppServices = {
    Name : string,
    Description : string,
    Id : number,
    Services : Service[],
}

let initialAppSelected : AppServices = {
    Name: "",
    Description: "",
    Id : 0,
    Services: [],
}

let [appSelected,setAppSelected] = createStore<AppServices>(initialAppSelected)


let github_url : string = "http://www.github.com/mrpiggy97"
let firstApp : App = new App("first","the first app",1)
let firstService : Service = new Service("rest-client",1,firstApp.Id,"a rest client",`${github_url}/rest-client`)
let secondService : Service = new Service("rest", 2, firstApp.Id, "a backend that implements websockets",`${github_url}/rest`)
let thirdService : Service = new Service("restdb", 3, firstApp.Id,"a database for rest app", `${github_url}/restdb`)
let appsMock : App[] = [firstApp]
let serviceMock : Service[] = [firstService,secondService, thirdService]
const [apps,setApps] = createStore<Array<App>>(appsMock)

export type{AppServices}
export {App, Service, apps,setApps, appSelected,setAppSelected, serviceMock}