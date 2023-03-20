export type GridType = {
  x: number;
  y: number;
  value: string;
}[][];

export const InitGrid = () => {
  return Array.from({ length: 3 }, (_, row) => {
    return Array.from({ length: 3 }, (_, column) => ({
      x: column,
      y: row,
      value: '',
    }));
  });
};
