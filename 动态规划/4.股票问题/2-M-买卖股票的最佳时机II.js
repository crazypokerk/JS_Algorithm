/**
 * Leetcode:122
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length;
    const dp = new Array(len).fill(new Array(2));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for (let i = 1; i < len; i++) {
        dp[i % 2][0] = Math.max(dp[(i - 1) % 2][0], dp[(i - 1) % 2][1] - prices[i]);
        dp[i % 2][1] = Math.max(dp[(i - 1) % 2][0] + prices[i], dp[(i - 1) % 2][1]);
    }
    return dp[(len - 1) % 2][1];
};