import { For, JSX } from "solid-js";
import { useNavigate, Route, Routes } from "@solidjs/router";
import AddApp from "./AddApp";
import WelcomePage from "./WelcomePage";
import Services from "./Services";
import AppInfo from "../components/AppInfo";
import { App, apps } from "../store/app";

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
                    {(app) => <AppInfo Name={app.Name} Description={app.Description} Id={app.Id}/>}
                </For>
            </div>
            <div id="views">
                <Routes>
                    <Route path={"/"} component={WelcomePage}/>
                    <Route path={"/services"} component={Services}/>
                    <Route path={"/add-app"} component={AddApp}/>
                </Routes>
            </div>
        </div>
    )
}