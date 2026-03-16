/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 1. start 기준 정렬
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = result[result.length - 1]; // 결과의 마지막 구간

    if (current[0] <= last[1]) {
      // 겹침 → end 값을 더 큰 걸로 업데이트
      last[1] = Math.max(last[1], current[1]);
    } else {
      // 안 겹침 → 그냥 추가
      result.push(current);
    }
  }

  return result;
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
