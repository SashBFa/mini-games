import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Menu } from '../components/tic-tac-toe/menu';
import { Playground } from '../components/tic-tac-toe/playground';
import { ScoreInterface } from '../components/tic-tac-toe/scoreInterface';

export const TicTacToe = () => {
  const [mode, setMode] = useState<string | null>(null);
  const [scores, setScores] = useState<number[]>([0, 0, 0]);

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen w-full py-12 mx-auto">
      {mode === null ? (
        <Menu />
      ) : (
        <>
          <Navigation />
          <Playground />
          <ScoreInterface scores={scores} />
        </>
      )}
    </section>
  );
};
