import { JSX } from "solid-js";
import { setAppSelected } from "../store/app";
import { setServices, getServices } from "../store/services";
import { App } from "../store/app";
import { useNavigate } from "@solidjs/router";
import "./css/AppInfo.css"

export default function AppInfo(props : App) : JSX.Element{
    let navigator = useNavigate()
    let setAsSelectedApp = () => {
        setAppSelected(props)
        let selectedServices = getServices(props.Id)
        setServices(selectedServices)
        navigator("/services")
    }
    return(
        <div class="app-info" onclick={setAsSelectedApp}>
            <span>apps/{props.Name}</span>
        </div>
    )

}