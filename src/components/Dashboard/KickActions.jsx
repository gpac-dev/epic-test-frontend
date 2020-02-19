  /** @jsx jsx */
  import { Component } from 'react';
  import { jsx, css } from '@emotion/core';
  import Sendout from '../../img/icons/sendout.svg'

  const ButtonKick = css `
    width: calc(100% / 4);
    max-width: 253px;
    height: 54px;
    background: #1A1C21 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 47px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: 15px ;
    &:nth-child(1){
        margin: 15px 15px 15px 0;
    }
    &:nth-child(4){
        margin: 15px 0px 15px 15px;
    }


    .l-kick{
        &-circle{
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: White;
                img{
                    width: 15px;
                    height: auto;
                    object-fit: contain;
                }
        }   
    }
    p{
        margin-left: 15px;
    }
  `;


  class ItemKick extends Component {
      render(){
          return(
            <div css={ButtonKick}>
                <div className="l-kick-circle">
                    <img src={this.props.IconAction} alt=""/>
                </div>
                <p className="u-Roboto18 u-white u-text-700">{this.props.ActionLabel}</p>
            </div>
          );
      }
  }




  class Actions extends Component{
      render(){
          return(
            <div className="u-width100 c-flex-around u-padding">
                <ItemKick IconAction={Sendout} ActionLabel={'Add Candidate +'} />
                <ItemKick IconAction={Sendout} ActionLabel={'Add Company +'} />
                <ItemKick IconAction={Sendout} ActionLabel={'Add Job Order +'} />
                <ItemKick IconAction={Sendout} ActionLabel={'Add Sendout +'} />
            </div>
          );
      }
  }

  export default Actions;