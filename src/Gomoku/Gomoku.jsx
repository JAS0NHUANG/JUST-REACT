import React from 'react';
import styled from 'styled-components'
import GlobalStyle from './constants/GlobalStyle';
import Board from './components/Board';
import Steps from './components/Steps';

function Gomoku() {
  return (
    <div>
      <GlobalStyle />
      <h1>React Gomoku</h1>
      <Board />
    </div>
  );
}

export default Gomoku;
