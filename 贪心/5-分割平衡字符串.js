/**
 * Leetcode:1221
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    if (s.length % 2 != 0) return 0;
    let sArr = [...s];
    let result = 0, d = 0;
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] == 'R') d++;
        if (sArr[i] == 'L') d--;
        if (d == 0) result++;
    }
    return result;
};