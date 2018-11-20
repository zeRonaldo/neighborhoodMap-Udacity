import React, { Component } from 'react';
import SideNavMenu from './SideNavMenu';
import MapView from './MapView';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <SideNavMenu/>
                <MapView isMarkerShown/>
            </div>
        );
    }
}

export default Main