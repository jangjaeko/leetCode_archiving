/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().trim().split(/\s+/);

  return arr[arr.length - 1].length;
};

const s = "Today is a nice day";
console.log(lengthOfLastWord(s));
