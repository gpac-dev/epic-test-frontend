/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import ItemKick from '../Utilities/ButtonKick'
import SearchKeyWords from './SearchBar';

const FilterLayout = css`
    min-height: 97px;
`;

class FilterContainer extends Component {
    render() {
        return (
            <div css={FilterLayout} className="c-flexn-align-around g-100">
                <h1>{this.props.TagSection}</h1>
                <SearchKeyWords/>
                <ItemKick ActionLabel={this.props.ButtonTag} />
            </div>
        );
    }
}


export default FilterContainer;