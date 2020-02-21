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
  `;

  
  
  const logginBox = css`
  height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      background-color: #ECEEF2;
      .l-login{
          &-brand{
              position: absolute;
              top: 59px;
              max-width: 415px;
              width: 100%;
          }
          &-dots{
              width: 100%;
              max-width: 945px;
              height: 499px;
              position: relative;
              margin-left: 4%;
              z-index: 1;
              display: flex;
              flex-direction: column;
              &-1{
                  align-self: flex-start;
              }
              &-2{
                  align-self: flex-end;
              }
          }
         
          &-box{
              max-width: 456px;
              width: 100%;
              height: 100%;
              position: absolute;
              right: 0;
              z-index: 2; 
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
                 
              }
              
              form > p{
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
              
              button{
                  
              }
              
              form > .l-password {
                  opacity: 0.29;
                  text-align: center;
                  text-decoration: underline;
                  align-items: flex-end;
              }
          }
          
      }
  
  
  @media (max-width: 1080px){
      .l-work{
          display: none;
      }
  }
  
  @media (min-width: 1080px){
      .l-display{
          display: none;
      }
  }
  
  
  @media (max-width: 1080px){
      .l-display{
          display: block;
          text-align: center;
      }
      .l-login-box{
          max-width: 80%;
          left: 0;
          margin: auto;
          &-content{
            left: 0;
          right: 0;
          margin auto;
          max-width: 100%;
          }
      }
      form{
          width: 100%;
          max-width: 376px;
          margin: auto;
          
      }
      input{
          width: 100%;
          align-self: center;
      }
      button{
          align-self: center !important;
      }
      .l-login-brand{
          margin: auto;
          left: 0;
          right: 0;
      }
      .l-login-dots-1{
          opacity: .4;
      }
      .l-login-dots-2{
        opacity: .4;
    }
  }
      
  
  `;

  

  
  
  
  function Login() {
    return (
      <div css={containerBox}>
          <div css={logginBox}>
              <div className ="l-login-dots">
                  <img className="l-login-dots-1" src={dots} alt=""/>
                  <p className=" u-Roboto45 u-margin-30 u-text-700 l-work u-Montse">Do more than just work for a living</p>
                  <img className="l-login-dots-2" src={doted} alt=""/>
              </div>
              <div className="l-login-box">
                  <img className="l-login-brand" src={gpac} alt=""/>
                    <div className="l-login-box-content">
                      <p className=" u-Roboto45 u-margin-30 u-text-700 l-display u-Montse">Do more than just work for a living</p>
                    <form action="" className="">
                      
                        <InputFill LabelTag="E-mail"/>
                        <InputFill LabelTag="Password"/>
                        <SuccessButton TextAction={"Log in"}/>
                       <p className="u-margin-15 l-password">Forgot your password?</p>
                                             
                  </form>
                    </div>
                  
              </div>
          </div>
      </div>
    );
  }
  
  export default Login;
  