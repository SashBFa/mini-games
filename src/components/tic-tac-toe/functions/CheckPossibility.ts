import { PossibilityType } from './initPossibility';
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

    if (tempArr.length === 3) {
      if (tempArr[0] === tempArr[1] && tempArr[0] === tempArr[2]) {
        combinaisons[i].completed = true;
      } else {
        combinaisons.splice(i, 1);
      }
    } else if (tempArr.length === 2 && tempArr[0] !== tempArr[1]) {
      combinaisons.splice(i, 1);
    }
  }
  return combinaisons;
};
