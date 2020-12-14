import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    text-align: center;
    box-sizing: border-box;
    font-family: Courier,monospace;
  }
  h1 {
    margin: 15px;
    padding: 5px;
    display: inline-block;
    vertical-align: middle;
  }
`;
export default GlobalStyle;
