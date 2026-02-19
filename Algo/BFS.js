//1. idea - 2중 for문 =>값 1 && 방문 x => BFS
//2. time complexity - O(V+E) => V =m*n, E= V*4 => O(5V)
// Maxm = 500, Maxn= 500 => O(5*500*500) => O(1250000) => 가능
//3. 자료구조 : int [][], 방문여부 : boolean[][], queue

function solvePictures(n, m, grid) {
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  let pictureCount = 0;
  let maxArea = 0;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        pictureCount++;

        // BFS 시작
        let area = 0;
        const queue = [[i, j]];
        let head = 0;
        visited[i][j] = true;

        while (head < queue.length) {
          const [x, y] = queue[head++];
          area++;

          for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (
              nx >= 0 &&
              nx < n &&
              ny >= 0 &&
              ny < m &&
              grid[nx][ny] === 1 &&
              !visited[nx][ny]
            ) {
              visited[nx][ny] = true;
              queue.push([nx, ny]);
            }
          }
        }

        if (area > maxArea) maxArea = area;
      }
    }
  }

  return [pictureCount, maxArea];
}

/**input
 * 6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1
 */

console.log(
  solvePictures(6, 5, [
    [1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
  ]),
);
