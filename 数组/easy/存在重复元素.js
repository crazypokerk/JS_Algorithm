/**
 * Leetcode:217
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let i = 0, j = 1;
    nums.sort();
    while (j < nums.length) {
        if (nums[i++] === nums[j++]) return true;
    }
    return false;
};
var containsDuplicate1 = function (nums) {
    let set = new Set();
    for (const v of nums) {
        set.add(v);
    }
    return set.size !== nums.length;
};