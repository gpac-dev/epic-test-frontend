import React, { Component } from 'react';
import { css } from 'emotion'
const backgroundColor = 'darkgreen'
class Primary extends Component {
    render() {
      return (
        <button className={css({
            backgroundColor: '#4056F4',
            '&:hover': {
              backgroundColor
            }
          })}
        >
          {this.props.login}
        </button>
      );
    }
  }

  export default Primary;
 