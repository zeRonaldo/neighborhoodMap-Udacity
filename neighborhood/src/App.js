import React, { Component } from 'react';
import './styles/css/App.css';
import SideNavMenu from './templates/SideNavMenu';
import MapView from './templates/MapView';
import {getAllPlaces} from './actions/API';
import escapeRegExp from 'escape-string-regexp';
import SortBy from 'sort-by';

class App extends Component {
  state = {
    places: [
      
    ],
    shownPlaces: [],
    query: '',
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
      console.log(e);
    })
  }

  filterPlaceByCategory = (category) => {
    if(this.state.query !== ''){
      if (category === 'all'){
        this.resetPlaces()
      }else{
        this.setState({
          shownPlaces: this.state.shownPlaces.filter(place => place.category === category)
        })
      }
    }else{
      if (category === 'all'){
        this.resetPlaces()
      }else{
        this.setState({
          shownPlaces: this.state.places.filter(place => place.category === category)
        })
      }
    }
    
  }

  searchPlaceByName = (query) => {
    if(query === ''){
      this.resetPlaces();
      this.setState({
        query: query
      })
      
    }else{
      let match = new RegExp(escapeRegExp(this.state.query), 'i')
      this.setState({
        query : query,
        shownPlaces: this.state.shownPlaces.filter( place => match.test(place.name))

      })
    }
  }

  resetPlaces = () => {
    this.setState({
      shownPlaces:this.state.places
    });
  }
  render() {
    return (
      <div className="App">
        <SideNavMenu places={this.state.shownPlaces} filterCategory={this.filterPlaceByCategory} searchPlace={this.searchPlaceByName} query={this.state.query}></SideNavMenu>
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
