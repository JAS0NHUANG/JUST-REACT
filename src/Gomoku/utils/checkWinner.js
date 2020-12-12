function checkWinner(thisStoneColor, board, rowIndex, colIndex,) {
  let xyArray = [ [1, 0], [0, 1], [1, 1], [-1, 1] ];

  for (let i = 0; i < xyArray.length; i++) {
    let counter = 0;
    let [x, y] = xyArray[i]
    for (let i = 0; i < 2; i++) {
      const negativeHolderX = x;
      const negativeHolderY = y;
      while (
        rowIndex + x >= 0 &&
        colIndex + y >= 0 &&
        rowIndex + x <= 18 &&
        colIndex + y <= 18 &&
        thisStoneColor === board[rowIndex + x][colIndex + y]
      ) {
        counter++;
        x = negativeHolderX * (Math.abs(x) + 1);
        y = negativeHolderY * (Math.abs(y) + 1);
      }
      x = -x;
      y = -y;
    }
    if (counter === 4) return thisStoneColor;
  }
  return;
}

export default checkWinner;
