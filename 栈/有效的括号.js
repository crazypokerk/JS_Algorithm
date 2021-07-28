/**
 * 思路：
 *  利用栈的特性，后进先出
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 === 1) return false;

    const tmp = [];
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const ch of s) {
        if (ch in obj) {
            tmp.push(ch);
        } else {
            if (obj[tmp.pop()] != ch) {
                return false;
            }

        }
    }
    return !tmp.length;
};