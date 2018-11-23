import React, { Component } from 'react';
import './styles/css/App.css';
import SideNavMenu from './templates/SideNavMenu';
import MapView from './templates/MapView'
import {getAllPlaces} from './actions/API'

class App extends Component {
  state = {
    places: [
      
    ],
    shownPlaces: [],
    error: false,
    errorMsg: '',
  }
  async componentDidMount(){
    await getAllPlaces().then( result => {
      result.map( place => {
        this.setState({
          places: [...this.state.places, place],
          shownPlaces: [...this.state.places, place]
        })
      })  
    }).catch( (e) => {
      this.setState({
        error: true,
        errorMsg: e.target.value
      })
    })
  }

  filterPlaceByCategory = (category) => {
    this.setState({
      shownPlaces: this.state.places.filter(place => place.category === category)
    })
  }

  render() {
    return (
      <div className="App">
        <SideNavMenu places={this.state.shownPlaces} filterCategory={this.filterPlaceByCategory}></SideNavMenu>
        <MapView places={this.state.shownPlaces} isMarkerShown></MapView>
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
