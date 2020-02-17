// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../json/animate.json'

class UncontrolledLottie extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <h1>Lottie ya pude implementar</h1>
        <p>jojojo</p>
        <Lottie options={defaultOptions}
              height={600}
              width={600}
        />
      </div>
    )
  }
}

export default UncontrolledLottie