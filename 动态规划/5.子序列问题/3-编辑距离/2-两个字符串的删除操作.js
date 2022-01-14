/**
 * Leetcode:583
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const l1 = word1.length, l2 = word2.length;
    const arrW1 = [...word1], arrW2 = [...word2];
    const dp = Array(l1 + 1).fill(0).map(() => Array(l2 + 1).fill(0));
    for (let i = 0; i <= l1; i++) dp[i][0] = i;
    for (let i = 0; i <= l2; i++) dp[0][i] = i;
    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            dp[i][j] = dp[i - 1][j - 1];
            if (arrW1[i - 1] != arrW2[j - 1]) dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
    }
    return dp[l1][l2];
};
minDistance('sea', 'eat');