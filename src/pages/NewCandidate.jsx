
/** @jsx jsx */
import React from 'react';
import { jsx, Global, css } from '@emotion/core';
import styled from '@emotion/styled'
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import InnerLayout from '../Layout/InnerLayout/InnerLayout';
import InputFill from '../components/Utilities/TextField'
import ComboBox from '../components/Utilities/SelectRounded'
import PointTitle from '../components/NewItemsUtilities/PointTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




const FormBox = styled.div`
    width: 100%;
    max-width: 1232px;
    height: 100%;
    margin-right: auto;
    label: FormBox;
    padding-top: 48px;
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


const RelocationRow = css `
    height: 115px;
    max-width: 940px;
    width: 100%;
    label: RelocationRow;

   .l-relocation{
       &-radio{
        max-width:200px;
        width:100%;
        align-self: flex-start;
        padding-top: 15px;
       }
   }
`



const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiRadio: {
            // Name of the rule
            colorPrimary: {
                color: '#4056F4A6',
                    "&$checked": {
                    color: '#4056F4'
                }
            },
        },
    },
});




function FormControlLabelPosition() {
    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <FormControl component="fieldset">
                <FormLabel component="legend" className="u-text-500 u-Roboto18 u-dark">Relocation</FormLabel>
                <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

                    <FormControlLabel
                        className="l-radio-check"
                        value="Yes"
                        control={<Radio color="primary" />}
                        label="Yes"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        className="l-radio-check"
                        value="No"
                        control={<Radio color="primary" />}
                        label="No"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </FormControl>
        </ThemeProvider>

    );
}





  const ChipsTextField = withStyles({
    root: {
      margin: "10px 0",
      width: "100%",
      height: '50px',
      minWidth: '300px',
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
  
  function Tags() {
    const classes = withStyles();
  
    return (
      <div className={classes.root}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={top100Films}
          getOptionLabel={option => option.title}
          defaultValue={[top100Films[13]]}
          filterSelectedOptions
          renderInput={params => (
            <ChipsTextField
              {...params}
              variant="outlined"
              label="Relocation Destinations"
              placeholder="Favorites"
            />
          )}
        />
      </div>
    );
  }
  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
   
  ];



class CandidateNew extends Component {
    render() {
        return (
            <Fragment>
                <Global styles= {css`
                    .l-radio-check{
                        width: 85px;
                        font-size: 18px;
                    }
                    legend.MuiFormLabel-root {
                        padding-bottom: 10px;
                       }                       
                    label.MuiFormControlLabel-root:nth-child(1) > span:nth-child(2) {
                        font-weight: 300;
                        font-size: 18px;
                       } 
                       label.MuiFormControlLabel-root:nth-child(2) > span:nth-child(2) {
                        font-size: 18px;
                        font-weight: 300;
                       }
                                                
                `}
                />
                <Layout />
                <div className="g-container">
                    <SideBar className="g-container__side" />
                    <PannelBackground className="g-container__box">
                        <InnerLayout>
                            <FormBox>
                                <HeaderTitle className="u-Roboto32 u-upper u-margin-0">New Candidate</HeaderTitle >
                                <PointTitle NameSection="Personal Data" SectionNumber="1"></PointTitle>
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
                                <div className="c-flex u-side10" css={RelocationRow}>
                                    <div className="l-relocation-radio">
                                        <FormControlLabelPosition></FormControlLabelPosition>
                                    </div>
                                    <div className="l-relocation-chips">
                                        {/* <h5 className="u-text-500 u-Roboto18 u-dark u-margin-5">Relocation Destinations</h5> */}
                                        <Tags></Tags>
                                    </div>
                                </div>
                                <div className="c-flex ">
                                    <PointTitle NameSection="Resume File" SectionNumber="2"></PointTitle>
                                    <PointTitle NameSection="Blue Sheet" SectionNumber="3"></PointTitle>
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