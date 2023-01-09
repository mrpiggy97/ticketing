import { JSX } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { apps,setApps,App } from "../store/state";

import "./css/AddApp.css"

export default function AddApp() : JSX.Element{
    let navigator = useNavigate()
    let createNewApp = (e : Event) => {
        e.preventDefault()
        let appNameInput = document.getElementById("new-app-name") as HTMLInputElement
        let appName = appNameInput.value
        let appDescriptionInput = document.getElementById("new-app-description") as HTMLInputElement
        let appDescription = appDescriptionInput.value
        let newApp : App = new App(appName,appDescription,2)
        setApps([...apps,newApp])
        navigator("/")
    }
    return(
        <div id="new-app">
            <form id="app-form" onsubmit={createNewApp}>
                <label class="app-name-label" for="app-name">app name</label>
                <input type="text" id="new-app-name" class="app-name-input" maxLength={50}/>
                <label class="app-name-label" for="app-description">app description</label>
                <input type="text" id="new-app-description" class="app-name-input" maxLength={200}/>
                <button class="app-name-input-button">add</button>
            </form>
        </div>
    )
}