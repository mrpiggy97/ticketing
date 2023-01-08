import { JSX } from "solid-js";

import "./css/AddApp.css"

export default function AddApp() : JSX.Element{
    return(
        <div id="new-app">
            <form id="app-form">
            <label class="app-name-label" for="app-name">app name</label>
            <input type="text" class="app-name-input" maxLength={50}/>
            <label class="app-name-label" for="app-description">app description</label>
            <input type="text" class="app-name-input" maxLength={200}/> 
            </form>
        </div>
    )
}