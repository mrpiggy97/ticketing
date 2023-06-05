import { createStore } from "solid-js/store";

export type App = {
    Name : string,
    Id : string,
    Description : string
}


let initialState : App = {
    Name : "",
    Id : "",
    Description: ""
}

let firstApp : App ={
    Name : "rest",
    Id: "adsqwes",
    Description: "a collection of microservices"
}

let secondApp : App = {
    Name: "cqrs",
    Id: "213facDFAa",
    Description: "an event driven architecture project"
}

let thirdApp : App = {
    Name: "net united",
    Id : "asd123213",
    Description: "an http websocket tool to test apis"
}

let [appSelected, setAppSelected] = createStore<App>(initialState)
let [apps, setApps] = createStore<App[]>([firstApp,secondApp,thirdApp])
export {appSelected,setAppSelected, apps, setApps}