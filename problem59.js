/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  // 방향: 우, 하, 좌, 상
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

  // 이동 횟수 패턴: n, n-1, n-1, n-2, n-2, ..., 1, 1
  let steps = n;
  let count = 0; // 같은 steps를 몇 번 썼는지

  while (num <= n * n) {
    for (let i = 0; i < steps; i++) {
      matrix[row][col] = num++;
      row += dirs[dirIdx][0];
      col += dirs[dirIdx][1];
    }

    // 방향 전환
    dirIdx = (dirIdx + 1) % 4;
    count++;

    // 두 번 쓰면 steps 줄이기 (첫 번째는 한 번만)
    if (count === 2) {
      steps--;
      count = 0;
    }
  }

  return matrix;
};

console.log(generateMatrix(6));
