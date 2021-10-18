/**
 * Leetcode:18
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * @param nums 
 * @param target 
 */
function fourSum(nums: number[], target: number): number[][] {
    const result: number[][] = [], len: number = nums.length;
    if (nums.length < 4) return result;
    nums.sort((a, b) => a - b);
    for (let i: number = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 2] < target) continue;
        for (let j: number = i + 1; j < len; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left: number = j + 1, right: number = len - 1;
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;
            while (left < right) {
                if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    right--;
                } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) left++;
                else right--;
            }
        }
    }
    return result;
};