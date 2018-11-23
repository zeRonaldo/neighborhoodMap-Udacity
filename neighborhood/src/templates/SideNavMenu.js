import React, { Component } from 'react';
import {SideNav,SideNavItem,Input,Icon} from 'react-materialize';
import Logo from '../res/logo.png';
import ListOfPlaces from './ListOfPlaces'

class SideNavMenu extends Component {
    render() {
      return (
        <SideNav
            trigger={ <nav>
                <div className="nav-wrapper z-depth-1">
                  {/* <Link to="/" clasName="brand-logo"><img src={Logo}></img></Link> */}
                  <ul id="nav-mobile" className="left">
                    <li data-target="slide-out" className="sidenav-trigger"><Icon>dehaze</Icon></li>
                    <a href="#" className="brand-logo center">I <img src={Logo} alt=""></img> Jampa</a>
                  </ul>
                </div>
              </nav>}
            options={{ closeOnClick: false }}
        >
            <SideNavItem userView
                user={{
                background: 'img/office.jpg',
                image: 'img/yuna.jpg',
                name: 'Cool Places in My City',
                email: 'jdandturk@gmail.com'
                }}
            />
           
            
                  <Input s={12} label="Search..." validate><Icon>search</Icon></Input>
                
               
            <SideNavItem divider />  
            <Input s={12} type='select' label="Filter by" defaultValue='0' onChange={ (e) => {console.log(e);this.props.filterCategory(e.target.value)}}>
              <option value='all'>All</option>
              <option value='bars'>Bars and Parties</option>
              <option value='restaurants'>Restaurants</option>
              <option value='landscape'>Landscapes</option>
            </Input>
               
            <SideNavItem divider /> 

            <ListOfPlaces places={this.props.places}></ListOfPlaces>
            
        </SideNav>
      )};
}

export default SideNavMenu;