import { JSX, Switch, Match, createSignal } from "solid-js";

import HomeMobile from "../components/HomeMobile";
import HomeDesktop from "../components/HomeDesktop";

export default function Home() : JSX.Element{
    let [width,setWidth] = createSignal(window.innerWidth)
    window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
    })
    return(
        <Switch>
            <Match when={width() >= 1000}>
                <HomeDesktop/>
            </Match>
            <Match when={width() < 1000}>
                <HomeMobile/>
            </Match>
        </Switch>
    )
}