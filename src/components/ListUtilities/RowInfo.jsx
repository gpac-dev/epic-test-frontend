/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import styled from '@emotion/styled'

const RowBox = styled.div`
    max-width: 1731px;
    width: 100%;
    height: 60px;
    margin: auto;
    box-shadow: 0px 3px 12px #0000000D;
    background-color: White;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Label = styled.div`
`;

const LabelDescription = styled.div`
`;

const Owner = styled.div`
`;

const Activity = styled.div`
`;

const Location = styled.div`
`;

const Date = styled.div`
`;

class RowContainer extends Component {
    render() {
        return (
            <RowBox className={this.props.className} >
                <Label className="u-font">
                    {this.props.Label}
                </Label>
                <LabelDescription>
                    {this.props.LabelDescription}
                </LabelDescription>
                <Owner>
                    {this.props.Owner}
                </Owner>
                <Activity>
                    {this.props.Activity}
                </Activity>
                <Location>
                    {this.props.Location}
                </Location>
                <Date>
                    {this.props.Date}
                </Date>
            </RowBox>
        );
    }
}

export default RowContainer