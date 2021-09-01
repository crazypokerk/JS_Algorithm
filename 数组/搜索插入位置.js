/**
 * Leetcode:35
 * @param {number} nums 
 * @param {number} target 
 * @returns 
 */
const searchInsert = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] < target) left = mid + 1;
        else if (num[mid] > target) right = mid - 1;
        else return mid;
    }
    return left;
}