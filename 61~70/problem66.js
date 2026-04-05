/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let a = digits.join("");
  let sum = BigInt(a) + 1n;
  const str = String(sum);
  //   const mapfn = (arg) => Number(arg);
  //   const Arr = Array.from(str, mapfn);
  const Arr = str.split("").map(Number);

  return Arr;
};

console.log(plusOne([9, 0, 0, 9]));
// let a = [4, 3, 2, 1].join("");
// let b = Number(a) + 1;
// console.log(b.toString().split(""));

var plusOne1 = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++; // +1 하고
      return digits; // 끝
    }

    digits[i] = 0; // 9이면 0으로 바꾸고 carry 계속
  }

  // 여기까지 왔다는 건 전부 9였다는 뜻
  digits.unshift(1);
  return digits;
};
