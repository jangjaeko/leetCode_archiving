/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
  const MAX = 2147483647;
  const MIN = -2147483648;
  let sArr = s.trim().split("");
  const result = [];
  for (let i = 0; i < sArr.length; i++) {
    if (i === 0 && (sArr[i] === "-" || sArr[i] === "+")) {
      result.push(sArr[i]);
      continue; // 다음으로
    }
    if (isNaN(sArr[i])) {
      break; // 숫자가 아니면 중단
    } else {
      result.push(sArr[i]);
    }
  }
  let num = parseInt(result.join(""));

  if (num > MAX) return MAX;
  if (num < MIN) return MIN;
  return result.length < 1 ? 0 : parseInt(result.join(""));
};

console.log(myAtoi("   -43"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
