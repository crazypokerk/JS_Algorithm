/**
 * Leetcode:1217
 * 题意：如果奇数个数多余偶数，返回偶数个数，反之。
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let odd = 0, even = 0;
    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 == 0) even++;
        if (position[i] % 2 == 1) odd++;
    }
    return odd > even ? even : odd;
};