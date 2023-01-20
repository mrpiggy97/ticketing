import { For, JSX, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { apps, services } from "../store/state";
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
                <For each={services}>
                    {(service) => <ServiceComponent service={service} />}
                </For>
            </div>
        </div>
    )
}