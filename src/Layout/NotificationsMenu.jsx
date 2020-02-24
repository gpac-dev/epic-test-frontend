  /** @jsx jsx */
  import { jsx, css } from '@emotion/core';
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
        color: var(--grey);
        margin: 0;
    }
    &-label{
        color: var(--grey);
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
            .l-status-content{
                p{
                    color: var(--grey) !important;
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
                color: var(--black);
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
                    <p>{this.props.textStatus}</p>
                </div>
            </div>
        );
    }
}




class NotyCard extends Component{
    render(){
        return(
            <div css={NotificationsPanel}>
               <NotyStatus 
               className="l-status l-status--candidate" 
               IconStatus={Candidate}
               textStatus={"A new Hot Candidate was added to your DIG"}
               />
               <NotyStatus 
               className="l-status l-status--hotItem" 
               IconStatus={HotItem}
               textStatus={'A Hot Job Order have more than 2 days without sendouts!'}
               />
               <NotyStatus 
               className="l-status l-status--placements" 
               IconStatus={Placement}
               textStatus={'New Deal: KJC $14,560!'}
               />
               <NotyStatus 
               className="l-status l-status--placements l-status--disable" 
               IconStatus={Placement}
               textStatus={'A new Hot Candidate was Added to your DIG'}
               />

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