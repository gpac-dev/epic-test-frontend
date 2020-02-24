  /** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import UseAutocomplete from '../Utilities/SearchContent';
import SelectItem from '../Utilities/SelectBlank';

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
        &-item{
            &--label{
                z-index: 3;
                &:focus{
                    display: none;
                }
            }
        }
    }
`;



class SearchKeyWords extends Component{
    render(){
        return(
            <div css={InputBackground}>
                <div className="c-flexn">

                <div className="l-searchAutocomplete">
                   <UseAutocomplete className="l-searchAutocomplete-input" PlaceFill="Search by Keyword"/>
                </div>
                   <div className="c-flex">
                   <SelectItem className="l-search-item" DescriptionItem={'Industry'}/>
                   <SelectItem className="l-search-item" DescriptionItem={'State'}/>
                   <SelectItem className="l-search-item" DescriptionItem={'City'}/>
                   </div>
                </div>

            </div>
        );
    }
}
export default SearchKeyWords;