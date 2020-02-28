/** @jsx jsx */
import { jsx, css,Global } from '@emotion/core';
import styled from '@emotion/styled'
import { Component,Fragment } from 'react';

import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import InnerLayout from '../Layout/InnerLayout/InnerLayout';
import IconHead from '../img/icons/user-grey.svg'
import Return from '../Layout/InnerLayout/Return';

const HeaderTitle = styled.h1`
margin-bottom: 57px;
position: relative;
margin-left: 10px;
img{
    width:100px;
    height:auto;
    position:absolute;
    left: 0;
    opacity: 0.08;
    top: -33px;
}
`


class CompanyProfile extends Component {
    render(){
        return(
            <Fragment>
                <Global styles={css`
                    .l-block{
                        height: 100%;
                    }
                    .l-block-mid{
                            height: 100%;
                    }

                `}
                />
                <Layout />
                <div className="g-container">
                    <SideBar className="g-container__side" />
                    <PannelBackground className="g-container__box">
                        <InnerLayout>
                        <div className="c-flex-align-top">
                                    <Return></Return>
                                    <HeaderTitle 
                                        className="u-Roboto32 u-upper u-margin-0">New Company
                                        <img src={IconHead} alt=""/>
                                    </HeaderTitle >
                        </div> 
                        <div className="c-flex">
                            <div className="l-block"></div>
                            <div className="l-block-mid"></div>
                            <div className="l-block"></div>
                        </div>
                        </InnerLayout>
                    </PannelBackground>
                </div>
            </Fragment>
        );
    }
}








export default CompanyProfile;