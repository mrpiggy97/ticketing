import { For, JSX, Show, createSignal, onCleanup, onMount } from "solid-js";
import Terminal from "../components/Terminal";
import "./css/Console.css"

export default function Console() : JSX.Element{
    let [sizeClass, setSizeClass] = createSignal<string>("console-down")
    const toggleSizeClass = () => {
        if(sizeClass() === "console-down"){
            setSizeClass("console-up")
        }else{
            setSizeClass("console-down")
        }
    }
    return(
        <div id="console" class={sizeClass()}>
            <div id="terminal">
                <Terminal/>
            </div>
            <div id="terminal-menu">
                <i class="fa-solid fa-arrow-up-right-from-square" onclick={toggleSizeClass}></i>
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-lightbulb"></i>
                <span>ter1</span>
            </div>
        </div>
    )
}