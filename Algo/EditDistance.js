/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const w1 = word1.length;
  const w2 = word2.length;
  const dp = Array.from({ length: w1 + 1 }, () => Array(w2 + 1).fill(0));

  for (let i = 1; i < w1 + 1; i++) dp[i][0] = i;
  for (let j = 1; j < w2 + 1; j++) dp[0][j] = j;

  for (let i = 1; i < w1 + 1; i++) {
    for (let j = 1; j < w2 + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[w1][w2];
};

console.log(minDistance("horse", "ros"));
