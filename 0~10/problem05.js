// var longestPalindrome = function (s) {
//   let arr = [];
//   const sArr = s.split("");
//   const brr = [];
//   for (let i = 0; i < sArr.length; i++) {
//     if (s[+i].includes(s[i])) {
//       arr = s[i];
//       for (let j = i + 1; j < sArr.length; j++) {
//         // console.log("j:", j, "sArr[j]:", sArr[j]); // ← 변경
//         brr.push(sArr[j]);
//         console.log("brr:", brr);
//         if (sArr[j] === sArr[i]) {
//           // brr[0]에 추가
//           console.log("brr before unshift:", brr);
//           brr.unshift(sArr[j]);
//           if (brr.join("") === brr.reverse().join("")) {
//             return brr.join("");
//           }
//         }
//         // brr 을 [] 상태로 만들기
//       }
//     }
//     brr.pop();
//   }
// };

var longestPalindrome = function (s) {
  if (!s || s.length < 2) return s;

  let start = 0,
    maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // 홀수 길이 확장
    let len1 = expandAroundCenter(s, i, i);
    // 짝수 길이 확장
    let len2 = expandAroundCenter(s, i, i + 1);
    // 더 긴 것 선택
    let len = Math.max(len1, len2);

    // 최대 길이보다 길면 업데이트
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLen);
};

// 헬퍼 함수: 길이만 반환 (더 빠름)
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1; // 길이 반환
}

// console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));

// var longestPalindrome = function (s) {
//   // 가장 긴 회문을 저장할 변수
//   let maxPalindrome = "";

//   // i: 시작 위치
//   for (let i = 0; i < s.length; i++) {
//     // j: 끝 위치 (i부터 시작해서 모든 부분 문자열 확인)
//     for (let j = i + 1; j <= s.length; j++) {
//       // 현재 부분 문자열 추출
//       // 예: s="babad", i=0, j=3 → substring="bab"
//       const substring = s.slice(i, j);

//       // 부분 문자열을 뒤집기
//       // "bab" → ['b','a','b'] → ['b','a','b'] → "bab"
//       const reversed = substring.split("").reverse().join("");

//       // 원본과 뒤집은 문자열이 같으면 회문!
//       // 그리고 지금까지 찾은 것보다 길면 업데이트
//       if (substring === reversed && substring.length > maxPalindrome.length) {
//         maxPalindrome = substring;
//       }
//     }
//   }

//   return maxPalindrome;
// };
