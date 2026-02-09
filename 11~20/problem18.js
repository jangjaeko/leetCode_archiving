/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < target) {
          left++; // 합을 키우기
        } else {
          right--; // 합을 줄이기
        }
      }
    }
  }
  // if(result.length<1){
  //     return
  // }
  return result;
};

console.log(fourSum([2, 2, 2, 2, 2], 8)); // 잘나옴
console.log(fourSum([-3, -1, 0, 2, 4, 5], 2)); // [] 나옴
