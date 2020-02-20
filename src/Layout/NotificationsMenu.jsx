  /** @jsx jsx */
  import { jsx, css } from '@emotion/core';
  import '../css/Main.css';
  import '../css/Utilidades.css';
import { Component } from 'react';
import Candidate from '../img/icons/user-grey.svg';
import HotItem from '../img/icons/hot-grey.svg';
import Placement from '../img/icons/placement-grey.svg'


const DropNotifications = css `
width: 100%;
max-width: 315px;
height: auto;
  .l-notifications{
    border-radius: 5px 5px 0 0;
    width: 315px;
    height: 72px;
    display: flex; 
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
    &-number{
        color: #9CA6B5;
        margin: 0;
    }
    &-label{
        color: #9CA6B5;
        margin: 0;

    }
  }
`;


const NotificationsPanel = css `
    width: 100%;
    height: auto;
    .l-status{
        display: flex;
        align-items: center;
        padding: 0 20px;
        height: 64px;
        &--candidate{
            border-left: 6px solid #6950F5;
        }
        &--placements{
            border-left: 6px solid #B0F461;
        }
        &--hotItem{
            border-left: 6px solid #DE0000;
        }
        &--disable{
            border: none !important;
            img{
                opacity: .3;
            }
            &-content{
                p{
                    color: #9CA6B5;
                }
            }
        }
        img{
            width: 35px;
            height: 35px; 
        }
        &-content{
            p{
                margin: 0;
                padding: 0 20px;
            }
        }
    }
`;






class NotyStatus extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <img className="" src={this.props.IconStatus} alt=""/>
                <div className="l-status-content">
                    <p>A new Hot Candidate was added to your DIG</p>
                    
                </div>
            </div>
        );
    }
}




class NotyCard extends Component{
    render(){
        return(
            <div css={NotificationsPanel}>
               <NotyStatus className="l-status l-status--candidate" IconStatus={Candidate}/>
               <NotyStatus className="l-status l-status--hotItem" IconStatus={HotItem}/>
               <NotyStatus className="l-status l-status--placements" IconStatus={Placement}/>

            </div>
            
        );
    }
}




  class MenuNoty extends Component{
      render(){
          return(
            <div css={DropNotifications}>
            <div className="l-notifications">
                <p className="u-text-500 u-Roboto18 l-notifications-number">Notifications <span>{this.props.notificationsNumber}</span></p>
                <p className="u-text-300 u-Roboto16 l-notifications-label">Mark all as read</p>
            </div>
                <NotyCard />
        </div>
          );
      }
  }

  export default MenuNoty;