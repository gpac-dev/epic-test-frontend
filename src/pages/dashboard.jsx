  /** @jsx jsx */
  import { jsx, css } from '@emotion/core';
import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import CardStats from '../components/Dashboard/DashCards'


const PanelBox = css`
    background-color: #f2f2f2;
    height: 100vh;
    width: 78%;
`;

class Dashboard extends Component {
    render(){
        return(
            <React.Fragment>
                <Layout/>
                <div css={PanelBox}>

                <CardStats/>
                </div>
            </React.Fragment>
        )
    }
}


export default Dashboard;


