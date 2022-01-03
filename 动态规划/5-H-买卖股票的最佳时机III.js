/**
 * Leetcode:123
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // const len = prices.length;
    // const dp = new Array(len).fill(new Array(3).fill(new Array(2)));
    // dp[0][1][0] = 0;
    // dp[0][1][1] = -prices[0];
    // dp[0][2][0] = 0;
    // dp[0][2][1] = -prices[0];
    // for (let i = 1; i < len; i++) {
    //     dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i]);
    //     dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i]);
    //     dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i]);
    //     dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i]);
    // }
    // return dp[len - 1][2][0];
    const len = prices.length;
    const dp = new Array(len).fill(new Array(5));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    dp[0][2] = 0;
    dp[0][3] = -prices[0];
    dp[0][4] = 0;
    for (let i = 1; i < len; i++) {
        dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4]);
        dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3]);
        dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2]);
        dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
    }
    return dp[len - 1][4];
};