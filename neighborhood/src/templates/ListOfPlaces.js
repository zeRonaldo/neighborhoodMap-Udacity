import React, { Component } from 'react';
import {SideNavItem} from 'react-materialize';


class ListOfPlaces extends Component {
    render() {
        return (
          <div className="list">
                {this.props.places.map( place => {
                    return  <SideNavItem key={place.id}>{place.name}</SideNavItem>
                })}
                
          </div>
        )};
  }
  
  export default ListOfPlaces;