export type ComboType = {
  item: string;
  win: string[];
  lose: string[];
  class: string;
};

const combinaisons: ComboType[] = [
  {
    item: 'rock',
    win: ['scissors', 'lizard'],
    lose: ['paper', 'spock'],
    class: 'caps over-red',
  },
  {
    item: 'paper',
    win: ['rock', 'spock'],
    lose: ['scissors', 'lizard'],
    class: 'caps over-yellow',
  },
  {
    item: 'scissors',
    win: ['paper', 'lizard'],
    lose: ['rock', 'spock'],
    class: 'caps over-blue',
  },
  {
    item: 'lizard',
    win: ['paper', 'spock'],
    lose: ['scissors', 'rock'],
    class: 'caps over-purple',
  },
  {
    item: 'spock',
    win: ['scissors', 'rock'],
    lose: ['paper', 'lizard'],
    class: 'caps over-cyan',
  },
];

export const comboArray = (mode: boolean) => {
  if (mode) {
    return combinaisons.splice(0, 3);
  }
  return combinaisons;
};
