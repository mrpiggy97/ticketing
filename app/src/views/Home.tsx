import { JSX } from "solid-js/jsx-runtime";

import HomeMobile from "../components/HomeMobile";
import HomeDesktop from "../components/HomeDesktop";

export default function Home() : JSX.Element{
    let windowWidth : number = window.innerWidth
    return windowWidth >= 1000 ? <HomeDesktop/> : <HomeMobile/>
}