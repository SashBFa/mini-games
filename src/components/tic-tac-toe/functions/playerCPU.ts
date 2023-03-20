import { getRandom } from '../../tools/getRandom';
import { GridType } from './InitGrid';
import { PossibilityType } from './initPossibility';

export const playerCPU = (
  possibilities: PossibilityType,
  grid: GridType,
  sign: string
) => {
  let position = { x: -1, y: -1 };
  let combinaisons = [...possibilities];
  let positions_prio = [];
  let positions = [];

  for (const combinaison of combinaisons) {
    let tempCombo = combinaison.combo.map((item) => {
      return { x: item.x, y: item.y, value: grid[item.x][item.y].value };
    });
    let tpsDoubleMark = [
      tempCombo[0].value,
      tempCombo[1].value,
      tempCombo[2].value,
    ]
      .join('')
      .split('');

    if (tpsDoubleMark.length === 2 && tpsDoubleMark[0] === tpsDoubleMark[1]) {
      for (const item of tempCombo) {
        if (!item.value) {
          position = { x: item.y, y: item.x };
          console.log({ item });
        }
      }
    } else if (tpsDoubleMark.length === 1 && tpsDoubleMark[0] === sign) {
      for (const item of tempCombo) {
        if (!item.value) {
          positions_prio.push({ x: item.y, y: item.x });
        }
      }
    } else {
      for (const item of tempCombo) {
        if (!item.value) {
          positions.push({ x: item.y, y: item.x });
        }
      }
    }
  }

  if (position.x === -1) {
    if (positions_prio.length) {
      position = positions_prio[getRandom(0, positions_prio.length)];
    } else {
      position = positions[getRandom(0, positions.length)];
    }
  }

  return position;
};
