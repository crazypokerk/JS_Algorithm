/**
 * Leetcode:27
 * 输入：nums = [3,2,2,3], val = 3
 * 输出：2, nums = [2,2]
 * 输入：nums = [0,1,2,2,3,0,4,2], val = 2
 * 输出：5, nums = [0,1,4,0,3]
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0, j = nums.length;
    while (i < j) {
        if (nums[i] === val) nums[i] = nums[j-- - 1];
        else i++;
    }
    return i;
};
//[2], 3
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));