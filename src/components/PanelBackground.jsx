  /** @jsx jsx */
  import React from 'react';
  //import { Component } from 'react';
  import { jsx, css } from '@emotion/core';
import Background from '../img/Background.jpg';

const BackContainer = css`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('${Background}');
`;
 


  function PannelBackground(props) {
    // const children = props.children;
  
    return (
      <React.Fragment>
          <div css={BackContainer}>

          {props.children}
          </div>
      </React.Fragment>
    );
  }
  
  export default PannelBackground;
  