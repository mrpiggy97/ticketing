import { JSX, createSignal, For, onMount, useContext } from "solid-js";
import { Execute, Log } from "../cmd/Command";
import { useLocation } from "@solidjs/router";
import "./css/Terminal.css"


type previousCmd = {
    commands : string
    logs : string,
    error : boolean
}

function Cmd(props : previousCmd) : JSX.Element{
    let [logClass, setLogClass] = createSignal<string>("")
    if(props.error){
        setLogClass("error-log")
    }else{
        setLogClass("normal-log")
    }
    return(
        <div class="cmd">
            <div class="cmd-line">
                <span class="cyberpunk">cyberticket/ $</span>
                <span class="commands-logs">{props.commands}</span>
            </div>
            <div class="cmd-logs">
                <span class={logClass()}>{props.logs}</span>
            </div>
        </div>
    )
}

export default function Terminal() : JSX.Element{
    let [previousCommands, setPreviousCommands] = createSignal<previousCmd[]>([])
    let input : HTMLInputElement | undefined
    let [isFocused, setIsFocused] = createSignal<boolean>(true)
    let path = useLocation()
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

    const executeCmd = (e : Event) => {
        e.preventDefault()
        if(input){
            let response : Log | Error = Execute(input.value)
            if(response instanceof Error){
                alert("error was made")
                let newCmdResponse : previousCmd = {
                    logs : response.message,
                    error : true,
                    commands: input.value
                }
                setPreviousCommands((prev) => [...prev,newCmdResponse])
            }else{
                let newCmdResponse : previousCmd = {
                    logs : response,
                    error : false,
                    commands : input.value
                }
                setPreviousCommands((prev) => [...prev,newCmdResponse])
            }            
        }
    }

    return(
        <div class="terminal">
            <For each={previousCommands()}>
                {(command) => <Cmd commands={command.commands} logs={command.logs} error={command.error}/>}
            </For>
            <form onsubmit={executeCmd}>
                <label for="terminal-input" id="input-label">cyberticket/ $</label>
                <input type="text" maxLength={200} class="terminal-input" id="terminal-input" onKeyDown={toggleFocus} ref={input}/>
            </form>
        </div>
    )
}