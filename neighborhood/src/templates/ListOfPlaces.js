//Libs
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from "recompose";
import {SideNavItem} from 'react-materialize';

const ListOfPlaces = compose()(props =>
(
          <div className="list">
                {props.places.map( place => {
                    return  <SideNavItem key={place.id} onClick={() => {props.onToggleOpen(place.id, true)}}>{place.name}</SideNavItem>
                })}
                
          </div>
)
);
   
ListOfPlaces.propTypes = {
    places: PropTypes.array.isRequired
  }
    export default ListOfPlaces;