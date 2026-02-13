/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 첫 번째 위치 찾기
  const findFirst = () => {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        right = mid - 1; // ← 왼쪽으로 계속 탐색
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  // 마지막 위치 찾기
  const findLast = () => {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        left = mid + 1; // ← 오른쪽으로 계속 탐색
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  return [findFirst(), findLast()];
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 10], 8));
