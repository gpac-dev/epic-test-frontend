import { injectGlobal } from 'emotion'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:700&display=swap');
:root {
    --maxlayout: 1920px;
  --layout: 1366px;
  --layout1230: 1230px;
  --layout1170: 1170px;
  --layout990: 990px;
  --layout750: 750px;
  --red: #E9250C;
  --black: #1A1C21;
  --blueElectric: #50C9F5;
  --white: White;
  --purple: #6950F5;
  --greenElectric: #B0F461;
  --grey: #9CA6B5;
  --succes: #4056F4;
  --active: #27AE60

}


* {box-sizing: border-box; font-family: 'Roboto', sans-serif; line-height: normal;}


html {scroll-behavior: smooth;}



ul {padding-left: 0; margin: 0; font-family: 'Roboto', sans-serif;}

li {list-style: none; font-family: 'Roboto', sans-serif;}
body {margin: 0; padding: 0; }

a {
  text-decoration: none;font-family: 'Roboto', sans-serif;
  color: var(--gris);

}


input{-webkit-appearance: none;
  border: none;
  -moz-appearance: none;}


.g-container{
  width: 100%;
  display: flex;
  height: calc(100vh - 72px);
}

.g-container__side{
  width: 110px;
  height: 100%;
  box-shadow: 0px 3px 12px #00000021;
}


`