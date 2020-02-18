/** @jsx jsx */
import { Component } from 'react';
import { jsx, css, Global } from '@emotion/core';
import '../css/Main.css';
import '../css/Utilidades.css';
import logoNavBar from '../img/gpac_logo.svg'
import Bell from '../img/icons/bell.svg'
import MenuAccount from './AccountMenu';
//import profilePic from '../img/icons/bell.svg'

  

class User extends Component{
  render(){
      return(
          <div>
              {this.props.userName}
          </div>
      )
  }
}



class NavBar extends Component{
  render(){
    return(
        <div>
            <Global styles={css`
              .l-navbar {
              width: 100%;
              height: 72px;
              box-shadow: 0px 3px 12px #00000010;
              background-color: White;
              padding: 0 25px;
              display: flex;
                  &-flex{
                      display: flex;
                      width: 100%;
                      justify-content: space-between;
                  }
                  &-logo{
                      max-width: 132px;
                      width: 100%;
                      height: auto;
                  }
                  &-menu{
                      display: flex;
                      align-items: center;
                      max-width: 210px;
                      width: 100%;
                      justify-content: flex-end;
                      .l-menu-drop{
                        transform: scale(1,0);
                        position: absolute;
                        right: 18px;
                        top: 85px;
                        transform-origin: top center;
                        transition: .3s all ease-in-out;
                        &:after{
                          content: '';
                          position: absolute;
                          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                          background-color: #f2f2f2;
                          width: 20px;
                          height: 23px;
                          right: 10px;
                          top: -13px;
                        }
                      }
                      .l-menu-profile{
                          display: flex;
                          align-items: center;
                          &:hover{
                            .l-menu-drop{
                              transform: scale(1,1);
                            }
                          }
                          img{
                              width: 54px;
                              height: 54px;
                              object-fit: cover;
                              object-position: center;
                              border-radius: 50%; 
                              margin: 0 10px;
                          }
                      }
                      .l-menu-dots{
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          position: relative;
                          
                          span{
                              width: 5px;
                              height: 5px;
                              background-color: #5b5b5b;
                              border-radius:50%;
                              margin: 2px 0 ;

                          }
                      }
                  }

              }
          `}
            />
            <div className="l-navbar">
                <div className="l-navbar-flex">
                      <img src={logoNavBar} className="l-navbar-logo" alt=""/>
                      <div className="l-navbar-menu">
                          <img src={Bell} css={{
                              width: '28px',
                              height: '28px'
                          }} alt=""/>
                          <div className="l-menu-profile">
                              <User userName="Profile" />
                              <img src={`https://images.unsplash.com/photo-1529092419721-e78fb7bddfb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4968&q=80`} alt=""/>
                              <div className="l-menu-dots">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                              <div className="l-menu-drop">
                              <MenuAccount />
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    );
  }
  

}

export default NavBar;