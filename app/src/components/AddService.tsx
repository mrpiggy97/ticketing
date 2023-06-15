import { JSX } from "solid-js";
import {services, setServices} from "../store/services"

import "./css/AddService.css"

export default function AddService() : JSX.Element{
    let serviceName : HTMLInputElement | undefined
    let serviceDescription : HTMLInputElement | undefined
    let serviceGithub : HTMLInputElement | undefined
    let serviceWebsite : HTMLInputElement | undefined
    return(
        <form id="add-service">
            <label for="service-name">Service Name</label>
            <input type="text" id="service-name" ref={serviceName} maxLength={100}/>
            <label for="service-description">Service Description</label>
            <input type="text" id="service-description" ref={serviceDescription} maxLength={200}/>
            <label for="service-github">Service Github</label>
            <input type="text" id="service-github" ref={serviceGithub} maxLength={100}/>
            <label for="service-website">Service Website (optional)</label>
            <input type="text" id="service-website" ref={serviceWebsite} maxLength={100}/>
            <button type="submit">create</button>
        </form>
    )
}