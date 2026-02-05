/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString();

  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
