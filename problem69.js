/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let i = 1;
  while (true) {
    if (i * i > x) {
      return i - 1;
    } else if (i * i === x) {
      return i;
    } else {
      i++;
    }
  }
};
console.log(mySqrt(8));

// var mySqrt = function(x) {
//     let left = 0;
//     let right = x;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (mid * mid === x) {
//             return mid;
//         } else if (mid * mid < x) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     // left > right가 되면, right가 정답
//     return right;
// };
