/**
 * Leetcode:53
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const dp = Array(nums.length).fill(0);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
    return Math.max(...dp);
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);