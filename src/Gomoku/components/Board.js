import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stone from './Stone';
import Steps from './Steps';
import useGomoku from '../hooks/useGomoku';

const BoardWrapper = styled.div`
  width: 570px;
  height: 570px;
  margin: auto;
  background: #dddedf;
  box-sizing: content-box;
  border: solid 2px #a4b5b9;
`;

const Row = styled.div`
  margin-bottom: -4px;
`;

export default function Board() {
  const {
    board,
    records,
    handlePlaceStone,
    handleRewind,
    thisStoneColor,
    winner
  } = useGomoku();

  return (
    <BoardWrapper>
      {
        board.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {
              row.map((intersection, colIndex) => (
                <Stone
                  key={(rowIndex * 100 + colIndex)}
                  stoneColor={board[rowIndex][colIndex]}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  handlePlaceStone={handlePlaceStone}
                />
              ))
            }
          </Row>
        ))
      }
      <Steps
        records={records}
        handleRewind={handleRewind}
        thisStoneColor={thisStoneColor}
        winner={winner}
      />
    </BoardWrapper>
  );
}
