/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled'
import {  Fragment } from 'react';
import InnerContent from './InnerContent';
import Return from './Return';



const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    label: MainContainer;
    .l-inner{
        &Content{
            width: 95%;
            height: 100%;
            padding-left: calc(100% / 12 - 105px);
            padding-right: calc(100% / 12 - 105px);
        }
    }

`


function InnerLayout(props) {
    return (
      <Fragment>
          <MainContainer className="c-flex">
                <InnerContent className="l-innerContent">
                    {props.children}
                </InnerContent >
          </MainContainer>
        
      </Fragment>
    );
  }
  
  export default InnerLayout;
  

