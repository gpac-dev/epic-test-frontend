/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled'
import { Component } from 'react';
import UseAutocomplete from '../Utilities/SearchContent';
import SelectItem from '../Utilities/SelectBlank';
import BlankInput from '../Utilities/FillDataBlank';

const InputBackground = css`
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
        &-zip{
            max-width: 94px;
        }
        &-item{
            height: 35px;
            border-left: 1px solid #f2f2f2;
            &--label{
                z-index: 3;
                &:focus{
                    display: none;
                }
            }
       
        }
    }
`;

const Action = css`
max-width: 169px;
width: 100%;
align-self: flex-end;
margin-left: auto;
`

const ApplyButton = styled.button`
width: 100%;
height: 54px;
background: var(--black);
border-radius: 27px;
display: flex;
justify-conter: center;
align-items: center;
border: none;
    p{  
    color: White;
    text-align:center;
    margin: 0 auto;
    }
`;



class SearchKeyWords extends Component {
    render() {
        return (
            <div css={InputBackground}>
                <div className="c-flexn">
                    <div className="l-searchAutocomplete">
                        <UseAutocomplete className="l-searchAutocomplete-input" PlaceFill="Search by Keyword" />
                    </div>
                    <div className="c-flex">
                        <SelectItem className="l-search-item" DescriptionItem={'Industry'} />
                        <SelectItem className="l-search-item" DescriptionItem={'State'} />
                        <SelectItem className="l-search-item" DescriptionItem={'City'} />
                    </div>
                    <div className="l-search-zip">
                        <BlankInput ZipCodeTag={'ZIP'} />
                    </div>
                    <div css={Action}>
                        <ApplyButton>
                            <p className="u-text-700 u-Roboto18">Apply</p>
                        </ApplyButton>
                    </div>
                </div>
            </div>
        );
    }
}
export default SearchKeyWords;