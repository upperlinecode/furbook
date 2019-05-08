import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import Splash from './components/splash.js';
import Photos from './components/photos.js';
import Descriptions from './components/descriptions.js';

import './App.css';

const App = () => {
  const component = new React.Component()

  component.render = () => {
    return(
      <div className="App">
        <Navbar/>
        <Splash/>
      	<Photos/>
      	<Descriptions/>
      </div>
    )
  }

  return component
}

export default App;
