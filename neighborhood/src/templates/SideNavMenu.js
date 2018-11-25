//Libs
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from "recompose";
import {SideNav,SideNavItem,Input,Icon, Button} from 'react-materialize';
//Components
import Logo from '../res/logo.png';
import ListOfPlaces from './ListOfPlaces';


//This component uses a sidenav to organize all the places and filtering components
const SideNavMenu = compose() ( props =>
(
    <SideNav
          trigger={ <nav>
            <div className="nav-wrapper z-depth-1">
              <ul id="nav-mobile" className="left">
                <li data-target="slide-out" className="sidenav-trigger" ><Button aria-label="menu" tabIndex="0" className="button-menu"><Icon>dehaze</Icon></Button></li>
                <span className="brand-logo center">I <img src={Logo} alt="logo"></img> Jampa</span>
              </ul>
            </div>
          </nav>}
        options={{ closeOnClick: false }}
      >
        
        {/* SEARCH-BAR :
            controlled component Input that sends the query down to our main component uses the on change and event
        */}
        <Input s={12} label="Search..."  value={props.query} onChange={event => {props.searchPlace(event.target.value)}} ><Icon>search</Icon></Input>  
        <SideNavItem divider tabIndex="-1"/>  
        
        {/* CATEGORY-SELECT 
            controlled component as a select dropdown that filters the places shown by category
        */}
        <Input s={12} type='select' label="Filter by" defaultValue='0' onChange={ (e) => {props.filterCategory(e.target.value)}}>
          <option value='all'>All</option>
          <option value='bars'>Bares e festas</option>
          <option value='restaurants'>Restaurantes</option>
          <option value='landscapes'>Paisagens</option>
        </Input>
        <SideNavItem divider tabIndex="-1" /> 
          
        {/* LIST OF PLACES 
            controlled component that features all the places being shown currently
            */}
        <ListOfPlaces places={props.places} showInfoWindow={props.showInfoWindow}></ListOfPlaces>
        
    </SideNav>
)
);
 
SideNavMenu.propTypes = {
  searchPlace: PropTypes.func.isRequired,
  filterCategory: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired
}
 export default SideNavMenu;

