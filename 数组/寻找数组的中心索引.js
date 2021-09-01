/**
 * Leetcode:724
 * total - leftSum - nums[i] = rightSum
 * @param {Array} nums 
 * @returns {number}
 */
const pivotIndex = nums => {
    let prevSum = [0], leftSum, rightSum;
    for (let i = 0; i < nums.length; i++) {
        prevSum[i + 1] = nums[i] + prevSum[i];
    }
    for (let i = 0; i < nums.length; i++) {
        leftSum = prevSum[i];
        rightSum = prevSum[nums.length] - prevSum[i] - nums[i];
        if (leftSum === rightSum) return i;
    }
    return -1;
}
let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
/**
 * 设左半部分和为 leftSum,则右半部分和为 total - leftSum - nums[i]
 * 即 leftSum = total - leftSum - nums[i]
 *  total = 2 * leftSum + nums[i]
 * @param {Array} nums 
 * @returns {number}
 */
const pivotIndex_2 = nums => {
    let leftSum = 0;
    const total = nums.reduce((sum, cur) => sum + cur);
    for (let i = 0; i < nums.length; i++) {
        if (total === 2 * leftSum + nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}
let a = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex_2(a))