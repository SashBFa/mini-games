import { ComboType } from './comboArray';

type PlayerChoiceType = {
  mode: ComboType[] | null;
  handleChoice: (item: ComboType) => void;
};

export const PlayerChoice = ({ handleChoice, mode }: PlayerChoiceType) => {
  return (
    <div>
      {mode !== null &&
        mode.map((combo, index) => (
          <button
            key={index}
            onClick={() => handleChoice(combo)}
            className={combo.class}
          >
            {combo.item}
          </button>
        ))}
    </div>
  );
};
