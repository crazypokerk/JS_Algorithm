/**
 * Leetcode:121
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let len = prices.length;
    if (len == 0) return 0;
    const dp = new Array(len).fill(new Array(2));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for (let i = 1; i < len; i++) {
        dp[i % 2][0] = Math.max(-prices[i], dp[i - 1][0]);
        dp[i % 2][1] = Math.max(dp[(i - 1) % 2][1], dp[(i - 1) % 2][0] + prices[i]);
    }
    return dp[(len - 1) % 2][1];
};