/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let tempArr = [];
//   let tempMax = 0;
//   let max = 0;
//   let sArr = s.split("");

//   for (let i = 0; i < sArr.length; i++) {
//     if (tempArr.includes(sArr[i])) {
//       tempMax = tempArr.length;
//       tempArr.push(sArr[i]);
//       if (tempMax > max) {
//         max = tempMax;
//       }
//       tempArr = tempArr.slice(-1);
//       //tempArr = [tempArr[tempArr.length - 1]];
//     } else {
//       tempArr.push(sArr[i]);
//       if (tempArr.length >= max) max = tempArr.length;
//     }
//   }
//   return max;
// };

var lengthOfLongestSubstring = function (s) {
  let tempArr = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    // 중복 문자가 있으면
    if (tempArr.includes(s[i])) {
      // 중복된 문자의 위치를 찾아서
      const index = tempArr.indexOf(s[i]);
      // 그 위치 다음부터 새로 시작
      tempArr = tempArr.slice(index + 1);
    }

    // 현재 문자 추가
    tempArr.push(s[i]);

    // 최대값 갱신
    if (tempArr.length > max) {
      max = tempArr.length;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// // console.log(lengthOfLongestSubstring("bbbbb")); // 1
// console.log(lengthOfLongestSubstring("pwwkew")); // 3
// // console.log(lengthOfLongestSubstring("a")); // 1
// console.log(lengthOfLongestSubstring("au")); // 2
// console.log(lengthOfLongestSubstring("")); // 3
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring("aab"));
