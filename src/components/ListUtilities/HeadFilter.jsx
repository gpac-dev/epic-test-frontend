/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import { Component } from 'react';
import ItemKick from '../Utilities/ButtonKick'



class HeadFilter extends Component {
    render() {
        return (
            <div className="c-flex-around g-100">
                <h1>{this.props.TagSection}</h1>
                <ItemKick ActionLabel={this.props.ButtonTag} />
            </div>
        );
    }
}


export default HeadFilter;