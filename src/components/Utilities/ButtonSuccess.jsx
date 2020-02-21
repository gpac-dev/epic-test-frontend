  /** @jsx jsx */
  import { Component } from 'react';
  import { jsx, css } from '@emotion/core';

  const ActionSuccess = css`
  border-radius: 3px;
  background-color: #4056F4;
  color: White;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  `;

  class SuccessButton extends Component{
      render(){
          return(
            <button css={ActionSuccess} className={this.props.className}>
            {this.props.TextAction}
        </button> 
          );
      }
  }

  export default SuccessButton;