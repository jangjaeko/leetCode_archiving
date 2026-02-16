/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;
  if (target > nums[right]) return right + 1;
  if (target < nums[0]) return left;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(mid, left, right);
    if (nums[mid] === target) {
      result = mid;
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 7], 5));
