//Libs
 import React from 'react';
 import PropTypes from 'prop-types';
 import { compose } from "recompose";

const MapMarkers = compose()(props =>
(
  <div>
    <h3>{props.place.name}</h3>
    <p>{props.place.locationTxt}</p>
  </div>
)
);
  
MapMarkers.propTypes = {
  place: PropTypes.object.isRequired
}
  export default MapMarkers;