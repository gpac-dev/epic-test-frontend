/** @jsx jsx */
import { jsx, } from '@emotion/core';
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

import '../css/ListStyles'


const Header = {
    TagSection: 'Companies',
    ButtonTag: 'Add Company +'
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

const Titles = {
    Label: 'Nameeee',
    LabelDescription: 'Industry',
    Industry: 'Industry',
    Owner: 'Owner',
    Activity: 'Fee Agreement',
    Location: 'Location',
    Date: 'Added Date',
}





const HeadStylesRow = ({ className }) => (
    <TitleRow {...Titles} className={className} />
)

const TitlesControls = styled(HeadStylesRow)`
        .l-row-desc{
            display: none;
        }
  `
const RowStyle = ({ className }) => (
    <RowContainer {...RowItem} className={className} />
)

const IncrivelRow = styled(RowStyle)`
        .l-row{
            &-desc{
                display: none;
            }
            &-activity{
                >div{
                    display: none;
                   }
                .l-row-activity-circle{
                    display: none;
                } 
            }
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
                        <IncrivelRow 
                            className="l-row " {...RowItem}/>
                        <IncrivelRow
                            className="l-row " {...RowItem}
                        />
                        <IncrivelRow
                            className="l-row " {...RowItem} />
                        <IncrivelRow
                            className="l-row" {...RowItem} />
                        <IncrivelRow
                            className="l-row " {...RowItem}
                           
                        />
                        <IncrivelRow
                            className="l-row " {...RowItem} />
                        <IncrivelRow
                            className="l-row " {...RowItem} />
                        <IncrivelRow
                            className="l-row" {...RowItem} />
                        <IncrivelRow
                            className="l-row " {...RowItem}
                            
                        />
                        <PaginationLink />
                    </PannelBackground>
                </div>
            </Fragment>
        )
    }
}


export default CompanyList;


