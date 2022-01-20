/**
 * Leetcode:40
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const path = [], result = [];
    const used = Array(candidates.length).fill(false);
    candidates.sort((a, b) => { return a - b; });
    let backtracking = (candidates, target, path, sum, startIndex) => {
        if (sum == target) {
            result.push(Array.from(path));
            return;
        }
        for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
            if (i > 0 && candidates[i] == candidates[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            sum += candidates[i];
            path.push(candidates[i]);
            backtracking(candidates, target, path, sum, i + 1);
            used[i] = false;
            sum -= candidates[i];
            path.pop();
        }
    }
    backtracking(candidates, target, path, 0, 0);
    return result;
};
console.log(combinationSum2([2, 5, 2, 1, 2], 5));