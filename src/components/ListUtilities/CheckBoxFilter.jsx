/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiCheckbox: {
            // Name of the rule
            colorPrimary: {
                // Some CSS
                color: '#1A1C21',
                checked: {
                    color: '#4056F4' 
                }
                
            },  
            
        },
        MuiFormControlLabel:{
            label:{
                fontSize: '18px',
                fontWeight: '300'
            }
        }
    },
});



class CheckItem extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label={this.props.Checklabel}
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
            </ThemeProvider>

        );
    }
}



const CheckContainer = css`
max-width: 1731px;
width: 100%;
margin: 10px auto;
display: flex;
align-items: center;
 

`


class CheckFilter extends Component {
    render() {
        return (
            <div css={CheckContainer}>
                <div className="c-flex">
                <CheckItem Checklabel={'Mine'} />
                <CheckItem Checklabel={'In progress'} />
                <CheckItem Checklabel={'In Sendout'} />
                <CheckItem Checklabel={'In Sendover'} />
                </div>
                <p className="u-auto-left u-Roboto18 u-text-300">Results: <span className="u-text-700">{this.props.NumberCount}</span></p>
            </div>
        );
    }
}

export default CheckFilter