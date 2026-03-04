/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function (matrix) {
//   const m = Array.from({ length: matrix.length }, () => []);
//   let left = 0;
//   let right = matrix[0].length - 1;
//   while (right >= 0) {
//     for (let i = 0; i < matrix[0].length; i++) {
//       m[i][right] = matrix[left][i];
//     }
//     left++;
//     right--;
//   }
//   return m;
// };

var rotate = function (matrix) {
  const n = matrix.length;

  // 1. transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 2. reverse each row
  for (let row of matrix) {
    console.log(matrix);
    row.reverse();
  }
  return matrix;
};

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]),
);
//output [[7,4,1],[8,5,2],[9,6,3]]
