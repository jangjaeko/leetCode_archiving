/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const res = [];
  const path = [];

  const dfs = (start, remain) => {
    if (remain === 0) {
      res.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const cur = candidates[i];
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(cur);
      dfs(i + 1, remain - cur);
      path.pop();
    }
  };
  dfs(0, target);
  return res;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
