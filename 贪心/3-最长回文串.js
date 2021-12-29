/**
 * Leetcode:409
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const hash = new Map();
    for (const str of s) {
        if (!hash.has(str)) {
            hash.set(str, 1);
        } else {
            hash.set(str, hash.get(str) + 1);
        }
    }
    let result = 0;
    for (const val of hash.values()) {
        if (val % 2 == 1 && val != 1) result += val - 1;
        if (val % 2 == 0) result += val;
        if (val % 2 == 1 && result % 2 == 0) result++;
    }
    return result;
}
longestPalindrome('abccccdd');