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
        &Return{
            width: 5%;
            height: 100%;
        }
        &Content{
            width: 95%;
            height: 100%;
        }
    }

`


function InnerLayout(props) {
    return (
      <Fragment>
          <MainContainer className="c-flex">
                <Return className="l-innerReturn">

                </Return>
                <InnerContent className="l-innerContent">
                    {props.children}
                </InnerContent >
          </MainContainer>
        
      </Fragment>
    );
  }
  
  export default InnerLayout;
  

