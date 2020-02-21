  /** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import ComboBox from '../Utilities/ComboBox';

const InputBackground = css `
  background-color: White;
  border-radius: 30px;
  max-width: 1200px;
  width: 100%;
  margin: 0 20px;
    .l-search{
        &Autocomplete{
            max-width: 300px;
            width: 100%;
        }
    }
`;



class SearchKeyWord extends Component{
    render(){
        return(
            <div css={InputBackground}>
                <div className="l-searchAutocomplete">
                   <ComboBox InfoAuto="Search by Keyword"/>
                </div>
            </div>
        );
    }
}
export default SearchKeyWord;