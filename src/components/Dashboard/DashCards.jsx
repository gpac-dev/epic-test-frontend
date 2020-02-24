  /** @jsx jsx */
  import React from 'react';
  import { Component } from 'react';
  import { jsx, css } from '@emotion/core';
 import Sendout from '../../img/icons/sendout-grey.svg';
 import HotItem from '../../img/icons/hot-grey.svg';
 import Placements from '../../img/icons/placement-grey.svg'


const statsLayout = css `
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
    .l-performance{
        width: calc(100% / 3 - 40px);
        margin: 20px;
        height: 196px;
        border-radius: 5px 5px 5px 50px;
        background-color: White;
        position: relative;
        padding:  20px;
        min-width: 260px;
        &-head{
            p{}

        }
        img{
            max-width: 98px;
            width: 100%;
            height: auto;
            object-fit: contain;
            position: absolute;
            bottom: 10px;
            left: 10px;
            opacity: .3;
        }
        &--sendout{
            border-right: 14px solid var(--blueElectric);
        }
        &--hotitem{
            border-right: 14px solid var(--purple);
        }
        &--placements{
            border-right: 14px solid var(--greenElectric);
        }
    }
`;

class StatsItemCard extends Component{
    render (){
        return(
            <div className={this.props.className}>
                <div className="l-performance-head">
                    <p className="l-performance-head--title u-Roboto22 u-margin-0 u-text-700">{this.props.PerformanceHead}</p>
                    <p className="l-performance-head--status u-Roboto16 u-margin-0 u-text-300">{this.props.PerformanceStatus}</p>
                </div>
                <img src={this.props.IconPerformance} alt=""/>
            </div>
        );
    }
}

class CardStats extends Component{
    
    render(){
        return(
            <React.Fragment>
                <div css={statsLayout}>
                    <StatsItemCard 
                    className="l-performance l-performance--sendout" 
                    PerformanceHead="SENDOUTS" 
                    IconPerformance={Sendout}
                    PerformanceStatus="Total Inventory"
                    />
                    <StatsItemCard 
                    className="l-performance l-performance--hotitem" 
                    PerformanceHead="HOT ITEMS" 
                     IconPerformance={HotItem}
                     PerformanceStatus="Total Inventory"
                     />
                    <StatsItemCard 
                    className="l-performance l-performance--placements" 
                    PerformanceHead="PLACEMENTS" 
                     IconPerformance={Placements}
                     PerformanceStatus="Total Inventory"
                     />
                </div>
            </React.Fragment>
        );
    }
}

export default CardStats;