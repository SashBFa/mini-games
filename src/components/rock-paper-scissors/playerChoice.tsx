import clsx from 'clsx';
import { ComboType } from './comboArray';

type PlayerChoiceType = {
  mode: ComboType[] | null;
  handleChoice: (item: ComboType) => void;
};

export const PlayerChoice = ({ handleChoice, mode }: PlayerChoiceType) => {
  return (
    <div className={clsx(mode?.length === 3 ? 'triangle' : 'hexagone')}>
      {mode !== null &&
        mode.map((combo, index) => (
          <div
            key={index}
            className={clsx(
              mode?.length === 3 ? 'triangle-child' : 'hexagone-child'
            )}
          >
            <button onClick={() => handleChoice(combo)} className={combo.class}>
              <div className="caps-cover">
                <img
                  src={`/images/rock-paper-scissors/icon-${combo.item}.svg`}
                  alt={combo.item}
                  className="scale-75"
                />
              </div>
            </button>
          </div>
        ))}
    </div>
  );
};
