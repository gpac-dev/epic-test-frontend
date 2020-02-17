  /** @jsx jsx */

  import { jsx, css, Global } from '@emotion/core';
  import '../css/Main.css';
  import '../css/Utilidades.css';
  import logoNavBar from '../img/gpac_logo.svg'

//   const inicio = css`
//   width: 100%;
//   height: 72px;
//   box-shadow: 0px 3px 12px #00000010;
//   `;
  
  


  const NavBar = () =>{
      return(
          <div>
              <Global styles={css`
                .l-navbar {
                width: 100%;
                height: 72px;
                box-shadow: 0px 3px 12px #00000010;
                background-color: White;
                padding: 0 20px;
                display: flex;
                    &-flex{
                        display: flex;
                        width: 100%;
                    }
                    &-logo{
                        max-width: 132px;
                        width: 100%;
                        height: auto;
                    }

                }
            `}
              />
              <div className="l-navbar">
                  <div className="l-navbar-flex">
                        <img src={logoNavBar} className="l-navbar-logo" alt=""/>
                        <div >

                        </div>
                  </div>
              </div>
          </div>
      )

  }

  export default NavBar;