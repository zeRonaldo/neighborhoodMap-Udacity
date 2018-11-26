
///Libs
 import React, {Component, Fragment} from 'react';
 import PropTypes from 'prop-types';
 import { InfoWindow,Marker} from 'react-google-maps';
 
 import FourSquare  from "../res/foursquare.png";
 
 class MapMarker extends Component {

  state={
    extra: false,
    place:{}
  }
  

  render() {
    const{  place, onToggleOpen, isOpen, showMarker} = this.props;
    
    const {id} = place;

    const marker = 
        <Marker 
            position={place.location}
            key={id}
            animation={isOpen && showMarker === id ? 1: null}
            onClick={ () => onToggleOpen(id, true)} >
              {isOpen && showMarker === id ? (
                <InfoWindow onCloseClick={() => onToggleOpen(id , false)} key={id}>
                <div className="info-window" >
                  <img src={place.photo} alt={place.name+' - photo by '+place.photographer}></img>
                  <h3 className="name">{place.name}</h3>
                  <h5 className="address">{place.locationTxt} <br/>{place.neighborhood}</h5>
                  <a className="right location-font" href="https://pt.foursquare.com/developers"> powered by<img src={FourSquare} alt="foursquare logo"></img></a>
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