/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 성능 개선 필요
// var nextPermutation = function (nums) {
//   let arr = [...nums].sort((a, b) => a - b);
//   let arch = [];
//   let s = 0;
//   function backtrack(current, remain) {
//     if (remain.length === 0) {
//       arch.push([...current]);
//       if (JSON.stringify(current) === JSON.stringify(nums)) s = arch.length;

//       return;
//     }
//     for (let i = 0; i < remain.length; i++) {
//       current.push(remain[i]);

//       const newRemain = [...remain.slice(0, i), ...remain.slice(i + 1)];
//       backtrack(current, newRemain);
//       current.pop();
//     }
//   }
//   backtrack([], arr);
//   if (s < arch.length) {
//     return arch[s];
//   } else {
//     return arch[0];
//   }
// };

var nextPermutation = function (nums) {
  let i = nums.length - 2;

  // 1. 뒤에서부터 감소하는 지점 찾기
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // 2. 찾았으면 swap
  if (i >= 0) {
    let j = nums.length - 1;

    // i보다 큰 값 중 가장 작은 것 찾기
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    // swap
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 3. i+1부터 끝까지 뒤집기
  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};

console.log(nextPermutation([1, 2]));
