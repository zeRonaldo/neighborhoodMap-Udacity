import React, { Component } from 'react';
import {SideNav,SideNavItem,Input,Icon} from 'react-materialize';
// import Logo from '../res/logo.png'

class SideNavMenu extends Component {
    render() {
      return (
        <SideNav
            trigger={ <nav>
                <div className="nav-wrapper z-depth-1">
                  {/* <Link to="/" clasName="brand-logo"><img src={Logo}></img></Link> */}
                  <ul id="nav-mobile" className="left">
                    <li data-target="slide-out" className="sidenav-trigger"><Icon>dehaze</Icon></li>
                    
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
            <Input s={12} type='select' label="Filter by" defaultValue='0'>
              <option value='1'>All</option>
              <option value='1'>Bars and Parties</option>
              <option value='2'>Restaurants</option>
              <option value='3'>Landscapes</option>
              <option value='4'>Stores</option>
            </Input>
            
        </SideNav>
      )};
}

export default SideNavMenu;