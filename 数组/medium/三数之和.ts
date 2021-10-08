/**
 * Leetcode:15
 * in：nums = [-1,0,1,2,-1,-4]
 * out：[[-1,-1,2],[-1,0,1]]
 * @param nums 
 * @returns 
 */
function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];
    nums.sort((x, y) => { return x - y; });
    let a: number = 0, b: number, c: number;
    for (; a < nums.length; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue;
        b = a + 1, c = nums.length - 1;
        while (b < c) {
            if ((nums[b] + nums[c]) < -nums[a]) b++;
            else if ((nums[b] + nums[c]) > -nums[a]) c--;
            else {
                result.push([nums[a], nums[b], nums[c]]);
                while (b < c && nums[b] == nums[b + 1]) b++;
                while (b < c && nums[c] == nums[c - 1]) c--;
                b++, c--;
            }
        }
    }
    return result;
};