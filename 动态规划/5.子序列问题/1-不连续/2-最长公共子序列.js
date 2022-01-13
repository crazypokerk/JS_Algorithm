/**
 * Leetcode:1143
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const s1 = [...text1], s2 = [...text2];
    const l1 = s1.length, l2 = s2.length;
    const dp = Array(l1 + 1).fill(0).map(() => Array(l2 + 1).fill(0));
    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[l1][l2];
};
console.log(longestCommonSubsequence("abcde", "ace"));