/**
 * Leetcode:343
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    const dp = Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i - 1; j++) {
            dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
        }
    }
    return dp[n];
};