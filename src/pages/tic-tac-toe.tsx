import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Menu } from '../components/tic-tac-toe/menu';
import { Playground } from '../components/tic-tac-toe/playground';
import { ScoreInterface } from '../components/tic-tac-toe/scoreInterface';

export const TicTacToe = () => {
  const [score, setScore] = useState({ x: 0, egality: 0, o: 0 });
  const [reset, setReset] = useState<boolean>(false);

  const endGame = (player: string) => {
    if (player === 'x') {
      setScore({ x: score.x + 1, egality: score.egality, o: score.o });
    } else if (player === 'y') {
      setScore({ x: score.x, egality: score.egality, o: score.o + 1 });
    } else {
      setScore({ x: score.x, egality: score.egality + 1, o: score.o });
    }
    setReset(!reset);
  };

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen w-full py-12 mx-auto">
      <Navigation />
      <Playground endGame={endGame} firstPlayer="x" reset={reset} />
      <ScoreInterface scores={[score.x, score.egality, score.o]} />
    </section>
  );
};
