/*global google*/ 
///Libs
 import React, {Fragment} from 'react';
 import PropTypes from 'prop-types';
 import { compose, withStateHandlers } from "recompose";
 import { InfoWindow} from 'react-google-maps';
 import {getPlace} from '../actions/API'
 
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
                <Fragment>
                  <img src={props.place.photo} alt={props.place.name+' - photo by '+props.place.photographer}></img>
                  <h3>{props.place.name}</h3>
                  <h5>{props.place.locationTxt} - {props.place.neighborhood}</h5>
                </Fragment>
              </InfoWindow>
   
   
)
);
  
MapMarkers.propTypes = {
  place: PropTypes.object.isRequired
}
  export default MapMarkers;