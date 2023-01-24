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
                <h2 id="add-app" class="add-app-or-services" onclick={goToAddApp}>app+</h2>
                <For each={apps}>
                    {(app) => <AppInfo name={app.Name} description={app.Description} id={app.Id}/>}
                </For>
            </div>
            <div id="app-services">
                <Show when={appSelected && appSelected.Id > 0}>
                    <div id="app-services-header">
                        <AppInfo name={appSelected.Name} description={appSelected.Description} id={appSelected.Id}/>
                        <h2 class="add-app-or-services">service+</h2>
                        <Show when={appSelected.Services.length === 0}>
                            <h2>you have no services for this app</h2>
                        </Show>
                    </div>
                    <div id="app-services-body">
                        <For each={appSelected.Services}>
                            {(service) => <ServiceComponent service={service} />}
                        </For>                          
                    </div>
                </Show>
            </div>
        </div>
    )
}