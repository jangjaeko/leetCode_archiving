/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dirIdx = 0;
  let row = 0,
    col = 0;
  let num = 1;

  let steps = n;
  let count = 1; // ✅ 1로 시작

  while (num <= n * n) {
    for (let i = 0; i < steps; i++) {
      matrix[row][col] = num++;
      if (i < steps - 1) {
        // ✅ 마지막 칸에선 이동 안 함
        row += dirs[dirIdx][0];
        col += dirs[dirIdx][1];
      }
    }

    // 방향 전환 후 한 칸 이동
    dirIdx = (dirIdx + 1) % 4;
    row += dirs[dirIdx][0];
    col += dirs[dirIdx][1];

    count++;
    if (count === 2) {
      steps--;
      count = 0;
    }
  }

  return matrix;
};

console.log(generateMatrix(6));
