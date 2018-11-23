import React, { Component } from 'react';
import './styles/css/App.css';
import SideNavMenu from './templates/SideNavMenu';
import MapView from './templates/MapView'
import {getAllPlaces} from './actions/API'

class App extends Component {
  state = {
    places: [
      
    ],
    error: false,
    errorMsg: '',
  }
  async componentDidMount(){
    await getAllPlaces().then( result => {
      result.map( place => {
        this.setState({
          places: [...this.state.places, place]
        })
      })      
    }).catch( (e) => {
      this.setState({
        error: true,
        errorMsg: e.target.value
      })
    })
  }

  filterPlaceByCateg

  render() {
    return (
      <div className="App">
        <SideNavMenu places={this.state.places}></SideNavMenu>
        <MapView places={this.state.places} isMarkerShown></MapView>
        {this.state.error ?
          (
            <div>{this.state.errorMsg}</div>
          )
          :(<div></div>)}
      </div>
    );
  }
}

export default App;
