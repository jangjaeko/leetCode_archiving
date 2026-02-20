/**
 * idea
 * 백트래킹 재귀함수 안에서 for loop를 돌면서 숫자 선택( 이때 방문여부 확인)
 * 재귀함수에서 M개를 선택할 경우 print
 *
 * 시간 복잡도 N!
 * 자료구조 result int[] isVisited boolean;
 */

function Backtracking(N, M) {
  const isVisited = Array(N + 1).fill(false);
  const rs = [];
  const output = [];

  function back(depth) {
    if (depth === M) {
      output.push(rs.join(" "));
      //   console.log(output);
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!isVisited[i]) {
        isVisited[i] = true; // ✅ 대입
        rs.push(i);

        back(depth + 1);

        rs.pop();
        isVisited[i] = false;
      }
    }
  }

  back(0);
  console.log(output.join("\n"));
}

console.log(Backtracking(4, 2));
