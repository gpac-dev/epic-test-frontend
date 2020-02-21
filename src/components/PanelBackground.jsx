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
  overflow: auto;
  padding: 0 20px;
`;
 


  function PannelBackground(props) {
    // const children = props.children;
    return (
      <React.Fragment>
          <div css={BackContainer} className={props.className}>

          {props.children}
          </div>
      </React.Fragment>
    );
  }
  
  export default PannelBackground;
  