import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Menu } from '../components/tic-tac-toe/menu';
import { Playground } from '../components/tic-tac-toe/playground';
import { ScoreInterface } from '../components/tic-tac-toe/scoreInterface';

export const TicTacToe = () => {
  const [modeCPU, setModeCPU] = useState<boolean | null>(null);
  const [firstPlayer, setFirstPlayer] = useState<string>('x');
  const [scores, setScores] = useState<number[]>([0, 0, 0]);
  const [reset, setReset] = useState<number>(0);
  const [popup, setPopup] = useState<string>('');
  const names = modeCPU ? ['Joueur', 'CPU'] : ['Joueur 1', 'Joueur 2'];

  const upScore = (nbr: number) => {
    if (!nbr) {
      setPopup(names[0] + ' gagne');
    } else if (nbr === 1) {
      setPopup('Egalité');
    } else {
      setPopup(names[1] + ' gagne');
    }
    const tempScores = [...scores];
    tempScores[nbr] += 1;
    setScores(tempScores);
    setTimeout(() => {
      setReset(Math.random());
      setPopup('');
    }, 2000);
  };

  const handleMode = (mode: boolean, strPlayer: string) => {
    setModeCPU(mode);
    setFirstPlayer(strPlayer);
  };

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen w-full py-12 mx-auto">
      {modeCPU === null ? (
        <Menu handleMode={handleMode} />
      ) : (
        <>
          <Navigation />

          <Playground
            upScore={upScore}
            firstPlayer={firstPlayer}
            reset={reset}
            modeCPU={modeCPU}
          />
          {popup && (
            <h4 className="absolute bg-black/50 w-full h-44 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black text-4xl z-10 flex items-center justify-center">
              {popup}
            </h4>
          )}
          <ScoreInterface scores={scores} names={names} />
        </>
      )}
    </section>
  );
};
