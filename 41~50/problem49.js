/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {};

  for (let i = 0; i < strs.length; i++) {
    const s = strs[i].split("").sort().join("");
    if (s in obj === false) {
      obj[s] = [];
    }
    obj[s].push(strs[i]);
  }
  return Object.values(obj);
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]

// console.log(strs[0].split("").sort().join(""));
