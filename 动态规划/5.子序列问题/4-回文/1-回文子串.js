/**
 * Leetcode:647
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const len = s.length;
    const arrS = [...s];
    const dp = Array(len).fill(false).map(() => Array(len).fill(false));
    let result = 0;
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {
            if (i == j) {
                dp[i][j] = true;
            }
            else if (arrS[i] == arrS[j] && j - i == 1) {
                dp[i][j] = true;
            }
            else if (arrS[i] == arrS[j] && j - i > 1 && dp[i + 1][j - 1]) {
                dp[i][j] = true;
            } else continue;
            result++;
        }
    }
    return result;
};