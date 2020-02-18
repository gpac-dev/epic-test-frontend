  /** @jsx jsx */
  import { jsx, css } from '@emotion/core';
  import '../css/Main.css';
  import '../css/Utilidades.css';
import { Component } from 'react';
import userIcon from '../img/icons/user.svg'

const panelBack = '#f2f2f2';

const DropNotifications = css `
width: 100%;
max-width: 315px;
height: auto;
`;

const NotificationHeader = css `
    border-radius: 5px 5px 0 0;
    width: 315px;
    height: 72px;
    padding: 0 20px;
    display: flex; 
    justify-content: center;
    flex-direction: column;

    p{
        margin: 3px 0;
    }
`;

const NotificationsPanel = css `
    width: 100%;
    height: auto;
`;


const CardStatusNoty = css `
  width: 100%;
  height: 54px;
  background-color: ${panelBack};
  border-left: 6px;
  display: flex; 
  align-items: center;
  padding: 0 20px;
`;


const CardPic = css`
    width: 35px;
    height: 35px; 

`;

const CardContent = css `
    background-color: ${panelBack};
    p{
    margin: 0;
    padding: 0 20px;
    }
`;


const hotCard = css `
    border-color: lightblue;
`;


class NotyCard extends Component{
    render(){
        return(
            <div css={CardStatusNoty}>
                <img css={CardPic} src={userIcon} alt=""/>
                <div css={CardContent}>
                    <p>A new Hot Candidate was added to your DIG</p>
                    
                </div>
            </div>
        );
    }
}




  class MenuNoty extends Component{
      render(){
          return(
            <div css={DropNotifications}>
            <div css={NotificationHeader}>
                <p>Notifications <span>{this.props.notificationsNumber}</span></p>
                <p>Mark all as read</p>
            </div>
            <div css={NotificationsPanel}>
                <NotyCard css={hotCard}/>
            </div>
        </div>
          );
      }
  }

  export default MenuNoty;