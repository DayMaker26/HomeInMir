const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
const board = [];
for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
  const row = [];
  for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
    row.push(' ');
  }
  board.push(row);
}
return board;
};
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
const board = [];
for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
  const row = [];
  for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
    row.push(null);
}
board.push(row);
}
let numberOfBombsPlaced = 0;
while (numberOfBombsPlaced < numberOfBombs) {
  const randomRowIndex = Math.floor(Math.random() * numberOfRows);
  const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

if (board[randomRowIndex][randomColumnIndex] !== 'B') {
  board[randomRowIndex][randomColumnIndex] = 'B';
  numberOfBombsPlaced++;
}

}
return board;
};
const getNumberOfSurroundingBombs =(bombBoard, rowIndex, columnIndex) => {
const neighborOffsets = [
  [1, -1],
  [-1, 0],
  [1, 1],
  [-1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
  [0, -1],
  [-1, -1]
];
const numberOfRows = bombBoard.length;
const numberOfColumns = bombBoard[0].length;
let getNumberOfSurroundingBombs = 0;
neighborOffsets.forEach(neighborOffsets => {
  const neighborRowIndex = rowIndex + neighborOffsets[0];
  const neighborColumnIndex = columnIndex + neighborOffsets[1];
  if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
  neighborColumnIndex >=0 && neighborColumnIndex < numberOfColumns);
  if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
    numberOfBombs++;
  }
});
return numberOfBombs;
}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  return '1';
}
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  // check if tile is already flipped if so return
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('Already flipped that tile!');
    return;
  }
  // check tile is bomb if so place bomb on playerBoard
  if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex)
  }
//if tile is not a bomb place number of surrounding bombs on playerboard
}
  const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
  };

let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 3);


printBoard(playerBoard);
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 0, 0);
