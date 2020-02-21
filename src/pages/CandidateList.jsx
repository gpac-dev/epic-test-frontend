  /** @jsx jsx */
  import { jsx, css, Global } from '@emotion/core';
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import HeadFilter from '../components/ListUtilities/HeadFilter';


class CandidateList extends Component {
    render(){
        return(
            <Fragment>
                <Global styles ={css`
                  
                `}
                />
                <Layout/>
                <div className="g-container">
                <SideBar className="g-container__side"/>
                <PannelBackground className="g-container__box">
                    <HeadFilter/>
                    
                </PannelBackground>
                </div>
                
                
            </Fragment>
        )
    }
}


export default CandidateList;


