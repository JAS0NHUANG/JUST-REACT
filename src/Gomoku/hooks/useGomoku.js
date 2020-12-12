import { useState, useEffect } from 'react';
import checkWinner from '../utils/checkWinner'

let thisStoneColor = 'blue';
let lastStoneColor = null;
let winner = null;
let step = 0

export default function useGomoku() {
  const [board, setBoard] = useState(
    Array(19).fill(
      Array(19).fill(null),
    ),
  );
  const [records, setRecords] = useState([]);

  function handlePlaceStone(rowIndex, colIndex) {
    if (winner || board[rowIndex][colIndex] !== null) return;
    setBoard(
      board.map((row, mapRowIndex) => {
        if (rowIndex !== mapRowIndex) return row;
        return row.map((col, mapColIndex) => {
          if (mapColIndex !== colIndex) return col;
          if (board[rowIndex][colIndex] !== null) return col;
          lastStoneColor = thisStoneColor;
          return thisStoneColor;
        });
      }),
    );
    winner = checkWinner(thisStoneColor, board, rowIndex, colIndex)
    thisStoneColor = (thisStoneColor === 'blue') ? 'green' : 'blue';
    step++
  }

  useEffect(() => {
    let currentBoard = JSON.stringify(board)
    for (let i = 0; i < records.length; i++) {
      if (currentBoard === JSON.stringify(records[i].board)) {
        step = records[i].step
        return
      }
    }
    setRecords(() => {
      let newRecords = JSON.parse(JSON.stringify(records.slice(0, step)))
      return [...newRecords, {step, thisStoneColor, board }]
    });
  }, [board]);

  function handleRewind(event) {
    const indexValue = event.target.value;
    winner = null;
    setBoard(records[indexValue].board);
    thisStoneColor = records[indexValue].thisStoneColor;
  }


  return ({
    board,
    records,
    handlePlaceStone,
    checkWinner,
    handleRewind,
    thisStoneColor,
    winner
  });
}
