import { For, JSX } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { apps } from "../store/state";

import "./css/HomeDesktop.css"

export default function HomeDesktop() : JSX.Element{
    let navigator = useNavigate()
    let goToAddApp = () => {
        navigator("/add-app")
    }
    return(
        <div id="Home-desktop">
            <div id="apps-menu">
                <h2 id="add-app" onclick={goToAddApp}>app+</h2>
                <For each={apps}>
                    {(app) => <span class="app">apps/{app.Name}</span>}
                </For>
            </div>
            <div id="app-services">
            </div>
        </div>
    )
}