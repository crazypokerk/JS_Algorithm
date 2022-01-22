/**
 * Leetcode:78
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const path = [], result = [];
    let backTracking = (startIndex, nums) => {
        result.push(Array.from(path));
        //if (startIndex >= nums.length) return;
        for (let i = startIndex; i < nums.length && startIndex < nums.length; i++) {
            path.push(nums[i]);
            backTracking(i + 1, nums);
            path.pop();
        }
    }
    backTracking(0, nums);
    return result;
};
subsets([1, 2, 3]);