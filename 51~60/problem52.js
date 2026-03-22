/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  const cols = new Set(); // 사용 중인 열
  const diag1 = new Set(); // row - col
  const diag2 = new Set(); // row + col
  let count = 0;
  function backtrack(row) {
    // 모든 행에 퀸을 다 놓았으면 정답 저장
    if (row === n) {
      result.push(board.map((r) => r.join("")));

      return;
    }

    for (let col = 0; col < n; col++) {
      const d1 = row - col;
      const d2 = row + col;

      // 같은 열 / 대각선에 이미 퀸이 있으면 못 놓음
      if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) {
        continue;
      }

      // 퀸 놓기
      board[row][col] = "Q";
      cols.add(col);
      diag1.add(d1);
      diag2.add(d2);

      // 다음 행으로
      backtrack(row + 1);

      // 원상복구
      board[row][col] = ".";
      cols.delete(col);
      diag1.delete(d1);
      diag2.delete(d2);
    }
  }

  backtrack(0);
  return count;
};

console.log(solveNQueens(4));
