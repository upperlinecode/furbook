import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import Splash from './components/splash.js';
import Photos from './components/photos.js';
import Descriptions from './components/descriptions.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
		<Splash/>
		<Photos/>
		<Descriptions/>
      </div>
    );
  }
}

export default App;
