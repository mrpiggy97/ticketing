import { JSX } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { apps, setApps, App, setAppSelected } from "../store/app";

import "./css/AddApp.css"

export default function AddApp() : JSX.Element{
    let navigator = useNavigate()
    let appName : HTMLInputElement | undefined
    let appDescription : HTMLInputElement | undefined
    let createNewApp = (e : Event) => {
        e.preventDefault()
        if(appName && appDescription){
            let newApp : App = {
                Name: appName.value,
                Description: appDescription.value,
                Id: appName.value+"CASDAa132"
            }
            setApps([...apps,newApp])
            setAppSelected(newApp)
            navigator("/services")
        }
    }
    return(
        <div id="new-app">
            <form id="app-form" onsubmit={createNewApp}>
                <label class="app-name-label" for="app-name">app name</label>
                <input type="text" id="new-app-name" class="app-name-input" ref={appName} maxLength={50}/>
                <label class="app-name-label" for="app-description">app description</label>
                <input type="text" id="new-app-description" class="app-name-input" ref={appDescription} maxLength={200}/>
                <button class="app-name-input-button">add</button>
            </form>
        </div>
    )
}