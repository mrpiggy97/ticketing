import {JSX} from "solid-js"
import { Service } from "../store/state"

type ServiceProps = {
    service : Service
}

export default function ServiceComponent(props : ServiceProps) : JSX.Element{
    return(
        <div>
            <span>{props.service.Name}</span>
            <span>{props.service.Description}</span>
            <span>{props.service.Github}</span>
        </div>
    )
}