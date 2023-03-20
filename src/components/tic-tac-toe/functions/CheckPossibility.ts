import { PossibilityType } from '../tools/possibility';
import { GridType } from './InitGrid';

export const CheckPossibility = (
  grid: GridType,
  possibility: PossibilityType
) => {
  let combinaisons = [...possibility];

  for (let i = 0; i < combinaisons.length; i++) {
    let tempArr = combinaisons[i].combo
      .map((item) => {
        return grid[item.x][item.y].value;
      })
      .join('')
      .split('');

    if (tempArr.length > 1) {
      if (tempArr.every((n) => n === tempArr[0])) {
        if (tempArr.length === 3) combinaisons[i].completed = true;
      } else {
        combinaisons.splice(i, 1);
      }
    }
  }

  return combinaisons;
};
