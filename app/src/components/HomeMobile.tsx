import { JSX, For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import AppInfo from "./AppInfo";
import { apps } from "../store/state";

import "./css/HomeMobile.css"

export default function HomeMobile() : JSX.Element{
    let navigator = useNavigate()
    let goToAddApp = () => {
        navigator("/add-app")
    }
    return(
        <div id="Home-mobile">
            <div id="home-header">
                <h1 id="add-app" onclick={goToAddApp}>app+</h1>
            </div>
            <div id="apps">
                <For each={apps}>
                    {(app) =>
                        <AppInfo id={app.Id} name={app.Name} description={app.Description} />
                    }
                </For>
            </div>
        </div>
    )
}