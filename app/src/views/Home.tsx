import { JSX } from "solid-js/jsx-runtime";
import { useNavigate } from "@solidjs/router";

import "./css/Home.css"

export default function Home() : JSX.Element{
    let navigator = useNavigate()
    let goToAddApp = () => {
        navigator("/add-app")
    }
    return(
        <div id="Home">
            <h1 id="add-app" onclick={goToAddApp}>App+</h1>
        </div>
    )
}