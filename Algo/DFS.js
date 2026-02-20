/**
 * idea : 2중 for 문 , 값 1 && 방문 x => DFS
 * DFS를 통해 찾은 값을 저장 후 정렬해서 출력
 *
 * time complexity
 * DFS : O(V+E) =>
 * V,E = N^2 , 4N^2
 * V+E = 5N^2 => N^2 => 625 reasonable
 *
 * 자료구조 : int[][], boolean[][], result : int[]
 */

function dfs1(n, grid) {
  let visited = Array.from({ length: n }, () => Array(n).fill(false));
  let dy = [0, -1, 0, 1];
  let dx = [1, 0, -1, 0];
  let result = [];

  function dfs(y, x) {
    each++;
    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];
      if (0 <= ny && ny < n && 0 <= nx && nx < n) {
        if (grid[ny][nx] === 1 && visited[ny][nx] === false) {
          visited[ny][nx] = true;
          dfs(ny, nx);
        }
      }
    }
  }

  let each = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && visited[i][j] === false) {
        visited[i][j] = true;
        each = 0;
        dfs(i, j);
        result.push(each);
      }
    }
  }
  return result.sort((a, b) => a - b);
}
const input = `
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
`
  .trim()
  .split("\n");

const N = Number(input[0]);
const grid = input.slice(1).map((line) => line.split("").map(Number));

console.log(dfs1(N, grid));
