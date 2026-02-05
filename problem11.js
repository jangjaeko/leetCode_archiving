/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let h = height[left] - height[right] > 0 ? height[right] : height[left];
    let w = right - left;
    let tempMax = h * w;
    if (max < tempMax) max = tempMax;
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

// var maxArea = function (height) {
//   let max = 0;
//   for (i = 0; i < height.length; i++) {
//     for (j = i + 1; j < height.length; j++) {
//       let tempMax = 0;
//       if (height[i] >= height[j]) {
//         tempMax = height[j] * (j - i);
//       } else {
//         tempMax = height[i] * (j - i);
//       }
//       if (tempMax > max) max = tempMax;
//     }
//   }
//   return max;
// };

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 2]));
