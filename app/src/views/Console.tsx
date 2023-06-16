import { For, JSX, Show, createSignal, onCleanup, onMount } from "solid-js";
import Terminal from "../components/Terminal";
import { theme, setTheme } from "../store/theme";
import "./css/Console.css"

export default function Console() : JSX.Element{
    let [sizeClass, setSizeClass] = createSignal<string>("console-down")
    const toggleSizeClass = () => {
        if(sizeClass() === "console-down"){
            setSizeClass("console-up")
        }else{
            setSizeClass("console-down")
        }
        document.getElementById("terminal-input")?.focus()
    }
    return(
        <div id="console" class={sizeClass()}>
            <div id="terminal">
                <Terminal/>
            </div>
            <div id="terminal-menu">
                <div id="icons">
                    <span>ter1</span>
                    <Show when={sizeClass() === "console-down"}>
                        <i class="fa-solid fa-arrow-up-right-from-square console" onclick={toggleSizeClass}></i>
                    </Show>
                    <Show when={sizeClass() === "console-up"}>
                        <i class="fa-solid fa-chevron-down console" onclick={toggleSizeClass}></i>
                    </Show>
                    <i class="fa-solid fa-trash console"></i>
                </div>
            </div>
        </div>
    )
}