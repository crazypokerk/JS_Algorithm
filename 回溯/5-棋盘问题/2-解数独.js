/**
 * Leetcode:37
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 输入：board = [
 *                  ["5","3",".", ".","7",".", ".",".","."],
 *                  ["6",".",".", "1","9","5", ".",".","."],
 *                  [".","9","8", ".",".",".", ".","6","."],
 *                  ["8",".",".", ".","6",".", ".",".","3"],
 *                  ["4",".",".", "8",".","3", ".",".","1"],
 *                  ["7",".",".", ".","2",".", ".",".","6"],
 *                  [".","6",".", ".",".",".", "2","8","."],
 *                  [".",".",".", "4","1","9", ".",".","5"],
 *                  [".",".",".", ".","8",".", ".","7","9"]
 *              ]
 *输出：result = [
 *                  ["5","3","4", "6","7","8", "9","1","2"],
 *                  ["6","7","2", "1","9","5", "3","4","8"],
 *                  ["1","9","8", "3","4","2", "5","6","7"],
 *                  ["8","5","9", "7","6","1", "4","2","3"],
 *                  ["4","2","6", "8","5","3", "7","9","1"],
 *                  ["7","1","3", "9","2","4", "8","5","6"],
 *                  ["9","6","1", "5","3","7", "2","8","4"],
 *                  ["2","8","7", "4","1","9", "6","3","5"],
 *                  ["3","4","5", "2","8","6", "1","7","9"]
 *              ]
 */
var solveSudoku = function (board) {
    const result = [];
    let backTracking = (board) => {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (board[row][col] != '.') continue;
                for (let num = 1; num <= 9; num++) {
                    if (isVaild(row, col, board, `${num}`)) {
                        board[row][col] = num + '';
                        if (backTracking(board)) return true;
                        board[row][col] = '.';
                    }
                }
                return false;
            }
        }
        return true;
    }
    backTracking(board);
};
let isVaild = (row, col, board, num) => {
    // same row
    for (let i = 0; i < board.length; i++) {
        if (board[row][i] == num) return false;
    }
    // same col
    for (let i = 0; i < board[0].length; i++) {
        if (board[i][col] == num) return false;
    }
    // same square
    let startRow = Math.floor(row / 3) * 3, startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] == num) return false;
        }
    }
    return true;
}