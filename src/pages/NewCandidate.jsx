
/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import styled from '@emotion/styled'
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import InnerLayout from '../Layout/InnerLayout/InnerLayout';
import InputFill from '../components/Utilities/TextField'
import ComboBox from '../components/Utilities/SelectRounded'







const FormBox = styled.div`
    width: 100%;
    max-width: 1240px;
    height: 100%;
    margin-right: auto;
    label: FormBox;
    padding-top: 48px;
`

const HeaderTitle = styled.h1`

`
const InputContainer = css`
    max-width: calc(100% / 4 - 20px);
    width: 100%;
    min-width: 250px;
    align-self: center;
    border-radius: 30px;
    margin: 10px;
    label: containerInput;
    .PrivateNotchedOutline-root-166 {
        border-radius: 30px;
       }
       
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
                                    <HeaderTitle className="u-Roboto30 u-upper u-margin-0">New Candidate</HeaderTitle >
                                        <div className="c-flex-around">

                                        <div css={InputContainer}>
                                            <InputFill LabelTag="First Name"> </InputFill>
                                        </div>
                                        <div css={InputContainer}>
                                            <InputFill LabelTag="Last Name"> </InputFill>
                                        </div>
                                        <div css={InputContainer}>
                                            <ComboBox LabelSelect='Industry'></ComboBox>
                                        </div>
                                        <div css={InputContainer}>
                                            <ComboBox LabelSelect='Functional Title'></ComboBox>
                                        </div>      
                                        <div css={InputContainer}>
                                            <InputFill LabelTag="Title"> </InputFill>
                                        </div>  
                                        <div css={InputContainer}>
                                            <InputFill LabelTag="Phone"> </InputFill>
                                        </div>  
                                        <div css={InputContainer}>
                                            <InputFill LabelTag="Email"> </InputFill>
                                        </div>
                                        <div css={InputContainer}>
                                            <ComboBox LabelSelect='State'></ComboBox>
                                        </div>
                                        <div css={InputContainer}>
                                            <ComboBox LabelSelect='City'></ComboBox>
                                        </div>   
                                        <div css={InputContainer}>
                                            <InputFill LabelTag="Zip"> </InputFill>
                                        </div> 
                                        <div css={InputContainer}>
                                            <ComboBox LabelSelect='Source'></ComboBox>
                                        </div> 
                                        <div css={InputContainer}>
                                            <InputFill LabelTag="Source URL"> </InputFill>
                                        </div>
                                     
                                               
                                        </div>
                            </FormBox>
                        </InnerLayout>
                    </PannelBackground>
                </div>
            </Fragment>
        );
    }
}








export default CandidateNew;