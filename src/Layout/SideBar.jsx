  /** @jsx jsx */
  import { Component } from 'react';
  import { jsx, css } from '@emotion/core';
  import Overview from '../img/icons/home.svg';
  import Map from '../img/icons/map.svg';
  import Sendout from '../img/icons/sendout.svg';
  import Inventory from '../img/icons/inventory.svg';
  import Dashboard from '../img/icons/dashboard.svg';

  const paragraph = '#56595B;'

  const SidePanel = css`
  width: 100%;
  height: 100%;
    .l-side{
        width: 100%;
      height: 104px;
      display: flex;
      justify-content:center;
      flex-direction: column;
    //   background-image: url('${Dashboard}') ;
          img{
              width: 32px;
              height: 32px;
              margin: 0 auto;
              display: block;
          }
          p{
              text-align: center;
              color : ${paragraph};
              margin: 2px 0;
          }
    }
  `;


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

const variables = {
     ItemSection:'Overviewsss'
};


class SideBar extends Component{
    
      render(){
          return(
              
                  <div className={this.props.className}>
                      <div css={SidePanel}>
                         <ItemSide className="l-side" {...variables} iconSide={Overview} />
                         <ItemSide className="l-side" iconSide={Map} ItemSection={'Map'} />
                         <ItemSide className="l-side" iconSide={Inventory} ItemSection={'Inventory'} />
                         <ItemSide className="l-side" iconSide={Sendout} ItemSection={'Sendouts'} />
                         <ItemSide className="l-side" iconSide={Dashboard} ItemSection={'Dashboards'} />
                      </div>
                  </div>
          );
      }
  }

  export default SideBar;