/**
 * Leetcode:136
 * @param nums 
 * @returns 
 */
function singleNumber(nums: number[]): number {
    let single: number = 0;
    for (let n of nums) {
        single ^= n;
    }
    return single;
};