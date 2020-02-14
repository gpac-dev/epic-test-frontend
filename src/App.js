import React from 'react';
import '../src/css/App.css';
import '../src/css/Main.css';
import '../src/css/Utilidades.css';
import dots from '../src/img/dots.svg';
import doted from '../src/img/dots.svg';
import gpac from '../src/img/GPAC-logo-GB.png';
import wolfBack from '../src/img/wolf-back.jpg';
import Primary from '../src/components/test/test'
//import global from '../src/css/global'

function App() {
  return (
    <div className="g-100 u-back-dark l-login__container">
        <div className=" l-login">
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
                    {/* <button className="u-margin-15">
                        Log in
                    </button> */}
                    <Primary login={'Log in'}/>
                    
                    <p className="u-margin-15 l-password">Forgot your password?</p>
                </form>
            </div>
            <div className="l-clip">
                <img className="l-clip__img" src={wolfBack} alt=""/>
            </div>

        </div>
    </div>
  );
}

export default App;
