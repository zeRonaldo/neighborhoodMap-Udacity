//Libs
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from "recompose";
import {SideNav,SideNavItem,Input,Icon} from 'react-materialize';
//Components
import Logo from '../res/logo.png';
import ListOfPlaces from './ListOfPlaces';

const SideNavMenu = compose() ( props =>
(
    <SideNav
          trigger={ <nav>
            <div className="nav-wrapper z-depth-1">
              <ul id="nav-mobile" className="left">
                <li data-target="slide-out" className="sidenav-trigger"><Icon>dehaze</Icon></li>
                <span className="brand-logo center">I <img src={Logo} alt=""></img> Jampa</span>
              </ul>
            </div>
          </nav>}
        options={{ closeOnClick: false }}
      >
        
        {/* SEARCH-BAR */}
        <Input s={12} label="Search..."  value={props.query} onChange={event => {props.searchPlace(event.target.value)}} ><Icon>search</Icon></Input>  
        <SideNavItem divider />  
        
        {/* CATEGORY-SELECT */}
        <Input s={12} type='select' label="Filter by" defaultValue='0' onChange={ (e) => {props.filterCategory(e.target.value)}}>
          <option value='all'>All</option>
          <option value='bars'>Bares e festas</option>
          <option value='restaurants'>Restaurantes</option>
          <option value='landscapes'>Paisagens</option>
        </Input>
        <SideNavItem divider /> 
          
        {/* LIST OF PLACES */}
        <ListOfPlaces places={props.places}></ListOfPlaces>
        
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

