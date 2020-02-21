/** @jsx jsx */
import { Component } from 'react';
import { jsx, css } from '@emotion/core';


const ButtonFastAction = css`
    max-width: 253px;
    height: 54px;
    min-width: 250px;
    background: #1A1C21 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 47px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    transition: .5s ease-in-out;
    margin: 15px ;
    &:hover{
        background-color: #45484E;
    }
    .l-kick-circle{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: White;
        .l-kick-icon{
            width: 20px;
            height: 20px;
            transition: .5s ease-in-out;
            transition-delay: 1s;
            
        }
    }
    p{
        margin-left: 15px;
    }
`;

class ItemKick extends Component {
    render(){
        return(
          <div css={ButtonFastAction} className={this.props.className}>
              <div className="l-kick-circle">
                  <div className="l-kick-icon">

                  </div>
              </div>
              <p className="u-Roboto18 u-white u-text-700">{this.props.ActionLabel}</p>
          </div>
        );
    }
}
export default ItemKick;