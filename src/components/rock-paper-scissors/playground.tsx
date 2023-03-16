import { useEffect, useState } from 'react';
import { getRandom } from '../tools/getRandom';
import { ComboType } from './functions/comboArray';
import { PlayerChoice } from './playerChoice';

type PlaygroundType = {
  mode: ComboType[] | null;
  upScore: (nbr: number) => void;
  reset: number;
};

export const Playground = ({ mode, upScore, reset }: PlaygroundType) => {
  const [handPlayer, setHandPlayer] = useState<ComboType | null>(null);
  const [handCPU, setHandCPU] = useState<ComboType | null>(null);

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

  useEffect(() => {
    if (handCPU === null || handPlayer === null) {
      return;
    }
    if (
      handCPU.item === handPlayer.win[0] ||
      handCPU.item === handPlayer.win[1]
    ) {
      upScore(0);
    } else if (
      handCPU.item === handPlayer.lose[0] ||
      handCPU.item === handPlayer.lose[1]
    ) {
      upScore(2);
    } else {
      upScore(1);
    }
  }, [handPlayer, handCPU]);

  useEffect(() => {
    setHandPlayer(null);
    setHandCPU(null);
  }, [reset]);

  return (
    <div>
      {handPlayer === null ? (
        <PlayerChoice handleChoice={handleChoice} mode={mode} />
      ) : (
        <div>
          <div>{handPlayer.item}</div>
          {handCPU === null ? <div /> : <div>{handCPU.item}</div>}
        </div>
      )}
    </div>
  );
};
