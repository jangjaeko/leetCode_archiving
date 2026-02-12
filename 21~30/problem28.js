/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let result = -1;
  for (i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      result = i;
      break;
    }
  }
  return result;
};

console.log(strStr("butsad", "sad"));
