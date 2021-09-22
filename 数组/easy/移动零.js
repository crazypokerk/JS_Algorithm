/**
 * Leetcode:283
 * 类似于快排中将 pivot 元素进行左右分开
 * 左边为大于0的元素，右边为0元素
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let l = r = 0;
    while (l < nums.length) {
        if (nums[l] !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            r++;
        }
        l++;
    }
};