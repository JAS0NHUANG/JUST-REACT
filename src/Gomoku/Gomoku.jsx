import React from 'react';
import styled from 'styled-components'
import GlobalStyle from './constants/GlobalStyle';
import Board from './components/Board';
import Steps from './components/Steps';

const BlueStone = styled.div`
  border-radius: 50%;
  background: radial-gradient(farthest-corner at 10px 10px, #00238b, #67cdf6);
  position: relative;
  z-index: 3;
  width: 26px;
  height: 26px;
  margin: 2px;
  box-shadow: 1px 1px 2px #87cdf6;
  display: inline-block; 
  vertical-align: middle;
`;

const GreenStone = styled.div`
  border-radius: 50%;
  border: none;
  background: radial-gradient(farthest-corner at 10px 10px, #006323, #7ae68c);
  position: relative;
  z-index: 3;
  width: 26px;
  height: 26px;
  margin: 2px;
  box-shadow: 1px 1px 2px #8ce68c;
  display: inline-block; 
  vertical-align: middle;
`;

function Gomoku() {
  return (
    <div>
      <GlobalStyle />
      <BlueStone/><h1>React Gomoku</h1><GreenStone/>
      <Board />
    </div>
  );
}

export default Gomoku;
