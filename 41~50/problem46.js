/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const arr = [];
  const path = [];
  const visited = Array(nums.length).fill(false);
  function per() {
    if (path.length === nums.length) {
      arr.push([...path]);
      console.log(path);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        path.push(nums[i]);

        per();

        path.pop();
        visited[i] = false;
      }
    }
  }
  per();
  return arr;
};

console.log(permute([1, 2, 3]));
//output [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
