/**
 * Leetcode:525
 * 输入: nums = [0,1]
 * 输出: 2
 * 说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    const map = new Map();
    let counter = 0, max = 0;
    map.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) counter -= 1;
        else counter += 1;
        if (map.has(counter)) {
            let val = map.get(counter);
            max = Math.max(max, i - val);
        } else {
            map.set(counter, i);
        }
    }
    return max;
};