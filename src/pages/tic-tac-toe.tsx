import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Menu } from '../components/tic-tac-toe/menu';
import { Playground } from '../components/tic-tac-toe/playground';
import { ScoreInterface } from '../components/tic-tac-toe/scoreInterface';

export const TicTacToe = () => {
  const [modeCPU, setModeCPU] = useState<boolean | null>(true);
  const [firstPlayer, setFirstPlayer] = useState<string>('x');
  const [scores, setScores] = useState<number[]>([0, 0, 0]);
  const [reset, setReset] = useState<number>(0);

  const upScore = (nbr: number) => {
    const tempScores = [...scores];
    tempScores[nbr] += 1;
    setScores(tempScores);
    setTimeout(() => {
      setReset(Math.random());
    }, 2000);
  };

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen w-full py-12 mx-auto">
      {modeCPU === null ? (
        <Menu />
      ) : (
        <>
          <Navigation />
          <Playground
            upScore={upScore}
            firstPlayer={firstPlayer}
            reset={reset}
            modeCPU={modeCPU}
          />
          <ScoreInterface scores={scores} />
        </>
      )}
    </section>
  );
};
