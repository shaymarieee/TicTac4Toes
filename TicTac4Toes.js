class TicTac4Toes {
  constructor(board) {
    this.board || null;
    this.noWinnerMsg = "No winner yet!";
    this.player1WinsMsg = "Player 1 wins!";
    this.player2WinsMsg = "Player 2 wins!";
  }

  /* ======================================================================== */
  checkWinner(board) {
    /*
    TODO: Check for these edge cases:
    TODO:		1. Invalid game board
    TODO: 	2. No moves made yet (aka empty board) to avoid unnecessary checks
    */
    let result = { winner: null, message: this.noWinnerMsg };
    this.board = board;

    const winChecks = [
      this.cornerWinCheck,
      this.horizontalWinCheck,
      this.verticalWinCheck,
      this.diagonalWinCheck,
      this.squareWinCheck,
    ];

    for (let i = 0; i < winChecks.length; i++) {
      // We only move on to the next win check if no winner has been found yet
      if (result.winner === null) {
        result.winner = winChecks[i](board);
      }
    }

    if (!(result.winner === null)) {
      result.message =
        result.winner === 1 ? this.player1WinsMsg : this.player2WinsMsg;
    }
    return result;
  }

  /* ======================================================================== */
  cornerWinCheck(board) {
    let cornerSet = new Set([
      board[0][0],
      board[0][3],
      board[3][0],
      board[3][3],
    ]);
    if (cornerSet.size === 1 && !cornerSet.has(0)) {
      return board[0][0];
    } else {
      return null;
    }
  }

  /* ======================================================================== */
  horizontalWinCheck(board) {
    let result = null;
    board.forEach((row) => {
      const rowSet = new Set(row);
      if (rowSet.size === 1 && !rowSet.has(0)) {
        result = row[0];
      }
    });
    return result;
  }

  /* ======================================================================== */
  verticalWinCheck(board) {
    let result = null;
    for (let i = 0; i < 4; i++) {
      let verticalSet = new Set([
        board[0][i],
        board[1][i],
        board[2][i],
        board[3][i],
      ]);
      if (verticalSet.size === 1 && !verticalSet.has(0)) {
        result = board[0][i];
      }
    }
    return result;
  }

  /* ======================================================================== */
  diagonalWinCheck(board) {
    let result = null;
    const downwardDiagonalSet = new Set([
      board[0][0],
      board[1][1],
      board[2][2],
      board[3][3],
    ]);
    if (downwardDiagonalSet.size === 1 && !downwardDiagonalSet.has(0)) {
      result = board[0][0];
    } else {
      const upwardDiagonalSet = new Set([
        board[0][3],
        board[1][2],
        board[2][1],
        board[3][0],
      ]);
      if (upwardDiagonalSet.size === 1 && !upwardDiagonalSet.has(0)) {
        result = board[0][3];
      }
    }

    return result;
  }

  /* ======================================================================== */
  squareWinCheck(board) {
    let result = null;
    for (let row = 0; row < 3; row++) {
      const squareSet1 = new Set([
        board[row][0],
        board[row][1],
        board[row + 1][0],
        board[row + 1][1],
      ]);
      const squareSet2 = new Set([
        board[row][1],
        board[row][2],
        board[row + 1][1],
        board[row + 1][2],
      ]);
      const squareSet3 = new Set([
        board[row][2],
        board[row][3],
        board[row + 1][2],
        board[row + 1][3],
      ]);
      if (squareSet1.size === 1 && !squareSet1.has(0)) {
        result = squareSet1.has(1) ? 1 : 2;
      } else if (squareSet2.size === 1 && !squareSet2.has(0)) {
        result = squareSet2.has(1) ? 1 : 2;
      } else if (squareSet3.size === 1 && !squareSet3.has(0)) {
        result = squareSet3.has(1) ? 1 : 2;
      }
    }
    return result;
  }

  /* ======================================================================== */
  anyMovesLeft(board) {
    let result = false;
    board.forEach((row) => {
      if (row.includes(0)) {
        result = true;
      }
    });
    return result;
  }

  /* ======================================================================== */
  isGameOver(board) {
    let result = false;
    if (this.checkWinner(board).winner) {
      result = true;
    }
    if (!this.anyMovesLeft(board)) {
      result = true;
    }
    return result;
  }
}

module.exports = TicTac4Toes;
