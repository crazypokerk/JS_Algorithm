/**
 * Leetcode:26
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let front = 1, back = 1;
    while (front < nums.length) {
        if (nums[front] != nums[front - 1]) {
            nums[back++] = nums[front];
        }
        front++;
    }
    return back;
};
console.log(removeDuplicates([1, 1, 2]));