import {JSX} from "solid-js"
import { Service } from "../store/state"
import "./css/ServiceComponent.css"

type ServiceProps = {
    service : Service
}

export default function ServiceComponent(props : ServiceProps) : JSX.Element{
    return(
        <div class="service-component">
            <span>{props.service.Name}</span>
            <span>{props.service.Description}</span>
            <span>{props.service.Github}</span>
        </div>
    )
}