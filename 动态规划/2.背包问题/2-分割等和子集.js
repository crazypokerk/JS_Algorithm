/**
 * Leetcode:416
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const len = nums.length;
    let sum = nums.reduce((pre, cur) => { return pre + cur });
    if (sum % 2 == 1) return false;
    const target = sum / 2;
    const dp = Array((200 * 100 / 2) + 1).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    if (dp[target] == target) return true;
    return false;
};
console.log(canPartition([1, 5, 11, 5]));