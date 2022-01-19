/**
 * Leetcode:39
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const curSum = [];
    const result = [];
    let backtracking = (startIndex, sum) => {
        if (sum > target) return;
        if (sum == target) {
            result.push(Array.from(curSum));
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            sum += candidates[i];
            curSum.push(candidates[i]);
            backtracking(i, sum);
            sum -= candidates[i];
            curSum.pop();
        }
    }
    backtracking(0, 0);
    return result;
};
console.log(combinationSum([2, 1, 3], 7))