import type { Component } from 'solid-js';
import { createSignal, Switch, Match } from 'solid-js';

import HomeDesktop from './views/HomeDesktop';
import HomeMobile from './views/HomeMobile';
import { useNavigate } from '@solidjs/router';
import "./App.css"

const App: Component = () => {
  let [width,setWidth] = createSignal(window.innerWidth)
  window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
  })
  let navigator = useNavigate()
  const goHome = () => {
    navigator("/")
  }

  return (
    <div id="app">
      <div id="header">
        <h2 id="app-title" onclick={goHome}>CyberTicket</h2>
      </div>
      <div id="views">
        <Switch>
          <Match when={width() >= 1000}>
            <HomeDesktop/>
          </Match>
          <Match when={width() < 1000}>
            <HomeMobile/>
          </Match>
        </Switch>
      </div>
    </div>
  );
};

export default App;
