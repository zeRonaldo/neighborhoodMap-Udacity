import React, { Component } from 'react';
import './styles/css/App.css';
import SideNavMenu from './templates/SideNavMenu';
import MapView from './templates/MapView';
import {getAllPlaces} from './actions/API';
import escapeRegExp from 'escape-string-regexp';
import Logo from './res/logo.png';

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
  componentWillMount () {
    this.setState({
      loading:true
    })
  }
  async componentDidMount(){
   
    await getAllPlaces().then( result => {
        this.setState({
          places: result,
          shownPlaces: result
        }) 
    }).then(
      this.setState({
        loading: false
      })
    ).catch( (e) => {
      this.setState({
        error: true
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
    const {error,loading, shownPlaces, query} = this.state;
    const {filterPlaceByCategory, searchPlaceByName} = this;
    let content='';
    if(loading === true){
      content = <div className="loading-screen">
                    <div><img src={Logo} alt="heart logo" className="logo"></img></div>
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
    }else{
      if(error === true){
        content = <div className='error-screen'><h2>Malditos gremlins da internet!</h2><p>Não foi possível carregar o conteúdo, Tente novamente mais tarde</p></div>
      }else{
        content = <div>
              <SideNavMenu places={shownPlaces} filterCategory={filterPlaceByCategory} searchPlace={searchPlaceByName} query={query}></SideNavMenu>
              <MapView places={shownPlaces} isMarkerShown></MapView>
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
