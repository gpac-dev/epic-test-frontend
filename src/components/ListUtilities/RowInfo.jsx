/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import styled from '@emotion/styled'
import PopItem from '../Utilities/PopOver';

const RowBox = styled.div`
    max-width: 1731px;
    width: 100%;
    height: 60px;
    margin: 11px auto;
    box-shadow: 0px 3px 12px #0000000D;
    background-color: White;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

const Label = styled.div`
max-width: 191px;
width: 100%;
font-weight: 700;
`;

const LabelDescription = styled.div`
max-width: 205px;
width: 100%;
margin: 0 5px;
font-weight: 300;
`;

const Industry = styled.div`
max-width: 321px;
width: 100%;
margin: 0 5px;
font-weight: 300;
`;

const Owner = styled.div`
max-width: 176px;
width: 100%;
margin: 0 5px;
font-weight: 300;
`;

const Activity = styled.div`
max-width: 138px;
width: 100%;
margin: 0 5px;
height: 100%;
display: flex;
padding: 0 5px;
align-items: center;
min-width: 138px;
justify-content: flex-end;
`;

const Location = styled.div`
max-width: 126px;
width: 100%;
margin: 0 5px;
font-weight: 300;
`;

const Date = styled.div`
max-width: 128px;
width: 100%;
font-weight: 300;
`;


class RowContainer extends Component {
    render() {
        return (
            <RowBox className={this.props.className} >
                <Label className="l-row-label">
                    {this.props.Label}
                </Label>
                <LabelDescription className="l-row-desc">
                    {this.props.LabelDescription}
                </LabelDescription>
                <Industry className="l-row-industry">
                    {this.props.Industry}
                </Industry>
                <Owner className="l-row-owner">
                    {this.props.Owner}
                </Owner>
                <Activity className="l-row-activity">
                    <span>{this.props.Activity}</span>
                    <PopItem>
                        <p className="u-Roboto18 u-white u-text-700 u-margin-0">{this.props.HeadPop}</p>
                        <p className="u-Roboto18 u-white u-text-300 u-margin-5">{this.props.DatePop}</p>
                        <p className="u-Roboto14 u-white u-text-300 u-margin-0 l-popOVer-legal">{this.props.legal}</p>
                        <p className="l-popOver-More u-Roboto14 u-white u-text-500  u-absolute">View More ></p>
                        <div className="l-popOver-status">
                            <p className="u-Roboto14 u-margin-0">{this.props.Status}</p>
                        </div>
                    </PopItem>
                    <span className="l-row-activity-circle">
                    
                    </span>
                </Activity>
                <Location className="l-row-location">
                    {this.props.Location}
                </Location>
                <Date className="l-row-date">
                    {this.props.Date}
                </Date>
                <span></span>
            </RowBox>
        );
    }
}

export default RowContainer