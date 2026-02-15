/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const res = [];
  const path = [];

  // start: 다음에 선택할 후보의 시작 인덱스 (중복 조합 방지)
  const dfs = (start, remain) => {
    // ✅ 종료 조건 1: 정확히 맞춤
    if (remain === 0) {
      res.push([...path]);
      return;
    }

    // ✅ 종료 조건 2: 초과 (더 갈 필요 없음)
    if (remain < 0) return;

    for (let i = start; i < candidates.length; i++) {
      const cur = candidates[i];

      // ✅ (선택) 정렬했으니 가지치기
      if (cur > remain) break;

      // 1) 선택
      path.push(cur);

      // 2) 재귀
      // 🔽 빈칸 1: 같은 숫자 다시 사용 가능하니까 i? i+1?
      dfs(i, remain - cur);

      // 3) 되돌리기
      path.pop();
    }
  };

  // 🔽 빈칸 2: 시작 인덱스와 remain 초기값
  dfs(0, target);

  return res;
};

console.log(combinationSum([2, 3, 4, 5], 8));
