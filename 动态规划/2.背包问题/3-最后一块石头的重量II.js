/**
 * Leetcode:1049
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    const dp = Array((30 * 100 / 2) + 1).fill(0);
    const sum = stones.reduce((pre, cur) => { return pre + cur });
    const res = Math.floor(sum / 2);
    for (let i = 0; i < stones.length; i++) {
        for (let j = res; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }
    return sum - dp[res] - dp[res];
};
console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]));