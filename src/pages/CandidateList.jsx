/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import FilterContainer from '../components/ListUtilities/FilterBar';
import RowContainer from '../components/ListUtilities/RowInfo'
import TitleRow from '../components/ListUtilities/HeaderRow';
import CheckFilter from '../components/ListUtilities/CheckBoxFilter';
import PaginationLink from '../components/ListUtilities/Pagination';
import User from '../img/icons/user.svg'
import UserGrey from '../img/icons/user-grey.svg'

const Header = {
    TagSection: 'Candidates',
    ButtonTag: 'Add Candidate +'
}

const RowItem ={
    Label: 'Superintendent',
    LabelDescription: 'Enviromental Engineer',
    Industry: 'Energy, Oil & Gas',
    Owner: 'Samantha Solomon',
    Activity: 'In Process',
    Location: 'Sioux Falls, SD',
    Date: '12/01/20',
    HeadPop: 'Added Date',
    DatePop: '19/01/2020',
    legal: "Recently Added",
    Status: 'SendOut'

}

const Titles ={
    Label: 'Name',
    LabelDescription: 'Functional Title',
    Industry: 'Industry',
    Owner: 'Owner',
    Activity: 'Activity Status',
    Location: 'Location',
    Date: 'Added Date',
}

class CandidateList extends Component {
    render() {
        return (
            <Fragment>
                <Global styles={css`
                    .l-row{
                        padding: 0 20px;
                        .l-row-activity{
                            position: relative;
                            .l-row-activity-circle{
                                width: 14px;
                                height: 14px;
                                border-radius: 50%;
                                display: inline-flex;
                                vertical-align: middlie;
                                margin-left: 10px;
                               
                            }
                            >div{
                                position: absolute;
                                z-index: 2;
                                left: -21px;
                                margin:  auto;
                                right: 0;
                                bottom: 49px;
                                transform: scale(1,0) ;
                                transform-origin: bottom center;
                                opacity: 0;
                                
                            }
                            &:hover{
                                >div{
                                    transition: .3s cubic-bezier(.46,.03,.52,.96);
                                    display: block;
                                    opacity: 1;
                                    transform: scale(1,1);
                                    pointer-events: all;
                                }
                            }
                        }
                        &-sendout{
                            .l-row-activity{
                                color: var(--purple);
                                .l-popOVer-legal{
                                    display: none;
                                }
                            }
                            .l-row-activity-circle{
                                background-color: var(--purple);
                            }
                        }
                        &-placement{
                            .l-row-activity{
                                color: var(--active);
                            }
                            .l-row-activity-circle{
                                background-color: var(--active);
                            }
                        }
                        
                        &-process{
                           
                            &--green{
                                .l-row-activity{
                                    color: var(--active);
                                    .l-popOver-More {
                                        display: none;
                                    }
                                }
                                .l-row-activity-circle{
                                    background-color: var(--active);
                                }
                            }
                            &--orange{
                                .l-row-activity{
                                    color: var(--orange);
                                    .l-popOver-More {
                                        display: none;
                                    }
                                }
                                .l-row-activity-circle{
                                    background-color: var(--orange);
                                }
                            }
                            &--red{
                                .l-row-activity{
                                    color: var(--red);
                                    .l-popOver-More {
                                        display: none;
                                    }
                                }
                                .l-row-activity-circle{
                                    background-color: var(--red);
                                }
                               
                                border-left: 8px solid var(--red);
                                padding: 0 20px 0 12px;
                            }
                            
                        }
                      
                    }
                    .l-filter{
                        &:last-child {
                            .l-kick-icon{
                                background-image: url('${UserGrey}');
                            }
                            &:hover{
                                .l-kick-icon{
                                    background-image: url('${User}');
                                }
                          }
                    }
                    
                `}
                />
                <Layout />
                <div className="g-container">
                    <SideBar className="g-container__side" />
                    <PannelBackground className="g-container__box">
                        <FilterContainer {...Header} className="l-candidate"/>
                        <CheckFilter NumberCount='53,457'/>
                        <TitleRow {...Titles}/>
                        <RowContainer className="l-row l-row-process--green" {...RowItem}
                            HeadPop="Added Date"
                            legal="Recently Added"
                        />
                        <RowContainer className="l-row l-row-process--orange" {...RowItem}/>
                        <RowContainer className="l-row l-row-process--red" {...RowItem}/>
                        <RowContainer className="l-row l-row-sendout" {...RowItem}
                             HeadPop="Interview Date"
                             legal=""
                        />
                        <RowContainer className="l-row l-row-process--green" {...RowItem}/>
                        <RowContainer className="l-row l-row-process--green" {...RowItem}/>
                        <RowContainer className="l-row l-row-process--red" {...RowItem}/>
                        <RowContainer className="l-row l-row-placement" {...RowItem}/>
                        <PaginationLink/>
                    </PannelBackground>
                </div>
            </Fragment>
        )
    }
}


export default CandidateList;


