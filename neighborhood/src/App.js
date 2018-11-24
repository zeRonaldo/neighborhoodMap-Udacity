import React, { Component } from 'react';
import './styles/css/App.css';
import SideNavMenu from './templates/SideNavMenu';
import MapView from './templates/MapView';
import {getAllPlaces} from './actions/API';
import Logo from './res/logo.png';

class App extends Component {
  state = {
    isLoading: true,
    hasError: false,
    places: [],
    shownPlaces: [],
    query: '',
    errorMsg: '',
    infoWindow: '',
  }

   componentDidMount(){
   
     getAllPlaces().then( result => {
        this.setState({
          isLoading: false,
          places: result,
          shownPlaces: result
        }) 
    }).catch( (e) => {
      this.setState({
        hasError: true
      })
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

  /*
      Function that receives the query from a controlled input on the sidenavmenu and filter the original places
    */
  searchPlaceByName = (query) => {
    
    if(query === ''){
      this.resetPlaces();
      this.setState({
        query: query
      })
      
    }else{
      this.setState({
        query : query,
        shownPlaces: this.state.shownPlaces.filter( place => place.name.toUpperCase().includes(query.toUpperCase()))

      })
    }
  }
 
  /*
        Shorthand function to reset the places to the initial list
    */
  resetPlaces = () => {
   
    this.setState({
      shownPlaces:this.state.places
    });
  }

  showInfoWindow = (key) => {
    this.setState({
      infoWindow: key
    })
  }

  render() {
    const {hasError,isLoading, shownPlaces, query, infoWindow} = this.state;
    const {filterPlaceByCategory, searchPlaceByName,showInfoWindow} = this;
    let content='';
    if(isLoading){
      content = <div className="loading-screen">
                    <div><img src={Logo} alt="heart logo" className="logo"></img></div>
                  <div className="container loader1">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                  </div>
                  <div className="wrapper">
                    <h2>Carregando as localizações</h2>
                  </div>
                </div>
    }else{
      if(hasError){
        content = <div className='error-screen'><h2>Malditos gremlins da internet!</h2><p>Não foi possível carregar o conteúdo, Tente novamente mais tarde</p></div>
      }else{
        content = <div>
              <SideNavMenu places={shownPlaces} filterCategory={filterPlaceByCategory} searchPlace={searchPlaceByName} query={query} showInfoWindow={showInfoWindow}></SideNavMenu>
              <MapView places={shownPlaces} infoOpened={infoWindow} showInfoWindow={showInfoWindow} isMarkerShown></MapView>
            </div>
      }
    }
    
    
    return (
        
        <div className="App">
          {content}
        </div>
    
      );
  }
}

export default App;
