
///Libs
 import React from 'react';
 import PropTypes from 'prop-types';
 import { compose, withStateHandlers } from "recompose";
 import { InfoWindow} from 'react-google-maps';

 
const MapMarkers = compose(  
  withStateHandlers(() => ({
  isOpen: false,
}), {
  onToggleOpen: ({ isOpen }) => () => ({
    isOpen: !isOpen,
  })
})
)(props =>
( 
   props.infoOpened === props.place.id &&
        <InfoWindow onCloseClick={props.onToggleOpen}>
                <div className="info-window">
                  <img src={props.place.photo} alt={props.place.name+' - photo by '+props.place.photographer}></img>
                  <h3 className="name">{props.place.name}</h3>
                  <h5 className="address">{props.place.locationTxt} <br/>{props.place.neighborhood}</h5>
                </div>
              </InfoWindow>
   
   
)
);
  
MapMarkers.propTypes = {
  place: PropTypes.object.isRequired
}
  export default MapMarkers;