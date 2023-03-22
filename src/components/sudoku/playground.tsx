import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { SudokuMatrix } from './functions/initSudoku';
import { starterMatrix } from './functions/starterMatrix';

type PlaygroundType = {
  puzzle: SudokuMatrix;
  difficulty: number;
};

export const Playground = ({ puzzle, difficulty }: PlaygroundType) => {
  const starter = useMemo(() => starterMatrix(puzzle, difficulty), []);
  const [matrix, setMatrix] = useState<SudokuMatrix>(starter);

  console.log({ matrix });
  console.log({ starter });

  const handleNbr = (value: number, x: number, y: number) => {
    let tempMatrix = [...matrix];
    tempMatrix[x][y] = value;
    setMatrix(tempMatrix);
  };

  return (
    <div className="flex gap-1 w-full p-6 aspect-square pl-7">
      {matrix.map((row, y) => (
        <div
          key={y}
          className={clsx(
            'flex flex-col w-full h-full gap-1',
            y % 3 === 2 && 'mr-1'
          )}
        >
          {row.map((value, x) => (
            <div
              key={x}
              className={clsx(
                'bg-white rounded-sm text-black text-center font-bold text-2xl w-full h-full',
                x % 3 === 2 && 'mb-1'
              )}
            >
              {starter[y][x] ? (
                <div className="flex justify-center items-center w-full h-full">
                  <p className="text-red-500">{value}</p>
                </div>
              ) : (
                <input
                  type="text"
                  value={value ? value : ''}
                  onChange={(e) => handleNbr(parseInt(e.target.value), y, x)}
                  className="w-full h-full text-center"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
