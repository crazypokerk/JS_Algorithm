/**
 * Leetcode:16
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * @param nums 
 * @param target 
 */
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((x, y) => { return x - y });
    let sum: number = nums[0] + nums[1] + nums[2];
    for (let cur: number = 0; cur < nums.length; cur++) {
        let left: number = cur + 1, right: number = nums.length - 1;
        while (left < right) {
            let tmp: number = nums[cur] + nums[left] + nums[right];
            if (Math.abs(target - sum) > Math.abs(target - tmp)) {
                sum = tmp;
            } else if (tmp > target) {
                right--;
            } else if (tmp < target) {
                left++;
            } else {
                return sum;
            }
        }
    }
    return sum;
};