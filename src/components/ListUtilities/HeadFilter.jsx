  /** @jsx jsx */
  import { jsx, css, Global } from '@emotion/core';
import { Component, Fragment } from 'react';
import ItemKick from '../Utilities/ButtonKick'



class HeadFilter extends Component{
    render(){
        return(
            <Fragment>
                <ItemKick ActionLabel="Add Candidate +"/>
            </Fragment>
        );
    }
}


export default HeadFilter;