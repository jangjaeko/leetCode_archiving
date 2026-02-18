/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let mul = (BigInt(num1) * BigInt(num2)).toString();
  return mul;
};

console.log(multiply("123456789", "987654321"));
