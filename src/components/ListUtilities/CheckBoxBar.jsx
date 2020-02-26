/** @jsx jsx */
import React from 'react';

import { jsx, css } from '@emotion/core';



const CheckContainer = css`
max-width: 1731px;
width: 100%;
margin: 10px auto;
display: flex;
align-items: center;
 

`


function BarCheckBox(props) {
    // const children = props.children;
    return (
        <React.Fragment>
            <div css={CheckContainer} className={props.className}>

                {props.children}
            </div>
        </React.Fragment>
    );
}

export default BarCheckBox;
