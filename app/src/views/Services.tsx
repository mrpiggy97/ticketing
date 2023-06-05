import { JSX, For } from "solid-js";
import { appSelected } from "../store/app";
import { services } from "../store/services";
import ServiceComponent from "../components/ServiceComponent";
import "./css/Services.css"

export default function Services() : JSX.Element{
    return(
        <div id="services">
            <div id="add-service">
                <h2 id="add-service">add service+</h2>
            </div>
            <div id="app-name">
                <h2>services/{appSelected.Name}</h2>
                <span>{appSelected.Description}</span>
            </div>
            <div id="app-services">
                <For each={services}>
                    {(service) => <ServiceComponent
                    Name={service.Name}
                    Id={service.Id}
                    AppId={service.AppId}
                    Github={service.Github}
                    Description={service.Description}
                    Website={service.Website}
                    />}
                </For>
            </div>
        </div>
    )
}