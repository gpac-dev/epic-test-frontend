  /** @jsx jsx */
  import { Component } from 'react';
  import { jsx, css } from '@emotion/core';

  const ActionSuccess = css`
  border-radius: 3px;
  background-color: transparent;
  color: #1A1C21;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border: none;
  font-size: 18px;
  font-weight: 400;
  border: 1px solid #1A1C21;
  border-radius: 30px;
  max-width: 194px;
  min-width: 194px;
  `;

  class CancelButton extends Component{
      render(){
          return(
            <button css={ActionSuccess} className={this.props.className}>
            {this.props.TextCancel}
        </button> 
          );
      }
  }

  export default CancelButton;