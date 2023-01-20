import { JSX } from "solid-js";

import "./css/AppInfo.css"
import { serviceMock, setServices, Service } from "../store/state";

type appInfoProps = {
    id : number,
    name : string,
    description : string,
}

export default function AppInfo(props : appInfoProps) : JSX.Element{
    let filterServices = () => {
        let filteredServices : Service[] = serviceMock.filter((service) => service.AppId === props.id)
        setServices(filteredServices)
    }
    return(
        <div class="app-info" onclick={filterServices}>
            <span>apps/{props.name}</span>
        </div>
    )

}