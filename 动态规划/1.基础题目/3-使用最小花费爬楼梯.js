/**
 * Leetcode:746
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const len = cost.length;
    const dp = new Array(len);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    return Math.min(dp[len - 1], dp[len - 2]);
}