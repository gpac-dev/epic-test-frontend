  /** @jsx jsx */
  import React, { Component } from 'react';
  import { jsx, css, Global } from '@emotion/core';




class ItemSide extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <img src={this.props.iconSide} alt=""/>
            <p>{this.props.ItemSection}</p>
        </div>
        );
    }
}


class SideBar extends Component{
      render(){
          return(
              <React.Fragment >
                   <Global styles={css`
                    .l-side{
                        width: 100%;
                        height: 100%
                        &__item{
                            width:100%;
                            height: 104%;
                            &--overview{

                            }
                        }

                    }
                  `}/>
                  <div className={this.props.className}>
                      <div className="l-side">
                         <ItemSide className="u-back" ItemSection={'Overview'}/>
                      </div>
                  </div>
              </React.Fragment>
          );
      }
  }

  export default SideBar;