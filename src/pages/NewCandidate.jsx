
/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import styled from '@emotion/styled'
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import InnerLayout from '../Layout/InnerLayout/InnerLayout';



const FormBox = styled.div`
    width: 100%;
    max-width: 1240px;
    label: FormBox;
`






class CandidateNew extends Component {
    render(){
        return(
            <Fragment>
                <Global styles={css`
                
                    
                `}
                />
                <Layout />
                <div className="g-container">
                    <SideBar className="g-container__side" />
                    <PannelBackground className="g-container__box">
                        <InnerLayout>
                            <FormBox>
                                
                            </FormBox>
                        </InnerLayout>
                    </PannelBackground>
                </div>
            </Fragment>
        );
    }
}








export default CandidateNew;