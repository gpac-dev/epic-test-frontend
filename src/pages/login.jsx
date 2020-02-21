  /** @jsx jsx */

  import { jsx, css } from '@emotion/core';
  import '../css/Main.css';
  import '../css/Utilidades.css';
  import dots from '../img/dots.svg';
  import doted from '../img/dots.svg';
  import gpac from '../img/GPAC-logo-GB.png';
import InputFill from '../components/Utilities/TextField';
import SuccessButton from '../components/Utilities/ButtonSuccess';



  const containerBox = css`
    height: 100vh;
    width: 100%;
    .l-login{
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        background-color: #ECEEF2;
          &Box{
              max-width: 456px;
              width: 100%;
              height: 100%;
              position: absolute;
              right: 0;
              z-index: 2;
              
              &-brand{
                position: absolute;
                top: 59px;
                max-width: 415px;
                width: 100%;
                }
                &-content{
                    position: absolute;
                    width: 100%;
                    padding: 0 20px;
                    max-width: 371px;
                    top: calc(100% - 60%);
                }
              form{
                  display: flex;
                  flex-direction: column;
                  > p{
                    text-align: center;
                }
                input{
                    background: #ECEEF2 0% 0% no-repeat padding-box;
                    max-width: 376px;
                    width: 100%;
                    height: 54px;
                    padding: 0 25px;
                    border: none;
                    border-radius: 30px;
                    -webkit-appearance: none;
                    box-shadow: 0px 3px 12px #0000000F;;
                  -moz-appearance: none;
                  font-size: 18px;
                }
                &--action{
                    align-self: flex-end;
                    max-width: 376px;
                  }
              }
              &-password {
                opacity: 0.29;
                text-align: center;
                text-decoration: underline;
                align-items: flex-end;
            }
          }
      }
  `;


const DisplaySection = css`
    width: 100%;
    max-width: 945px;
    height: 499px;
    position: relative;
    margin-left: 4%;
    z-index: 1;
    display: flex;
    flex-direction: column;
        .l-display-dots1{
            align-self: flex-start;
        }
        .l-display-dots2{
            align-self: flex-end;
        }
        @media (max-width: 1080px){
            .l-display-head{
                display: none;
            }
            .l-display-dots1{
                opacity: .4;
            }
            .l-display-dots2{
            opacity: .4;
        }
    }
`;
  
const MediaControl = css`
@media (min-width: 1080px){
    .l-loginBox-head{
        display: none;
    }
}


@media (max-width: 1080px){
    .l-loginBox{
        max-width: 80%;
        left: 0;
        margin: auto;
        &-content{
            left: 0;
            right: 0;
            margin auto;
            max-width: 100%;
        }
        &-head{
            display: block;
            text-align: center;
        }
        &-brand{
            margin: auto;
            left: 0;
            right: 0;
        }
        form{
            width: 100%;
            max-width: 376px;
            margin: auto;
            input{
                width: 100%;
                align-self: center;
            }
            button{
                align-self: center !important;
            } 
        }
    }
}
`; 
  

  
  
  
  function Login() {
    return (
      <div css={containerBox}>
          <div className="l-login" css={MediaControl}>
              <div css={DisplaySection}>
                  <img className="l-display-dots1" src={dots} alt=""/>
                  <p className=" u-Roboto45 u-margin-30 u-text-700 l-display-head u-Montse">Do more than just work for a living</p>
                  <img className="l-display-dots2" src={doted} alt=""/>
              </div>
              <div className="l-loginBox">
                  <img className="l-loginBox-brand" src={gpac} alt=""/>
                    <div className="l-loginBox-content">
                      <p className=" u-Roboto45 u-margin-30 u-text-700 l-loginBox-head u-Montse">Do more than just work for a living</p>
                    <form action="" className="">
                        <InputFill LabelTag="E-mail"/>
                        <InputFill LabelTag="Password"/>
                        <SuccessButton TextAction={"Log in"} className="l-loginBox--action"/>
                       <p className="u-margin-15 l-loginBox-password">Forgot your password?</p>
                                            
                  </form>
                    </div>
                  
              </div>
          </div>
      </div>
    );
  }
  
  export default Login;
  