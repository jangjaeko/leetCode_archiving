/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0;

  // 1. newInterval 왼쪽에 있는 구간들 (겹치지 않음)
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 2. 겹치는 구간들 전부 흡수
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // 3. newInterval 오른쪽에 있는 구간들 (겹치지 않음)
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
  //   let left = 0;
  //   let right = intervals.length - 1;
  //   let newAr = newInterval;

  //   while (right > 0) {
  //     if (
  //       intervals[right][0] <= newInterval[1] &&
  //       intervals[right][1] > newAr[1]
  //     ) {
  //       newAr[1] = intervals[right][1];
  //       break;
  //     } else {
  //       right--;
  //     }
  //   }
  //   while (true) {
  //     if (intervals[left][1] >= newInterval[0]) {
  //       newAr[0] = intervals[left][0];
  //       break;
  //     } else {
  //       left++;
  //     }
  //   }

  //   // left 이전 구간들 + 합쳐진 구간 + right 이후 구간들
  //   return [
  //     ...intervals.slice(0, left), // newInterval과 안겹치는 왼쪽 구간들
  //     newAr, // 흡수된 구간
  //     ...intervals.slice(right + 1), // newInterval과 안겹치는 오른쪽 구간들
  //   ];
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
);
