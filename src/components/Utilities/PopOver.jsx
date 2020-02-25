/** @jsx jsx */
import { Component } from 'react';
import { jsx, css } from '@emotion/core';


const PopBox = css`
position: absolute;
width: 236px;
&:before{
    content:'';
        clip-path: polygon(0% 0% ,100% 0%,50% 100%);
        width:25px;
        height:25px;
        position: absolute;
        bottom: -20px;
        background-color: var(--black);
        left: 0;
        right: 0;
        margin: auto;
       
}
&:after{
    content:'';
        width:100%;
        position: absolute;
        bottom: -20px;
        background-color: transparent;
        left: 0;
        right: 0;
        margin: auto;
        height: 20px;
       
}
    .l-popOver{
    width: 239px;
    height: 136px;
    background-color: var(--black);
    position: relative;
    padding: 14px 20px 0;
    &-More{
        right: 14px;
        bottom: 5px;
    }
    &-status{
        width: 82px;
        height: 22px;
        background-color: currentColor;
        border-radius: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: -33px;
        top: 7px;
        p{
            color: white !important;
            text-align: center;
            font-weight: 300;
        }
    }
   
    }
    
`;



function PopItem(props) {
    return (
        <div css={PopBox} className={props.className}>
        <div className="l-popOver">
           {props.children}
        </div>
    </div>
    );
  }
  
  export default PopItem;
  