/**
 * Leetcode:474
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const strs_len = strs.length;
    const dp = Array(strs_len + 1).fill(0).map(() => Array(m + 1).fill(0).map(() => Array(n + 1).fill(0)));
    for (let i = 1; i <= strs_len; i++) {
        const curStr = strs[i - 1];
        let count = calcuZeroOne(curStr);
        let zeroN = count[0], oneN = count[1];
        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                dp[i][j][k] = dp[i - 1][j][k];
                if (j >= zeroN && k >= oneN) dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zeroN][k - oneN] + 1);
            }
        }
    }
    return dp[strs_len][m][n];
};
var calcuZeroOne = str => {
    const count = Array(2).fill(0);
    const len = str.length;
    for (let i = 0; i < len; i++) {
        count[str[i].charCodeAt() - '0'.charCodeAt()]++;
    }
    return count;
}
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));