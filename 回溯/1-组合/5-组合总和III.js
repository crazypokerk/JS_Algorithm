/**
 * Leetcode:216
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const path = [], result = [];
    let backtracking = (sum, startIndex) => {
        if (startIndex > n) return;
        if (path.length > k) return;
        if (path.length == k && sum == n) {
            result.push(Array.from(path));
        }
        for (let i = startIndex; i <= 9; i++) {
            path.push(i);
            sum += i;
            backtracking(sum, i + 1);
            path.pop();
            sum -= i;
        }
    }
    backtracking(0, 1);
    return result;
};
console.log(combinationSum3(3, 7));