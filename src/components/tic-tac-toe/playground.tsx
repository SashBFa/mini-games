import { useEffect, useState } from 'react';
import { CheckPossibility } from './functions/CheckPossibility';
import { CellType, GridType, InitGrid } from './functions/InitGrid';
import { UpdateGrid } from './functions/UpdateGrid';
import { possibility, PossibilityType } from './possibility';

type PlaygroundType = {
  endGame: (player: string) => void;
  firstPlayer: string;
  reset: boolean;
};

const grid_init: GridType = InitGrid();
const dft_cellPlayed: CellType = {
  x: 0,
  y: 0,
  value: '',
};

export const Playground = ({ endGame, firstPlayer, reset }: PlaygroundType) => {
  const [useGrid, setUseGrid] = useState<GridType>(grid_init);
  const [playerRound, setPlayerRound] = useState<string>(firstPlayer);
  const [possibilities, setPossibilities] =
    useState<PossibilityType>(possibility);
  const [cellPlayed, setCellPlayed] = useState<CellType>(dft_cellPlayed);

  const playerAction = (cell: CellType) => {
    setCellPlayed(cell);
  };

  const changePlayer = () => {
    playerRound === 'x' ? setPlayerRound('o') : setPlayerRound('x');
  };

  useEffect(() => {
    !possibilities.length && endGame('egality');
  }, [possibilities]);

  useEffect(() => {
    if (cellPlayed !== dft_cellPlayed) {
      setUseGrid(UpdateGrid(useGrid, cellPlayed));
      setPossibilities(CheckPossibility(useGrid, possibilities));
      if (possibilities.some((options) => options.completed)) {
        endGame(playerRound);
      } else {
        changePlayer();
      }
    }
  }, [cellPlayed]);

  useEffect(() => {
    setUseGrid(grid_init);
    setPlayerRound(firstPlayer);
    setPossibilities(possibility);
    setCellPlayed({
      x: 0,
      y: 0,
      value: '',
    });
  }, [reset]);

  return (
    <div className="grid grid-row-3 gap-4 w-full max-w-xs h-[320px]">
      {useGrid.map((row, y) => (
        <div key={y} className="grid grid-cols-3 gap-4">
          {row.map((item, x) => (
            <button
              key={x}
              onClick={() => playerAction({ x: x, y: y, value: playerRound })}
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
