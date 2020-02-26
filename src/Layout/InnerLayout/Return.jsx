/** @jsx jsx */
import { jsx , css } from '@emotion/core';
import styled from '@emotion/styled'
import { Component, Fragment } from 'react';


const ReturnContainer = styled.div`
    width: 100%;
    label: returnContainer;
`


class Return extends Component {
    render(){
        return(
            <Fragment>
                <ReturnContainer className={this.props.className}>

                </ReturnContainer>
            </Fragment>
        );
    }
}








export default Return;