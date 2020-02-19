  /** @jsx jsx */
  import { jsx, css, Global } from '@emotion/core';
import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import CardStats from '../components/Dashboard/DashCards';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';


class Dashboard extends Component {
    render(){
        return(
            <React.Fragment>
                <Layout className="l-hoho"/>
                <div className="g-container">
                <SideBar className="g-container__side"/>
                <div className="g-container__box">
                    <CardStats/>

                </div>
                </div>
                
                
            </React.Fragment>
        )
    }
}


export default Dashboard;


