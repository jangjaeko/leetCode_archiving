/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 로마 숫자 매핑
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    // 현재 값이 다음 값보다 작으면 빼기
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};
console.log(romanToInt("MCMXCIV")); // 1994
