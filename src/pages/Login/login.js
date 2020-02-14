import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/Main.css';
import '../../css/Utilidades.css';
import dots from '../../img/dots.svg';
import doted from '../../img/dots.svg';
import gpac from '../../img/gpac_loco_white.svg';
import wolfBack from '../../img/wolf-back.jpg';
import { css } from 'emotion';



class Agregar extends Component {
    render(){
        return (
            <div className={css({
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                
            })}>
            <div className=" l-login__container">
                <div className ="l-login-dots">
                    <img className="l-login-dots-1" src={dots} alt=""/>
                    <p className="u-white u-Montserrat35 u-margin-30 u-text-900 l-work">Do more than just work for a living</p>
                    <img className="l-login-dots-2" src={doted} alt=""/>
                </div>
                <div className="l-login-box">
                    <img className="l-login-brand" src={gpac} alt=""/>
                    <form action="">
                        <p className="u-white u-Montserrat35 u-margin-30 u-text-900 l-display">Do more than just work for a living</p>
                        <input className="u-margin-15 " type="text" placeholder="Username"/>
                        <input className="u-margin-15" type="text" placeholder="Password"/>
                        {/* <button className="u-margin-15">
                            Log in
                        </button> */}
                      
                        
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
 
}

export default Agregar;
