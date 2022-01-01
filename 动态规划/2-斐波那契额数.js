/**
 * Leetcode:509
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n <= 1) return n;
    const dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        // 滚动数组
        let tmp = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = tmp;
    }
    return dp[1];
};