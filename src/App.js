  /** @jsx jsx */

import { jsx, css } from '@emotion/core';
import '../src/css/App.css';
import '../src/css/Main.css';
import '../src/css/Utilidades.css';
import dots from '../src/img/dots.svg';
import doted from '../src/img/dots.svg';
import gpac from '../src/img/GPAC-logo-GB.png';
import wolfBack from '../src/img/wolf-back.jpg';
//import color from '../src/css/color';
//import styled from '@emotion/styled';

const dark = 'tomato';

const containerBox = css`
  height: 100vh;
  width: 100%;
  background-color: ${dark};
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
            width: 606px;
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
            form{
                display: flex;
                flex-direction: column;
                top: calc(100% - 60%);
                position: absolute;
            }
            
            form > p{
                text-align: center;
            }
            
            input{
                background: #FFFFFF 0% 0% no-repeat padding-box;
                width: 376px;
                height: 60px;
                padding: 0 25px;
                border: none;
                border-radius: 30px;
                -webkit-appearance: none;
                box-shadow: 0px 3px 12px #0000000F;;
              -moz-appearance: none;
            }
            
            button{
                border-radius: 3px;
                background-color: #4056F4;
                color: White;
                width: 188px;
                height: 50px;
                margin-top: 10px;
                border: none;
                align-self: flex-end;
                font-size: 18px;
                font-weight: 700;
                border-radius: 30px;
            }
            
            form > .l-password {
                color: #FFFFFF;
                opacity: 0.29;
                text-align: right;
                align-items: flex-end;
            }
        }
        
    }


@media (max-width: 1032px){
    .l-work{
        display: none;
    }
}

@media (min-width: 1032px){
    .l-display{
        display: none;
    }
}


@media (max-width: 1032px){
    .l-display{
        display: block;
    }
    .l-login-box{
        max-width: 80%;
        left: 0;
        margin: auto;
    }
    form{
        width: 100%;
    }
    input{
        width: 100%;
    }
    .l-login-brand{
        margin: auto;
        left: 0;
        right: 0;
    }
    .l-clip{
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        width: 100%;
        height: 42%;

    }
}
    

`;


const wolfFill = css`
clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
position: absolute;
height: 45%;
width: 45%;
bottom: 0;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: ${wolfBack};
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;





function App() {
  return (
    <div css={containerBox}>
        <div css={logginBox}>
            <div className ="l-login-dots">
                <img className="l-login-dots-1" src={dots} alt=""/>
                <p className=" u-Montserrat35 u-margin-30 u-text-900 l-work">Do more than just work for a living</p>
                <img className="l-login-dots-2" src={doted} alt=""/>
            </div>
            <div className="l-login-box">
                <img className="l-login-brand" src={gpac} alt=""/>
               
                <form action="">
                    <p className=" u-Montserrat35 u-margin-30 u-text-900 l-display">Do more than just work for a living</p>
                    

                    <input className="u-margin-15 " type="text" placeholder="Username"/>

                    <input className="u-margin-15" type="text" placeholder="Password"/>
                    <button className="u-margin-15">
                        Log in
                    </button> 
                    {/* <Primary login={'Log in'}/> */}
                    
                    <p className="u-margin-15 l-password">Forgot your password?</p>
                </form>
            </div>
            <div css={wolfFill}>
                <img className="" src={wolfBack} alt=""/>
            </div>

        </div>
    </div>
  );
}

export default App;
