/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const N = 9;

  const canPlace = (r, c, num) => {
    for (let k = 0; k < N; k++) {
      if (board[r][k] === num) return false;
      if (board[k][c] === num) return false;
    }

    const br = Math.floor(r / 3) * 3;
    const bc = Math.floor(c / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[br + i][bc + j] === num) return false;
      }
    }
    return true;
  };

  const dfs = () => {
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (board[r][c] === ".") {
          for (let d = 1; d <= 9; d++) {
            const num = String(d);
            if (canPlace(r, c, num)) {
              board[r][c] = num;
              if (dfs()) return true;
              board[r][c] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  dfs();
  return board;
};
console.log(
  solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
