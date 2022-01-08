/**
 * Leetcode:494
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const sum = nums.reduce((pre, cur) => { return pre + cur });
    let pos = sum + target;
    if (pos % 2 == 1 || pos < 0) return 0;
    pos /= 2;
    const dp = Array(nums.length + 1).fill(0).map(() => Array(pos + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= nums.length; i++) {
        for (let j = 0; j <= pos; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j - nums[i - 1] >= 0) dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
        }
    }
    return dp[nums.length][pos];
};
console.log(findTargetSumWays([100], -200));