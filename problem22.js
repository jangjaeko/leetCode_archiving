/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  let callCount = 0; // 호출 횟수 추적

  function backtrack(current, open, close) {
    callCount++;
    console.log(
      `호출 ${callCount}: "${current}" (열린: ${open}, 닫힌: ${close})`,
    );

    if (current.length === n * 2) {
      console.log(`  → 완성! result에 추가`);
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  console.log(`\n총 ${callCount}번 호출됨`);
  return result;
};

console.log(generateParenthesis(3));
