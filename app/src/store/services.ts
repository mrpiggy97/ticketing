import { createStore } from "solid-js/store";

export type Service = {
    Name : string,
    Id : string,
    AppId : string,
    Description : string,
    Github : string | undefined,
    Website : string | undefined,
}

let firstService : Service = {
    Name: "rest client",
    Id: "34123",
    AppId: "adsqwes",
    Description: "a frontend app built in React for rest backend service",
    Github: "https://www.github.com/mrpiggy97/restClient",
    Website: undefined
}

let secondService : Service = {
    Name: "rest backend",
    Id: "34RQ",
    AppId: "adsqwes",
    Description: "a backend built in go that connects to database service and serves rest client",
    Github: "https://www.github.com/mrpiggy97/rest",
    Website: undefined
}

let thirdService : Service = {
    Name: "rest database",
    Id: "4FDAL098",
    AppId: "adsqwes",
    Description: "a database for rest backend",
    Github: undefined,
    Website: undefined,
}

let fourthService : Service = {
    Name: "frontend service",
    Id: "234PPP",
    AppId : "asd123213",
    Description: "a frontend for backend service",
    Github: undefined,
    Website: undefined,
}

let fifthService : Service = {
    Name: "backend service",
    Id: "CV57",
    AppId : "asd123213",
    Description: "a backend service for frontend",
    Github: undefined,
    Website: undefined,
}

export function getServices(appId : string) : Service[]{
    let allServices : Service[] = [firstService, secondService, thirdService, fourthService, fifthService]
    let filteredServices = allServices.filter((serv, index) => {
        if(serv.AppId === appId){
            return serv
        }
    })
    return filteredServices
}
let [services, setServices] = createStore<Service[]>([])
export {services, setServices}