/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [-1]; // 시작점
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i); // 여는 괄호 인덱스 저장
    } else {
      stack.pop(); // 짝 제거

      if (stack.length === 0) {
        stack.push(i); // 새로운 시작점
      } else {
        const len = i - stack[stack.length - 1];
        maxLen = Math.max(maxLen, len);
      }
    }
  }

  return maxLen;
};

console.log(longestValidParentheses("((())()(())"));
