import type { Component } from 'solid-js';

import Home from './views/Home';

import "./App.css"

const App: Component = () => {
  return (
    <div id="app">
      <Home/>
    </div>
  );
};

export default App;
