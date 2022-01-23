/**
 * Leetcode:491
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    const path = [], result = [];
    let backTracking = (startIndex, nums) => {
        if (path.length >= 2) {
            result.push(Array.from(path));
        }
        const set = new Set();
        for (let i = startIndex; i < nums.length; i++) {
            const pre = path[path.length - 1];
            const cur = nums[i];
            if ((path.length != 0 && pre > cur) || set.has(nums[i])) {
                continue;
            }
            set.add(nums[i]);
            path.push(nums[i]);
            backTracking(i + 1, nums);
            path.pop();
        }
    }
    backTracking(0, nums);
    return result;
};

console.log(findSubsequences([4, 4, 3, 2, 1]))