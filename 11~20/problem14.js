/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0].split("");
  let arr = strs[0].split("");

  for (let j = 1; j < strs.length; j++) {
    let brr = strs[j].split("");
    let resultArr = [];
    for (k = 0; k < brr.length; k++) {
      if (arr[k] === brr[k]) {
        resultArr.push(arr[k]);
      } else {
        if (k === 0) return "";
        break;
      }
    }
    if (result.length > resultArr.length) {
      result = resultArr;
    }
  }
  return result.join("");
};
console.log(longestCommonPrefix(["cir", "car"]));
var longestCommonPrefix2 = function (strs) {
  if (!strs || strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    console.log("car = " + char);

    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};
// console.log(longestCommonPrefix2(["cir", "car"]));
const ex = ["asdf", "asdf"];
console.log(ex[0][2]);
