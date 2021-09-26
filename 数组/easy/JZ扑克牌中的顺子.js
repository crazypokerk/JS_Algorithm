/**
 * 剑指Offer61
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    nums.sort((x, y) => { return x - y });
    let max = nums[nums.length - 1], min = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            min = i;
            break;
        }
    }
    for (let i = min; i < nums.length; i++) {
        if (i > min && nums[i] === nums[i - 1]) return false;
    }
    return max - nums[min] < 5;
};
console.log(isStraight([10, 11, 0, 12, 6]));