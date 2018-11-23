import React, { Component } from 'react';
import './styles/css/App.css';
import SideNavMenu from './templates/SideNavMenu';
import MapView from './templates/MapView'
import {getAllPlaces} from './actions/API'

class App extends Component {
  state = {
    places: [
      
    ]
  }
  componentDidMount(){
    getAllPlaces().then( result => {
      console.log(result);
    });
  }
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
