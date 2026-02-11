/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1; // 유니크 개수 (첫 번째는 항상 유니크)

  for (let i = 1; i < nums.length; i++) {
    // 이전 숫자와 다르면
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // k 위치에 넣기
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
