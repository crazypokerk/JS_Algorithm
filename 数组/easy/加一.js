/**
 * Leetcode:66
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 * 输入：digits = [0]
 * 输出：[1]
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let cur = digits.length - 1, carry = false;
    while (cur >= 0) {
        digits[cur]++;
        if (digits[cur] / 10 !== 1) {
            digits[cur] %= 10;
            return digits;
        } else {
            digits[cur] %= 10;
            cur--;
        }
    }
    if (digits[0] === 0) digits.unshift(1);
    return digits;
};
console.log(plusOne([0]));