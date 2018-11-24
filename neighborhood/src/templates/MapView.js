/*global google */
import React from 'react';
import { compose, withProps } from "recompose";
import mapStyle from '../styles/mapStyle'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import MapMarkers from './MapMarkers';

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
      props.places.map( place => {
            return  <Marker
            position={place.location }
            key={place.id}
            animation={google.maps.Animation.Drop}
            onClick={() => {
              console.log(place.photographer)
              props.showInfoWindow(place.id)}}
          >
            <MapMarkers place={place} showInfo={() => props.showInfoWindow} infoOpened={props.infoOpened} ></MapMarkers>
          </Marker>
      })
       
    ):(<div></div>)}
  </GoogleMap>
));


export default MyMapComponent;