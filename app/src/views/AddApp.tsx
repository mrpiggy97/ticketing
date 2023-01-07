import { JSX } from "solid-js";

import "./css/AddApp.css"

export default function AddApp() : JSX.Element{
    return(
        <div id="new-app">
            <form id="app-form">
            <label id="app-name-label" for="app-name">app name</label>
            <input type="text" id="app-name" maxLength={50}/>
            <label id="app-description-label" for="app-description">app description</label>
            <textarea id="app-description" maxLength={200}/>
            </form>
        </div>
    )
}