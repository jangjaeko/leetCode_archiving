/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const path = [];
  const visited = Array(nums.length).fill(false);

  function dfs() {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;

      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
      visited[i] = true;
      path.push(nums[i]);

      dfs();
      path.pop();
      visited[i] = false;
    }
  }
  dfs();
  return result;
};

console.log(permuteUnique([2, 2, 0, 2]));
