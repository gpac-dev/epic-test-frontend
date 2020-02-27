/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled'
import {  Fragment } from 'react';


const MainContainer = styled.div`
    width: 100%;
    label: InnerContainer; 

`



function InnerContent(props) {
    return (
      <Fragment>
          <MainContainer className={props.className}>
                    {props.children}
          </MainContainer>
        
      </Fragment>
    );
  }
  
  export default InnerContent;







