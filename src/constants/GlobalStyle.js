import { createGlobalStyle } from 'styled-components';

import InconsolataWoff from '../fonts/Inconsolata.woff';
import InconsolataWoff2 from '../fonts/Inconsolata.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inconsolata';
    src: local('Inconsolata'),
      url(${InconsolataWoff}) format('woff'),
      url(${InconsolataWoff2}) format('woff2'),
      font-weight: 300;
      font-style: normal;
  }
  * {
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
