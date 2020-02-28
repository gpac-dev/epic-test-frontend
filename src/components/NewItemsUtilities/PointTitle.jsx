/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled'
import { Component, Fragment } from 'react';


const DotCircle = css`
width: 51px;
height: 51px;
border-radius: 50%;
box-shadow: 4px 4px 6px #373B4615;
background-color: var(--black); 
color: White;
display: flex;
align-items: center;
margin-right: 18px;
font-size: 26px;
font-weight: 700;
justify-content: center;

`

const CircleContainer = styled.div`
    width: 100%;
    label: pointTitleSection;
    margin: 20px 0;
`


class PointTitle extends Component {
    render() {
        return (
            <Fragment>
                <CircleContainer className="c-flex-align">
                    <div css={DotCircle}>
                        {this.props.SectionNumber}
                    </div>
                    <div>
                        <h2 className="u-Roboto30 u-upper u-text-700 u-margin-0">{this.props.NameSection}</h2>
                        <small className="u-margin-0 u-text-300">{this.props.smallText}</small>
                    </div>
                </CircleContainer>
            </Fragment>
        );
    }
}





export default PointTitle;