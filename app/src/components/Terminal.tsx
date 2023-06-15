import { JSX, createSignal, For, onMount } from "solid-js";
import "./css/Terminal.css"

type previousCmd = {
    commands : string
    logs : string
}

function Cmd(props : previousCmd) : JSX.Element{
    return(
        <>
            <span>{props.commands}</span>
            <span>{props.logs}</span>
        </>
    )
}

export default function Terminal() : JSX.Element{
    let [previousCommands, setPreviousCommands] = createSignal<previousCmd[]>([])
    let input : HTMLInputElement | undefined
    let [isFocused, setIsFocused] = createSignal<boolean>(true)
    onMount(() => {
        if(input){
            input.focus()
        }
    })
    const toggleFocus = (e : KeyboardEvent) => {
        if(e.shiftKey){
            if(input){
                if(isFocused()){
                    setIsFocused(false)
                    input.blur()
                }else{
                    setIsFocused(true)
                    input.focus()
                }
            }
        }
    }
    return(
        <div class="terminal">
            <For each={previousCommands()}>
                {(command) => <Cmd commands={command.commands} logs={command.logs}/>}
            </For>
            <form>
                <label for="terminal-input" id="input-label">cyberticket/ $</label>
                <input type="text" maxLength={200} class="terminal-input" id="terminal-input" onKeyDown={toggleFocus} ref={input}/>
            </form>
        </div>
    )
}