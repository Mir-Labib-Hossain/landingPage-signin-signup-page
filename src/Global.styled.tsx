import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
   } 
  p,span{
   font-family: 'Roboto', sans-serif;
  }
  i{
    margin-right: 5px;

  }
`;
export default GlobalStyle;
