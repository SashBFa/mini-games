import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import {
  initSudoku,
  SudokuMatrix,
} from '../components/sudoku/functions/initSudoku';
import { Playground } from '../components/sudoku/playground';

export const Sudoku = () => {
  const [difficulty, setDifficulty] = useState<number>(10);
  const [puzzle, setPuzzle] = useState<SudokuMatrix>(initSudoku());

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen w-full py-12 mx-auto">
      <>
        <Navigation />
        <Playground difficulty={difficulty} puzzle={puzzle} />
        <div />
      </>
    </section>
  );
};
