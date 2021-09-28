/**
 * 剑指Offer03
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    nums.sort((x, y) => { return x - y });
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return nums[i];
    }
    return -1;
}