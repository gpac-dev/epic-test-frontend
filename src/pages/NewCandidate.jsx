
/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import styled from '@emotion/styled'
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import InnerLayout from '../Layout/InnerLayout/InnerLayout';
import InputFill from '../components/Utilities/TextField'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from "@material-ui/core/styles";







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

const CssTextField = withStyles({
    root: {
      margin: "10px 0",
      width: "100%",
      "& label.Mui-focused": {
        color: "var(--black)",
        backgroundColor: "#eceef2",
        padding: "0 15px 0 3px",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#1A1C21"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderRadius: "30px"
        },
        "&:hover fieldset": {
          borderColor: "var(--black)",
          borderWidth: "1px"
        },
        "&.Mui-focused fieldset": {
          borderColor: "var(--black)",
          borderWidth: "1px"
        }
      }
    }
  })(TextField);

function ComboBox(props) {
    return (
        <Autocomplete
        id="combo-box-demo" 
        options={top100Films}
        getOptionLabel={option => option.title}
        style={{ width: '100%' }}
        renderInput={params => 
        <CssTextField {...params} label={props.LabelSelect} variant="outlined"  style={{ width: '100%' }} />}
    />
     
    );
  }

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
   
  ];



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