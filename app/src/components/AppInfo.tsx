import { JSX } from "solid-js";

import "./css/AppInfo.css"

type appInfoProps = {
    id : number,
    name : string,
    description : string,
}

export default function AppInfo(props : appInfoProps) : JSX.Element{
    return(
        <div class="app-info">
            <span>name:</span>
            <span>{props.name}</span>
            <span>description:</span>
            <span>{props.description}</span>
        </div>
    )

}