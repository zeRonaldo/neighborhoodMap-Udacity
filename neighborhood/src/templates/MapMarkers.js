import React, { Component } from 'react';
 import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

const MapMarkers = compose(
  withScriptjs,
  withGoogleMap
)(props =>

    <MarkerWithLabel
      position={props.place.location }
      
      labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
    >
      <div>{props.place.name}</div>
    </MarkerWithLabel>

);
  
  export default MapMarkers;