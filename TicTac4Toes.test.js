const TicTac4Toes = require("./TicTac4Toes.js");
const {
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
} = require("./gameBoards.js");

describe("TicTac4Toes", () => {
  let ticTac4Toes;

  beforeEach(() => {
    ticTac4Toes = new TicTac4Toes();
  });

  describe("checkWinner", () => {
    it("should correctly detect no winner when given an empty board", () => {
      expect(ticTac4Toes.checkWinner(emptyBoard)).toStrictEqual({
        winner: null,
        message: "No winner yet!",
      });
    });
    it("should correctly identify a player 1 corner win", () => {
      expect(ticTac4Toes.checkWinner(cornerWin1)).toStrictEqual({
        winner: 1,
        message: "Player 1 wins!",
      });
    });
    it("should correctly identify a player 2 corner win", () => {
      expect(ticTac4Toes.checkWinner(cornerWin2)).toStrictEqual({
        winner: 2,
        message: "Player 2 wins!",
      });
    });
    it("should correctly identify a player 1 horizontal win", () => {
      expect(ticTac4Toes.checkWinner(rowWin1)).toStrictEqual({
        winner: 1,
        message: "Player 1 wins!",
      });
    });
    it("should correctly identify a player 2 horizontal win", () => {
      expect(ticTac4Toes.checkWinner(rowWin2)).toStrictEqual({
        winner: 2,
        message: "Player 2 wins!",
      });
    });
    it("should correctly identify a player 1 vertical win", () => {
      expect(ticTac4Toes.checkWinner(colWin1)).toStrictEqual({
        winner: 1,
        message: "Player 1 wins!",
      });
    });
    it("should correctly identify a player 1 diagonal win", () => {
      expect(ticTac4Toes.checkWinner(diagWin1)).toStrictEqual({
        winner: 1,
        message: "Player 1 wins!",
      });
    });
    it("should correctly identify a player 2 diagonal win", () => {
      expect(ticTac4Toes.checkWinner(diagWin2)).toStrictEqual({
        winner: 2,
        message: "Player 2 wins!",
      });
    });
    it("should correctly identify a player 1 square win", () => {
      expect(ticTac4Toes.checkWinner(squareWin1)).toStrictEqual({
        winner: 1,
        message: "Player 1 wins!",
      });
    });
    it("should correctly identify a full board with no win", () => {
      expect(ticTac4Toes.checkWinner(fullNoWin)).toStrictEqual({
        winner: null,
        message: "No winner yet!",
      });
    });
  });

  describe("anyMovesLeft", () => {
    it("should return true for an empty game board", () => {
      expect(ticTac4Toes.anyMovesLeft(emptyBoard)).toBe(true);
    });
    it("should return true when given a board with no winner and empty space", () => {
      expect(ticTac4Toes.anyMovesLeft(midGameNoWin)).toBe(true);
    });
    it("should return false when given a full game board", () => {
      expect(ticTac4Toes.anyMovesLeft(fullNoWin)).toBe(false);
    });
  });

  describe("isGameOver", () => {
    it("should return false for an empty game board", () => {
      expect(ticTac4Toes.isGameOver(emptyBoard)).toBe(false);
    });
    it("should return false when given a board with no winner and empty spaces", () => {
      expect(ticTac4Toes.isGameOver(midGameNoWin)).toBe(false);
    });
    it("should return true when given a full game board", () => {
      expect(ticTac4Toes.isGameOver(fullNoWin)).toBe(true);
    });
    it("should return true when given a board with a winner", () => {
      expect(ticTac4Toes.isGameOver(squareWin2)).toBe(true);
    });
  });
});
