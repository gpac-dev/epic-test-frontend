  /** @jsx jsx */
  import { jsx, css } from '@emotion/core';
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import CardStats from '../components/Dashboard/DashCards';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import Actions from '../components/Dashboard/KickActions'
import UseAutocomplete from '../components/Dashboard/SearchContent';

const DashLayout = css `
max-width: 1200px;
margin: auto;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.l-search{
    width: 100%;
}
`;


class Dashboard extends Component {
    render(){
        return(
            <Fragment>
                <Layout/>
                <div className="g-container">
                <SideBar className="g-container__side"/>
                <PannelBackground className="c-flex">
                <div css={DashLayout}>
                    <CardStats/>
                    <UseAutocomplete className="l-search" PlaceFill="Search by keyword..."  />
                    <Actions/>
                    </div>
                </PannelBackground>
                </div>
                
                
            </Fragment>
        )
    }
}


export default Dashboard;


