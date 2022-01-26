/**
 * Leetcode:51
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const result = [];
    const chessboard = Array(n).fill('.').map(() => Array(n).fill('.'));
    let backTracking = (row, n, chessboard) => {
        if (row == n) {
            const tmpC = [];
            for (const layout of chessboard) {
                tmpC.push(layout.join(''));
            }
            result.push(tmpC);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isVaild(row, col, chessboard, n)) {
                chessboard[row][col] = 'Q';
                backTracking(row + 1, n, chessboard);
                chessboard[row][col] = '.';
            }
        }
    }
    backTracking(0, n, chessboard);
    return result;
};
let isVaild = (row, col, chessboard, n) => {
    for (let i = 0; i < row; i++) {
        if (chessboard[i][col] == 'Q') return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (chessboard[i][j] == 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (chessboard[i][j] == 'Q') return false;
    }
    return true;
}
console.log(solveNQueens(4));