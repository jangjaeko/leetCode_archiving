/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const result = false;

  for (let i = 0; i < 9; i++) {
    let l = [];
    let w = [];
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== ".") {
        if (l.includes(board[j][i])) return false;
        else {
          l.push(board[j][i]);
        }
      }
      if (board[i][j] !== ".") {
        if (w.includes(board[i][j])) return false;
        else {
          w.push(board[i][j]);
        }
      }
    }
  }
  for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
      const seen = [];

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const val = board[boxRow + i][boxCol + j];
          if (val === ".") continue;

          if (seen.includes(val)) return false;
          seen.push(val);
        }
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
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
