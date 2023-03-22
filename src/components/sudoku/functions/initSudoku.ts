export type SudokuMatrix = number[][];

export const initSudoku = (): SudokuMatrix => {
  const matrix: SudokuMatrix = new Array(9)
    .fill(null)
    .map(() => new Array(9).fill(0));

  const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // fill in the first row with the shuffled numbers
  for (let i = 0; i < 9; i++) {
    matrix[0][i] = nums[i];
  }
  initHelper(matrix, 1, 0);
  return matrix;
};

const shuffle = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const initHelper = (
  matrix: SudokuMatrix,
  row: number,
  col: number
): boolean => {
  if (row === 9) {
    return true;
  }
  if (col === 9) {
    return initHelper(matrix, row + 1, 0);
  }
  for (let num = 1; num <= 9; num++) {
    if (isValid(matrix, row, col, num)) {
      matrix[row][col] = num;
      if (initHelper(matrix, row, col + 1)) {
        return true;
      }
      matrix[row][col] = 0;
    }
  }
  return false;
};

function isValid(
  matrix: SudokuMatrix,
  row: number,
  col: number,
  num: number
): boolean {
  for (let i = 0; i < 9; i++) {
    if (matrix[row][i] === num || matrix[i][col] === num) {
      return false;
    }
  }
  const subgridRow = Math.floor(row / 3) * 3;
  const subgridCol = Math.floor(col / 3) * 3;
  for (let i = subgridRow; i < subgridRow + 3; i++) {
    for (let j = subgridCol; j < subgridCol + 3; j++) {
      if (matrix[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}
