/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const MAX = 2147483647; // 2^31 - 1
  const MIN = -2147483648; // -2^31

  // Overflow 케이스
  if (dividend === MIN && divisor === -1) {
    return MAX;
  }

  let plus = 0;
  let i = 0;

  while (Math.abs(dividend) >= plus) {
    plus += Math.abs(divisor);
    if (Math.abs(dividend) >= plus) i++;
  }

  // 부호 결정
  if (dividend < 0 === divisor < 0) {
    return i;
  } else {
    return -i;
  }
};

// console.log(divide(-7, -3));
// console.log(-7 / -3);

var divide2 = function (dividend, divisor) {
  const MAX = 2147483647;
  const MIN = -2147483648;

  // Overflow 케이스
  if (dividend === MIN && divisor === -1) {
    return MAX;
  }

  // 부호 결정
  const negative = dividend < 0 !== divisor < 0;

  // 절댓값으로 변환
  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);
  let result = 0;

  while (dvd >= dvs) {
    let temp = dvs;
    let multiple = 1;

    // Overflow 방지: temp * 2가 dvd를 넘지 않고, 범위 안에 있을 때
    while (temp <= dvd >> 1) {
      // ← 핵심 수정!
      temp += temp; // temp *= 2
      multiple += multiple; // multiple *= 2
    }

    dvd -= temp;
    result += multiple;
  }

  return negative ? -result : result;
};

console.log(divide2(7, 2));
