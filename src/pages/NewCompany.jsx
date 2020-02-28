
/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import styled from '@emotion/styled'
import facepaint from 'facepaint'
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import InnerLayout from '../Layout/InnerLayout/InnerLayout';
import InputFill from '../components/Utilities/TextField'
import ComboBox from '../components/Utilities/SelectRounded'
import PointTitle from '../components/NewItemsUtilities/PointTitle';
import FileUpload from '../components/Utilities/FileUpload'
import SuccessButton from '../components/Utilities/ButtonSuccess';
import CancelButton from '../components/Utilities/ButtonCancel';




const FormBox = styled.div`
    width: 100%;
    max-width: 1232px;
    min-height: 100%;
    margin-right: auto;
    label: FormBox;
    padding: 48px 0;
`

const HeaderTitle = styled.h1`
margin-bottom: 57px;

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



const ActionsButtons = styled.div`
   display: flex;
   margin:  100px 0 0;
   label: actionsButtonSection;
`

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(
    breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)








class CompanyNew extends Component {
    render() {
        return (
            <Fragment>
                <Global styles={css`
                    .u-calc-left{
                        padding-left: calc(100% / 12 - 44px);
                    }
                   
                    .l-fileContainer{
                        width: 100%;
                        min-width: 347px;
                            &-inputBox{
                                margin-left: 67px;
                                margin-right: 20px;
                            }
                    }
                    .l-feeeAg{
                        &-text{
                            max-width: 430px;
                            width: 100%;
                        }
                    }
                                                
                `}
                />
                <Layout />
                <div className="g-container">
                    <SideBar className="g-container__side" />
                    <PannelBackground className="g-container__box">
                        <InnerLayout>
                            <FormBox>
                                <HeaderTitle className="u-Roboto32 u-upper u-margin-0">New Company</HeaderTitle >
                                <PointTitle NameSection="Contact Data" SectionNumber="1"></PointTitle>
                                <div className="c-flex-start u-calc-left">
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="Company Name"> </InputFill>
                                    </div>
                                    <div css={InputContainer}>
                                        <ComboBox LabelSelect='Industry'></ComboBox>
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
                                        <InputFill LabelTag="Address"> </InputFill>
                                    </div>
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="Phone"> </InputFill>
                                    </div>
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="Email"> </InputFill>
                                    </div>

                                    <div css={InputContainer}>
                                        <InputFill LabelTag="Website"> </InputFill>
                                    </div>
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="Linkedin Profile URL"> </InputFill>
                                    </div>
                                </div>
                                <div className="l-fileContainer">
                                    <PointTitle NameSection="Hiring Authority" SectionNumber="2">
                                    </PointTitle>
                                    <div className="c-flex-start u-calc-left">
                                        <div css={InputContainer}>
                                            <InputFill LabelTag="First Name"> </InputFill>
                                        </div>
                                        <div css={InputContainer}>
                                            <InputFill LabelTag="Last Name"> </InputFill>
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
                                    </div>
                                </div>
                                <div className="l-fileContainer">
                                    <PointTitle NameSection="Fee Agreement" SectionNumber="3"></PointTitle>
                                    <div className="c-flex">
                                        <div className="l-fileContainer-inputBox">
                                            <FileUpload
                                                labelFile="Select or Drag File"
                                            ></FileUpload>
                                        </div>
                                        <div>
                                            <p className="u-text-300 u-Roboto18 l-feeeAg-text ">You can upload this later, but it will be needed to create Any sendout related to this company</p>
                                        </div>
                                    </div>
                                </div>
                                <ActionsButtons
                                    css={mq({
                                        alignItems: ['center', 'center', 'flex-end'],
                                    })}
                                >
                                    <div className="u-block "
                                        css={mq({
                                            margin: ['0 auto', '0 auto', '0 0 0 auto'],
                                        })}
                                    >
                                        <CancelButton TextCancel="Cancel" className="u-side10"></CancelButton>
                                        <SuccessButton TextAction="Save" className="u-side10"></SuccessButton>
                                        <SuccessButton TextAction="Save & Add New Job Order" className="u-side10"></SuccessButton>

                                    </div>
                                </ActionsButtons>
                            </FormBox>
                        </InnerLayout>
                    </PannelBackground>
                </div>
            </Fragment>
        );
    }
}








export default CompanyNew;