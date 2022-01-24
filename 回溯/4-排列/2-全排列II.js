/**
 * Leetcode:47
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const path = [], result = [];
    nums.sort((a, b) => { return a - b; });
    const used = Array(nums.length).fill(0);
    let backTracking = (nums, used) => {
        if (path.length == nums.length) {
            result.push(Array.from(path));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }
            if (!used[i]) {
                path.push(nums[i]);
                used[i] = 1;
                backTracking(nums, used);
                path.pop();
                used[i] = 0;
            }
        }
    }
    backTracking(nums, used);
    return result;
};
console.log(permuteUnique([3, 3, 0, 3]));