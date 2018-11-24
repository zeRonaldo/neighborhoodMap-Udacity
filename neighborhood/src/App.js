import React, { Component } from 'react';
import './styles/css/App.css';
import SideNavMenu from './templates/SideNavMenu';
import MapView from './templates/MapView';
import {getAllPlaces} from './actions/API';
import escapeRegExp from 'escape-string-regexp';


const LoadingScreen = (props) => {
  return <div className="loading-screen">
            <div class="container loader1">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
            <div className="wrapper">
              <h2>Carregando as localizações</h2>
            </div>
          </div>
}

class App extends Component {
  state = {
    loading: true,
    places: [
      
    ],
    shownPlaces: [],
    query: '',
    error: false,
    errorMsg: '',

  }
  async componentDidMount(){
    await getAllPlaces().then( result => {
        this.setState({
          places: result,
          shownPlaces: result
        }) 
    }).then(
        setInterval(this.setState({
          loading: false
        }), 10000)
    ).catch( (e) => {
      console.log("oops")
      console.log(e);
    })
  }

  filterPlaceByCategory = (category) => {
    if(this.state.query !== ''){
      if (category === 'all'){
        this.resetPlaces()
      }else{
        this.setState({
          shownPlaces: this.state.shownPlaces.filter(place => place.category.includes(category))
        })
      }
    }else{
      if (category === 'all'){
        this.resetPlaces()
      }else{
        this.setState({
          shownPlaces: this.state.places.filter(place => place.category.includes(category))
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
    const {error, shownPlaces, query} = this.state;
    const {filterPlaceByCategory, searchPlaceByName} = this;

    
    return (
        
        <div className="App">
          {error ? (
           
            <LoadingScreen></LoadingScreen>
          ):(
            <div>
              <SideNavMenu places={shownPlaces} filterCategory={filterPlaceByCategory} searchPlace={searchPlaceByName} query={query}></SideNavMenu>
              <MapView places={shownPlaces} isMarkerShown></MapView>
            </div>
          )}
        </div>
    
      );
  }
}

export default App;
