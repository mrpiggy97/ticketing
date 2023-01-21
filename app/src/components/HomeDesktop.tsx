import { For, JSX, createSignal, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { apps, appSelected } from "../store/state";
import AppInfo from "./AppInfo";
import ServiceComponent from "./Service";

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
                    {(app) => <AppInfo name={app.Name} description={app.Description} id={app.Id}/>}
                </For>
            </div>
            <div id="app-services">
                <Show when={appSelected && appSelected.Id > 0}>
                    <h2>service+</h2>
                    <h2>{appSelected.Name}</h2>
                    <Show when={appSelected.Services.length === 0}>
                        <h2>you have no services for this app</h2>
                    </Show>
                    <For each={appSelected.Services}>
                        {(service) => <ServiceComponent service={service} />}
                    </For>                    
                </Show>
            </div>
        </div>
    )
}