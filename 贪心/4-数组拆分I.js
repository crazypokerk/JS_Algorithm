/**
 * Leetcode:561
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    // const pairs = [];
    // nums.sort((a, b) => { return b - a });
    // for (let i = 0; i < nums.length - 1; i += 2) {
    //     pairs.push([nums[i], nums[i + 1]]);
    // }
    // let result = 0;
    // for (const [a, b] of pairs) {
    //     result += Math.min(a, b);
    // }
    // return result;
    nums.sort((a, b) => { return a - b });
    let result = 0;
    for (let i = 0; i < nums.length; i += 2)  result += nums[i];
    return result;
};