/**
 * Leetcode:46
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const path = [], result = [];
    let not_used = Array(nums.length).fill(0);
    let backTracking = (not_used) => {
        if (path.length == nums.length) {
            result.push(Array.from(path));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (not_used[i]) continue;
            path.push(nums[i]);
            not_used[i] = 1;
            backTracking(not_used);
            path.pop();
            not_used[i] = 0;
        }
    }
    backTracking(not_used);
    return result;
};
console.log(permute([1, 2, 3]));