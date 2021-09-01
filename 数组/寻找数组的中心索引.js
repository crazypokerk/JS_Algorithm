/**
 * Leetcode:724
 * @param {Array} nums 
 * @returns {number}
 */
const pivotIndex = nums => {
    let prevSum = [0], leftSum, rightSum;
    for (let i = 0; i < nums.length; i++) {
        prevSum[i + 1] = nums[i] + prevSum[i];
    } 1
    for (let i = 0; i < nums.length; i++) {
        leftSum = prevSum[i];
        rightSum = prevSum[nums.length] - prevSum[i] - nums[i];
        if (leftSum === rightSum) return i;
    }
    return -1;
}
let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));