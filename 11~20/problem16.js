/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b); // 정렬 필수!

  let result = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // 더 가까운 합 발견 시 업데이트
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }

      // 포인터 이동 (3Sum과 동일)
      if (sum < target) {
        left++; // 합을 키우기
      } else if (sum > target) {
        right--; // 합을 줄이기
      } else {
        return sum; // 정확히 일치하면 바로 반환
      }
    }
  }
  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
