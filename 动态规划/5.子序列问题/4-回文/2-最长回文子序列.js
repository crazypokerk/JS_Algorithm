/**
 * Leetcode:516
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    const len = s.length;
    const arrS = [...s];
    const dp = Array(len).fill(0).map(() => Array(len).fill(0));
    for (let i = 0; i < len; i++) dp[i][i] = 1;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            if (arrS[i] == arrS[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
        }
    }
    return dp[0][len - 1];
};
longestPalindromeSubseq('bbbab');