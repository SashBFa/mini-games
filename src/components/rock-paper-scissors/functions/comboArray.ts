export type ComboType = {
  item: string;
  win: string[];
  lose: string[];
};

const combinaisons: ComboType[] = [
  { item: 'rock', win: ['scissors', 'lizard'], lose: ['paper', 'spock'] },
  { item: 'paper', win: ['rock', 'spock'], lose: ['scissors', 'lizard'] },
  { item: 'scissors', win: ['paper', 'lizard'], lose: ['rock', 'spock'] },
  { item: 'lizard', win: ['paper', 'spock'], lose: ['scissors', 'rock'] },
  { item: 'spock', win: ['scissors', 'rock'], lose: ['paper', 'lizard'] },
];

export const comboArray = (mode: boolean) => {
  if (mode) {
    return combinaisons.splice(0, 3);
  }
  return combinaisons;
};
