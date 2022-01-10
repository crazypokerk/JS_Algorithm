/**
 * Leetcode:213
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length;
    if (len == 1) return nums[0];
    if (len == 2) return Math.max(nums[0], nums[1]);
    const dp = Array(len).fill(0).map(() => Array(2).fill(0));
    // 不偷第一间
    dp[0][0] = 0, dp[0][1] = 0;
    for (let i = 1; i < len - 1; i++) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
        dp[i][1] = dp[i - 1][0] + nums[i];
    }
    let second = Math.max(dp[len - 2][1], dp[len - 2][0] + nums[len - 1]);
    // 偷第一间
    dp[0][0] = 0, dp[0][1] = nums[0];
    for (let i = 1; i < len - 1; i++) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
        dp[i][1] = dp[i - 1][0] + nums[i];
    }
    let first = Math.max(dp[len - 2][0], dp[len - 2][1]);
    return Math.max(first, second);
};