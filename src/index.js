import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/Main.css';
import '../src/css/Utilidades.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { css } from 'emotion'

//const app = document.getElementById('root')
// const myStyle = css`
//   background-color: rebeccapurple;
// `
// app.classList.add(myStyle)



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
