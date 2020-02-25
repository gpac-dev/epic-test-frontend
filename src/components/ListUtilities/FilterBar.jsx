/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import ItemKick from '../Utilities/ButtonKick'
import SearchKeyWords from './SearchBar';

const FilterLayout = css`
    min-height: 97px;
    max-width: 1731px;
    margin: auto;
    h1{
        text-transform: uppercase;
        font-size:calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)));
       }
        @media (max-width: 1620px){
            flex-wrap: wrap;
        }
    .l-filter{
        &-container{
            min-width: 970px;
            @media (max-width: 1620px){
                min-width: unset;
            }
        }
    }
`;

class FilterContainer extends Component {
    render() {
        return (
            <div css={FilterLayout} className="c-flexn-align-around g-100 l-filter">
                <h1>{this.props.TagSection}</h1>
                <SearchKeyWords className="l-filter-container" />
                <ItemKick ActionLabel={this.props.ButtonTag} />
            </div>
        );
    }
}


export default FilterContainer;