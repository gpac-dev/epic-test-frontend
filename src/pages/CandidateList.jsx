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

}

const Titles ={
    Label: 'Functional Title',
    LabelDescription: 'Company',
    Industry: 'Industry',
    Owner: 'Owner',
    Activity: 'Activity',
    Location: 'Location',
    Date: 'Date',
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
                        <FilterContainer {...Header} />
                        <CheckFilter NumberCount='53,457'/>
                        <TitleRow {...Titles}/>
                        <RowContainer className="" {...RowItem}/>
                        <RowContainer className="" {...RowItem}/>
                        <RowContainer className="" {...RowItem}/>
                        <RowContainer className="" {...RowItem}/>
                        <RowContainer className="" {...RowItem}/>
                        <RowContainer className="" {...RowItem}/>
                        <RowContainer className="" {...RowItem}/>
                        <RowContainer className="" {...RowItem}/>
                        <PaginationLink/>
                    </PannelBackground>
                </div>
            </Fragment>
        )
    }
}


export default CandidateList;


