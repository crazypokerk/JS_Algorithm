/**
 * 剑指Offer29
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) return [];
    let rows = matrix.length, cols = matrix[0].length;
    let visited = new Array(rows).fill(0).map(() => new Array(rows).fill(false));
    let row = 0, col = 0, direction = 0;
    let dirArr = [[0, 1], [1, 0], [0, -1], [-1, 0]], result = new Array(rows * cols);
    for (let i = 0; i < rows * cols; i++) {
        result[i] = matrix[row][col];
        let nextRow = row + dirArr[direction][0], nextCol = col + dirArr[direction][1];
        visited[row][col] = true;
        // console.log(visited[nextRow][nextCol]);
        // if (visited[nextRow][nextCol] || nextRow < 0 || nextCol < 0 || nextRow >= rows || nextCol >= cols) {
        if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols || visited[nextRow][nextCol]) {
            direction = (direction + 1) % 4;
        }
        row += dirArr[direction][0], col += dirArr[direction][1];
    }
    return result;
};

var spiraOrder1 = matrix => {
    if (!matrix.length || !matrix[0].length) return [];
    let rows = matrix.length, cols = matrix[0].length;
    let result = [];
    let up = 0, down = rows - 1, left = 0, right = cols - 1;
    while (left <= right && up <= down) {
        for (let i = left; i <= right; i++) result.push(matrix[up][i]);
        for (let j = up + 1; j <= down; j++)  result.push(matrix[j][right]);
        if (left < right && up < down) {
            for (let i = right - 1; i >= left + 1; i--) result.push(matrix[down][i]);
            for (let j = down; j >= up + 1; j--) result.push(matrix[j][left]);
        }
        [up, down, left, right] = [up + 1, down - 1, left + 1, right - 1];
    }
    return result;
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));