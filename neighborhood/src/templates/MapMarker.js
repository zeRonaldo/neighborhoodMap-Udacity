
///Libs
 import React, {Component, Fragment} from 'react';
 import PropTypes from 'prop-types';
 import { InfoWindow,Marker} from 'react-google-maps';
 import { getPlace } from "../actions/API";
 
class MapMarker extends Component {
  state = {
    isOpen: false,
    animationState: 2
  }

  onToggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      animationState: null
    })
  }

  componentDidMount(){
    if(this.props.place.id = this.props.infoWindow){
      this.setState({
        isOpen: true,
        animationState:1
      })
    }
  }
  

  clickedOnMarker = (key) =>{
    console.log(key)
    this.props.showInfoWindow(key)
  }

  render() {
    const{  place, id, key } = this.props;
    const { animationState, isOpen } = this.state;
    
    const marker = 
        <Marker 
            position={place.location}
            key={place.id}
            animation={animationState}
            onClick={ () => this.clickedOnMarker(id)} >
              {isOpen ? (
                <InfoWindow onCloseClick={() => this.onToggleOpen()} key={place.id}>
                <div className="info-window" >
                  <img src={place.photo} alt={place.name+' - photo by '+place.photographer}></img>
                  <h3 className="name">{place.name}</h3>
                  <h5 className="address">{place.locationTxt} <br/>{place.neighborhood}</h5>
                </div>
              </InfoWindow>
              ) : <Fragment/>}
            </Marker>
      
    return (
      <Fragment>
        {marker}
      </Fragment>
    )
  }
} 
  
MapMarker.propTypes = {
  place: PropTypes.object.isRequired
}
  export default MapMarker;