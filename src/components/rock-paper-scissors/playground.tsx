import { useEffect, useState } from 'react';
import { getRandom } from '../tools/getRandom';
import { ComboType } from './comboArray';
import { PlayerChoice } from './playerChoice';

type PlaygroundType = {
  mode: ComboType[] | null;
  upScore: (nbr: number) => void;
  reset: number;
};

export const Playground = ({ mode, upScore, reset }: PlaygroundType) => {
  const [handPlayer, setHandPlayer] = useState<ComboType | null>(null);
  const [handCPU, setHandCPU] = useState<ComboType | null>(null);
  const [result, setResult] = useState<string>('');

  const handleChoice = (item: ComboType) => {
    if (mode === null) {
      return;
    }
    const randID = getRandom(0, mode.length);
    setHandPlayer(item);
    setTimeout(() => {
      setHandCPU(mode[randID]);
    }, 2000);
  };

  const addResult = (str: string, nbr: number) => {
    setTimeout(() => {
      upScore(nbr);
      setResult(str);
    }, 1000);
  };

  useEffect(() => {
    if (handCPU === null || handPlayer === null) {
      return;
    }
    if (
      handCPU.item === handPlayer.win[0] ||
      handCPU.item === handPlayer.win[1]
    ) {
      addResult('Gagné', 0);
    } else if (
      handCPU.item === handPlayer.lose[0] ||
      handCPU.item === handPlayer.lose[1]
    ) {
      addResult('Perdu', 2);
    } else {
      addResult('Egalité', 1);
    }
  }, [handPlayer, handCPU]);

  useEffect(() => {
    setHandPlayer(null);
    setHandCPU(null);
    setResult('');
  }, [reset]);

  return (
    <div className="grow grid place-content-center">
      {handPlayer === null ? (
        <PlayerChoice handleChoice={handleChoice} mode={mode} />
      ) : (
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex items-center gap-12">
            <div className={handPlayer.class}>
              <div className="caps-cover">
                <img
                  src={`/images/rock-paper-scissors/icon-${handPlayer.item}.svg`}
                  alt={handPlayer.item}
                  className="scale-75"
                />
              </div>
            </div>
            {handCPU === null ? (
              <div className="w-[81px] h-[81px] rounded-full bg-black/50" />
            ) : (
              <div className={handCPU.class}>
                <div className="caps-cover">
                  <img
                    src={`/images/rock-paper-scissors/icon-${handCPU.item}.svg`}
                    alt={handCPU.item}
                    className="scale-75"
                  />
                </div>
              </div>
            )}
          </div>
          <h4 className="w-96 text-center h-12 font-black text-6xl">
            {result}
          </h4>
        </div>
      )}
    </div>
  );
};
