import React, { Component } from 'react';
class Primary extends React.Component {
    render() {
      return (
        <button className="u-margin-15" 
          >
          {this.props.login}
        </button>
      );
    }
  }

  export default Primary;
 