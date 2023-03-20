import { CellType, GridType } from './InitGrid';

export const UpdateGrid = (grid: GridType, cell: CellType) => {
  let temp_grid = [...grid];
  temp_grid[cell.y][cell.x].value = cell.value;
  return temp_grid;
};
