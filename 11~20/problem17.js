/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitToChar = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let result = [""];
  //   let len = 1;
  //   for (i = 0; i < digits.length; i++) {
  //     len = len * digitToChar[digits[i]].length;
  //   }
  for (let digit of digits) {
    const letters = digitToChar[digit];
    const temp = [];
    for (let combination of result) {
      for (let letter of letters) {
        console.log(result);
        temp.push(combination + letter);
      }
    }
    result = temp;
  }
  return result;
};
console.log(letterCombinations("247"));
