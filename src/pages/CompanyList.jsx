/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import styled from '@emotion/styled'
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import FilterContainer from '../components/ListUtilities/FilterBar';
import RowContainer from '../components/ListUtilities/RowInfo'
import TitleRow from '../components/ListUtilities/HeaderRow';
import CheckItem from '../components/ListUtilities/CheckBoxFilter';
import PaginationLink from '../components/ListUtilities/Pagination';
import BarCheckBox from '../components/ListUtilities/CheckBoxBar';
import Company from '../img/icons/company.svg'
import CompanyGrey from '../img/icons/company-grey.svg'
import '../css/ListStyles'


const Header = {
    TagSection: 'Companies',
    ButtonTag: 'Add Company +'
}

const Titles = {
    Label: 'Name',
    LabelDescription: 'Industry',
    Industry: 'Industry',
    Owner: 'Owner',
    Activity: 'Fee Agreement',
    Location: 'Location',
    Date: 'Added Date',
}


const RowItem = {
    Label: 'A + B Construction',
    LabelDescription: '',
    Industry: 'Engineering Surveying Civil',
    Owner: 'Samantha Salomon',
    Status: 'Fee Agreement',
    Activity: 'Fee Agreement',
    Location: 'Sioux Falls, SD',
    Date: '12/01/20',
}






//Styling Component

const HeadStylesRow = ({ className }) => (
    <TitleRow {...Titles} className={className} />
)

const TitlesControls = styled(HeadStylesRow)`
        .l-row-desc{
            display: none;
        }
  `






class Results extends Component {
    render() {
        return (
            <p className="u-auto-left u-Roboto18 u-text-300">Results: <span className="u-text-700">{this.props.NumberCount}</span></p>
        );
    }
}


class CompanyList extends Component {
    render() {
        return (

            <Fragment>
                <Global
                    styles={css`
                    /* Disables PopOver component and sets color by status signed or not signed  */
                    .l-row{
                        &-desc{
                            display: none;
                        }
                        &--signed{
                            .l-row-activity{
                                color: var(--orange) !important;
                            }
                        }
                        &--notSigned{
                            .l-row-activity{
                                color: var(--active) !important;
                            }
                        }
                        &-activity{
                            .l-row-activity-circle{
                                display: none !important;
                            }
                            &:hover{
                                > div{
                                    display: none !important;
                                }
                            }
                            
                        }
                    }
                    /* Changes icon kickAction button  */
                    .l-filter{
                        &:last-child {
                            .l-kick-icon{
                                background-image: url('${CompanyGrey}');
                            }
                            &:hover{
                                .l-kick-icon{
                                    background-image: url('${Company}');
                                }
                          }
                    }
                `}
                />
                <Layout />
                <div className="g-container">
                    <SideBar className="g-container__side" />
                    <PannelBackground className="g-container__box">
                        <FilterContainer {...Header} className="l-candidate" />
                        <BarCheckBox>
                            <div className="c-flex">
                                <CheckItem Checklabel={'Mine'} />
                                <CheckItem Checklabel={'Not Signed'} />
                                <CheckItem Checklabel={'Signed'} />
                            </div>
                            <Results NumberCount="45,570" />
                        </BarCheckBox>
                        <TitlesControls />
                        <RowContainer {...RowItem}
                            className="l-row l-row--signed"
                            Activity="Signed"
                        />
                        <RowContainer {...RowItem}
                            className="l-row l-row--notSigned"
                            Activity="Not Signed"
                        />
                        <RowContainer {...RowItem}
                            className="l-row l-row--signed"
                            Activity="Signed"
                        />
                        <RowContainer {...RowItem}
                            className="l-row l-row--notSigned"
                            Activity="Not Signed"
                        />
                        <RowContainer {...RowItem}
                            className="l-row l-row--notSigned"
                            Activity="Not Signed"
                        />
                        <RowContainer {...RowItem}
                            className="l-row l-row--signed"
                            Activity="Signed"
                        />

                        <PaginationLink />
                    </PannelBackground>
                </div>
            </Fragment>
        )
    }
}


export default CompanyList;


