/**
 * Leetcode:976
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => { return b - a });
    let perimeter = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        while (j < nums.length - 1) {
            if (nums[i] < nums[j] + nums[j + 1]) return perimeter += nums[i] + nums[j] + nums[j + 1];
            else j++;
        }
    }
    return 0;
}