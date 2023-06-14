import { For, JSX, Show, createSignal, onMount } from "solid-js";
import { useNavigate, Route, Routes } from "@solidjs/router";
import AddApp from "./AddApp";
import WelcomePage from "./WelcomePage";
import Services from "./Services";
import AppInfo from "../components/AppInfo";
import { App, apps } from "../store/app";
import Console from "./Console";

import "./css/HomeDesktop.css"

export default function HomeDesktop() : JSX.Element{
    let navigator = useNavigate()
    const goToAddApp = () => {
        navigator("/add-app")
    }
    let [showConsole, setShowConsole] = createSignal<boolean>(false)
    const toggleConsole = (e : KeyboardEvent) => {
        if(e.ctrlKey){
            if(showConsole()){
                let element : HTMLElement | null = document.getElementById("terminal")
                setShowConsole(false)
            }else{
                setShowConsole(true)
            }
        }
    }
    onMount(() => {
        window.addEventListener("keydown", toggleConsole)
    })
    return(
        <div id="Home-desktop" onkeydown={toggleConsole}>
            <div id="apps-menu">
                <h2 id="add-app" class="add-app-or-services" onclick={goToAddApp}>app+</h2>
                <For each={apps}>
                    {(app) => <AppInfo Name={app.Name} Description={app.Description} Id={app.Id}/>}
                </For>
            </div>
            <div id="views">
                <Routes>
                    <Route path={"/"} component={WelcomePage}/>
                    <Route path={"/services"} component={Services}/>
                    <Route path={"/add-app"} component={AddApp}/>
                </Routes>
                <Show when={showConsole()}>
                    <Console/>
                </Show>
            </div>
        </div>
    )
}