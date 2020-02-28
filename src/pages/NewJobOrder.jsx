
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
import CheckItem from '../components/ListUtilities/CheckBoxFilter';




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

const InputHiring = css`
    max-width: 580px;
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








class NewJobOrder extends Component {
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
                    .MuiTypography-root {
                        width: 190px;
                       }
                       fieldset.MuiFormControl-root {
                        display: flex;
                        justify-content: center;
                       }      
                       .l-fileContainer{
                        max-width: 444px;
                        width: calc(100% / 2);
                        min-width: 347px;
                            &-inputBox{
                                margin-left: 67px;
                                padding-top: 10px;
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
                                <HeaderTitle 
                                className="u-Roboto32 u-upper u-margin-0">New Job Order
                                </HeaderTitle >
                                <PointTitle 
                                 smallText="Required"
                                NameSection="Datos" SectionNumber="1"></PointTitle>
                                <div className="c-flex-start u-calc-left">
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="Company *"> </InputFill>
                                    </div>
                                    <div css={InputContainer}>
                                        <ComboBox LabelSelect='Title*'></ComboBox>
                                    </div>
                                    <div css={InputContainer}>
                                        <ComboBox LabelSelect='Functional Title*'></ComboBox>
                                    </div>
                                    <div css={InputContainer}>
                                        <ComboBox LabelSelect='Salary Offer'></ComboBox>
                                    </div>
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="Open Since*"> </InputFill>
                                    </div>
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="Start Date*"> </InputFill>
                                    </div>
                                    <div css={InputContainer}>
                                        <ComboBox LabelSelect='Title Industry*'></ComboBox>
                                    </div>
                                </div>
                                <div className="c-flex-start u-calc-left">
                                    <CheckItem Checklabel="Use a different location than company"
                                    ></CheckItem>
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="State" className="u-opacity5"> </InputFill>
                                    </div>
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="City" className="u-opacity5"> </InputFill>
                                    </div>
                                    <div css={InputContainer}>
                                        <InputFill LabelTag="ZIP" className="u-opacity5"> </InputFill>
                                    </div>
                                </div>
                                <PointTitle 
                                smallText="Required"
                                NameSection="Hiring Authority" SectionNumber="2">
                                </PointTitle>
                                <div className="c-flex-start u-calc-left">
                                    <div css={InputHiring}>
                                        <ComboBox LabelSelect='Select Hiring Authority'></ComboBox>
                                    </div>
                                    </div>
                                <div className="c-flex-align-top ">
                                    <div className="l-fileContainer">
                                        <PointTitle 
                                        smallText="Required"
                                        NameSection="White Sheet" SectionNumber="3">
                                        </PointTitle>
                                        <div className="l-fileContainer-inputBox">
                                            <FileUpload
                                                labelFile="Select or Drag File"
                                            ></FileUpload>
                                        </div>
                                    </div>
                                    <div className="l-fileContainer">
                                        <PointTitle 
                                        smallText="Option"
                                        NameSection="Job Description" 
                                        SectionNumber="4"></PointTitle>
                                        <div className="l-fileContainer-inputBox">
                                            <FileUpload
                                                labelFile="Select or Drag File"
                                            ></FileUpload>
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








export default NewJobOrder;