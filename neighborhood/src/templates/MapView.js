
import React from 'react';
import { compose, withProps } from "recompose";
import mapStyle from '../styles/mapStyle'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from "react-google-maps";
import MapMarker from './MapMarker';

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDolgPQoZAEkNM9OOmUNuf0m6gQB8nCVIM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={13} defaultCenter={{ lat: -7.1494901, lng: -34.885884 }}  defaultOptions={{styles : mapStyle}}>
    {props.isMarkerShown ? (
      props.places.map( place => 
            (
              <MapMarker place={place} showInfoWindow={props.showInfoWindow} infoWindow={props.infoWindow} id={place.id} key={place.id}></MapMarker>
            ) 
          
      )
       
    ):(<div></div>)}
  </GoogleMap>
));


export default MyMapComponent;