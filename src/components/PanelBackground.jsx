  /** @jsx jsx */
  import React from 'react';
  import { Component } from 'react';
  import { jsx, css } from '@emotion/core';
import Background from '../img/Background.jpg';

const BackContainer = css`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('${Background}');
`;
  class PannelBackground extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div css={BackContainer}>

                </div>
            </div>
        );
    }
  }

  export default PannelBackground;