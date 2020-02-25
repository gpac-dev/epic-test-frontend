/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import styled from '@emotion/styled'
import ArrowDown from '../../img/icons/ArrowDown.svg'

const RowBox = styled.div`
    max-width: 1731px;
    width: 100%;
    height: 60px;
    margin: 11px auto;
    box-shadow: 0px 3px 12px #0000000D;
    background-color: #F7F7F7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
        div{
            font-weight: 300;
            text-transform: uppercase;
        }
        .l-row-arrow{
            width: 12px;
            height: auto;
            display: inline-flex;
            vertical-align: middle;
            margin-left: 10px;

        }

`

const Label = styled.div`
max-width: 191px;
width: 100%;
`;

const LabelDescription = styled.div`
max-width: 205px;
width: 100%;
margin: 0 5px;
`;

const Industry = styled.div`
max-width: 321px;
width: 100%;
margin: 0 5px;
`;

const Owner = styled.div`
max-width: 176px;
width: 100%;
margin: 0 5px;
`;

const Activity = styled.div`
max-width: 138px;
width: 100%;
margin: 0 5px;
`;

const Location = styled.div`
max-width: 126px;
width: 100%;
margin: 0 5px;
`;

const Date = styled.div`
max-width: 128px;
width: 100%;
`;

class TitleRow extends Component {
    render() {
        return (
            <RowBox className={this.props.className} >
                <Label className="l-row-label">
                    {this.props.Label}
                    <img className="l-row-arrow" src={ArrowDown} alt=""/>
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
                    {this.props.Activity}
                </Activity>
                <Location className="l-row-location">
                    {this.props.Location}
                </Location>
                <Date className="l-row-date">
                    {this.props.Date}
                    <img className="l-row-arrow" src={ArrowDown} alt=""/>
                </Date>
                <span></span>
            </RowBox>
        );
    }
}

export default TitleRow