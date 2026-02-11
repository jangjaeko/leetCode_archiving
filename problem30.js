/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length === 0) return [];

  const wordLen = words[0].length;
  const wordCount = words.length;
  const totalLen = wordLen * wordCount;
  const result = [];

  // words의 개수 세기
  const wordsMap = {};
  for (let word of words) {
    wordsMap[word] = (wordsMap[word] || 0) + 1;
  }

  // 각 위치에서 확인
  for (let i = 0; i <= s.length - totalLen; i++) {
    // i 위치에서 totalLen만큼 추출
    // wordLen씩 잘라서 wordsMap과 비교

    const seen = {}; // 현재 본 단어들
    let j = 0;

    while (j < wordCount) {
      // wordLen만큼 추출
      const word = s.slice(i + j * wordLen, i + (j + 1) * wordLen);

      // word가 wordsMap에 있는지?
      if (!wordsMap[word]) {
        break; // 없으면 중단
      }

      // seen 업데이트
      seen[word] = (seen[word] || 0) + 1;

      // 개수 초과?
      if (seen[word] > wordsMap[word]) {
        break;
      }

      j++;
    }

    // 모두 일치?
    if (j === wordCount) {
      result.push(i);
    }
  }

  return result;
};
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
// console.log(["bar", "foo", "the"].join(""));
