  /** @jsx jsx */
  import { jsx, css, Global } from '@emotion/core';
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import CardStats from '../components/Dashboard/DashCards';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import Actions from '../components/Dashboard/KickActions'
import UseAutocomplete from '../components/Dashboard/SearchContent';


class Dashboard extends Component {
    render(){
        return(
            <Fragment>
                <Global styles ={css`
                    .g-dashboard-container{
                        max-width: 1200px;
                        margin: auto;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                    }
                `}
                />
                <Layout/>
                <div className="g-container">
                <SideBar className="g-container__side"/>
                <PannelBackground className="g-container__box">
                    <div className="g-dashboard-container">

                    <CardStats/>
                    <UseAutocomplete className="l-search"/>
                    <Actions/>
                    </div>
                </PannelBackground>
                </div>
                
                
            </Fragment>
        )
    }
}


export default Dashboard;


