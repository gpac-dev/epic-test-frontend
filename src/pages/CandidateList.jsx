/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import SideBar from '../Layout/SideBar';
import PannelBackground from '../components/PanelBackground';
import FilterContainer from '../components/ListUtilities/FilterBar';
import RowContainer from '../components/ListUtilities/RowInfo'
import TitleRow from '../components/ListUtilities/HeaderRow';
import CheckItem from '../components/ListUtilities/CheckBoxFilter';
import PaginationLink from '../components/ListUtilities/Pagination';
import '../css/ListStyles'
import BarCheckBox from '../components/ListUtilities/CheckBoxBar';

const Header = {
    TagSection: 'Candidates',
    ButtonTag: 'Add Candidate +'
}

const RowItem = {
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

const Titles = {
    Label: 'Name',
    LabelDescription: 'Functional Title',
    Industry: 'Industry',
    Owner: 'Owner',
    Activity: 'Activity Status',
    Location: 'Location',
    Date: 'Added Date',
}

class Results extends Component {
    render(){
        return(
            <p className="u-auto-left u-Roboto18 u-text-300">Results: <span className="u-text-700">{this.props.NumberCount}</span></p>
        );
    }
}

class CandidateList extends Component {
    render() {
        return (
            <Fragment>
                <Global styles={css`
                    
                    
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
                                    <CheckItem Checklabel={'In progress'} />
                                    <CheckItem Checklabel={'In Sendout'} />
                                    <CheckItem Checklabel={'In Sendover'} />
                                </div>
                                <Results NumberCount="45,570"/>
                        </BarCheckBox>
                        <TitleRow {...Titles} />
                        <RowContainer className="l-row l-row-process--green" {...RowItem}
                            HeadPop="Added Date"
                            legal="Recently Added"
                        />
                        <RowContainer className="l-row l-row-process--orange" {...RowItem} />
                        <RowContainer className="l-row l-row-process--red" {...RowItem} />
                        <RowContainer className="l-row l-row-sendout" {...RowItem}
                            HeadPop="Interview Date"
                            legal=""
                            Activity="Sen Out"
                        />
                        <RowContainer className="l-row l-row-process--green" {...RowItem} />
                        <RowContainer className="l-row l-row-process--green" {...RowItem} />
                        <RowContainer className="l-row l-row-process--red" {...RowItem} />
                        <RowContainer className="l-row l-row-placement" {...RowItem}
                            Activity="Placement"
                        />
                        <PaginationLink />
                    </PannelBackground>
                </div>
            </Fragment>
        )
    }
}


export default CandidateList;


