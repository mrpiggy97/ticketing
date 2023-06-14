import { For, JSX, Show, createSignal, onCleanup, onMount } from "solid-js";
import Terminal from "../components/Terminal";
import "./css/Console.css"

export default function Console() : JSX.Element{
    let [terminals, setTerminals] = createSignal<number[]>([1,2])
    let [sizeClass, setSizeClass] = createSignal<string>("console-down")
    const toogleSizeClass = () => {
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
            <div id="add-terminal">
                <div id="add">
                    <span>+</span>
                </div>
                <div id="toggle-size">
                    <span>^</span>
                </div>
            </div>
            <div id="terminal-menu">
                <For each={terminals()}>
                    {(terminal) => <span>ter{terminal}</span>}
                </For>
            </div>
        </div>
    )
}