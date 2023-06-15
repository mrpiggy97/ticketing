import {JSX, Show} from "solid-js"
import { Service } from "../store/services"
import { appSelected } from "../store/app"
import "./css/ServiceComponent.css"

export default function ServiceComponent(props : Service) : JSX.Element{
    return(
        <div class="service-component">
            <span class="service-title">services/{appSelected.Name}/{props.Name}</span>
            <span>{props.Description}</span>
            <Show when={props.Github}>
                <a class="github-link" href={props.Github} target="_blank">{props.Github}</a>
            </Show>
            <Show when={props.Website}>
                <a class="github-link" href={props.Website} target="_blank">{props.Website}</a>
            </Show>
        </div>
    )
}