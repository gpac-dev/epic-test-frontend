/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled'
import { Component } from 'react';
import ReturnIcon from '../../img/icons/Return.svg'
import ReturnIconHover from '../../img/icons/RowArrow-Hover.svg'


const BoxArrow = styled.div`
    width: 56px;
    height: 32px;
    margin-top: 8px;
`


const ReturnContainer = styled.div`
    label: returnContainer;
    width: 100%;
    height: 100%;
    position:relative;
    .l-return{
        &-main{
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            transition: .5s ease-in-out;
            transform: scale(1);
        }
        &-hover{
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            opacity:0;
            transform: scale(.9);
            transition: .5s ease-in-out;
            transition-delay: .2s;
        }
   }
   &:hover{
    .l-return-main{
        transform: scale(.7);
        opacity: 0.5;
    }
    .l-return-hover{
        opacity:1;
        transform: scale(1.2);
    }
}
`


class Return extends Component {
    render(){
        return(
            <BoxArrow className={this.props.className} >
                <ReturnContainer className={this.props.className}>
                    <img src={ReturnIcon}  className="l-return-main" alt=""/>
                    <img src={ReturnIconHover} className="l-return-hover" alt=""/>
                </ReturnContainer>
            </BoxArrow>
        );
    }
}








export default Return;