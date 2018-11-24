
 import React from 'react';

 import { compose } from "recompose";

const MapMarkers = compose()(props =>
(
  <div>
    <h3>{props.place.name}</h3>
    <p>{props.place.locationTxt}</p>
  </div>
)
);
  

  export default MapMarkers;