import { SudokuMatrix } from './initSudoku';

export const starterMatrix = (matrix: SudokuMatrix, difficulty: number) => {
  const board: SudokuMatrix = new Array(9)
    .fill(null)
    .map(() => new Array(9).fill(0));

  for (let i = 0; i < difficulty; i++) {
    const [row, col] = getRandRowCol(board);
    board[row][col] = matrix[row][col];
  }

  return board;
};

const getRandRowCol = (arr: SudokuMatrix): number[] => {
  const row = Math.floor(Math.random() * 9);
  const col = Math.floor(Math.random() * 9);
  if (arr[row][col]) {
    return getRandRowCol(arr);
  }
  return [row, col];
};
