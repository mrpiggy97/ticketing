import type { Component } from 'solid-js';
import { Routes,Route } from '@solidjs/router';

import Home from './views/Home';
import AddApp from './views/AddApp';

import "./App.css"

const App: Component = () => {
  return (
    <div id="app">
      <h2 id="app-title">CyberTicket</h2>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/add-app" component={AddApp}/>
      </Routes>
    </div>
  );
};

export default App;
