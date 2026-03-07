/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  //   if (n === 0) return 1;
  //   let num = 1;
  //   if (n > 0) {
  //     for (let i = 1; i <= n; i++) {
  //       num = num * x;
  //     }
  //   } else if (n < 0) {
  //     for (let i = 1; i <= Math.abs(n); i++) {
  //       num = num / x;
  //     }
  //   }

  //   return num;
  /// time out

  // 재귀 함수
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  function fastPow(x, n) {
    if (n === 0) return 1;

    const half = fastPow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }

  return fastPow(x, n);
};
const num = 2.0;
console.log(myPow(num, -2));
