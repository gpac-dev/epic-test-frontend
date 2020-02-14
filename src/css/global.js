import { injectGlobal } from 'emotion'

injectGlobal`
:root {
    --maxlayout: 1920px;
  --layout: 1366px;
  --layout1230: 1230px;
  --layout1170: 1170px;
  --layout990: 990px;
  --layout750: 750px;
  --dark: #1A1C21;
  --white: White;
  --red: #F91819;
}

* {box-sizing: border-box; font-family: 'Montserrat', sans-serif; line-height: normal;}


html {scroll-behavior: smooth;}



ul {padding-left: 0; margin: 0; font-family: 'Montserrat', sans-serif;}

li {list-style: none; font-family: 'Montserrat', sans-serif;}
body {margin: 0; padding: 0; }

a {
  text-decoration: none;font-family: 'Montserrat', sans-serif;
  color: var(--gris);

}



input{-webkit-appearance: none;
  -moz-appearance: none;}



`

