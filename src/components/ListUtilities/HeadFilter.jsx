/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import ItemKick from '../Utilities/ButtonKick'
import SearchKeyWord from './SearchKeyword';

const FilterLayout = css`
    min-height: 97px;
`;

class HeadFilter extends Component {
    render() {
        return (
            <div css={FilterLayout} className="c-flex-around g-100">
                <h1>{this.props.TagSection}</h1>
                <SearchKeyWord/>
                <ItemKick ActionLabel={this.props.ButtonTag} />
            </div>
        );
    }
}


export default HeadFilter;