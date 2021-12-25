/**
 * Leetcode:463
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    const m = grid.length, n = grid[0].length;
    let perimeter = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                let order = 4;
                // 向上没有出边界并且值为1
                if (i - 1 >= 0 && !!grid[i - 1][j]) order--;
                // 向下没有出边界并且值为1
                if (i + 1 < m && !!grid[i + 1][j]) order--;
                // 向左没有出边界并且值为1
                if (j - 1 >= 0 && !!grid[i][j - 1]) order--;
                // 向右没有出边界并且值为1
                if (j + 1 < n && !!grid[i][j + 1]) order--;
                perimeter += order;
            }
        }
    }
    return perimeter;
};
var islandPerimeterDFS = grid => {
    for (let a = 0; a < grid.length; a++) {
        for (let b = 0; b < grid[0].length; b++) {
            if (grid[a][b]) return dfs(grid, a, b);
        }
    }
    return 0;
}
var dfs = (grid, i, j) => {
    if (!(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length)) return 1;
    if (grid[i][j] == 0) return 1;
    if (grid[i][j] != 1) return 0;
    grid[i][j] = 2;
    return dfs(grid, i - 1, j) +
        dfs(grid, i + 1, j) +
        dfs(grid, i, j - 1) +
        dfs(grid, i, j + 1);
}