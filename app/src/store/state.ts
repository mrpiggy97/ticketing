import {createStore} from "solid-js/store"

class Service{
    Name : string
    Id : number
    AppId : number
    constructor(name : string, id : number, appId : number){
        this.Name = name
        this.Id = id
        this.AppId = appId
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

let firstApp : App = new App("first","the first app",1)

let appsMock : App[] = [firstApp]

const [services,setServices] = createStore<Array<Service>>([])
const [apps,setApps] = createStore<Array<App>>(appsMock)

export {App, Service, services,setServices,apps,setApps}