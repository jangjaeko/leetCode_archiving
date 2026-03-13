function canJump(nums) {
  let maxReach = 0; // 현재까지 도달 가능한 최대 인덱스

  for (let i = 0; i < nums.length; i++) {
    // 현재 위치에 도달 불가능하면 false
    if (i > maxReach) return false;

    // 현재 위치에서 점프했을 때 최대 도달 거리 갱신
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}

// 테스트
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
