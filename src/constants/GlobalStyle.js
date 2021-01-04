import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
    font-family: 'Inconsolata', monospace;
    margin: 0;
    text-align: center;
    box-sizing: border-box;
  }
  h1 {
    font-size: 28px;
    margin: 15px;
    padding: 5px;
    display: inline-block;
    vertical-align: middle;
  }
  li {
    list-style-type: none;
  }
`;
export default GlobalStyle;
