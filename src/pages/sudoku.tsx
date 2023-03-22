import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import {
  initSudoku,
  SudokuMatrix,
} from '../components/sudoku/functions/initSudoku';
import { Playground } from '../components/sudoku/playground';

export const Sudoku = () => {
  const [matrix, setMatrix] = useState<SudokuMatrix>(initSudoku());

  console.log(matrix);

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen w-full py-12 mx-auto">
      <>
        <Navigation />
        <Playground />
        <div />
      </>
    </section>
  );
};
