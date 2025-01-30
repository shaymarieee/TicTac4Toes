const emptyBoard = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const midGameNoWin = [
  [1, 0, 2, 1],
  [0, 2, 0, 1],
  [2, 0, 0, 0],
  [1, 0, 0, 0],
];
const cornerWin1 = [
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 1],
];
const cornerWin2 = [
  [2, 0, 0, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 0, 2],
];
const rowWin1 = [
  [1, 1, 1, 1],
  [2, 2, 0, 2],
  [0, 0, 0, 0],
  [1, 0, 0, 2],
];
const rowWin2 = [
  [1, 1, 2, 1],
  [2, 2, 2, 2],
  [0, 0, 0, 0],
  [1, 0, 0, 2],
];
const colWin1 = [
  [1, 1, 2, 1],
  [1, 2, 2, 2],
  [1, 0, 0, 0],
  [1, 0, 0, 2],
];
const colWin2 = [
  [1, 1, 2, 1],
  [1, 2, 2, 2],
  [0, 0, 2, 0],
  [1, 0, 2, 2],
];
const diagWin1 = [
  [1, 1, 2, 1],
  [1, 2, 1, 2],
  [0, 1, 2, 0],
  [1, 0, 2, 2],
];
const diagWin2 = [
  [2, 1, 2, 1],
  [1, 2, 2, 2],
  [0, 0, 2, 0],
  [1, 0, 2, 2],
];
const squareWin1 = [
  [1, 1, 2, 1],
  [1, 1, 2, 2],
  [0, 0, 1, 0],
  [1, 0, 2, 2],
];
const squareWin2 = [
  [1, 1, 2, 1],
  [1, 0, 0, 2],
  [0, 0, 2, 2],
  [1, 0, 2, 2],
];
const fullNoWin = [
  [1, 1, 2, 1],
  [1, 2, 2, 2],
  [2, 1, 1, 2],
  [1, 1, 2, 2],
];

module.exports = {
  emptyBoard,
  midGameNoWin,
  cornerWin1,
  cornerWin2,
  rowWin1,
  rowWin2,
  colWin1,
  colWin2,
  diagWin1,
  diagWin2,
  squareWin1,
  squareWin2,
  fullNoWin,
};
