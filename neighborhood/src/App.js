import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/css/App.css';
import SideNavMenu from './templates/SideNavMenu';
import MapView from './templates/MapView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavMenu></SideNavMenu>
        <MapView></MapView>
      </div>
    );
  }
}

export default App;
