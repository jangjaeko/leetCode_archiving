/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;

  // 1️⃣ 각 숫자를 "자기 자리"로 보내기
  for (let i = 0; i < n; i++) {
    // nums[i]가 유효 범위에 있고,
    // 아직 제자리에 없으면 swap
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      const correctIndex = nums[i] - 1;

      // swap
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  // 2️⃣ 정답 찾기
  for (let i = 0; i < n; i++) {
    // 자기 자리에 없는 첫 번째 위치
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // 3️⃣ 다 맞으면 n+1
  return n + 1;
};

console.log(firstMissingPositive([3, 4, 1, -1]));
