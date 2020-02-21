  /** @jsx jsx */
  import { jsx, css, Global } from '@emotion/core';
import { Component, Fragment } from 'react';
import ComboBox from '../Utilities/SearchAutoComplete';


class SearchKeyWord extends Component{
    render(){
        return(
            <div>
               <ComboBox/>
            </div>
        );
    }
}
export default SearchKeyWord;