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
   
    }
    
`;

class PopItem extends Component {
    render(){
        return(
            <div css={PopBox} className={this.props.className}>
            <div className="l-popOver">
             
             </div>
            </div>
         
        );
    }
}
export default PopItem;