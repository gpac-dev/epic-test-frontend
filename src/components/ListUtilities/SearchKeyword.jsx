  /** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import UseAutocomplete from '../Dashboard/SearchContent';

const InputBackground = css `
  background-color: White;
  border-radius: 30px;
  max-width: 1200px;
  width: 100%;
  margin: 0 20px;
  height: 54px;
    .l-search{
        &Autocomplete{
            max-width: 300px;
            width: 100%;
            position: relative;
            &-input{
                height: 54px;
            }

        }
    }
`;



class SearchKeyWord extends Component{
    render(){
        return(
            <div css={InputBackground}>
                <div className="l-searchAutocomplete">
                   <UseAutocomplete className="l-searchAutocomplete-input" PlaceFill="Search by Keyword"/>
                </div>
            </div>
        );
    }
}
export default SearchKeyWord;