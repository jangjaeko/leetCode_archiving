// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var jump = function (nums) {
//   let n = nums.length;
//   let i = 0;
//   let j = nums[i];
//   let step = 0;
//   while (i < n - 1) {
//     let max = 0;
//     let tempI = i;
//     let tempJ = j;
//     for (let k = 1; k <= j; k++) {
//       if (i + k >= n) {
//       } else if (nums[i + k] + k > max) {
//         max = nums[i + k] + k;
//         tempI = i + k;
//         tempJ = nums[tempI];
//       }
//     }
//     i = tempI;
//     j = tempJ;
//     console.log(max, i, j);

//     step++;
//   }
//   return step;
// };

// console.log(jump([3, 2, 1]));

// BFS 풀이
function jump(nums) {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    console.log(farthest, i + nums[i], currentEnd);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
      console.log(jumps);
    }
  }
  return jumps;
}
console.log(jump([2, 3, 1, 1, 4]));
