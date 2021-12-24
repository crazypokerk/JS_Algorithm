/**
 * Leetcode:733
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    const row = image.length, col = image[0].length;
    const oldColor = image[sr][sc];
    if (oldColor === newColor) return image;
    const queue = [[sr, sc]];
    while (queue.length) {
        let [i, j] = queue.shift();
        image[i][j] = newColor;
        // 上
        if (i - 1 >= 0 && image[i - 1][j] === oldColor) queue.push([i - 1, j]);
        // 下
        if (i + 1 < row && image[i + 1][j] === oldColor) queue.push([i + 1, j]);
        // 左
        if (j - 1 >= 0 && image[i][j - 1] === oldColor) queue.push([i, j - 1]);
        // 右
        if (j + 1 < col && image[i][j + 1] === oldColor) queue.push([i, j + 1]);
    }
    return image;
};