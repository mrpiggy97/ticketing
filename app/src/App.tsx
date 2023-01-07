import type { Component } from 'solid-js';
import { Routes,Route, useNavigate } from '@solidjs/router';

import Home from './views/Home';
import AddApp from './views/AddApp';

import "./App.css"

const App: Component = () => {
  let navigator = useNavigate()
  let goHome = () => {
    navigator("/")
  }
  return (
    <div id="app">
      <div id="header">
        <h2 id="app-title" onclick={goHome}>CyberTicket</h2>
      </div>
      <div id="views">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/add-app" component={AddApp}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
