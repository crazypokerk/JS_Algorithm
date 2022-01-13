/**
 * Leetcode:674
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    const len = nums.length;
    const dp = Array(len).fill(1);
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] < nums[i + 1]) dp[i + 1] = dp[i] + 1;
    }
    return Math.max(...dp);
};