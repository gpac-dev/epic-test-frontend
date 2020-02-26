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
    LabelDescription: 'Engineering Surveying Civil',
    Industry: '',
    Owner: 'Samantha Salomon',
    Status: 'Fee Agreement',
    Activity: 'Fee Agreement',
    Location: 'Sioux Falls, SD',
    Date: '12/01/20',

    HeadPop: 'Added Date',
    DatePop: '19/01/2020',
    legal: "Recently Added"

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
    <RowContainer {...Titles} className={className} />
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

//   LabelDescription



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
                            className="l-row " />
                        <IncrivelRow
                            className="l-row " {...RowItem}
                            HeadPop="Added Date"
                            legal="Recently Added"
                        />
                        <IncrivelRow
                            className="l-row " {...RowItem} />
                        <IncrivelRow
                            className="l-row" {...RowItem} />
                        <IncrivelRow
                            className="l-row " {...RowItem}
                            HeadPop="Interview Date"
                            legal=""
                            Activity="Sen Out"
                        />
                        <IncrivelRow
                            className="l-row " {...RowItem} />
                        <IncrivelRow
                            className="l-row " {...RowItem} />
                        <IncrivelRow
                            className="l-row" {...RowItem} />
                        <IncrivelRow
                            className="l-row " {...RowItem}
                            Activity="Placement"
                        />
                        <PaginationLink />
                    </PannelBackground>
                </div>
            </Fragment>
        )
    }
}


export default CompanyList;


