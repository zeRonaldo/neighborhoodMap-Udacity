/*global google*/

import React from 'react';
import { compose, withProps } from "recompose";
import mapStyle from '../styles/mapStyle'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
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
            return  <MarkerWithLabel
            position={place.location }
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
            key={place.id}
          >
            <MapMarkers place={place}></MapMarkers>
          </MarkerWithLabel>
      })
       
    ):(<div></div>)}
  </GoogleMap>
));


export default MyMapComponent;