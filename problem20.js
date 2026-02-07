/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const list = ["()", "[]", "{}"];

  let changed = true;
  while (changed) {
    changed = false;
    let i = 0;

    while (i < s.length - 1) {
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
        let j = i + 1;

        while (j < s.length) {
          if (list.includes(s[i] + s[j]) && (j - i) % 2 === 1) {
            // 사이 내용 추출
            let middle = s.slice(i + 1, j);

            // 사이가 비어있거나 유효한 괄호면 제거
            if (middle === "" || middle.length === 0) {
              s = s.slice(0, i) + s.slice(j + 1);
              changed = true;
              break; // 처음부터 다시
            }
          }
          j++;
        }

        if (changed) break;
      }
      i++;
    }
  }

  return s.length === 0;
};
// 순서대로 열렸다가 순서대로 닫히기 떄문
// arr.pop 이 마지막 요소를 제거하면서 반환하기 때문에, 스택의 마지막 요소가 현재 닫는 괄호와 짝이 맞는지 확인할 수 있다

var isValid2 = function (s) {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };

  for (let char of s) {
    if (char in pairs) {
      console.log("char:", char, "stack:", stack);
      if (stack.pop() !== pairs[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
console.log(isValid2("{[}]"));
