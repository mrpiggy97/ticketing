import { JSX } from "solid-js/jsx-runtime";
import { useNavigate } from "@solidjs/router";
import { For } from "solid-js";
import { apps } from "../store/state";
import AppInfo from "../components/AppInfo";

import "./css/Home.css"

export default function Home() : JSX.Element{
    let navigator = useNavigate()
    let goToAddApp = () => {
        navigator("/add-app")
    }
    return(
        <div id="Home">
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