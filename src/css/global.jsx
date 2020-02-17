import React from 'react';
import {  css, Global } from '@emotion/core'



const General = () =>{
  return(
    
    
    <div>
   <Global styles={css`
        .some-class {
          color: hotpink !important;
        }
      `}
   />
   <p className="some-class">p</p>
      </div>
  );

}


export default General;