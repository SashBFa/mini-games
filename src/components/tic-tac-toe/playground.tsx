import { useEffect, useState } from 'react';
import { CheckPossibility } from './functions/CheckPossibility';
import { GridType, InitGrid } from './functions/InitGrid';
import { InitPossibility, PossibilityType } from './functions/initPossibility';
import { playerCPU } from './functions/playerCPU';

type PlaygroundType = {
  upScore: (nbr: number) => void;
  firstPlayer: string;
  reset: number;
  modeCPU: boolean | null;
};

export const Playground = ({
  upScore,
  firstPlayer,
  reset,
  modeCPU,
}: PlaygroundType) => {
  const grid_init: GridType = InitGrid();
  const poss_init: PossibilityType = InitPossibility();

  const [useGrid, setUseGrid] = useState<GridType>(grid_init);
  const [playerRound, setPlayerRound] = useState<string>(firstPlayer);
  const [possibilities, setPossibilities] =
    useState<PossibilityType>(poss_init);

  const updateGrid = (x: number, y: number) => {
    const tempGrid = [...useGrid];
    tempGrid[y][x].value = playerRound;
    setUseGrid(tempGrid);
  };

  const switchPlayer = () => {
    playerRound === 'x' ? setPlayerRound('o') : setPlayerRound('x');
  };

  const newPoss = () => {
    const newPossibilities: PossibilityType = CheckPossibility(
      useGrid,
      possibilities
    );

    if (newPossibilities.every((item) => !item.completed)) {
      setPossibilities(newPossibilities);
      switchPlayer();
      return;
    }
    playerRound === firstPlayer ? upScore(0) : upScore(2);
  };

  const handlePlay = (x: number, y: number) => {
    if (!useGrid[y][x].value && possibilities.length) {
      updateGrid(x, y);
      newPoss();
    }
  };

  useEffect(() => {
    if (!possibilities.length) {
      upScore(1);
    }
  }, [possibilities]);

  useEffect(() => {
    if (modeCPU && playerRound !== firstPlayer) {
      let CPU_tour = playerCPU(possibilities, useGrid, playerRound);
      setTimeout(() => {
        updateGrid(CPU_tour.x, CPU_tour.y);
        newPoss();
      }, 1000);
    }
  }, [playerRound]);

  useEffect(() => {
    setUseGrid(grid_init);
    setPlayerRound(firstPlayer);
    setPossibilities(poss_init);
  }, [reset]);

  return (
    <div className="grid grid-row-3 gap-4 w-full max-w-xs h-[320px]">
      {useGrid.map((row, y) => (
        <div key={y} className="grid grid-cols-3 gap-4">
          {row.map((item, x) => (
            <button
              key={x}
              onClick={() => handlePlay(x, y)}
              className="bg-gradient-to-br from-cyan-800 to-cyan-900 rounded-md font-black text-7xl flex items-center justify-center h-24 w-24"
            >
              {item.value === 'x' ? (
                <h2 className="w-full h-full">{item.value}</h2>
              ) : (
                <h2 className="w-full h-full">{item.value}</h2>
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
