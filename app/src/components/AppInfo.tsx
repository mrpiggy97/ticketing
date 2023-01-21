import { JSX } from "solid-js";

import "./css/AppInfo.css"
import { serviceMock, Service, AppServices, setAppSelected, appSelected } from "../store/state";

type appInfoProps = {
    id : number,
    name : string,
    description : string,
}

export default function AppInfo(props : appInfoProps) : JSX.Element{
    let filterServices = () => {
        let filteredServices : Service[] = serviceMock.filter((service) => service.AppId === props.id)
        let newState : AppServices = {
            Name : props.name,
            Id : props.id,
            Description : props.description,
            Services : filteredServices
        }
        setAppSelected({...appSelected, ...newState})
    }
    return(
        <div class="app-info" onclick={filterServices}>
            <span>apps/{props.name}</span>
        </div>
    )

}