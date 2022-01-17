/**
 * Leetcode:77
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let path = [];
    let result = [];
    let backTracking = (n, k, startIndex) => {
        if (path.length == k) {
            result.push([...path    ]);
            return;
        }
        for (let i = startIndex; i <= n; i++) {
            path.push(i);
            backTracking(n, k, i + 1);
            path.pop();
        }
    }
    backTracking(n, k, 1);
    return result;
};