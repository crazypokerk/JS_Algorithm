/**
 * Leetcode:63
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length, n = obstacleGrid[0].length;
    //const dp = new Array(m).fill(new Array(n).fill(0));
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) dp[i][0] = 1;
    for (let i = 0; i < n && obstacleGrid[0][i] == 0; i++) dp[0][i] = 1;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 0) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};