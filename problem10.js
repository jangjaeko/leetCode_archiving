/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // 베이스 케이스: 패턴이 비어있으면
  if (p.length === 0) {
    return s.length === 0;
  }

  // 첫 글자가 매칭되는지 확인
  // s가 비어있지 않고, (s[0]과 p[0]이 같거나 p[0]이 '.')
  const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === ".");

  // 두 번째 문자가 '*'인 경우
  if (p.length >= 2 && p[1] === "*") {
    // 2가지 선택:
    // 1. '*'를 0번 사용 → p에서 2글자 건너뜀 (x* 전체 무시)
    // 2. '*'를 1번 이상 사용 → s에서 1글자 소비, p는 그대로 유지
    return (
      isMatch(s, p.slice(2)) || // 선택 1
      (firstMatch && isMatch(s.slice(1), p))
    ); // 선택 2
  } else {
    // '*'가 없으면: 첫 글자 매칭 확인 후 나머지 재귀
    return firstMatch && isMatch(s.slice(1), p.slice(1));
  }
};

// var isMatch = function (s, p) {

//   let result = false;
//   const pArr = p.split("");
//   const sArr = s.split("");
//   if (p.includes(".")) {
//     pArr[pArr.indexOf(".")] = sArr[pArr.indexOf(".")];
//     result = true;
//   }
//   if (p.includes("*")) {
//     // * 의 앞문자들 제거
//   }

//   if (JSON.stringify(sArr) === JSON.stringify(pArr)) {
//     return true;
//   }
// };
console.log(isMatch("aa", "a."));

//   let result = false;
//   if (s === p) {
//     return true;
//   } else if (p.includes(".")) {
//     const pArr = p.split("");
//     const sArr = s.split("");
//     if (pArr.pop(sArr.indexOf(".") === sArr.pop("."))) {
//       result = true;
//     }
//   } else if (p.includes("*")) {
//   }
