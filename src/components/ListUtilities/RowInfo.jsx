/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import styled from '@emotion/styled'

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
`;

const LabelDescription = styled.div`
max-width: 205px;
width: 100%;
`;

const Industry = styled.div`
max-width: 321px;
width: 100%;
`;

const Owner = styled.div`
max-width: 176px;
width: 100%;
`;

const Activity = styled.div`
max-width: 138px;
width: 100%;
`;

const Location = styled.div`
max-width: 126px;
width: 100%;
`;

const Date = styled.div`
max-width: 128px;
width: 100%;
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
                    {this.props.Activity}
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