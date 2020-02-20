  /** @jsx jsx */
  import { jsx, css } from '@emotion/core';
  import '../css/Main.css';
  import '../css/Utilidades.css';

const DropAccount = css `
width: 200px;
height: 136px;
background: White 0% 0% no-repeat padding-box;
border-radius: 5px 5px 30px 5px;
padding: 10px 20px  ;
display: flex;
flex-direction: column;
justify-content: space-around;
box-shadow: 2px 4px 10px 0px #00000047;
`;

const textMenu = css `
    font-weight: 400;
    font-size: 16px;
    margin: 5px 0;
`;

const textMenuDanger = css `
    color: #DE0000;
    font-weight: 400; 
`;


  const MenuAccount = () =>{
      return(
        <div css={DropAccount}>

          <a href="./" css={textMenu}>My Account</a>
          <a href="./" css={textMenu}>Settings</a>
          <a href="./" css={[textMenu, textMenuDanger]}>Log Out</a>
        </div>
      );
  }

  export default MenuAccount;