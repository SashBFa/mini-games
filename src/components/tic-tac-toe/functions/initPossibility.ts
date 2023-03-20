export type PossibilityType = {
  completed: boolean;
  combo: { x: number; y: number }[];
}[];

export const InitPossibility = () => {
  return [
    {
      completed: false,
      combo: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
      ],
    },
    {
      completed: false,
      combo: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ],
    },
    {
      completed: false,
      combo: [
        { x: 0, y: 2 },
        { x: 1, y: 2 },
        { x: 2, y: 2 },
      ],
    },
    {
      completed: false,
      combo: [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
      ],
    },
    {
      completed: false,
      combo: [
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
      ],
    },
    {
      completed: false,
      combo: [
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
      ],
    },
    {
      completed: false,
      combo: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
      ],
    },
    {
      completed: false,
      combo: [
        { x: 2, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 2 },
      ],
    },
  ];
};
