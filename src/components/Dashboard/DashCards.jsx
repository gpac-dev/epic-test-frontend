  /** @jsx jsx */
  import React from 'react';
  import { Component } from 'react';
  import { jsx, css, Global } from '@emotion/core';
  import '../../css/Main.css';
  import '../../css/Utilidades.css';



class CardStats extends Component{
    
    render(){
        return(
            <React.Fragment>
                <Global styles={css`
                    .l-stats{
                        display: flex;
                        max-width: 1000px;
                        width: 100%;
                        margin: auto;
                        background-color: tan;
                        &-card{
                            width: calc(100%/3);
                            height: 196px;
                            box-shadow: 0px 3px 6px #00000007;
                            border-radius: 5px 5px 5px 50px;
                            background-color: #f2f2f2;
                            margin: 20px;
                            &--hotItem{

                            }
                            &--placements{

                            }
                            &--sendouts{

                            }
                        }
                    }
                `}/>
                <div className="l-stats">
                    <div className="l-stats-card l-stats-card--hotItem">

                    </div>
                    <div className="l-stats-card l-stats-card--placements">

                    </div>
                    <div className="l-stats-card l-stats-card--sendouts">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CardStats;