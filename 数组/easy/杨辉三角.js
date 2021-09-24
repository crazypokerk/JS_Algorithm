/**
 * Leetcode:118
 * 杨辉三角
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        let cur = new Array(i + 1).fill(1);
        for (let j = 1; j < cur.length - 1; j++) {
            cur[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(cur);
    }
    return result;
};
// console.log(generate(5));

/**
 * Leetcode:119
 * 杨辉三角II
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let result = [];
    for (let i = 0; i <= rowIndex; i++) {
        let cur = new Array(i + 1).fill(1);
        for (let j = 1; j < cur.length - 1; j++) {
            cur[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(cur);
    }
    return result[rowIndex];
};
console.log(getRow(0));