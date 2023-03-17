import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import {
  comboArray,
  ComboType,
} from '../components/rock-paper-scissors/comboArray';
import { Menu } from '../components/rock-paper-scissors/menu';
import { Playground } from '../components/rock-paper-scissors/playground';
import { ScoreInterface } from '../components/rock-paper-scissors/scoreInterface';
import './../styles/rock-paper-scissors.css';

export const RockPaperScissors = () => {
  const [mode, setMode] = useState<ComboType[] | null>(null);
  const [scores, setScores] = useState<number[]>([0, 0, 0]);
  const [reset, setReset] = useState<number>(0);

  const difficulty_choice = (mode: boolean) => {
    const combo = comboArray(mode);
    setMode(combo);
  };

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
      {mode === null ? (
        <Menu handleMode={difficulty_choice} />
      ) : (
        <>
          <Navigation />
          <Playground mode={mode} reset={reset} upScore={upScore} />
          <ScoreInterface scores={scores} />
        </>
      )}
    </section>
  );
};
