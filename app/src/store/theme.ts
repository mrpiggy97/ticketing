import { createStore } from "solid-js/store";

type theme = {
    mode : string
}

let [theme, setTheme] = createStore<theme>({mode : ""})
export {theme, setTheme}